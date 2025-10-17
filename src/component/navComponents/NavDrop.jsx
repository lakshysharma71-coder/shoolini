import React from 'react'
import { Link } from 'react-router-dom'

function NavDrop() {
    const NavList = [
        {
            item: "ABOUT-US",
            link: "about-us",
            SubItem: [
                "vision", "mission", "leadership", "faculty", "infrastructure",
            ]
        },
        {
            item: "ACADEMIES",
            link: "academies",
            SubItem: ["science", "arts", "engineering", "law", "commerce"]
        },
        {
            item: "PROGRAMS",
            link: "programs",
            SubItem: ["ug", "pg", "phd", "diploma", "certificate"]
        },
        // ... baaki items same
    ];

    return (
        <>
            {NavList.map((Navitem, i) => (
                <div key={i} className="relative inline-block text-center group px-2">
                    {/* 👇 Main Item Link */}
                    <Link
                        to={`/${Navitem.link}`}
                        className="text-xs font-semibold px-3"
                    >
                        {Navitem.item}
                    </Link>

                    {/* Dropdown SubItems */}
                    <div
                        className="absolute  w-30 bg-white shadow-lg rounded-md 
                        opacity-0 scale-y-0 origin-top 
                        group-hover:opacity-100 group-hover:scale-y-100 
                        transition-all duration-200 ease-out"
                    >
                        <ul>
                            {Navitem.SubItem.map((Navsubi, subi) => (
                                <Link
                                    key={subi}
                                    to={`/${Navitem.link}/${Navsubi.toUpperCase()}`}
                                    className="block  py-2 text-zinc-900 hover:text-red-700"
                                >
                                    {Navsubi}
                                </Link>

                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
}

export default NavDrop;
