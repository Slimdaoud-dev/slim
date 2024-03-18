// Links.jsx
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashIcon from "../../../components/icons/DashIcon";
import routes from "../../../data/routes";

export function SidebarLinks({ onClickRoute }) {
  const pathname = usePathname();
  const userRole="Admin"

  const activeRoute = (routeName) => {
    return pathname === routeName;
  };

  const createLinks = (routes, userRole) => {
    const links = [];
    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      if (route.roles.includes(userRole)) {
        const path = route.path;
        links.push(
          <Link key={i} href={path} onClick={onClickRoute}>
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li className="my-[3px] flex cursor-pointer items-center px-8" key={i}>
                <span
                  className={`${
                    activeRoute(path)
                      ? "font-bold text-brand-500 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.icon ? route.icon : <DashIcon />}{" "}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    activeRoute(path)
                      ? "font-bold text-navy-700 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.name}
                </p>
              </li>
              {activeRoute(path) ? (
                <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
              ) : null}
            </div>
          </Link>
        );
      }
    }
    return links;
  };

  return createLinks(routes, userRole);
}

export default SidebarLinks;
