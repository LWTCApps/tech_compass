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
        name: "Automotive Collision Technology", 
        category: "Automotive & Transportation",
        description: "Master the art of repairing and refinishing damaged vehicles. Learn body repair, painting techniques, frame straightening, and estimating. Prepares you for careers in collision repair shops, dealerships, and insurance companies."
    },
    "AIRF": { 
        name: "Aviation Airframe", 
        category: "Aviation",
        description: "Learn to inspect, repair, and maintain aircraft structures, systems, and components. Covers airframe construction, hydraulics, landing gear, and environmental systems. Leads to FAA Airframe certification and careers in aviation maintenance."
    },
    "AIRP": { 
        name: "Aviation Powerplant", 
        category: "Aviation",
        description: "Focus on aircraft engine maintenance, repair, and overhaul. Learn about turbine and reciprocating engines, propellers, and fuel systems. Leads to FAA Powerplant certification and careers as an aircraft mechanic or engine specialist."
    },
    "AVIO": { 
        name: "Avionics Systems", 
        category: "Aviation & Electronics",
        description: "Specialize in aircraft electronic systems including navigation, communication, and flight control systems. Learn to troubleshoot and repair complex avionics equipment. Prepares you for careers in aviation electronics and aerospace industries."
    },
    "CONST": { 
        name: "Building Construction", 
        category: "Construction",
        description: "Gain hands-on experience in residential and commercial construction. Learn framing, roofing, finishing, blueprint reading, and safety practices. Prepares you for careers as a construction worker, carpenter, or construction supervisor."
    },
    "CSIT": { 
        name: "Computer Systems & IT", 
        category: "Information Technology",
        description: "Build expertise in computer hardware, networking, and system administration. Learn to install, configure, and troubleshoot computers and networks. Prepares you for CompTIA certifications and careers in IT support and network administration."
    },
    "COS": { 
        name: "Cosmetology", 
        category: "Personal Services",
        description: "Develop skills in hair cutting, styling, coloring, and chemical treatments. Learn skincare basics, makeup application, and salon management. Prepares you for state licensure and careers as a hairstylist, salon owner, or beauty consultant."
    },
    "PROG": { 
        name: "Database App Dev & Programming", 
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
        name: "Enterprise Desktop & Mobile Support", 
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
        name: "Machining (CNC)", 
        category: "Manufacturing",
        description: "Develop precision machining skills using manual and CNC equipment. Learn programming, setup, operation, and quality control. Prepares you for careers as a CNC machinist, tool maker, or manufacturing technician."
    },
    "MAR": { 
        name: "Marine Service Technologies", 
        category: "Marine & Mechanical",
        description: "Learn to service and repair marine engines, electrical systems, and boat components. Develop skills in outboard, inboard, and personal watercraft maintenance. Prepares you for careers in marinas, boat dealers, and marine service centers."
    },
    "MAST": { 
        name: "Master Automotive Service Tech", 
        category: "Automotive & Transportation",
        description: "Become a comprehensive automotive technician skilled in all vehicle systems. Learn engine repair, electrical systems, brakes, suspension, and diagnostics. Prepares you for ASE certification and careers in dealerships and repair shops."
    },
    "MAS": { 
        name: "Medical Administrative Specialist", 
        category: "Healthcare Administration",
        description: "Develop skills for healthcare office management. Learn medical terminology, billing, coding, electronic health records, and patient scheduling. Prepares you for careers as a medical secretary, billing specialist, or healthcare administrator."
    },
    "MA": { 
        name: "Medical Assisting", 
        category: "Healthcare",
        description: "Prepare for a versatile healthcare career combining clinical and administrative duties. Learn patient care, vital signs, medical procedures, and office management. Prepares you for certification and employment in clinics and medical offices."
    },
    "NA": { 
        name: "Nursing Assistant", 
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
        name: "Culinary Arts & Hospitality", 
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
                weights: { "ACC": 5, "MAS": 4, "PHARM": 3 }
            },
            {
                text: "Fixing a problem no one else could figure out.",
                weights: { "CYB": 4, "CSIT": 4, "ESIA": 4, "EDMS": 3 }
            },
            {
                text: "Creating something that looks or feels better than before.",
                weights: { "COL": 5, "COS": 4, "FAC": 4, "DM": 5, "WELD": 4, "PROG": 4, "CUL": 5, "DRAFT": 4 }
            },
            {
                text: "Helping a person feel safer, healthier, or more confident.",
                weights: { "MA": 5, "NA": 4, "PCT": 4, "PN": 5, "RN": 5, "DENT": 4, "VET": 4, "PHLEB": 4 }
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
                weights: { "ACC": 5, "PHARM": 4, "MAS": 4, "SURG": 5 }
            },
            {
                text: "Troubleshooting a system until it works.",
                weights: { "CYB": 5, "CSIT": 4, "AVIO": 5, "ESIA": 4, "PROG": 5, "AIRF": 5, "AIRP": 5, "EDMS": 4 }
            },
            {
                text: "Hands-on practice with immediate feedback.",
                weights: { "COL": 5, "HEST": 5, "HVAC": 4, "MAR": 4, "WELD": 4, "MACH": 4, "MAST": 5 }
            },
            {
                text: "Watching a demonstration, then trying it yourself.",
                weights: { "COS": 4, "FAC": 4, "MA": 3, "DENT": 4, "ECE": 4 }
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
                weights: { "ACC": 5, "PHARM": 4, "MAS": 4 }
            },
            {
                text: "Technical, problem-solving, system-oriented.",
                weights: { "CYB": 5, "AVIO": 5, "CSIT": 4, "ESIA": 4, "AIRF": 5, "AIRP": 5, "PROG": 4 }
            },
            {
                text: "Active, hands-on, physically engaging.",
                weights: { "COL": 5, "HEST": 5, "HVAC": 4, "MACH": 4, "WELD": 4, "MAR": 4, "CONST": 5, "MAST": 5, "DRAFT": 4 }
            },
            {
                text: "People-centered, service-oriented.",
                weights: { "MA": 5, "NA": 4, "PCT": 4, "PN": 4, "RN": 4, "ECE": 4, "VET": 4, "COS": 3, "CUL": 4, "PHLEB": 4 }
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
                text: "I'm comfortable with them and use them carefully.",
                weights: { "ACC": 5, "PHARM": 4, "PN": 4, "RN": 4, "SURG": 5 }
            },
            {
                text: "I'll read what I need to solve a problem.",
                weights: { "CYB": 4, "CSIT": 4, "AVIO": 5, "ESIA": 4, "PROG": 4 }
            },
            {
                text: "I prefer visuals or demonstrations over long reading.",
                weights: { "COL": 4, "HEST": 4, "HVAC": 4, "MACH": 4, "WELD": 4, "CONST": 4, "DRAFT": 4 }
            },
            {
                text: "I like instructions when they help me help others.",
                weights: { "MA": 3, "DENT": 4, "ECE": 4, "VET": 4, "COS": 3 }
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
                weights: { "ACC": 5, "MAS": 4, "PHARM": 3 }
            },
            {
                text: "Diagnose the issue and test solutions.",
                weights: { "CYB": 5, "AVIO": 5, "CSIT": 4, "ESIA": 4, "PROG": 4, "AIRF": 5, "AIRP": 5, "EDMS": 4 }
            },
            {
                text: "Take it apart and fix it hands-on.",
                weights: { "COL": 5, "HEST": 5, "HVAC": 4, "MAR": 4, "WELD": 4, "MACH": 4, "CONST": 5, "MAST": 5 }
            },
            {
                text: "Focus on how the problem affects people.",
                weights: { "MA": 4, "NA": 4, "PCT": 4, "VET": 4 }
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
                weights: { "ACC": 5, "PHARM": 4, "MAS": 4 }
            },
            {
                text: "Protecting systems, equipment, or data.",
                weights: { "CYB": 5, "AVIO": 5, "ESIA": 4, "PROG": 4 }
            },
            {
                text: "Producing quality work others can see and use.",
                weights: { "COL": 5, "HEST": 5, "HVAC": 4, "MACH": 4, "WELD": 4, "MAR": 4 }
            },
            {
                text: "Caring for people or animals.",
                weights: { "MA": 5, "DENT": 4, "NA": 4, "PCT": 4, "VET": 4 }
            }
        ]
    },

    // ===========================================
    // QUESTION 7 - Work Rhythm
    // ===========================================
    {
        id: 7,
        text: "You're more energized by:",
        answers: [
            {
                text: "Predictable routines and clear expectations.",
                weights: { "ACC": 5, "PHARM": 4, "MAS": 4 }
            },
            {
                text: "New challenges that require problem-solving.",
                weights: { "CYB": 4, "CSIT": 4, "AVIO": 4, "EDMS": 4, "PROG": 4 }
            },
            {
                text: "Physical work with visible results.",
                weights: { "COL": 5, "HEST": 5, "HVAC": 4, "MAR": 4, "WELD": 4 }
            },
            {
                text: "Interacting with clients, patients, or customers.",
                weights: { "COS": 4, "FAC": 4, "MA": 4, "ECE": 4, "CUL": 5 }
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
                weights: { "ACC": 5, "PHARM": 4, "SURG": 5 }
            },
            {
                text: "I like work where I get to figure things out.",
                weights: { "CYB": 5, "AVIO": 5, "CSIT": 4, "ESIA": 4, "PROG": 5, "EDMS": 4 }
            },
            {
                text: "I like work where I can see progress quickly.",
                weights: { "COL": 5, "HEST": 5, "HVAC": 4, "MACH": 4, "WELD": 4, "MAR": 4 }
            },
            {
                text: "I like work where I feel helpful and needed.",
                weights: { "MA": 5, "NA": 4, "PCT": 4, "VET": 4 }
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
                text: "I don't mind learning specialized vocabulary.",
                weights: { "ACC": 4, "PHARM": 4, "PN": 4, "RN": 4 }
            },
            {
                text: "I learn terms best when I use them to solve problems.",
                weights: { "CYB": 4, "AVIO": 5, "CSIT": 4, "PROG": 4 }
            },
            {
                text: "I prefer learning terms while doing the work.",
                weights: { "COL": 4, "HEST": 4, "HVAC": 4, "MACH": 4 }
            },
            {
                text: "I learn best when terms connect to real people or outcomes.",
                weights: { "MA": 4, "DENT": 4, "ECE": 4, "VET": 4 }
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
                text: "Confirmation that everything was done correctly.",
                weights: { "ACC": 5, "PHARM": 4, "MAS": 4 }
            },
            {
                text: "Knowing I solved a complex issue.",
                weights: { "CYB": 4, "AVIO": 5, "CSIT": 4, "PROG": 5 }
            },
            {
                text: "Seeing improvement in skill or technique.",
                weights: { "COL": 5, "COS": 4, "FAC": 4, "MACH": 4, "WELD": 4, "CUL": 4, "DRAFT": 5, "DM": 4 }
            },
            {
                text: "Positive reactions from people I helped.",
                weights: { "MA": 5, "NA": 4, "PCT": 4, "VET": 4 }
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
                text: "Reviewing documents for accuracy.",
                weights: { "ACC": 5, "MAS": 4, "PHARM": 4 }
            },
            {
                text: "Diagnosing a system fault.",
                weights: { "CYB": 5, "AVIO": 5, "ESIA": 4, "EDMS": 4, "PROG": 3 }
            },
            {
                text: "Building, repairing, or creating something.",
                weights: { "COL": 5, "HEST": 5, "HVAC": 4, "WELD": 5, "MACH": 4, "CONST": 5, "MAST": 5, "DRAFT": 5, "DM": 3 }
            },
            {
                text: "Assisting in a clinical or service setting.",
                weights: { "MA": 5, "DENT": 4, "NA": 4, "PCT": 4, "VET": 4, "PHLEB": 5 }
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
                text: "Clear structure and expectations.",
                weights: { "ACC": 5, "PHARM": 4, "MAS": 4 }
            },
            {
                text: "The challenge of mastering something complex.",
                weights: { "CYB": 4, "AVIO": 5, "ESIA": 4, "PROG": 5 }
            },
            {
                text: "Hands-on practice and repetition.",
                weights: { "COL": 5, "HEST": 5, "HVAC": 4, "MACH": 4 }
            },
            {
                text: "Knowing my work makes a difference.",
                weights: { "MA": 5, "NA": 4, "PCT": 4, "PN": 5, "RN": 5 }
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
                text: "I appreciate clear rules and follow them closely.",
                weights: { "PHARM": 5, "SURG": 5, "RN": 5 }
            },
            {
                text: "I understand their importance in complex systems.",
                weights: { "AVIO": 5, "ESIA": 4, "CYB": 4, "AIRF": 5, "AIRP": 5, "PROG": 3 }
            },
            {
                text: "I follow them because they protect the work and equipment.",
                weights: { "COL": 4, "HEST": 4, "HVAC": 4, "WELD": 4 }
            },
            {
                text: "I follow them because they protect people or animals.",
                weights: { "MA": 4, "NA": 4, "VET": 4, "DENT": 4, "PHLEB": 4 }
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
                text: "Stability and long-term career security.",
                weights: { "ACC": 5, "MAS": 4, "PHARM": 4 }
            },
            {
                text: "Becoming the 'go-to' problem solver.",
                weights: { "CYB": 4, "AVIO": 5, "CSIT": 4, "PROG": 5 }
            },
            {
                text: "Pride in craftsmanship and skill.",
                weights: { "COL": 5, "COS": 4, "FAC": 4, "WELD": 5, "CUL": 5, "DRAFT": 5, "DM": 4 }
            },
            {
                text: "Making a meaningful impact on others.",
                weights: { "MA": 5, "NA": 4, "PCT": 4, "VET": 4 }
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
                text: "Keep things organized and accurate.",
                weights: { "ACC": 5, "PHARM": 4, "MAS": 4 }
            },
            {
                text: "Take on technical challenges.",
                weights: { "CYB": 5, "AVIO": 5, "ESIA": 4, "PROG": 4 }
            },
            {
                text: "Handle hands-on tasks.",
                weights: { "COL": 5, "HEST": 5, "HVAC": 4, "WELD": 4 }
            },
            {
                text: "Support people directly.",
                weights: { "MA": 5, "NA": 4, "ECE": 4, "VET": 4 }
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
                text: "Working through examples step by step.",
                weights: { "ACC": 5, "PHARM": 4, "SURG": 5 }
            },
            {
                text: "Solving realistic scenarios.",
                weights: { "CYB": 5, "AVIO": 5, "CSIT": 4, "PROG": 5 }
            },
            {
                text: "Practicing skills repeatedly.",
                weights: { "COL": 5, "HEST": 5, "HVAC": 4, "MACH": 4 }
            },
            {
                text: "Role-playing real-world situations.",
                weights: { "MA": 4, "ECE": 4, "COS": 4 }
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
                text: "Less important than accuracy.",
                weights: { "ACC": 5, "PHARM": 4 }
            },
            {
                text: "Useful when solving problems.",
                weights: { "CYB": 4, "ESIA": 4, "AVIO": 4, "PROG": 4 }
            },
            {
                text: "Very important to stay engaged.",
                weights: { "COS": 5, "FAC": 5, "DM": 5, "COL": 4, "WELD": 4, "CUL": 5, "DRAFT": 4 }
            },
            {
                text: "Important when working with people.",
                weights: { "MA": 4, "ECE": 5, "VET": 4 }
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
                text: "Structured and organized.",
                weights: { "ACC": 5, "PHARM": 4, "MAS": 4 }
            },
            {
                text: "Problem-focused and technical.",
                weights: { "CYB": 5, "AVIO": 5, "CSIT": 4, "PROG": 5 }
            },
            {
                text: "Active and hands-on.",
                weights: { "COL": 5, "HEST": 5, "HVAC": 4, "WELD": 4, "CONST": 5 }
            },
            {
                text: "Interactive and people-centered.",
                weights: { "MA": 5, "NA": 4, "PCT": 4, "VET": 4 }
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
                text: "Clear advancement through roles and certifications.",
                weights: { "ACC": 5, "PHARM": 4, "MAS": 4 }
            },
            {
                text: "Specializing in complex systems or technology.",
                weights: { "CYB": 5, "AVIO": 5, "ESIA": 4, "AIRF": 5, "AIRP": 5, "PROG": 4 }
            },
            {
                text: "Expanding technical skills and techniques.",
                weights: { "COL": 5, "HEST": 5, "HVAC": 4, "MACH": 4 }
            },
            {
                text: "Taking on more responsibility in care or service.",
                weights: { "MA": 5, "PN": 5, "RN": 5, "SURG": 4 }
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
                text: "Everything was done correctly.",
                weights: { "ACC": 5, "PHARM": 4, "MAS": 4 }
            },
            {
                text: "You solved a tough problem.",
                weights: { "CYB": 4, "AVIO": 5, "CSIT": 4, "PROG": 5 }
            },
            {
                text: "You created or repaired something well.",
                weights: { "COL": 5, "HEST": 5, "HVAC": 4, "WELD": 5, "MAST": 5, "DRAFT": 5 }
            },
            {
                text: "You helped someone meaningfully.",
                weights: { "MA": 5, "NA": 4, "PCT": 4, "VET": 4, "PHLEB": 4 }
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
