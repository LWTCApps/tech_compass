// ===========================================
// PROGRAM DATA
// ===========================================
const programs = {
    "ACC": { 
        name: "Accounting Operations", 
        category: "Business & Administration",
        description: "Learn to manage financial records, prepare reports, process payroll, and use accounting software. This program prepares you for entry-level positions in bookkeeping, accounts payable/receivable, and financial record-keeping in various business settings."
    },
    "CYB": { 
        name: "Applied Cybersecurity", 
        category: "Information Technology",
        description: "Develop skills to protect computer systems and networks from cyber threats. Learn penetration testing, security analysis, risk assessment, and incident response. Prepares you for roles as a security analyst, network security specialist, or cybersecurity technician."
    },
    "COL": { 
        name: "Automotive Collision Technology Technician", 
        category: "Automotive & Transportation",
        description: "Master the art of repairing and refinishing damaged vehicles. Learn body repair, painting techniques, frame straightening, and estimating. Prepares you for careers in collision repair shops, dealerships, and insurance companies."
    },
    "AIRF": { 
        name: "Aviation Airframe Mechanics", 
        category: "Aviation",
        description: "Learn to inspect, repair, and maintain aircraft structures, systems, and components. Covers airframe construction, hydraulics, landing gear, and environmental systems. Leads to FAA Airframe certification and careers in aviation maintenance."
    },
    "AIRP": { 
        name: "Aviation Powerplant Mechanics", 
        category: "Aviation",
        description: "Focus on aircraft engine maintenance, repair, and overhaul. Learn about turbine and reciprocating engines, propellers, and fuel systems. Leads to FAA Powerplant certification and careers as an aircraft mechanic or engine specialist."
    },
    "AVIO": { 
        name: "Avionics Systems Technician", 
        category: "Aviation & Electronics",
        description: "Specialize in aircraft electronic systems including navigation, communication, and flight control systems. Learn to troubleshoot and repair complex avionics equipment. Prepares you for careers in aviation electronics and aerospace industries."
    },
    "CONST": { 
        name: "Building Construction Technologies", 
        category: "Construction",
        description: "Gain hands-on experience in residential and commercial construction. Learn framing, roofing, finishing, blueprint reading, and safety practices. Prepares you for careers as a construction worker, carpenter, or construction supervisor."
    },
    "CSIT": { 
        name: "Computer Systems & Information Technology", 
        category: "Information Technology",
        description: "Build expertise in computer hardware, networking, and system administration. Learn to install, configure, and troubleshoot computers and networks. Prepares you for CompTIA certifications and careers in IT support and network administration."
    },
    "COS": { 
        name: "Cosmetology", 
        category: "Personal Services",
        description: "Develop skills in hair cutting, styling, coloring, and chemical treatments. Learn skincare basics, makeup application, and salon management. Prepares you for state licensure and careers as a hairstylist, salon owner, or beauty consultant."
    },
    "PROG": { 
        name: "Database Application Development & Programming", 
        category: "Information Technology",
        description: "Learn to design, develop, and maintain software applications and databases. Master programming languages, database management, web development, and software engineering principles. Prepares you for careers as a software developer, database administrator, or web developer."
    },
    "DENT": { 
        name: "Dental Assisting", 
        category: "Healthcare",
        description: "Prepare for a career supporting dental professionals. Learn chairside assisting, dental radiography, infection control, and patient care. Prepares you for certification and employment in dental offices, clinics, and specialty practices."
    },
    "DM": { 
        name: "Digital Media / Multimedia Design", 
        category: "Creative Arts",
        description: "Develop creative skills in graphic design, video production, animation, and web design. Learn industry-standard software for visual communication. Prepares you for careers in advertising, marketing, web design, and multimedia production."
    },
    "DRAFT": { 
        name: "Drafting", 
        category: "Engineering & Design",
        description: "Learn to create technical drawings and plans using CAD software. Develop skills in architectural, mechanical, and civil drafting. Prepares you for careers as a drafter, CAD technician, or design assistant in engineering and architecture firms."
    },
    "ECE": { 
        name: "Early Childhood Education", 
        category: "Education",
        description: "Prepare to work with young children in educational settings. Learn child development, curriculum planning, classroom management, and family engagement. Prepares you for careers in childcare centers, preschools, and early intervention programs."
    },
    "ESIA": { 
        name: "Electronic Systems Integration & Automation", 
        category: "Electronics & Automation",
        description: "Master industrial electronics, PLCs, robotics, and automation systems. Learn to install, program, and maintain automated manufacturing equipment. Prepares you for careers in industrial maintenance, automation, and manufacturing technology."
    },
    "EDMS": { 
        name: "Enterprise Desktop & Mobile Support Technology", 
        category: "Information Technology",
        description: "Develop skills in supporting desktop computers, mobile devices, and enterprise systems. Learn troubleshooting, help desk operations, and device management. Prepares you for IT support roles and industry certifications like CompTIA A+."
    },
    "FAC": { 
        name: "Facials Specialty", 
        category: "Personal Services",
        description: "Specialize in skincare treatments, facial therapies, and esthetics. Learn skin analysis, facial techniques, hair removal, and makeup application. Prepares you for state licensure and careers in spas, salons, and skincare clinics."
    },
    "HEST": { 
        name: "Heavy Equipment Service Technician", 
        category: "Mechanical & Repair",
        description: "Learn to maintain and repair heavy construction and agricultural equipment. Develop skills in diesel engines, hydraulics, electrical systems, and diagnostics. Prepares you for careers with equipment dealers, construction companies, and rental agencies."
    },
    "HVAC": { 
        name: "HVAC/R", 
        category: "Mechanical & Repair",
        description: "Master heating, ventilation, air conditioning, and refrigeration systems. Learn installation, maintenance, troubleshooting, and EPA regulations. Prepares you for EPA certification and careers as an HVAC technician or refrigeration mechanic."
    },
    "MACH": { 
        name: "Machining Technologies (CNC)", 
        category: "Manufacturing",
        description: "Develop precision machining skills using manual and CNC equipment. Learn programming, setup, operation, and quality control. Prepares you for careers as a CNC machinist, tool maker, or manufacturing technician."
    },
    "MAR": { 
        name: "Marine Service Technologies", 
        category: "Marine & Mechanical",
        description: "Learn to service and repair marine engines, electrical systems, and boat components. Develop skills in outboard, inboard, and personal watercraft maintenance. Prepares you for careers in marinas, boat dealers, and marine service centers."
    },
    "MAST": { 
        name: "Master Automotive Service Technician", 
        category: "Automotive & Transportation",
        description: "Become a comprehensive automotive technician skilled in all vehicle systems. Learn engine repair, electrical systems, brakes, suspension, and diagnostics. Prepares you for ASE certification and careers in dealerships and repair shops."
    },
    "MA": { 
        name: "Medical Assisting", 
        category: "Healthcare",
        description: "Prepare for a versatile healthcare career combining clinical and administrative duties. Learn patient care, vital signs, medical procedures, and office management. Prepares you for certification and employment in clinics and medical offices."
    },
    "NA": { 
        name: "Nursing Assistant (Long-Term Care)", 
        category: "Healthcare",
        description: "Learn to provide basic patient care under nursing supervision. Develop skills in personal care, vital signs, patient safety, and communication. Prepares you for state certification and careers in hospitals, nursing homes, and home health."
    },
    "PCT": { 
        name: "Patient Care Technician", 
        category: "Healthcare",
        description: "Build advanced patient care skills beyond nursing assistant duties. Learn phlebotomy, EKG, and specialized patient care techniques. Prepares you for certification and careers in hospitals, dialysis centers, and specialty clinics."
    },
    "PHARM": { 
        name: "Pharmacy Technician", 
        category: "Healthcare",
        description: "Prepare to assist pharmacists in dispensing medications. Learn pharmaceutical calculations, drug interactions, inventory management, and customer service. Prepares you for certification and careers in retail and hospital pharmacies."
    },
    "PHLEB": { 
        name: "Phlebotomy", 
        category: "Healthcare",
        description: "Specialize in blood collection and specimen handling. Learn venipuncture techniques, safety protocols, and patient interaction. Prepares you for certification and careers in hospitals, laboratories, blood banks, and clinics."
    },
    "PN": { 
        name: "Practical Nursing", 
        category: "Healthcare",
        description: "Prepare for a nursing career providing direct patient care. Learn nursing fundamentals, medication administration, and patient assessment. Prepares you for NCLEX-PN licensure and careers as an LPN in various healthcare settings."
    },
    "CUL": { 
        name: "Proffesional Culinary Arts & Hospitality", 
        category: "Hospitality",
        description: "Develop professional cooking skills and hospitality management knowledge. Learn food preparation, kitchen operations, menu planning, and food safety. Prepares you for careers as a chef, cook, or food service manager."
    },
    "RN": { 
        name: "Professional Nursing", 
        category: "Healthcare",
        description: "Advance your nursing career with comprehensive RN education. Develop critical thinking, patient assessment, and clinical skills. Prepares you for NCLEX-RN licensure and careers as a registered nurse in hospitals and healthcare facilities."
    },
    "SURG": { 
        name: "Surgical Technology", 
        category: "Healthcare",
        description: "Prepare to assist in surgical procedures. Learn sterile technique, surgical instrumentation, anatomy, and operating room protocols. Prepares you for certification and careers as a surgical technologist in hospitals and surgical centers."
    },
    "VET": { 
        name: "Veterinary Assisting", 
        category: "Animal Care",
        description: "Learn to assist veterinarians in animal care. Develop skills in animal handling, clinical procedures, laboratory work, and client communication. Prepares you for careers in veterinary clinics, animal hospitals, and animal shelters."
    },
    "WELD": { 
        name: "Welding Technology", 
        category: "Manufacturing & Construction",
        description: "Master various welding processes including MIG, TIG, and stick welding. Learn blueprint reading, metal fabrication, and welding inspection. Prepares you for AWS certification and careers in construction, manufacturing, and pipeline industries."
    }
};

