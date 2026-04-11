import { Experience, PersonalInfo, SkillCategory } from './types';

export const PROFILE_IMAGE = (`/public/profile.jpg`);

export const PERSONAL_INFO: PersonalInfo = {
  name: "Gaurav Bhole",
  title: "Data Center Engineer",
  email: "gaurav.bhole8@outlook.com",
  phone: "+91 8446419217",
  address: "Pune, Mumbai India",
  objective: "Hey, My Name Is Gaurav Bhole, I’m on a journey to find something different in my business, and my work, I think all the knowledge, all the skill are not enough with me, trying to improve my ability is my first goal, and I am living for it, I am glad you found me",
  languages: ["English", "Hindi", "Marathi", "Gujarati"],
  education: [
    {
      degree: "Diploma in Electronics & Telecommunications",
      institution: "Institute of Management and Engineering",
      year: "2015 – 2018"
    },
    {
      degree: "Industrial Training Institute in Electronics",
      institution: "Jalgaon",
      year: "2013 – 2015"
    }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: "wipro",
    role: "Data Center Engineer",
    company: "Wipro PVT LTD",
    period: "Jan-2024 TO May-2026",
    location: "Mundra, Gujarat",
    responsibilities: [
      "Manage all Hardware Equipments (Servers, Desktop, Laptops, IP Phones)",
      "VMware Installation, ESXI Configuration",
      "Temperature Maintain",
      "Enclosure & Blade server Configuration",
      "Storage Replacement Activity",
      "Active Directory Handling. For user management. (Azure AD/Entra IDs)",
      "Asset Updating",
      "Server Management, & Monitoring",
      "Application Support working properly servers",
      "iLO, idrac, esxi console, management",
      "VDI & VPN connectivity",
      "RSA Problem Resolving, Proper RCA Cover from the vendor side",
      "Operating Service Now Ticketing tool (Handling to all asset CMDB Data Equipment)",
      "Oracle Linux Activity Handling & Troubleshooting call catchup, (OVS)",
      "As par the Client requirements SLA tickets handling all subjected. In assign concern team",
      "Provide to proper solution on critical task as per required client raised MIMPs. On critical tasks"
    ]
  },
  {
    id: "euronet",
    role: "Data Center Operator",
    company: "Euronet Worldwide",
    period: "Feb-2022 TO Dec-2023",
    location: "Crtls Data Center",
    responsibilities: [
      "Daily, Weekly, Monthly Backup Tape Drives",
      "Windows Server Installing & Server Mounting",
      "Hyper -v Installing, VMware Configuration",
      "IP Configuration, LAN To LAN Connectivity, Wireless Network Connectivity",
      "Server Rack Installation, Server Rack Network Configuration",
      "Network Attached Storage Configuration Replacement of parts",
      "Desktop Remote for daily monitoring and backup scheduling",
      "Replacement on the critical part. (PCI, SMPS, Core Cables)"
    ]
  },
  {
    id: "biddano",
    role: "Application Support Engineer",
    company: "Biddano LTD",
    period: "Apr-2022 TO Nov-2022",
    location: "Pune (We work – Futura)",
    responsibilities: [
      "App Issue Resolved (Like App OTP Send Fail, Point Not Start Not End, Duty Not On Off)"
    ]
  },
  {
    id: "arya",
    role: "Project Engineer",
    company: "Arya Omni talk Wireless Solution",
    period: "Oct-2018 TO Sep 2021",
    location: "Jamnagar – L & T IDPL (RVTL Project, Gujarat), Pandutala (NHAI Project), Nagpur (Oriental - KKBP Project)",
    responsibilities: [
      "CCTV Camera Installation, Configuration, NVR-DVR Setup Fixing",
      "Network Rack Installation, Configuration Dual Network",
      "Client Support 24*7 Provide Services",
      "Windows Installation WIN07, WIN10",
      "Windows Server Installation & Configure",
      "IP Configuration, LAN To LAN Connectivity, Wireless Network Connectivity",
      "VMS Testing, Highway Toll Management System Maintenance Activity, Toll System Installation",
      "Server Rack Installation, Server Rack Network Configuration",
      "Network Attached Storage Configuration (NAS), Autoloader Configuration & Installation",
      "Manage Shift Schedule Site Engineers, Material Movement Management",
      "Networking & Hardware Support, Immediately Cached All Network, Switch, Servers Problems",
      "Patch Panel Installation (IO Puch testing)",
      "DHCP-DNS Configuration",
      "Multiple Operating System Installation, VirtualBox, VM-Ware Configuration"
    ]
  },
  
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Data Center Infra",
    items: [
      "Data Center Infrastructure Development",
      "Server Rack Installation",
      "CCTV/NVR/DVR Setup",
      "Tape Drives Backup",
      "Temperature Mgmt",
      "HTMS Toll Operations"
    ]
  },
  {
    category: "Operating Systems",
    items: [
      "Windows Server (2008, 2012, 2016, 2019)",
      "Red Hat Enterprise Linux",
      "Kali Linux (2017.3, 2022.3)",
      "Ubuntu Linux (18.04, 22.04)",
      "Mint Linux",
      "Parrot Linux",
      "Windows 7/10"
    ]
  },
  {
    category: "Virtualization",
    items: [
      "VMware ESXi",
      "Hyper-V",
      "vCenter",
      "vSan",
      "VirtualBox",
      "Azure AD/Entra IDs"
    ]
  },
  {
    category: "Networking",
    items: [
      "IP Configuration",
      "LAN to LAN Connectivity",
      "Wireless Network Config",
      "DHCP-DNS Configuration",
      "Switch Configuration",
      "Patch Panel (IO Punch)"
    ]
  },
  {
    category: "Software & Tools",
    items: [
      "Office 365, 2019, 2021",
      "Service Now (Ticketing)",
      "iLO / iDRAC / ESXi Console",
      "Software Databases Knowledge",
      "Linux Programming"
    ]
  }
];

export const SYSTEM_INSTRUCTION = `You are an AI assistant representing Gaurav Bhole. 
You are to answer questions from a recruiter or potential employer's perspective based STRICTLY on Gaurav's resume data.

My Details:
Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.title}
Phone: ${PERSONAL_INFO.phone}
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.address}
Objective: ${PERSONAL_INFO.objective}

Experience:
${EXPERIENCES.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.responsibilities.join(', ')}`).join('\n')}

Skills:
${SKILLS.map(s => `- ${s.category}: ${s.items.join(', ')}`).join('\n')}

Education:
${PERSONAL_INFO.education.map(e => `- ${e.degree} at ${e.institution} (${e.year})`).join('\n')}

Guidelines:
- Be professional, polite, and concise.
- Use "I" and "my" when referring to experience (act as Gaurav).
- If asked about something not in the resume, politely state that you don't have that specific information in the context but emphasize related skills if applicable.
- Emphasize the "Data Center" and "System Administration" expertise.
- Do not make up facts.
`;