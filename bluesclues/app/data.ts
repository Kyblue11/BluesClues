interface Education {
  edu_name: string;
  edu_location: string;
  edu_period: string;
  edu_role: string;
  edu_desc?: string;
}

interface WorkExp {
  work_title: string;
  work_company_name: string;
  work_method: string;
  work_location: string;
  work_period: string;
  work_desc?: string;
}

export const EDUCATIONS: Education[] = [
  {
    edu_name: "Monash University",
    edu_location: "Subang Jaya, Selangor",
    edu_period: "Jul 2023 - Jun 2026",
    edu_role: "Bachelor of Computer Science",
    edu_desc:
      "Recipient of the Monash High Achiever Award for academic excellence. Pursuing a Bachelor of Computer Science (Advanced Specialisaton), with additional emphasis on software engineering and business analytics through elective coursework. Expected to graduate by Sep 2026.",
  },
  {
    edu_name: "Monash College",
    edu_location: "Subang Jaya, Selangor",
    edu_period: "Jul 2022 - Jun 2023",
    edu_role: "Monash University Foundation Year (MUFY)",
    edu_desc:
      "Recipient of the Monash High Achiever Award 2023 for attaining the highest grade across all Monash campuses in both Malaysia and Australia for the MUFY program units: ICT Unit 1, English Unit 1, and English Unit 2. Graduated with a 4.0 GPA and a Weighted Average Mark (WAM) of 98.25.",
  },
];

export const WORKEXPERIENCES: WorkExp[] = [
  {
    work_title: "Full Stack Developer", 
    work_company_name: "Anilabs", 
    work_method: "Contract, On-Site" ,
    work_location: "Subang Jaya Selangor",
    work_period: "Dec 2024 - Fec 2025",
    work_desc: "Part of a team that built Malaysia's first indie anime e-commerce platform to connect creators and fans. Developed key features like AI search and vendor community profiles using Next.js, Node.js, and Supabase, and deployed with Docker for scalability.",
  },
  {
    work_title: "FIT1051 Class Assistant - Tutor", 
    work_company_name: "Monash University Teaching Team", 
    work_method: "Contract, On-Site" ,
    work_location: "Subang Jaya, Selangor",
    work_period: "Mar 2025 - June 2025",
    work_desc: "Academic Mentoring (funded) Program targeting undergrad students enrolled in FIT1051 - Programming Fundamentals in Java. I facilitated students' mastery of Java's strict type system, promoting disciplined coding practices and effective problem-solving for real-world programming challenges. Earned the paid role through a competitive selection process, chosen from over 80+ candidates.",
  },
  {
    work_title: "FIT2014 Class Assistant - Tutor", 
    work_company_name: "Monash University Teaching Team", 
    work_method: "Contract, On-Site" ,
    work_location: "Subang Jaya, Selangor",
    work_period: "Jul 2025 - Oct 2025",
    work_desc: "Academic Mentoring (funded) Program targeting undergrad students enrolled in FIT2014 - Theory of Computation. This unit introduced computational languages and models such as finite state automata, Turing machines, P and NP-complete problems. Here, I assist the teaching team in tutorial sessions, as well as conduct online consultations, whilst help managing the Monash Forum for students.",
  },
  {
    work_title: "Partnership Distribution - Digital Transformation", 
    work_company_name: "AIA Malaysia", 
    work_method: "Internship, On-Site" ,
    work_location: "Federal Territory of Kuala Lumpur",
    work_period: "Nov 2025 - Dec 2025",
    work_desc: "Worked on designing and executing test plans, managing end-to-end testing for mobile and web applications, and ensuring quality through defect tracking and reporting.",
  },
  {
    work_title: "AIOps Software Engineer", 
    work_company_name: "Theodesis Sdn Bhd.", 
    work_method: "Internship, Hybrid" ,
    work_location: "Petaling Jaya, Selangor",
    work_period: "Jan 2025 - Feb 2025",
    work_desc: "Contributed to Telekom Malaysia NG999 project as Power Automate DevOps developer and ML data engineer intern. Developed automated workflows, integrated diverse data sources, deployed machine learning models in Vertica, and documented workflows to improve company efficiency and knowledge sharing.",
  },
//   {
//     work_title: "", 
//     work_company_name: "", 
//     work_method: "" ,
//     work_location: "",
//     work_period: "",
//     work_desc: "",
//   },  
];
