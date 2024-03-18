// Icon Imports

import { MdHome, MdBarChart, MdPerson } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { FaHospitalUser } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { FaUserEdit } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
const routes = [
  {
    name: "Main Dashboard",
    
    path: "/dashboard/admindashboard",
    icon: <MdHome className="h-6 w-6" />,
    roles: ["Admin"],
  },

  {
    name: "Data Tables",
 
    icon: <MdBarChart className="h-6 w-6" />,
    path: "/dashboard/data-tables",
    roles: ["Admin"],
  },
  {
    name: "Patient Profile",
   
    path: "/dashboard/profile",
    icon: <MdPerson className="h-6 w-6" />,
    roles: ["Patient"],
  },
  {
    name: "Doctor Profile",
    
    icon: <MdPerson className="h-6 w-6" />,
    path: "/dashboard/doctorpro",
    roles: ["Doctor"],
  },
  {
    name: "Add Doctor",
   
    icon: <IoMdPersonAdd className="h-6 w-6" />,
    path: "/dashboard/adddocto",
    roles: ["Admin"],
  },
  {
    name: "Make an appointement",
 
    icon: <FaHospitalUser className="h-6 w-6" />,
    path: "/dashboard/makeappoint",
    roles: ["Patient"],
  },
  {
    name: "Update appointement",
   
    icon: <RxUpdate className="h-6 w-6" />,
    path: "/dashboard/updateappoint",
    roles: ["Patient"],
  },
  {
    name: "Edit Profile",
    
    icon: <FaUserEdit className="h-6 w-6" />,
    path: "/dashboard/updatedoc",
    roles: ["Doctor"],
  },
  {
    name: "Appointement",
 
    icon: <CiBoxList  className="h-6 w-6" />,
    path: "/dashboard/appointdoc",
    roles: ["Doctor"],

  },
  {
    name: "My Appointement",
 
    icon: <CiBoxList  className="h-6 w-6" />,
    path: "/dashboard/appointpat",
    roles: ["Patient"],
  },
  {
    name: "Edit My Profile",
   
    icon: <FaUserEdit className="h-6 w-6" />,
    path: "/dashboard/editpati",
    roles: ["Patient"],
  },
];

export default routes;
