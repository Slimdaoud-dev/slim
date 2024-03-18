"use client";
import React, { useState, useEffect } from "react";
import { Navbar, Hero, Services, ContactUs, Team, Footer } from "./components";
import { ethers } from "ethers";
import Record from "../build/contracts/Record.json";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Page = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [userRole, setUserRole] = useState("");

  const router = useRouter();

  useEffect(() => {
    const loadContract = async () => {
      try {
        if (window.ethereum) {
          const ethereumProvider = new ethers.providers.Web3Provider(
            window.ethereum
          );
          const signer = ethereumProvider.getSigner();
          const deployedContract = new ethers.Contract(
            "0xC79CAcb92A45AFFB7fBE9933fD5D4F72832e83d0",
            Record.abi,
            signer
          );
          setContract(deployedContract);
        } else {
          console.error("MetaMask is not installed");
        }
      } catch (error) {
        console.error("Error loading contract:", error.message);
      }
    };

    loadContract();
  }, []);

  useEffect(() => {
    // Récupérer les données du cookie lors du chargement initial de la page
    const storedUserRole = Cookies.get("userRole");
    const storedCurrentAccount = Cookies.get("currentAccount");
    setAccount(storedCurrentAccount);
    setUserRole(storedUserRole);
    if (storedUserRole && storedCurrentAccount) {
      setUserRole(storedUserRole);
      setAccount(storedCurrentAccount);
      
    }
  }, []);

  // Fonction de connexion à MetaMask
  const connectToMetaMask = async () => {
    try {
      if (typeof window !="undefined" && window.ethereum != "undefined") {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        console.log("Connected Account:", accounts[0]);
        const isAdmin = await contract.isAdmin(currentAccount);
        const isDoctor = await contract.isDoctor(currentAccount);
        const isPatient = await contract.isPatient(currentAccount);

   
        if (isAdmin) {
        setUserRole("Admin") ;
        
          
        } else if (isDoctor) {
         
          setUserRole("Doctor")
        } else if (isPatient) {
       
          setUserRole("Patient")
        } else {
      
          setUserRole("Unknown")
          
        }
      
      } else {
        console.error("MetaMask is not installed");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error.message);
    }
  };

  useEffect(() => {
  
    if(userRole ==="Admin"){
      router.push("/dashboard/admindashboard")
    }else if(userRole==="Doctor") {
      router.push("/anorther")
    }

  })

  // Fonction pour mettre à jour le rôle de l'utilisateur
  const updateRole = async (currentAccount) => {
    try {
      if (contract) {
        const isAdmin = await contract.isAdmin(currentAccount);
        const isDoctor = await contract.isDoctor(currentAccount);
        const isPatient = await contract.isPatient(currentAccount);

        let userRole;
        if (isAdmin) {
          userRole = "Admin";
          
        } else if (isDoctor) {
          userRole = "Doctor";
        } else if (isPatient) {
          userRole = "Patient";
        } else {
          userRole = "Unknown";
          
        }

        console.log(`Address: ${currentAccount}, Role: ${userRole}`);
        Cookies.set("userRole", userRole);
        Cookies.set("currentAccount", currentAccount);
        setUserRole(userRole);
      }
    } catch (error) {
      console.error("Error getting user role:", error);
    }
  };

  useEffect(() => {
    const handleAccountsChanged = async (accounts) => {
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        updateRole(accounts[0]);
      }else{
        setAccount("");
      }
    };

    if (typeof window !="undefined" && window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      return () => {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
      };
    }
  }, [contract, userRole]);

  return (
    <main className="bg-primary w-full overflow-hidden font-poppins">
      <header className="paddingX flexCenter">
        <nav className="block boxWidth">
          <Navbar
            connectToMetaMask={connectToMetaMask}
            account={account}
            userRole={userRole}
          />
         
        </nav>
      </header>
      <section className="bg-primary flexStart">
        <section className="boxWidth">
          <Hero />
        </section>
      </section>
      <section className="bg-primary paddingX flexStart">
        <section className="boxWidth">
          <Services />
          <Team />
          <ContactUs />
          <Footer />
        </section>
      </section>
    </main>
  );
};

export default Page;
