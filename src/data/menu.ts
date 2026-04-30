import type { MenuItem } from "@/types";

export const MainMenu: MenuItem[] = [
    {
        label: "Home",
        href: "/",
        // class: "hover:text-brand-blue",
        hoverClass: "hover:text-brand-blue",
        activeClass: "text-brand-blue",
    },
    {
        label: "About",
        href: "/about",
        hoverClass: "hover:text-brand-red",
        activeClass: "text-brand-red",
    },
    {
        label: "Researchers",
        href: "/researchers",
        hoverClass: "hover:text-brand-blue",
        activeClass: "text-brand-blue",
    },
    {
        label: "News",
        href: "/news",
        hoverClass: "hover:text-brand-green",
        activeClass: "text-brand-green",
    },
 
];