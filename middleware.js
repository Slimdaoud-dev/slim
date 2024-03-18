import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { rolesConfig } from "./roles.config";

export async function middleware(req) {
  // Utiliser req pour les API routes modernes Next.js
  const cookieStore = cookies(req);
  const address = cookieStore.get("currentAccount")?.value;
  const role = cookieStore.get("userRole")?.value;

  // Débogage : Vérifier les valeurs des cookies
  console.log("Current account:", address);
  console.log("User role:", role);

  // Gérer les cookies manquants de manière élégante (facultatif)
  if (!address || !role) {
    console.warn("Missing cookies: currentAccount or userRole");
    // Rediriger éventuellement vers une page de connexion ou d'erreur ici
    return NextResponse.next();
  }

  // Logique de redirection avec une meilleure clarté
  if (role === "Unknown" || role == undefined) {
    return NextResponse.redirect(new URL("/", req.url)); // Utiliser une URL absolue
  }
  

  // Accès aux chemins autorisés en fonction du rôle
  const allowedPaths = rolesConfig[role]?.paths || [];

  // Vérifier l'accès en fonction du rôle et du chemin
  const path = req.nextUrl.pathname;
  if (!allowedPaths.includes(path)) {
    // Débogage : Vérifier le chemin actuel et les chemins autorisés
    console.log("Current path:", path);
    console.log("Allowed paths for role:", allowedPaths);
    return NextResponse.redirect(new URL("/", req.url)); // Rediriger vers la page d'accueil ou la page non autorisée
  }

  // Autoriser l'accès pour les rôles autorisés
  return NextResponse.next();
}

export const config = {
  matcher:"/dashboard/:path*" 
};
