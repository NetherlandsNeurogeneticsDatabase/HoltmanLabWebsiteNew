import type { MenuItem } from "@/types";

export const MainMenu: MenuItem[] = [
    {
        label: "Home",
        href: "/HoltmanLabWebsiteNew",
        // class: "hover:text-brand-blue",
        hoverClass: "hover:text-brand-blue",
        activeClass: "text-brand-blue",
    },
    {
        label: "About",
        href: "/HoltmanLabWebsiteNew/about",
        hoverClass: "hover:text-brand-red",
        activeClass: "text-brand-red",
    },
    {
        label: "Researchers",
        href: "/HoltmanLabWebsiteNew/researchers",
        hoverClass: "hover:text-brand-blue",
        activeClass: "text-brand-blue",
    },
    {
        label: "News",
        href: "/HoltmanLabWebsiteNew/news",
        hoverClass: "hover:text-brand-green",
        activeClass: "text-brand-green",
    },
    {
        label: "Links",
        href: "/HoltmanLabWebsiteNew/links",
        hoverClass: "hover:text-brand-green",
        activeClass: "text-brand-green",
    },
 
];