export const menuItems = [
    { label: "Why Us", link: "/why-us" },
    { 
        label: "Services", 
        hasDropdown: true,
        dropdownItems: [
            { label: "Observability", link: "/services/observability" },
            { label: "AI Development", link: "/services/ai-development" },
            { label: "Managed DevOps", link: "/services/managed-devops" },
            { label: "DevSecOps", link: "/services/devsecops" },
        ]
    },
    { label: "Partners", link: "/partners" },
    { label: "Insights", link: "/insights" },
    { label: "About Us", link: "/about-us" }
];