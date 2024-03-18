// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Record {

    struct PatientsPersonalInfo {
        string ic;
        string name;
        string phone;
        string gender;
        string dob;
        string height;
        string weight;
        string houseaddr;
        string bloodgroup;
    }

    struct Patients {
        PatientsPersonalInfo personalInfo;
        address addr;
        uint date;
    }

    struct Doctors {
        string name;
        string phone;
        string gender;
        string dob;
        string qualification;
        string major;
        address addr;
        uint date;
    }

    struct Appointment {
        address doctorAddr;
        address patientAddr;
        string date;
        string time;
        string status;
        uint creationDate;
    }

      // Structure des administrateurs
    struct Admin {
        address adminAddress;
    }
    // Liste des administrateurs
    

    
    Admin[] public adminList;
    address[] public patientList;
    address[] public doctorList;
    Appointment[] public appointmentList;


    mapping(address => Patients) public patients;
    mapping(address => Doctors) public doctors;
    mapping(address => Appointment[]) public appointments;

    mapping(address => mapping(address => bool)) public isApproved;
    mapping(address => bool) public isPatient;
    mapping(address => bool) public isDoctor;
        // Mapping pour indiquer si une adresse est un administrateur
    mapping(address => bool) public isAdmin;

    // Adresse de l'administrateur initial
    address public initialAdmin;
    address  owner;
    mapping(address => uint) public appointmentCountPerPatient;

    uint256 public patientCount = 0;
    uint256 public doctorCount = 0;
    uint256 public appointmentCount = 0;
    uint256 public permissionGrantedCount = 0;

 
       
    
     // Constructeur pour définir l'administrateur initial
    constructor() {
        initialAdmin = msg.sender;
        isAdmin[msg.sender] = true;
        adminList.push(Admin( msg.sender));
         owner = msg.sender;
    }

    modifier onlyPatient() {
        require(isPatient[msg.sender], "Only patients can call this function.");
        _;
    }

    modifier onlyDoctor() {
        require(isDoctor[msg.sender], "Only doctors can call this function.");
        _;
    }

     // Modificateur pour restreindre l'accès aux administrateurs
    modifier onlyAdmin() {
        require(isAdmin[msg.sender], "Only admin can call this function.");
        _;
    }

    // Fonction pour ajouter un administrateur (réservée à l'administrateur initial)
    function addAdmin(address _newAdmin) public {
        require(msg.sender == initialAdmin, "Only initial admin can add new admin.");
        require(!isAdmin[_newAdmin], "Address is already an admin.");

        isAdmin[_newAdmin] = true;
        adminList.push(Admin( _newAdmin));
    }



    function setPersonalDetails(
        string memory _ic,string memory _name, string memory _phone, string memory _gender,
        string memory _dob, string memory _height, string memory _weight, string memory _houseaddr,
        string memory _bloodgroup , address _patientadd
    ) public {
        require(!isPatient[_patientadd], "Patient details already set.");
        Patients storage p = patients[_patientadd];
        
        p.personalInfo.ic = _ic;
        p.personalInfo.name = _name;
        p.personalInfo.phone = _phone;
        p.personalInfo.gender = _gender;
        p.personalInfo.dob = _dob;
        p.personalInfo.height = _height;
        p.personalInfo.weight = _weight;
        p.personalInfo.houseaddr = _houseaddr;
        p.personalInfo.bloodgroup = _bloodgroup;
        p.addr = _patientadd;
        p.date = block.timestamp;

        patientList.push(_patientadd);
        isPatient[_patientadd] = true;
        isApproved[_patientadd][_patientadd] = true;
        patientCount++;
    }

   

    function setAppointment(
        address _doctorAddr, string memory _date, string memory _time
    ) public onlyPatient {
        require(isDoctor[_doctorAddr], "Invalid doctor address.");
        Appointment memory newAppointment;
        newAppointment.patientAddr = msg.sender;
        newAppointment.doctorAddr = _doctorAddr;
        newAppointment.date = _date;
        newAppointment.time = _time;
        newAppointment.status = "Pending";
        newAppointment.creationDate = block.timestamp;

        appointments[msg.sender].push(newAppointment);

        appointmentList.push(newAppointment);
        appointmentCount++;
        appointmentCountPerPatient[msg.sender]++;
    }

  function updateAppointment(
        uint256 _index, string memory _date, string memory _time
    ) public onlyPatient {
       require(_index < appointments[msg.sender].length, "Invalid appointment index.");
       Appointment storage a = appointments[msg.sender][_index];

       a.date = _date;
       a.time = _time;
 

       //Update appointment in AppointmentList
        for (uint256 i = 0; i < appointmentList.length; i++) {
          if (appointmentList[i].patientAddr == msg.sender && i == _index) {
            appointmentList[i].date = _date;
            appointmentList[i].time = _time;
            break;
        }
        }
    }


    function givePermission(address _address) public onlyPatient returns (bool success)  {
        require(isDoctor[_address], "Invalid doctor address.");
        isApproved[msg.sender][_address] = true;
        permissionGrantedCount++;
        return true;
    }

    function revokePermission(address _address) public onlyPatient returns (bool success) {
        require(isDoctor[_address], "Invalid doctor address.");
        isApproved[msg.sender][_address] = false;
        return true;
    }

    function getAllPatientAppointments() public view onlyPatient returns (Appointment[] memory) {
        return appointments[msg.sender];
    }

    function setDoctor(
        string memory _name, string memory _phone, string memory _gender,
        string memory _dob, string memory _qualification, string memory _major , address _doctoraddress
    ) public onlyAdmin {
        require(!isDoctor[msg.sender], "Doctor details already set.");
        Doctors storage d = doctors[msg.sender];

        d.name = _name;
        d.phone = _phone;
        d.gender = _gender;
        d.dob = _dob;
        d.qualification = _qualification;
        d.major = _major;
        d.addr = _doctoraddress;
        d.date = block.timestamp;

        doctorList.push(_doctoraddress);
        isDoctor[_doctoraddress] = true;
        doctorCount++;
    }

    function editDoctor(
        string memory _name, string memory _phone, string memory _gender,
        string memory _dob, string memory _qualification, string memory _major
    ) public onlyDoctor {
        Doctors storage d = doctors[msg.sender];
        d.name = _name;
        d.phone = _phone;
        d.gender = _gender;
        d.dob = _dob;
        d.qualification = _qualification;
        d.major = _major;
        d.addr = msg.sender;
    }

    function getDoctorsPatients() public view onlyDoctor returns (address[] memory) {
       address[] memory assignedPatients = new address[](appointmentList.length);
       uint256 count = 0;
       for (uint256 i = 0; i < appointmentList.length; i++) {
         if (appointmentList[i].doctorAddr == msg.sender) {
            assignedPatients[count] = appointmentList[i].patientAddr;
            count++;
         }
        }
    
    // Affichage du resultat :
       address[] memory result = new address[](count);
       for (uint256 j = 0; j < count; j++) {
          result[j] = assignedPatients[j];
        }
        return result;
    }


    function getHisAppointments() public view onlyDoctor returns (Appointment[] memory) {
       uint256 doctorAppointmentsCount = 0;
    
        // Number Of Appointment
        for (uint256 i = 0; i < appointmentList.length; i++) {
           if (appointmentList[i].doctorAddr == msg.sender) {
            doctorAppointmentsCount++;
          }
        }

       // Créer un tableau de rendez-vous pour le médecin
       Appointment[] memory doctorAppointments = new Appointment[](doctorAppointmentsCount);
       uint256 index = 0;

       // Ajouter les rendez-vous pour le médecin dans le tableau
        for (uint256 j = 0; j < appointmentList.length; j++) {
          if (appointmentList[j].doctorAddr == msg.sender) {
            doctorAppointments[index] = appointmentList[j];
            index++;
          }
        }

        return doctorAppointments;
    }


    function searchAppointment(address _patientAddr, uint256 _index) public view onlyDoctor returns (
       string memory date,string memory time, string memory status
       ) {
         require(_index < appointments[_patientAddr].length, "Invalid appointment index.");
         Appointment storage a = appointments[_patientAddr][_index];
           return (a.date, a.time, a.status);
        }






    function validateStatusAppointment(address _patientAddr, uint256 _index) public onlyDoctor {
     require(_index < appointments[_patientAddr].length, "Invalid appointment index.");
       appointments[_patientAddr][_index].status = "Complete";

       // Mettre à jour le statut dans appointmentList également
       for (uint256 i = 0; i < appointmentList.length; i++) {
          if (appointmentList[i].patientAddr == _patientAddr && i == _index) {
            appointmentList[i].status = "Complete";
            break;
          }
        }
    }


    function getPatients() public view returns (address[] memory) {
        return patientList;
    }

    function getDoctors() public view returns (address[] memory) {
        return doctorList;
    }

    function searchDoctorPatients(address _doctorAddr) public view returns (address[] memory) {
        address[] memory assignedPatients = new address[](appointmentList.length);
        uint256 count = 0;
        for (uint256 i = 0; i < appointmentList.length; i++) {
            if (appointmentList[i].doctorAddr == _doctorAddr) {
                assignedPatients[count] = appointmentList[i].patientAddr;
                count++;
            }
        }
        return assignedPatients;
    }

    function getAppointments() public view returns (Appointment[] memory) {
        return appointmentList;
    }

    function getPatientCount() public view returns (uint256) {
        return patientCount;
    }

    function getDoctorCount() public view returns (uint256) {
        return doctorCount;
    }

    function getAppointmentCount() public view returns (uint256) {
        return appointmentCount;
    }

    function getPermissionGrantedCount() public view returns (uint256) {
        return permissionGrantedCount;
    }

    function getAppointmentCountPerPatient(address _address) public view returns (uint256) {
        return appointmentCountPerPatient[_address];
    }
} 