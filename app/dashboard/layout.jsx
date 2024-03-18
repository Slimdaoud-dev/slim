"use client";

import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import SidebarProvider from "../../providers/SidebarProvider";
import "./s.Module.css";
import ThemeProvider from "../../providers/ThemeProvider";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
    const role = "Admin";
    const router =useRouter();

    return (
       
              <ThemeProvider>
                    <SidebarProvider>
                        <section className="flex h-full w-full">
                            <Sidebar />

                            {/* Navbar & Main Content */}
                            <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
                                {/* Main Content */}
                                <main className="mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]">
                                    {/* Routes */}
                                    <div className="h-full">
                                        <Navbar />

                                        <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
                                            {children}
                                        </div>

                                        <div className="p-3">
                                            <Footer />
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </section>
                    </SidebarProvider>
                    </ThemeProvider>
              
         
    );
}
