import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineWhatsapp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
// Sample data arrays
const informationAbout = [
    "About University",
    "Vision & Mission",
    "Rankings",
    "Infrastructure",
    "Global Alliances",
    "Blog",
    "Career",
    "Science Museum",
    "Anti-Ragging Committee & Squad",
    "Grievance Cell",
    "Shoolini Act",
    "Award Calculation and Grading",
    "Terms and Conditions",
    "Student Handbook",
    "Employee Handbook",
    "8th Convocation 2025",
    "Policy for Differently Abled Persons",
    "Privacy Policy",
    "Refund Policy",
    "UGC Handbook",
];

const informationFor = [
    "Admissions",
    "Scholarships",
    "Faculty",
    "Academic Calendar",
    "Inspire Science Camp 2024",
    "Prevention: Caste-based Discrimination",
    "Information under Sec 4(1)(b) of RTI Act 2005",
    "University Balance Sheet",
    "RTI Act",
    "NAD",
    "ARIIA",
    "Best Practices",
    "Organogram",
    "RTI Notification",
    "University Grants Commission",
    "What is the Academic Bank of Credits (ABC)?",
];

const quickLinks = [
    "FAQs",
    "Reach a Student Ambassador",
    "Information Brochure",
    "HistCon 2023",
    "Admission Disclosure 2020–21",
    "Admission Disclosure PhD",
    "Shoolini Refund Form",
    "Virtual Tour",
    "All Conference",
    "Online Surveys powered by Survey Software",
    "Himpragati",
    "Exams",
    "E-Samadhaan",
    "Rekhi Centre of Excellence for the Science of Happiness",
    "HCICC",
    "Shoolini Online",
    "Distance Education",
];

const contactDetails = {
    cityOffice: "SILB, The Mall, Solan - 173212 Himachal Pradesh",
    address: "Shoolini University, Solan-Oachghat-Kumarhatti Highway, Bajhol, IN 173229",
    mailingAddress: "admissions@shooliniuniversity.com",
    reception: "01792-350000/ 7807899712",
};

function ShooliniFooter() {
    return (
        <div style={{ background: "white", color: "#383232ff", padding: "  " }}>
            <div style={{ maxWidth: "100%", margin: "", display: "flex", gap: "100px",  }} className="h-auto pt-10  ">
                {/* Information About */}
            <div className="w-180 h-160 bg-red-600 text-white flex items-center justify-center flex-col">
                <img src="https://shooliniuniversity.com/_next/image?url=%2Fassets%2Fimages%2Ffooter-logo.png&w=256&q=75" alt=""  className="h-40 w-70"/>

                <p className="text-2xl font-semibold">Think Learning .Think Success.</p>
                <div className="flex w-full justify-evenly  
                  ">
                    <FaFacebookF  size={35}   className=" p-1 border-2 rounded-full  mt-5" />
                    <BsTwitterX  size={35}  className=" p-1 border-2 rounded-full  mt-5"/>
                    <FaLinkedinIn size={35}  className=" p-1 border-2 rounded-full  mt-5"/> 
                    < CiYoutube size={35}  className=" p-1 border-2 rounded-full  mt-5"/>
                    < MdOutlineWhatsapp size={35}  className=" p-1 border-2 rounded-full  mt-5" />


                </div>

                <img src="https://shooliniuniversity.com/_next/image?url=%2Fassets%2Fimages%2Fgptw.png&w=96&q=75" alt="" className="h-30  mt-8" />
                <p className="text-lg font-semibold my-3">4th Year in Raw</p>


                
            </div>


             <div className=" mt-auto flex   gap-7 pb-5">
                   <div>
                    <h3   className="inline"><strong >Information About <MdKeyboardArrowDown  className="inline"/> </strong></h3>
                    <ul>
                        {informationAbout.map((item, idx) => (
                            <li className="list-disc   marker:text-sm marker:text-zinc-500 " key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Information For */}
                <div>
                    <h3 className="inline"><strong >Information For  <MdKeyboardArrowDown className="inline"/> </strong></h3>
                    <ul>
                        {informationFor.map((item, idx) => (
                            <li  className="list-disc marker:text-sm marker:text-zinc-500 " key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="inline"><strong >Quick Links <MdKeyboardArrowDown className="inline"/> </strong></h3>
                    <ul>
                        {quickLinks.map((item, idx) => (
                            <li  className="list-disc marker:text-sm marker:text-zinc-500 " key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3><strong>Contact</strong></h3>
                    <strong>City Office</strong>
                    <p>{contactDetails.cityOffice}</p>
                    <strong>Address</strong>
                    <p>{contactDetails.address}</p>
                    <strong>Mailing Address</strong>
                    <p>{contactDetails.mailingAddress}</p>
                    <strong>Reception</strong>
                    <p>{contactDetails.reception}</p>
                </div>
             </div>
            </div>
        </div>
    );
}

export default ShooliniFooter;
