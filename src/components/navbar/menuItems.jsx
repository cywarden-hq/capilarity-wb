export const menuItems = [
    { label: "Why Us", link: "/why-us" },
    { 
        label: "Services", 
        hasDropdown: true,
        dropdownItems: [
            { label: "Observability", link: "/services/observability" },
            { label: "AI Development", link: "/services/ai-development" },
            { label: "Security Operation Center (SOC)", link: "/services/security-operation-center" },
            { label: "DevSecOps", link: "/services/devsecops" },
        ]
    },
    { label: "Partners", link: "/partners" },
    { label: "Insights", link: "/insights" },
    { label: "About Us", link: "/about-us" }
];