// ===========================================
// WEIGHTED QUESTIONS (5-point scale)
// 5 = Perfect match, 4 = Strong match, 3 = Good match
// 2 = Moderate match, 1 = Barely match, (omit = No match)
// ===========================================
const questions = [
    // ===========================================
    // QUESTION 1 - Satisfaction
    // ===========================================
    {
        id: 1,
        text: "When you finish a task, which outcome feels most satisfying?",
        answers: [
            {
                text: "Knowing the numbers are accurate and everything balances.",
                weights: {
                    "ACC": 5, "PHARM": 4, "CYB": 3, "CSIT": 2, "PROG": 2, "EDMS": 2, "DRAFT": 2, "DM": 2, "SURG": 2, "MA": 2, "DENT": 2,
                    "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Fixing a problem no one else could figure out.",
                weights: {
                    "CYB": 5, "CSIT": 5, "PROG": 5, "EDMS": 5, "AVIO": 5, "ESIA": 4, "AIRF": 4, "AIRP": 4, "MAST": 3, "HEST": 3, "HVAC": 3, "MAR": 3,
                    "COL": 2, "MACH": 2, "WELD": 2, "CONST": 2, "DM": 2, "DRAFT": 2, "RN": 2, "SURG": 2,
                    "ACC": 1, "PHARM": 1, "MA": 1, "DENT": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "NA": 1, "PCT": 1, "PN": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Creating something that looks or feels better than before.",
                weights: {
                    "COL": 5, "COS": 5, "FAC": 5, "DM": 5, "CUL": 5, "WELD": 5, "CONST": 5, "DRAFT": 5, "MACH": 4, "PROG": 3, "HEST": 3, "HVAC": 3, "MAR": 3, "MAST": 3,
                    "ECE": 2, "ESIA": 2, "AVIO": 1, "AIRF": 1, "AIRP": 1, "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "EDMS": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "SURG": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Helping a person feel safer, healthier, or more confident.",
                weights: {
                    "MA": 5, "NA": 5, "PCT": 5, "PN": 5, "RN": 5, "DENT": 5, "SURG": 5, "PHLEB": 5, "VET": 5, "ECE": 4, "COS": 4, "FAC": 4, "CUL": 3, "PHARM": 3,
                    "ACC": 2, "CYB": 2, "CSIT": 2, "EDMS": 2, "PROG": 1, "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DRAFT": 1, "DM": 1
                }
            }
        ]
    },

    // ===========================================
    // QUESTION 2 - Learning Style
    // ===========================================
    {
        id: 2,
        text: "You're learning a new skill. Which approach keeps you most engaged?",
        answers: [
            {
                text: "Step-by-step procedures with clear rules.",
                weights: {
                    "ACC": 5, "SURG": 5, "PHARM": 5, "PHLEB": 4, "PN": 4, "RN": 4, "CYB": 3, "PROG": 3, "DRAFT": 3, "MACH": 3, "WELD": 3,
                    "CSIT": 2, "EDMS": 2, "ESIA": 2, "AVIO": 2, "AIRF": 2, "AIRP": 2, "MA": 2, "NA": 2, "PCT": 2, "DENT": 2, "FAC": 2, "COS": 2, "CUL": 2,
                    "COL": 1, "HEST": 1, "HVAC": 1, "MAR": 1, "MAST": 1, "CONST": 1, "DM": 1, "ECE": 1, "VET": 1
                }
            },
            {
                text: "Troubleshooting a system until it works.",
                weights: {
                    "CYB": 5, "AVIO": 5, "PROG": 5, "AIRF": 5, "AIRP": 5, "CSIT": 4, "ESIA": 4, "EDMS": 4, "MAST": 4, "HEST": 4, "HVAC": 4, "MAR": 4,
                    "COL": 2, "MACH": 2, "CONST": 2, "DRAFT": 2, "DM": 2, "RN": 2, "SURG": 2,
                    "ACC": 1, "PHARM": 1, "WELD": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Hands-on practice with immediate feedback.",
                weights: {
                    "COL": 5, "HEST": 5, "MAST": 5, "WELD": 5, "MACH": 5, "CONST": 5, "HVAC": 4, "MAR": 4, "CUL": 4, "COS": 4, "FAC": 4, "SURG": 4,
                    "AIRF": 3, "AIRP": 3, "ESIA": 3, "DENT": 3, "PHLEB": 3, "MA": 3, "NA": 3, "PCT": 3, "VET": 3, "ECE": 2, "DRAFT": 2, "DM": 2, "AVIO": 2, "PN": 2, "RN": 2,
                    "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1
                }
            },
            {
                text: "Watching a demonstration, then trying it yourself.",
                weights: {
                    "COS": 5, "FAC": 5, "CUL": 5, "ECE": 4, "MA": 4, "DENT": 4, "NA": 4, "PCT": 4, "PN": 4, "RN": 4, "SURG": 4, "PHLEB": 4, "VET": 4,
                    "COL": 2, "HEST": 2, "HVAC": 2, "MACH": 2, "MAR": 2, "MAST": 2, "WELD": 2, "CONST": 2, "DRAFT": 2, "DM": 2, "ESIA": 2, "PHARM": 2,
                    "ACC": 1, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1
                }
            }
        ]
    },

    // ===========================================
    // QUESTION 3 - Work Environment
    // ===========================================
    {
        id: 3,
        text: "Which work environment sounds most appealing?",
        answers: [
            {
                text: "Quiet, organized, detail-focused.",
                weights: {
                    "ACC": 5, "PROG": 4, "CYB": 4, "DRAFT": 4, "DM": 4, "PHARM": 4, "CSIT": 3, "EDMS": 3,
                    "ESIA": 2, "AVIO": 2, "MA": 2, "DENT": 2, "SURG": 2, "PHLEB": 2, "PN": 2, "RN": 2, "FAC": 2,
                    "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "COS": 1, "CUL": 1, "ECE": 1, "NA": 1, "PCT": 1, "VET": 1
                }
            },
            {
                text: "Technical, problem-solving, system-oriented.",
                weights: {
                    "CYB": 5, "AVIO": 5, "AIRF": 5, "AIRP": 5, "CSIT": 4, "ESIA": 4, "PROG": 4, "EDMS": 4, "MAST": 3, "HEST": 3, "HVAC": 3, "MAR": 3, "DRAFT": 3,
                    "COL": 2, "MACH": 2, "DM": 2, "PHARM": 2, "SURG": 2,
                    "ACC": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Active, hands-on, physically engaging.",
                weights: {
                    "COL": 5, "HEST": 5, "CONST": 5, "MAST": 5, "WELD": 5, "MACH": 5, "HVAC": 5, "MAR": 5, "CUL": 4, "COS": 3, "AIRF": 3, "AIRP": 3,
                    "ESIA": 2, "AVIO": 2, "FAC": 2, "ECE": 2, "NA": 2, "PCT": 2, "VET": 2, "SURG": 2, "PHLEB": 2,
                    "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "DRAFT": 1, "DM": 1, "MA": 1, "PN": 1, "RN": 1, "DENT": 1
                }
            },
            {
                text: "People-centered, service-oriented.",
                weights: {
                    "MA": 5, "NA": 5, "PCT": 5, "PN": 5, "RN": 5, "ECE": 5, "VET": 5, "COS": 5, "FAC": 5, "CUL": 4, "DENT": 4, "PHLEB": 4, "PHARM": 3, "SURG": 3,
                    "ACC": 2, "EDMS": 2, "CSIT": 2, "CYB": 1, "PROG": 1, "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DRAFT": 1, "DM": 1
                }
            }
        ]
    },

    // ===========================================
    // QUESTION 4 - Comfort With Reading
    // ===========================================
    {
        id: 4,
        text: "How do you feel about reading instructions, manuals, or procedures?",
        answers: [
            {
                text: "I’m comfortable with them and use them carefully.",
                weights: {
                    "ACC": 5, "SURG": 5, "PHARM": 5, "CYB": 4, "PROG": 4, "PN": 4, "RN": 4, "DRAFT": 3, "CSIT": 3, "EDMS": 3, "ESIA": 3, "AVIO": 3, "AIRF": 3, "AIRP": 3, "MA": 3, "NA": 3, "PCT": 3, "DENT": 3, "PHLEB": 3,
                    "COL": 2, "HEST": 2, "HVAC": 2, "MACH": 2, "MAR": 2, "MAST": 2, "WELD": 2, "CONST": 2, "COS": 2, "FAC": 2, "DM": 2, "CUL": 2, "ECE": 2, "VET": 2
                }
            },
            {
                text: "I’ll read what I need to solve a problem.",
                weights: {
                    "AVIO": 5, "CYB": 5, "CSIT": 5, "EDMS": 5, "PROG": 5, "ESIA": 4, "AIRF": 4, "AIRP": 4, "MAST": 4, "HEST": 4, "HVAC": 4, "MAR": 4, "DRAFT": 3, "DM": 3,
                    "ACC": 2, "PHARM": 2, "COL": 2, "MACH": 2, "WELD": 2, "CONST": 2, "MA": 2, "NA": 2, "PCT": 2, "PN": 2, "RN": 2, "DENT": 2, "SURG": 2, "VET": 2,
                    "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "PHLEB": 1
                }
            },
            {
                text: "I prefer visuals or demonstrations over long reading.",
                weights: {
                    "COL": 5, "HEST": 5, "HVAC": 5, "WELD": 5, "MACH": 5, "CONST": 5, "MAR": 5, "MAST": 5, "COS": 4, "FAC": 4, "CUL": 4, "DM": 4, "DRAFT": 4,
                    "AIRF": 3, "AIRP": 3, "ESIA": 3, "ECE": 2, "MA": 2, "NA": 2, "PCT": 2, "DENT": 2, "PHLEB": 2, "VET": 2,
                    "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "AVIO": 1, "PN": 1, "RN": 1, "SURG": 1
                }
            },
            {
                text: "I like instructions when they help me help others.",
                weights: {
                    "DENT": 5, "ECE": 5, "VET": 5, "MA": 4, "NA": 4, "PCT": 4, "PN": 4, "RN": 4, "PHLEB": 4, "COS": 3, "FAC": 3, "CUL": 3, "PHARM": 3,
                    "ACC": 2, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DRAFT": 1, "DM": 1, "SURG": 1
                }
            }
        ]
    },

    // ===========================================
    // QUESTION 5 - When Something Breaks
    // ===========================================
    {
        id: 5,
        text: "If something breaks or stops working, your first instinct is to:",
        answers: [
            {
                text: "Check records, logs, or documentation.",
                weights: {
                    "ACC": 5, "CYB": 4, "PROG": 4, "CSIT": 4, "EDMS": 4, "PHARM": 4, "DRAFT": 3, "SURG": 3, "RN": 3,
                    "ESIA": 2, "AVIO": 2, "AIRF": 2, "AIRP": 2, "MA": 2, "PN": 2, "DM": 2,
                    "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "NA": 1, "PCT": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Diagnose the issue and test solutions.",
                weights: {
                    "CYB": 5, "AVIO": 5, "AIRF": 5, "AIRP": 5, "CSIT": 5, "PROG": 5, "EDMS": 5, "ESIA": 4, "MAST": 4, "HEST": 4, "HVAC": 4, "MAR": 4,
                    "COL": 2, "MACH": 2, "CONST": 2, "DRAFT": 2, "DM": 2, "RN": 2, "SURG": 2,
                    "ACC": 1, "PHARM": 1, "WELD": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Take it apart and fix it hands-on.",
                weights: {
                    "COL": 5, "HEST": 5, "CONST": 5, "MAST": 5, "HVAC": 5, "MAR": 5, "WELD": 5, "MACH": 5, "AIRF": 4, "AIRP": 4, "ESIA": 4,
                    "AVIO": 2, "DRAFT": 2, "CUL": 2, "COS": 2, "FAC": 2, "SURG": 2,
                    "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "DM": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Focus on how the problem affects people.",
                weights: {
                    "MA": 5, "NA": 5, "PCT": 5, "PN": 5, "RN": 5, "ECE": 4, "VET": 4, "COS": 3, "FAC": 3, "CUL": 3, "PHARM": 3, "DENT": 3, "PHLEB": 3,
                    "ACC": 2, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DRAFT": 1, "DM": 1, "SURG": 1
                }
            }
        ]
    },

    // ===========================================
    // QUESTION 6 - Responsibility
    // ===========================================
    {
        id: 6,
        text: "Which kind of responsibility motivates you most?",
        answers: [
            {
                text: "Being trusted with accuracy and financial or procedural integrity.",
                weights: {
                    "ACC": 5, "PHARM": 5, "CYB": 4, "SURG": 4, "PROG": 3, "CSIT": 3, "EDMS": 3, "PN": 3, "RN": 3,
                    "DRAFT": 2, "MA": 2, "DENT": 2, "PHLEB": 2, "NA": 2, "PCT": 2,
                    "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "DM": 1, "CUL": 1, "ECE": 1, "VET": 1
                }
            },
            {
                text: "Protecting systems, equipment, or data.",
                weights: {
                    "CYB": 5, "AVIO": 5, "CSIT": 5, "EDMS": 5, "PROG": 5, "ESIA": 4, "AIRF": 4, "AIRP": 4, "MAST": 3, "HEST": 3, "HVAC": 3, "MAR": 3,
                    "COL": 2, "MACH": 2, "CONST": 2, "DRAFT": 2, "SURG": 2,
                    "ACC": 1, "PHARM": 1, "WELD": 1, "COS": 1, "FAC": 1, "DM": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Producing quality work others can see and use.",
                weights: {
                    "COL": 5, "HEST": 5, "CONST": 5, "MAST": 5, "WELD": 5, "MACH": 5, "HVAC": 5, "MAR": 5, "DRAFT": 5, "DM": 5, "CUL": 5, "COS": 4, "FAC": 4,
                    "PROG": 2, "ESIA": 2, "AIRF": 2, "AIRP": 2, "ECE": 2,
                    "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "EDMS": 1, "AVIO": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "SURG": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Caring for people or animals.",
                weights: {
                    "MA": 5, "NA": 5, "PCT": 5, "PN": 5, "RN": 5, "DENT": 5, "VET": 5, "ECE": 5, "PHLEB": 5, "SURG": 5, "COS": 4, "FAC": 4, "CUL": 3, "PHARM": 3,
                    "ACC": 2, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DRAFT": 1, "DM": 1
                }
            }
        ]
    },

    // ===========================================
    // QUESTION 7 - Work Rhythm
    // ===========================================
    {
        id: 7,
        text: "You’re more energized by:",
        answers: [
            {
                text: "Predictable routines and clear expectations.",
                weights: {
                    "ACC": 5, "PHARM": 5, "MACH": 4, "DRAFT": 4, "SURG": 4, "PHLEB": 3, "DENT": 3, "MA": 3,
                    "PROG": 2, "CYB": 2, "CSIT": 2, "EDMS": 2, "FAC": 2, "COS": 2, "NA": 2, "PCT": 2, "PN": 2, "RN": 2,
                    "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DM": 1, "CUL": 1, "ECE": 1, "VET": 1
                }
            },
            {
                text: "New challenges that require problem-solving.",
                weights: {
                    "CYB": 5, "CSIT": 5, "PROG": 5, "EDMS": 5, "AVIO": 5, "ESIA": 4, "AIRF": 4, "AIRP": 4, "MAST": 4, "HEST": 4, "HVAC": 4, "MAR": 4,
                    "COL": 2, "MACH": 2, "DRAFT": 2, "DM": 2, "RN": 2, "SURG": 2,
                    "ACC": 1, "PHARM": 1, "WELD": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Physical work with visible results.",
                weights: {
                    "COL": 5, "HEST": 5, "CONST": 5, "MAST": 5, "WELD": 5, "MACH": 5, "HVAC": 5, "MAR": 5, "CUL": 4, "COS": 3, "FAC": 3, "DRAFT": 3, "DM": 3,
                    "AIRF": 2, "AIRP": 2, "ESIA": 2, "ECE": 2, "NA": 2, "PCT": 2,
                    "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "AVIO": 1, "MA": 1, "PN": 1, "RN": 1, "DENT": 1, "SURG": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Interacting with clients, patients, or customers.",
                weights: {
                    "MA": 5, "NA": 5, "PCT": 5, "PN": 5, "RN": 5, "ECE": 5, "COS": 5, "FAC": 5, "CUL": 5, "DENT": 4, "PHLEB": 4, "VET": 4, "PHARM": 3,
                    "ACC": 2, "EDMS": 2, "CSIT": 2, "CYB": 1, "PROG": 1, "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DRAFT": 1, "DM": 1, "SURG": 1
                }
            }
        ]
    },

    // ===========================================
    // QUESTION 8 - Work Preference
    // ===========================================
    {
        id: 8,
        text: "Which statement fits you best?",
        answers: [
            {
                text: "I like work where mistakes are rare and precision matters.",
                weights: {
                    "ACC": 5, "SURG": 5, "PHARM": 5, "PHLEB": 5, "CYB": 4, "PROG": 4, "MACH": 4, "DRAFT": 4, "PN": 4, "RN": 4,
                    "CSIT": 2, "EDMS": 2, "ESIA": 2, "AVIO": 2, "AIRF": 2, "AIRP": 2, "MA": 2, "NA": 2, "PCT": 2, "DENT": 2, "FAC": 2, "COS": 2, "CUL": 2, "WELD": 2,
                    "COL": 1, "HEST": 1, "HVAC": 1, "MAR": 1, "MAST": 1, "CONST": 1, "DM": 1, "ECE": 1, "VET": 1
                }
            },
            {
                text: "I like work where I get to figure things out.",
                weights: {
                    "CYB": 5, "AVIO": 5, "PROG": 5, "CSIT": 4, "EDMS": 4, "ESIA": 4, "AIRF": 4, "AIRP": 4, "MAST": 4, "HEST": 4, "HVAC": 4, "MAR": 4,
                    "COL": 2, "MACH": 2, "DRAFT": 2, "DM": 2, "RN": 2, "SURG": 2,
                    "ACC": 1, "PHARM": 1, "WELD": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "I like work where I can see progress quickly.",
                weights: {
                    "COL": 5, "HEST": 5, "CONST": 5, "MAST": 5, "WELD": 5, "MACH": 5, "HVAC": 5, "MAR": 5, "CUL": 4, "COS": 4, "FAC": 4, "DM": 4, "DRAFT": 4,
                    "AIRF": 2, "AIRP": 2, "ESIA": 2, "ECE": 2, "NA": 2, "PCT": 2,
                    "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "AVIO": 1, "MA": 1, "PN": 1, "RN": 1, "DENT": 1, "SURG": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "I like work where I feel helpful and needed.",
                weights: {
                    "MA": 5, "NA": 5, "PCT": 5, "PN": 5, "RN": 5, "ECE": 5, "DENT": 5, "PHLEB": 5, "VET": 5, "COS": 4, "FAC": 4, "CUL": 3, "PHARM": 3,
                    "ACC": 2, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DRAFT": 1, "DM": 1, "SURG": 1
                }
            }
        ]
    },

    // ===========================================
    // QUESTION 9 - Technical Vocabulary
    // ===========================================
    {
        id: 9,
        text: "How do you feel about learning technical terminology?",
        answers: [
            {
                text: "A spreadsheet, audit ledger, or check-list.",
                weights: {
                    "ACC": 5, "PHARM": 4, "PROG": 3, "CYB": 3, "CSIT": 2, "EDMS": 2, "DRAFT": 2, "SURG": 2,
                    "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "DM": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "A software diagnostic scanner or network map.",
                weights: {
                    "CYB": 5, "CSIT": 5, "PROG": 5, "EDMS": 5, "AVIO": 5, "MAST": 4, "HEST": 4, "ESIA": 4, "AIRF": 3, "AIRP": 3, "HVAC": 3, "MAR": 3,
                    "COL": 2, "MACH": 2, "DRAFT": 2, "DM": 2,
                    "ACC": 1, "PHARM": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "PHLEB": 1, "VET": 1, "SURG": 1
                }
            },
            {
                text: "Hand tools, measuring gauges, or physical testing hardware.",
                weights: {
                    "COL": 5, "HEST": 5, "CONST": 5, "MAST": 5, "WELD": 5, "MACH": 5, "HVAC": 5, "MAR": 5, "AIRF": 4, "AIRP": 4, "ESIA": 4, "DRAFT": 3,
                    "AVIO": 2, "CUL": 2, "COS": 2, "FAC": 2, "SURG": 2, "PHLEB": 2,
                    "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "DM": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "VET": 1
                }
            },
            {
                text: "Direct conversation and assessment observations.",
                weights: {
                    "MA": 5, "NA": 5, "PCT": 5, "PN": 5, "RN": 5, "ECE": 5, "DENT": 4, "PHLEB": 4, "VET": 4, "COS": 4, "FAC": 4, "CUL": 3, "PHARM": 3,
                    "ACC": 2, "EDMS": 1, "CSIT": 1, "CYB": 1, "PROG": 1, "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DRAFT": 1, "DM": 1, "SURG": 1
                }
            }
        ]
    },

    // ===========================================
    // QUESTION 10 - Feedback Style
    // ===========================================
    {
        id: 10,
        text: "What kind of feedback motivates you most?",
        answers: [
            {
                text: "Organizing schedules, compiling data, or tracking the budget.",
                weights: {
                    "ACC": 5, "PHARM": 4, "PROG": 3, "CYB": 3, "DRAFT": 3, "DM": 3,
                    "CSIT": 2, "EDMS": 2, "MA": 2, "SURG": 2, "RN": 2,
                    "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "NA": 1, "PCT": 1, "PN": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Setting up equipment, configuring systems, or code architecture.",
                weights: {
                    "CYB": 5, "CSIT": 5, "PROG": 5, "EDMS": 5, "AVIO": 5, "ESIA": 4, "AIRF": 3, "AIRP": 3,
                    "MAST": 2, "HEST": 2, "HVAC": 2, "DRAFT": 2, "DM": 2,
                    "ACC": 1, "PHARM": 1, "COL": 1, "MACH": 1, "MAR": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "SURG": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Assembling components, heavy fabricating, or physical staging.",
                weights: {
                    "COL": 5, "HEST": 5, "CONST": 5, "MAST": 5, "WELD": 5, "MACH": 5, "HVAC": 5, "MAR": 5, "CUL": 4, "DRAFT": 3, "AIRF": 3, "AIRP": 3, "ESIA": 3,
                    "COS": 2, "FAC": 2, "DM": 2, "SURG": 2,
                    "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "AVIO": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Coordinating team well-being and managing public presentations.",
                weights: {
                    "MA": 5, "NA": 5, "PCT": 5, "PN": 5, "RN": 5, "ECE": 5, "COS": 4, "FAC": 4, "CUL": 4, "DENT": 4, "PHLEB": 4, "VET": 4,
                    "PHARM": 2, "ACC": 2, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DRAFT": 1, "DM": 1, "SURG": 1
                }
            }
        ]
    },

    // ===========================================
    // QUESTION 11 - Preferred Task
    // ===========================================
    {
        id: 11,
        text: "Which task sounds most appealing?",
        answers: [
            {
                text: "A typo, a misaligned entry, or an incorrect step in a procedure.",
                weights: {
                    "ACC": 5, "SURG": 5, "PHARM": 5, "PROG": 4, "CYB": 4, "DRAFT": 4, "PHLEB": 4, "PN": 4, "RN": 4,
                    "CSIT": 2, "EDMS": 2, "ESIA": 2, "AVIO": 2, "AIRF": 2, "AIRP": 2, "MA": 2, "NA": 2, "PCT": 2, "DENT": 2, "FAC": 2, "COS": 2, "CUL": 2, "WELD": 2, "MACH": 2,
                    "COL": 1, "HEST": 1, "HVAC": 1, "MAR": 1, "MAST": 1, "CONST": 1, "DM": 1, "ECE": 1, "VET": 1
                }
            },
            {
                text: "An error message, a broken system link, or a configuration conflict.",
                weights: {
                    "CYB": 5, "CSIT": 5, "PROG": 5, "EDMS": 5, "AVIO": 5, "ESIA": 4, "AIRF": 4, "AIRP": 4, "MAST": 3, "HEST": 3, "HVAC": 3, "MAR": 3,
                    "COL": 2, "MACH": 2, "DRAFT": 2, "DM": 2,
                    "ACC": 1, "PHARM": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "PHLEB": 1, "VET": 1, "SURG": 1
                }
            },
            {
                text: "A physical flaw, a rough edge, or a structural structural mismeasurement.",
                weights: {
                    "COL": 5, "HEST": 5, "CONST": 5, "MAST": 5, "WELD": 5, "MACH": 5, "HVAC": 5, "MAR": 5, "DRAFT": 4, "DM": 4, "CUL": 4, "COS": 3, "FAC": 3,
                    "AIRF": 2, "AIRP": 2, "ESIA": 2,
                    "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "AVIO": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "SURG": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "A negative shift in a person's comfort, response, or expression.",
                weights: {
                    "MA": 5, "NA": 5, "PCT": 5, "PN": 5, "RN": 5, "ECE": 5, "COS": 4, "FAC": 4, "VET": 4, "DENT": 4, "PHLEB": 4, "CUL": 3, "PHARM": 3,
                    "ACC": 2, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DRAFT": 1, "DM": 1, "SURG": 1
                }
            }
        ]
    },

    // ===========================================
    // QUESTION 12 - Persistence Driver
    // ===========================================
    {
        id: 12,
        text: "When learning feels difficult, what keeps you going?",
        answers: [
            {
                text: "Using software platforms to manage records, balances, or layouts.",
                weights: {
                    "ACC": 5, "PROG": 4, "DRAFT": 4, "DM": 4, "CYB": 3, "CSIT": 3, "EDMS": 3, "PHARM": 3,
                    "ESIA": 2, "AVIO": 2, "MA": 2, "SURG": 2,
                    "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Configuring hardware architectures, servers, or circuit integrations.",
                weights: {
                    "CSIT": 5, "CYB": 5, "EDMS": 5, "AVIO": 5, "ESIA": 5, "PROG": 4, "AIRF": 3, "AIRP": 3,
                    "MAST": 2, "HEST": 2, "HVAC": 2, "DRAFT": 2, "MACH": 2,
                    "ACC": 1, "PHARM": 1, "COL": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "DM": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "SURG": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Operating heavy machinery, welding fabrication torches, or engine test cells.",
                weights: {
                    "COL": 5, "HEST": 5, "CONST": 5, "MAST": 5, "WELD": 5, "MACH": 5, "HVAC": 5, "MAR": 5, "AIRF": 4, "AIRP": 4, "ESIA": 3,
                    "CUL": 2, "COS": 2, "FAC": 2, "DRAFT": 2, "SURG": 2,
                    "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "AVIO": 1, "DM": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Using customer interfaces or clinical tools to assist clients directly.",
                weights: {
                    "MA": 5, "DENT": 5, "PHLEB": 5, "SURG": 4, "NA": 4, "PCT": 4, "PN": 4, "RN": 4, "COS": 4, "FAC": 4, "CUL": 3, "PHARM": 3, "VET": 3,
                    "ECE": 2, "ACC": 2, "EDMS": 2, "CSIT": 1, "CYB": 1, "PROG": 1, "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DRAFT": 1, "DM": 1
                }
            }
        ]
    },

    // ===========================================
    // QUESTION 13 - Safety & Standards
    // ===========================================
    {
        id: 13,
        text: "How do you feel about safety rules and standards?",
        answers: [
            {
                text: "The records, tracking logs, and governing structural rules.",
                weights: {
                    "ACC": 5, "CYB": 4, "PROG": 4, "PHARM": 4, "CSIT": 3, "EDMS": 3, "SURG": 3, "PN": 3, "RN": 3,
                    "DRAFT": 2, "MA": 2, "DENT": 2, "PHLEB": 2,
                    "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "DM": 1, "CUL": 1, "ECE": 1, "NA": 1, "PCT": 1, "VET": 1
                }
            },
            {
                text: "The data interactions, network nodes, and core logical frameworks.",
                weights: {
                    "CYB": 5, "PROG": 5, "CSIT": 5, "EDMS": 5, "AVIO": 5, "ESIA": 4, "AIRF": 4, "AIRP": 4, "MAST": 3, "HEST": 3, "HVAC": 3, "MAR": 3,
                    "COL": 2, "MACH": 2, "DRAFT": 2, "DM": 2,
                    "ACC": 1, "PHARM": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "PHLEB": 1, "VET": 1, "SURG": 1
                }
            },
            {
                text: "The mechanical assembly parts, tolerances, and physical symptoms.",
                weights: {
                    "COL": 5, "HEST": 5, "CONST": 5, "MAST": 5, "WELD": 5, "MACH": 5, "HVAC": 5, "MAR": 5, "DRAFT": 4, "AIRF": 4, "AIRP": 4, "ESIA": 3,
                    "CUL": 2, "COS": 2, "FAC": 2, "DM": 2, "SURG": 2,
                    "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "AVIO": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "The client requirements, human dynamic factors, and personal preferences.",
                weights: {
                    "MA": 5, "NA": 5, "PCT": 5, "PN": 5, "RN": 5, "ECE": 5, "COS": 5, "FAC": 5, "CUL": 4, "DENT": 4, "PHLEB": 4, "VET": 4, "PHARM": 3,
                    "ACC": 2, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DRAFT": 1, "DM": 1, "SURG": 1
                }
            }
        ]
    },

    // ===========================================
    // QUESTION 14 - Success Definition
    // ===========================================
    {
        id: 14,
        text: "Which kind of success matters most to you?",
        answers: [
            {
                text: "The smooth, error-free operational flow and accurate records.",
                weights: {
                    "ACC": 5, "PHARM": 4, "CYB": 3, "PROG": 3, "CSIT": 2, "EDMS": 2, "DRAFT": 2, "SURG": 2, "PN": 2, "RN": 2,
                    "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "DM": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "An optimized, secure system architecture running without crashes.",
                weights: {
                    "CYB": 5, "CSIT": 5, "PROG": 5, "EDMS": 5, "AVIO": 5, "ESIA": 4, "AIRF": 4, "AIRP": 4, "MAST": 3, "HEST": 3, "HVAC": 3, "MAR": 3,
                    "COL": 2, "MACH": 2, "DRAFT": 2, "DM": 2,
                    "ACC": 1, "PHARM": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "PHLEB": 1, "VET": 1, "SURG": 1
                }
            },
            {
                text: "The physical design quality and robust, visually striking fabrication.",
                weights: {
                    "COL": 5, "HEST": 5, "CONST": 5, "MAST": 5, "WELD": 5, "MACH": 5, "HVAC": 5, "MAR": 5, "DRAFT": 5, "DM": 5, "CUL": 5, "COS": 4, "FAC": 4,
                    "AIRF": 2, "AIRP": 2, "ESIA": 2, "ECE": 2,
                    "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "AVIO": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "SURG": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "The positive individual or community impact generated.",
                weights: {
                    "MA": 5, "NA": 5, "PCT": 5, "PN": 5, "RN": 5, "ECE": 5, "VET": 5, "COS": 4, "FAC": 4, "DENT": 4, "PHLEB": 4, "CUL": 3, "PHARM": 3,
                    "ACC": 2, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DRAFT": 1, "DM": 1, "SURG": 1
                }
            }
        ]
    },

    // ===========================================
    // QUESTION 15 - Team Role
    // ===========================================
    {
        id: 15,
        text: "In a team setting, you tend to:",
        answers: [
            {
                text: "Auditing accounts or refining process tracking records.",
                weights: {
                    "ACC": 5, "PHARM": 4, "CYB": 3, "PROG": 3, "CSIT": 2, "EDMS": 2, "DRAFT": 2, "SURG": 2,
                    "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "DM": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Isolating network packet anomalies or intermittent electronic signals.",
                weights: {
                    "CYB": 5, "CSIT": 5, "PROG": 5, "EDMS": 5, "AVIO": 5, "ESIA": 4, "AIRF": 4, "AIRP": 4, "MAST": 3, "HEST": 3, "HVAC": 3, "MAR": 3,
                    "COL": 2, "MACH": 2, "DRAFT": 2, "DM": 2,
                    "ACC": 1, "PHARM": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "PHLEB": 1, "VET": 1, "SURG": 1
                }
            },
            {
                text: "Rebuilding physical components or correcting fabrication tolerances.",
                weights: {
                    "COL": 5, "HEST": 5, "CONST": 5, "MAST": 5, "WELD": 5, "MACH": 5, "HVAC": 5, "MAR": 5, "DRAFT": 4, "CUL": 4, "COS": 3, "FAC": 3, "DM": 3,
                    "AIRF": 2, "AIRP": 2, "ESIA": 2,
                    "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "AVIO": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "SURG": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Managing demanding client situations or customer consulting sessions.",
                weights: {
                    "MA": 5, "NA": 5, "PCT": 5, "PN": 5, "RN": 5, "ECE": 5, "COS": 5, "FAC": 5, "CUL": 4, "DENT": 4, "PHLEB": 4, "VET": 4, "PHARM": 3,
                    "ACC": 2, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DRAFT": 1, "DM": 1, "SURG": 1
                }
            }
        ]
    },

    // ===========================================
    // QUESTION 16 - Learning Activity
    // ===========================================
    {
        id: 16,
        text: "What type of learning activity do you prefer?",
        answers: [
            {
                text: "System balances, numerical data fields, and documentation inputs.",
                weights: {
                    "ACC": 5, "PHARM": 4, "CYB": 3, "PROG": 3, "CSIT": 2, "EDMS": 2, "DRAFT": 2, "SURG": 2,
                    "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "DM": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Software network activity logs or automated industrial telemetry feeds.",
                weights: {
                    "CYB": 5, "CSIT": 5, "PROG": 5, "EDMS": 5, "AVIO": 5, "ESIA": 5, "AIRF": 4, "AIRP": 4, "MAST": 3, "HEST": 3, "HVAC": 3, "MAR": 3,
                    "COL": 2, "MACH": 2, "DRAFT": 2, "DM": 2,
                    "ACC": 1, "PHARM": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "PHLEB": 1, "VET": 1, "SURG": 1
                }
            },
            {
                text: "Material inventory usage, machinery gauges, or physical assemblies.",
                weights: {
                    "COL": 5, "HEST": 5, "CONST": 5, "MAST": 5, "WELD": 5, "MACH": 5, "HVAC": 5, "MAR": 5, "DRAFT": 4, "CUL": 4, "COS": 3, "FAC": 3, "DM": 3,
                    "AIRF": 2, "AIRP": 2, "ESIA": 2,
                    "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "AVIO": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "SURG": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Individual client reactions, vital signs, or behavioral cues.",
                weights: {
                    "MA": 5, "NA": 5, "PCT": 5, "PN": 5, "RN": 5, "ECE": 5, "DENT": 5, "PHLEB": 5, "VET": 5, "COS": 4, "FAC": 4, "CUL": 3, "PHARM": 3,
                    "ACC": 2, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DRAFT": 1, "DM": 1, "SURG": 1
                }
            }
        ]
    },

    // ===========================================
    // QUESTION 17 - Creativity
    // ===========================================
    {
        id: 17,
        text: "How important is creativity in your work?",
        answers: [
            {
                text: "A structured timeline, processing queue, or formal filing matrix.",
                weights: {
                    "ACC": 5, "PHARM": 5, "SURG": 4, "CYB": 3, "PROG": 3, "DRAFT": 3, "PN": 3, "RN": 3,
                    "CSIT": 2, "EDMS": 2, "MA": 2, "DENT": 2, "PHLEB": 2, "NA": 2, "PCT": 2,
                    "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "DM": 1, "CUL": 1, "ECE": 1, "VET": 1
                }
            },
            {
                text: "A systematic diagnostic flowchart or technical triage priority list.",
                weights: {
                    "CYB": 5, "CSIT": 5, "PROG": 5, "EDMS": 5, "AVIO": 5, "ESIA": 4, "AIRF": 4, "AIRP": 4, "MAST": 4, "HEST": 4, "HVAC": 4, "MAR": 4,
                    "COL": 2, "MACH": 2, "DRAFT": 2, "DM": 2, "RN": 2, "SURG": 2,
                    "ACC": 1, "PHARM": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Physical workbench zones, structural stages, or manufacturing checkpoints.",
                weights: {
                    "COL": 5, "HEST": 5, "CONST": 5, "MAST": 5, "WELD": 5, "MACH": 5, "HVAC": 5, "MAR": 5, "CUL": 4, "DRAFT": 4, "COS": 3, "FAC": 3, "DM": 3,
                    "AIRF": 2, "AIRP": 2, "ESIA": 2,
                    "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "AVIO": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "SURG": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "A direct assessment checklist oriented around personal or client care workflows.",
                weights: {
                    "MA": 5, "NA": 5, "PCT": 5, "PN": 5, "RN": 5, "ECE": 5, "COS": 4, "FAC": 4, "DENT": 4, "PHLEB": 4, "VET": 4, "CUL": 3, "PHARM": 3,
                    "ACC": 2, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DRAFT": 1, "DM": 1, "SURG": 1
                }
            }
        ]
    },

    // ===========================================
    // QUESTION 18 - Ideal Workday
    // ===========================================
    {
        id: 18,
        text: "Which description fits your ideal workday?",
        answers: [
            {
                text: "Meet every precise compliance requirement or entry criteria perfectly.",
                weights: {
                    "ACC": 5, "SURG": 5, "PHARM": 5, "PHLEB": 4, "CYB": 4, "PROG": 4, "DRAFT": 4, "MACH": 4, "PN": 4, "RN": 4,
                    "CSIT": 2, "EDMS": 2, "ESIA": 2, "AVIO": 2, "AIRF": 2, "AIRP": 2, "MA": 2, "NA": 2, "PCT": 2, "DENT": 2, "FAC": 2, "COS": 2, "CUL": 2, "WELD": 2,
                    "COL": 1, "HEST": 1, "HVAC": 1, "MAR": 1, "MAST": 1, "CONST": 1, "DM": 1, "ECE": 1, "VET": 1
                }
            },
            {
                text: "Determine why a complex structural system or asset failed.",
                weights: {
                    "CYB": 5, "AVIO": 5, "PROG": 5, "CSIT": 4, "EDMS": 4, "ESIA": 4, "AIRF": 4, "AIRP": 4, "MAST": 4, "HEST": 4, "HVAC": 4, "MAR": 4,
                    "COL": 2, "MACH": 2, "DRAFT": 2, "DM": 2, "RN": 2, "SURG": 2,
                    "ACC": 1, "PHARM": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Manufacture or finalize a stunning, resilient physical asset.",
                weights: {
                    "COL": 5, "HEST": 5, "CONST": 5, "MAST": 5, "WELD": 5, "MACH": 5, "HVAC": 5, "MAR": 5, "DRAFT": 4, "DM": 4, "CUL": 4, "COS": 4, "FAC": 4,
                    "AIRF": 2, "AIRP": 2, "ESIA": 2, "ECE": 2,
                    "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "AVIO": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "SURG": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Directly uplift an individual's outlook or physical well-being.",
                weights: {
                    "MA": 5, "NA": 5, "PCT": 5, "PN": 5, "RN": 5, "ECE": 5, "DENT": 5, "PHLEB": 5, "VET": 5, "COS": 4, "FAC": 4, "CUL": 3, "PHARM": 3,
                    "ACC": 2, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DRAFT": 1, "DM": 1, "SURG": 1
                }
            }
        ]
    },

    // ===========================================
    // QUESTION 19 - Career Growth
    // ===========================================
    {
        id: 19,
        text: "What kind of career growth appeals to you?",
        answers: [
            {
                text: "Written administrative code manuals or verification checklists.",
                weights: {
                    "ACC": 5, "SURG": 5, "PHARM": 5, "CYB": 4, "PROG": 4, "PN": 4, "RN": 4, "DRAFT": 3, "CSIT": 3, "EDMS": 3, "ESIA": 3, "AVIO": 3, "AIRF": 3, "AIRP": 3, "MA": 3, "NA": 3, "PCT": 3, "DENT": 3, "PHLEB": 3,
                    "COL": 2, "HEST": 2, "HVAC": 2, "MACH": 2, "MAR": 2, "MAST": 2, "WELD": 2, "CONST": 2, "COS": 2, "FAC": 2, "DM": 2, "CUL": 2, "ECE": 2, "VET": 2
                }
            },
            {
                text: "Fault trees, signal tracers, or core data diagrams.",
                weights: {
                    "AVIO": 5, "CYB": 5, "CSIT": 5, "EDMS": 5, "PROG": 5, "ESIA": 4, "AIRF": 4, "AIRP": 4, "MAST": 4, "HEST": 4, "HVAC": 4, "MAR": 4, "DRAFT": 3, "DM": 3,
                    "ACC": 2, "PHARM": 2, "COL": 2, "MACH": 2, "WELD": 2, "CONST": 2, "MA": 2, "NA": 2, "PCT": 2, "PN": 2, "RN": 2, "DENT": 2, "SURG": 2, "VET": 2,
                    "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "PHLEB": 1
                }
            },
            {
                text: "Physical models, fabrication jigs, or functional machinery demonstrations.",
                weights: {
                    "COL": 5, "HEST": 5, "HVAC": 5, "WELD": 5, "MACH": 5, "CONST": 5, "MAR": 5, "MAST": 5, "COS": 4, "FAC": 4, "CUL": 4, "DM": 4, "DRAFT": 4,
                    "AIRF": 3, "AIRP": 3, "ESIA": 3, "ECE": 2, "MA": 2, "NA": 2, "PCT": 2, "DENT": 2, "PHLEB": 2, "VET": 2,
                    "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "AVIO": 1, "PN": 1, "RN": 1, "SURG": 1
                }
            },
            {
                text: "Guided human simulation practice sessions emphasizing interaction quality.",
                weights: {
                    "DENT": 5, "ECE": 5, "VET": 5, "MA": 4, "NA": 4, "PCT": 4, "PN": 4, "RN": 4, "PHLEB": 4, "COS": 4, "FAC": 4, "CUL": 3, "PHARM": 3,
                    "ACC": 2, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DRAFT": 1, "DM": 1, "SURG": 1
                }
            }
        ]
    },

    // ===========================================
    // QUESTION 20 - Pride Moment
    // ===========================================
    {
        id: 20,
        text: "When you imagine yourself feeling proud at work, it's because:",
        answers: [
            {
                text: "Earning certifications in compliance, ledger management, or corporate operations.",
                weights: {
                    "ACC": 5, "PHARM": 4, "CYB": 3, "PROG": 3, "CSIT": 2, "EDMS": 2, "DRAFT": 2, "SURG": 2, "PN": 2, "RN": 2,
                    "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "DM": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "DENT": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Achieving master technician status over complex enterprise infrastructure.",
                weights: {
                    "CYB": 5, "CSIT": 5, "PROG": 5, "EDMS": 5, "AVIO": 5, "ESIA": 4, "AIRF": 4, "AIRP": 4, "MAST": 3, "HEST": 3, "HVAC": 3, "MAR": 3,
                    "COL": 2, "MACH": 2, "DRAFT": 2, "DM": 2,
                    "ACC": 1, "PHARM": 1, "WELD": 1, "CONST": 1, "COS": 1, "FAC": 1, "CUL": 1, "ECE": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "PHLEB": 1, "VET": 1, "SURG": 1
                }
            },
            {
                text: "Directing major physical structural builds, artistic designs, or fabrications.",
                weights: {
                    "COL": 5, "HEST": 5, "CONST": 5, "MAST": 5, "WELD": 5, "MACH": 5, "HVAC": 5, "MAR": 5, "DRAFT": 5, "DM": 5, "CUL": 5, "COS": 4, "FAC": 4,
                    "AIRF": 2, "AIRP": 2, "ESIA": 2, "ECE": 2,
                    "ACC": 1, "PHARM": 1, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "AVIO": 1, "MA": 1, "NA": 1, "PCT": 1, "PN": 1, "RN": 1, "DENT": 1, "SURG": 1, "PHLEB": 1, "VET": 1
                }
            },
            {
                text: "Earning license honors in clinical care, client therapy, or youth education.",
                weights: {
                    "MA": 5, "NA": 5, "PCT": 5, "PN": 5, "RN": 5, "ECE": 5, "VET": 5, "COS": 4, "FAC": 4, "DENT": 4, "PHLEB": 4, "CUL": 3, "PHARM": 3,
                    "ACC": 2, "CYB": 1, "CSIT": 1, "PROG": 1, "EDMS": 1, "ESIA": 1, "AVIO": 1, "AIRF": 1, "AIRP": 1, "COL": 1, "HEST": 1, "HVAC": 1, "MACH": 1, "MAR": 1, "MAST": 1, "WELD": 1, "CONST": 1, "DRAFT": 1, "DM": 1, "SURG": 1
                }
            }
        ]
    }
];

// ===========================================
// APPLICATION STATE
// ===========================================
let currentQuestion = 0;
let answers = new Array(questions.length).fill(null);
// Store the shuffled order for each question
let shuffledOrders = new Array(questions.length).fill(null);
const MAX_POSSIBLE_SCORE = 100; // 20 questions × max weight of 5

// ===========================================
// INITIALIZATION
// ===========================================
document.addEventListener('DOMContentLoaded', function () {
    loadQuestion(currentQuestion);
    loadProgramsInfo();
    createQuestionNavigation();

    document.getElementById('retakeBtn').addEventListener('click', retakeQuestionnaire);
    document.getElementById('downloadBtn').addEventListener('click', downloadResults);
});

// ===========================================
// QUESTION NAVIGATION
// ===========================================
function loadQuestion(index) {
    const question = questions[index];
    const container = document.getElementById('questionContainer');
    const letters = ['A', 'B', 'C', 'D'];

    // Use or create a persistent shuffled order for this question
    if (!shuffledOrders[index]) {
        let order = question.answers.map((_, i) => i);
        for (let i = order.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [order[i], order[j]] = [order[j], order[i]];
        }
        shuffledOrders[index] = order;
    }
    const order = shuffledOrders[index];
    let answersHtml = '';
    order.forEach((originalIndex, i) => {
        const answer = question.answers[originalIndex];
        const isSelected = answers[index] === originalIndex;
        answersHtml += `
                    <div class="answer-option ${isSelected ? 'selected' : ''}" onclick="selectAnswer(${index}, ${originalIndex})" style="cursor: pointer;">
                        <div class="d-flex align-items-center">
                            <div class="answer-letter">${letters[i]}</div>
                            <div class="flex-grow-1">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="fw-medium">${answer.text}</span>
                                    <span class="weight-badge">${Object.keys(answer.weights).length} programs match</span>
                                </div>
                            </div>
                            ${isSelected ? '<i class="bi bi-check-circle-fill text-primary fs-4"></i>' : ''}
                        </div>
                    </div>
                `;
    });

    container.innerHTML = `
                <div class="card question-card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <span>Question ${index + 1} of ${questions.length}</span>
                        <span class="badge bg-primary">Weight: 5 pts max</span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title mb-4">${question.text}</h5>
                        <div class="answers-container">
                            ${answersHtml}
                        </div>
                        
                        <!-- Navigation Buttons -->
                        <div class="d-flex justify-content-between mt-4 pt-3 border-top">
                            <button class="btn btn-outline-primary" id="prevBtn" onclick="prevQuestion()" ${index === 0 ? 'disabled' : ''}>
                                <i class="bi bi-chevron-left"></i> Previous
                            </button>
                            <button class="btn btn-primary" id="nextBtn" onclick="nextQuestion()" ${index === questions.length - 1 ? 'style="display: none;"' : ''}>
                                Next <i class="bi bi-chevron-right"></i>
                            </button>
                            <button class="btn btn-success" id="submitBtn" onclick="submitQuestionnaire()" ${index !== questions.length - 1 ? 'style="display: none;"' : ''}>
                                <i class="bi bi-check-circle"></i> Get Results
                            </button>
                        </div>
                    </div>
                </div>
            `;

    updateNavigation();
    updateQuestionNavigation();
}

function selectAnswer(questionIndex, answerOriginalIndex) {
    answers[questionIndex] = answerOriginalIndex;
    loadQuestion(questionIndex);
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function updateNavigation() {
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.disabled = answers[currentQuestion] === null;
    }
}

function createQuestionNavigation() {
    const container = document.getElementById('questionNavDots');
    let dotsHtml = '';

    for (let i = 0; i < questions.length; i++) {
        const isAnswered = answers[i] !== null;
        const isCurrent = i === currentQuestion;

        let classes = 'nav-dot';
        if (isAnswered) classes += ' answered';
        if (isCurrent) classes += ' current';

        dotsHtml += `<span class="${classes}" onclick="jumpToQuestion(${i})">${i + 1}</span>`;
    }

    container.innerHTML = dotsHtml;
}

function updateQuestionNavigation() {
    const dots = document.querySelectorAll('.nav-dot');
    dots.forEach((dot, i) => {
        dot.classList.remove('answered', 'current');
        if (answers[i] !== null) {
            dot.classList.add('answered');
        }
        if (i === currentQuestion) {
            dot.classList.add('current');
        }
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(currentQuestion);
}

// ===========================================
// WEIGHTED SCORING SYSTEM (0-100 POINTS)
// ===========================================
function calculateScores() {
    const scores = {};

    // Initialize all programs with 0
    Object.keys(programs).forEach(code => {
        scores[code] = 0;
    });

    // Add WEIGHTED scores from answers
    answers.forEach((answerIndex, questionIndex) => {
        if (answerIndex !== null) {
            const selectedAnswer = questions[questionIndex].answers[answerIndex];

            // Add weights (5,4,3,2,1) instead of just 1 point
            Object.entries(selectedAnswer.weights).forEach(([code, weight]) => {
                if (scores[code] !== undefined) {
                    scores[code] += weight;
                }
            });
        }
    });

    // Find maximum score achieved
    const maxScore = Math.max(...Object.values(scores), 1);

    // Convert to array with percentages (based on 100-point scale)
    return Object.entries(scores)
        .map(([code, score]) => ({
            code,
            name: programs[code].name,
            category: programs[code].category,
            score: score,
            percentage: Math.round((score / MAX_POSSIBLE_SCORE) * 100), // 0-100 scale
            matchStrength: getMatchStrength(Math.round((score / MAX_POSSIBLE_SCORE) * 100))
        }))
        .sort((a, b) => b.score - a.score)
        .filter(program => program.score > 0);
}

function getMatchStrength(percentage) {
    if (percentage >= 70) return { text: "Excellent Match", class: "bg-success" };
    if (percentage >= 50) return { text: "Strong Match", class: "bg-primary" };
    if (percentage >= 30) return { text: "Good Match", class: "bg-info" };
    if (percentage >= 15) return { text: "Potential Match", class: "bg-warning text-dark" };
    return { text: "Explore Further", class: "bg-secondary" };
}

// ===========================================
// RESULTS DISPLAY
// ===========================================
function submitQuestionnaire() {
    const unanswered = answers.filter(a => a === null).length;
    if (unanswered > 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Incomplete',
            text: `Please answer all ${questions.length} questions. ${unanswered} remaining.`
        });
        return;
    }

    const results = calculateScores();
    displayResults(results);

    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'block';

    document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
}

function displayResults(results) {
    const container = document.getElementById('resultsContainer');
    const topResults = results.slice(0, 5);

    let resultsHtml = '';

    topResults.forEach((program, index) => {
        const isTopResult = index === 0;
        const matchInfo = getMatchReasons(program.code, answers);
        const totalMatches = matchInfo.reasons.perfect.length +
            matchInfo.reasons.strong.length +
            matchInfo.reasons.good.length;

        resultsHtml += `
            <div class="col-12 mb-4">
                <div class="card ${isTopResult ? 'border-success border-3' : ''}">
                    <div class="card-header bg-${isTopResult ? 'success' : 'primary'} text-white d-flex justify-content-between align-items-center">
                        <div>
                            <h4 class="mb-0">${program.name}</h4>
                            <small>${program.code} • ${program.category}</small>
                        </div>
                        <div class="text-end">
                            <span class="badge bg-light text-dark fs-6">
                                ${program.score}/${MAX_POSSIBLE_SCORE} points
                            </span>
                            <div class="small">${program.percentage}% match</div>
                        </div>
                    </div>
                    
                    <div class="card-body">
                        <!-- Match Strength Summary -->
                        <div class="row mb-3">
                            <div class="col-md-4 text-center">
                                <span class="badge bg-success p-2">${matchInfo.reasons.perfect.length}</span>
                                <div class="small">Perfect Matches</div>
                            </div>
                            <div class="col-md-4 text-center">
                                <span class="badge bg-primary p-2">${matchInfo.reasons.strong.length}</span>
                                <div class="small">Strong Matches</div>
                            </div>
                            <div class="col-md-4 text-center">
                                <span class="badge bg-info p-2">${matchInfo.reasons.good.length}</span>
                                <div class="small">Good Matches</div>
                            </div>
                        </div>
                        
                        <!-- WHY THIS PROGRAM? Section -->
                        <div class="bg-light p-3 rounded mb-3">
                            <h5 class="fw-bold mb-3">
                                <i class="bi bi-question-circle-fill text-primary"></i> 
                                Why ${program.name}?
                            </h5>
                            
                            <!-- Theme Summary -->
                            <div class="mb-3">
                                ${matchInfo.summary.map(theme => `
                                    <span class="badge bg-secondary me-1">${theme}</span>
                                `).join('')}
                            </div>
                            
                            <!-- Key Matches -->
                            <div class="row">
                                <div class="col-md-6">
                                    <h6 class="text-success">
                                        <i class="bi bi-star-fill"></i> Top Matches:
                                    </h6>
                                    <ul class="list-unstyled">
                                        ${matchInfo.reasons.perfect.slice(0, 2).map(reason => `
                                            <li class="mb-2">
                                                <i class="bi bi-check-circle-fill text-success me-2"></i>
                                                <span class="fw-bold">"${reason.answer}"</span>
                                                <span class="badge bg-success ms-2">+5</span>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h6 class="text-primary">
                                        <i class="bi bi-star"></i> Strong Alignments:
                                    </h6>
                                    <ul class="list-unstyled">
                                        ${matchInfo.reasons.strong.slice(0, 3).map(reason => `
                                            <li class="mb-2">
                                                <i class="bi bi-check-circle text-primary me-2"></i>
                                                ${reason.answer.substring(0, 40)}...
                                                <span class="badge bg-primary ms-2">+4</span>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Collapsible Buttons -->
                        <div class="mt-2 d-flex gap-2 flex-wrap">
                            <button class="btn btn-sm btn-outline-info" type="button" 
                                    data-bs-toggle="collapse" data-bs-target="#about-${program.code}">
                                <i class="bi bi-info-circle"></i> About This Program
                            </button>
                            <button class="btn btn-sm btn-outline-secondary" type="button" 
                                    data-bs-toggle="collapse" data-bs-target="#details-${program.code}">
                                <i class="bi bi-chevron-down"></i> View Detailed Breakdown
                            </button>
                        </div>
                        
                        <!-- About Program (Collapsible) -->
                        <div class="collapse mt-3" id="about-${program.code}">
                            <div class="card card-body border-info">
                                <h6><i class="bi bi-mortarboard-fill text-info me-2"></i>What You'll Learn</h6>
                                <p class="mb-0">${programs[program.code].description}</p>
                            </div>
                        </div>
                            
                        <!-- Detailed Breakdown (Collapsible) -->
                        <div class="collapse mt-3" id="details-${program.code}">
                                <div class="card card-body">
                                    <h6>All Matching Answers:</h6>
                                    <div class="table-responsive">
                                        <table class="table table-sm">
                                            <thead>
                                                <tr>
                                                    <th>Question</th>
                                                    <th>Your Answer</th>
                                                    <th>Weight</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ${matchInfo.reasons.perfect.concat(matchInfo.reasons.strong, matchInfo.reasons.good).map(reason => `
                                                    <tr>
                                                        <td>${reason.question.substring(0, 40)}...</td>
                                                        <td>${reason.answer}</td>
                                                        <td><span class="badge bg-${reason.weight >= 5 ? 'success' : reason.weight >= 4 ? 'primary' : 'info'}">+${reason.weight}</span></td>
                                                    </tr>
                                                `).join('')}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = resultsHtml;
}



function loadProgramsInfo() {
    const container = document.getElementById('programsContainer');
    const programCodes = Object.keys(programs);
    const chunkSize = 3;

    // Group programs into rows of 3
    for (let i = 0; i < programCodes.length; i += chunkSize) {
        const chunk = programCodes.slice(i, i + chunkSize);

        const rowHtml = `
                    <div class="row mb-4">
                        ${chunk.map(code => `
                            <div class="col-md-4">
                                <div class="card h-100 border-0 shadow-sm">
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">${programs[code].name}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">${code}</h6>
                                        <p class="card-text">
                                            <span class="badge" style="background-color: var(--ccps-blue); color: #fff;">${programs[code].category}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;

        container.innerHTML += rowHtml;
    }
}

// ===========================================
// UTILITY FUNCTIONS
// ===========================================
function retakeQuestionnaire() {
    currentQuestion = 0;
    answers = new Array(questions.length).fill(null);
    shuffledOrders = new Array(questions.length).fill(null);

    document.getElementById('questionContainer').style.display = 'block';
    document.getElementById('resultsSection').style.display = 'none';

    loadQuestion(currentQuestion);
    createQuestionNavigation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Simple Text File Download of Results
function downloadResults() {
    const results = calculateScores();
    const topResults = results.slice(0, 5);

    let content = `LWTC CAREER COMPASS - WEIGHTED ASSESSMENT RESULTS\n`;
    content += `==============================================\n`;
    content += `Date: ${new Date().toLocaleDateString()}\n`;
    content += `Maximum Possible Score: 100 points\n\n`;

    content += `TOP RECOMMENDATIONS:\n`;
    content += `--------------------\n`;
    topResults.forEach((p, i) => {
        content += `${i + 1}. ${p.name} (${p.code})\n`;
        content += `   Score: ${p.score}/100 (${p.percentage}%)\n`;
        content += `   Category: ${p.category}\n`;
        content += `   Match: ${p.matchStrength.text}\n\n`;
    });

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `LWTC_Weighted_Results_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Simple CSV Export 
function exportToCSV() {
    const results = calculateScores();

    let csv = "Program Code,Program Name,Category,Match Score,Match Percentage\n";

    results.forEach(program => {
        csv += `${program.code},"${program.name}",${program.category},${program.score},${program.percentage}%\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `LWTC_Results_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
}

// ===========================================
// COUNSELOR SUBMISSION FUNCTIONS
// ===========================================

// Microsoft Form URL - Replace with your actual form URL
const COUNSELOR_FORM_URL = "https://forms.office.com/Pages/ResponsePage.aspx?id=SjyUWVNiDU2KmP71AwPTS1qtThgdrC1Ls467mAaaBxBUMEozTFRTN05HRFNRUVY1UEE2WEJVMjhZVS4u";

// Copy results to clipboard for easy pasting
function copyResultsToClipboard() {
    const results = calculateScores();
    const topResults = results.slice(0, 5);
    
    let content = `TECH COMPASS RESULTS\n`;
    content += `Date: ${new Date().toLocaleDateString()}\n`;
    content += `Time: ${new Date().toLocaleTimeString()}\n\n`;
    content += `TOP 5 PROGRAM MATCHES:\n`;
    
    topResults.forEach((p, i) => {
        content += `${i + 1}. ${p.name} (${p.code}) - ${p.score} pts (${p.percentage}%)\n`;
    });
    
    navigator.clipboard.writeText(content).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Copied!',
            text: 'Results copied to clipboard. You can now paste them into the form.',
            timer: 2000,
            showConfirmButton: false
        });
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = content;
        document.body.appendChild(textArea);
        textArea.select();
        Document.execCommand('copy');
        document.body.removeChild(textArea);
        
        Swal.fire({
            icon: 'success',
            title: 'Copied!',
            text: 'Results copied to clipboard.',
            timer: 2000,
            showConfirmButton: false
        });
    });
}

// Submit results to counselor via Microsoft Form
function submitToCounselor() {
    // Copy results to clipboard first
    const results = calculateScores();
    const topResults = results.slice(0, 5);
    
    let content = `TECH COMPASS RESULTS\n`;
    content += `Date: ${new Date().toLocaleDateString()}\n\n`;
    content += `TOP 5 PROGRAM MATCHES:\n`;
    topResults.forEach((p, i) => {
        content += `${i + 1}. ${p.name} (${p.code}) - ${p.score} pts (${p.percentage}%)\n`;
    });
    
    navigator.clipboard.writeText(content).then(() => {
        // Show brief notification and open form
        Swal.fire({
            icon: 'success',
            title: 'Results Copied!',
            html: '<p>Your results are ready to paste.<br><strong>Opening form now...</strong></p>',
            timer: 1500,
            showConfirmButton: false
        });
        
        // Open form after a short delay
        setTimeout(() => {
            window.open(COUNSELOR_FORM_URL, '_blank');
        }, 1000);
    }).catch(() => {
        // If clipboard fails, still open the form
        Swal.fire({
            icon: 'info',
            title: 'Opening Form',
            text: 'Please manually enter your top results in the form.',
            timer: 1500,
            showConfirmButton: false
        });
        
        setTimeout(() => {
            window.open(COUNSELOR_FORM_URL, '_blank');
        }, 1000);
    });
}


// ===========================================
// MATCH REASONING ENGINE
// ===========================================
function getMatchReasons(programCode, answers) {
    const reasons = {
        perfect: [],    // 5-point matches
        strong: [],     // 4-point matches
        good: [],       // 3-point matches
        moderate: []    // 2-point matches
    };

    const reasonTexts = [];

    answers.forEach((answerIndex, questionIndex) => {
        if (answerIndex !== null) {
            const question = questions[questionIndex];
            const answer = question.answers[answerIndex];

            if (answer.weights && answer.weights[programCode]) {
                const weight = answer.weights[programCode];
                const questionText = question.text;

                // Extract key phrases from the answer
                let keyPhrase = answer.text;
                if (keyPhrase.length > 50) {
                    keyPhrase = keyPhrase.substring(0, 50) + '...';
                }

                const reason = {
                    question: questionText,
                    answer: keyPhrase,
                    weight: weight,
                    category: getWeightCategory(weight)
                };

                if (weight >= 5) reasons.perfect.push(reason);
                else if (weight >= 4) reasons.strong.push(reason);
                else if (weight >= 3) reasons.good.push(reason);
                else if (weight >= 2) reasons.moderate.push(reason);

                reasonTexts.push({
                    text: answer.text,
                    weight: weight
                });
            }
        }
    });

    return {
        reasons: reasons,
        summary: generateSummary(reasonTexts),
        bulletPoints: generateBulletPoints(reasons)
    };
}

function getWeightCategory(weight) {
    if (weight >= 5) return { name: 'Perfect Match', class: 'success', icon: 'star-fill' };
    if (weight >= 4) return { name: 'Strong Match', class: 'primary', icon: 'star' };
    if (weight >= 3) return { name: 'Good Match', class: 'info', icon: 'hand-thumbs-up' };
    if (weight >= 2) return { name: 'Moderate Match', class: 'warning', icon: 'arrow-up' };
    return { name: 'Minor Match', class: 'secondary', icon: 'dot' };
}

function generateSummary(reasonTexts) {
    // Extract common themes from answers
    const keywords = {
        technical: ['technical', 'system', 'computer', 'troubleshoot', 'diagnose', 'fix'],
        handsOn: ['hands-on', 'build', 'repair', 'create', 'physical', 'tools'],
        people: ['people', 'help', 'care', 'service', 'patients', 'customers'],
        accuracy: ['accurate', 'precise', 'detail', 'organized', 'procedure', 'rules'],
        creative: ['creative', 'design', 'create', 'artistic', 'visual'],
        problem: ['problem', 'solve', 'challenge', 'figure out']
    };

    const themes = [];
    const text = reasonTexts.map(r => r.text.toLowerCase()).join(' ');

    Object.entries(keywords).forEach(([theme, words]) => {
        if (words.some(word => text.includes(word))) {
            themes.push(theme);
        }
    });

    return themes;
}

function generateBulletPoints(reasons) {
    const bullets = [];

    // Add perfect matches first
    reasons.perfect.slice(0, 3).forEach(reason => {
        bullets.push({
            text: reason.answer,
            type: 'perfect',
            icon: 'bi-star-fill text-warning'
        });
    });

    // Add strong matches
    reasons.strong.slice(0, 3).forEach(reason => {
        bullets.push({
            text: reason.answer,
            type: 'strong',
            icon: 'bi-star text-primary'
        });
    });

    return bullets;
}
