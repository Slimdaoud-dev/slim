
import { Poppins } from "next/font/google";
import "./styles/globals.css";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
});

export const metadata = {
  title: "Hoobank",
  description: "The Next Generation Banking",
};

export default function RootLayout({
  children,
}) {
  return (
  
    <html lang="en">
   
      <body className={`${poppins.variable} font-serif`}>{children}</body>

    </html>
    
 
  );
}
