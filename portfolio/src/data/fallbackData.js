const fallbackData = {
  hero: {
    name: "Afroza Riju",
    title: "Product Designer",
    subtitle: "UI/UX Designer & UX Researcher",
    welcomeText: "Hello, Welcome to my Portfolio!",
    linkedin: "pass",
    github: "#",
    behance: "pass",
    website: "pass",
    image: "/images/me.jpg",
  },

  about: {
    name: "Afroza Riju",
    role: "Product Designer",
    experience: "pass",
    address: "Block-A, Lalmatia, Dhaka, 1205",
    email: "afrozariju@gmail.com",
    phone: "+8801770564270",
    description:
      "Product designer with experience in UX research, interaction design, usability testing, and modern design systems. Skilled in Figma and research-based design, with the ability to turn user needs into easy-to-use, scalable digital interfaces.",

    details: [
      { label: "Profile", value: "Product Designer & UI/UX Designer" },
      { label: "Domain", value: "UX Research, UI Design, Product Design, Interaction Design" },
      { label: "Current Role", value: "UI/UX Designer Trainee at Mediusware Ltd." },
      { label: "Expertise", value: "User Research, Wireframing, Prototyping, Usability Testing, Design Systems" },
      { label: "Tools", value: "Figma, FigJam, Adobe XD, Photoshop, Illustrator" },
    ],

    stats: [
      { label: "Projects", value: "4+" },
      { label: "Research", value: "2" },
      { label: "Programs", value: "20+" },
      { label: "Events", value: "300+ Participants" },
    ],
  },

  skills: [
    { name: "UX Research & Foundations", percentage: 90 },
    { name: "User Interviews, Personas & Journey Mapping", percentage: 88 },
    { name: "Usability Testing & Heuristic Evaluation", percentage: 88 },
    { name: "Design Systems", percentage: 85 },
    { name: "Wireframes & High-Fidelity UI", percentage: 90 },
    { name: "Figma, FigJam, Adobe XD", percentage: 90 },
  ],

  education: [
    {
      date: "Running",
      title: "BSc in Computer Science & Engineering",
      institute: "Green University of Bangladesh",
      grade: "CGPA: 3.00",
    },
    {
      date: "2019",
      title: "HSC (Science)",
      institute: "Pabna Govt. Women's College",
      grade: "GPA: 4.25",
    },
    {
      date: "2017",
      title: "SSC (Science)",
      institute: "MKM High School",
      grade: "GPA: 5.00",
    },
  ],

  research: [
    {
      title: "Bias Detection and Fairness Optimization in NLP-Based Language Assessment Systems",
      institute: "International Journal of Business & Computational Science",
      year: "2025",
      description:
        "Published research on bias mitigation and fairness in AI-driven assessment systems. Analyzed NLP models to identify bias and proposed optimization techniques to improve fairness and reliability.",
      link: "pass",
    },
    {
      title: "Explanation Design for AI Agents: A Human-Centered Evaluation",
      institute: "Green University of Bangladesh",
      year: "Ongoing Thesis",
      supervisor: "Dr. Md. Mostafijur Rahman",
      description:
        "Ongoing thesis focused on designing explainable AI interfaces for user trust and transparency, using UX research methods to connect AI behavior with user understanding.",
      link: "pass",
    },
  ],

  experience: [
    {
      id: 1,
      year: "November 2025",
      title: "UI/UX Designer Trainee",
      company: "Mediusware Ltd.",
      type: "Trainee",
      image: "/images/experience/medi.png",
      responsibilities: [
        "Conducted UX research and usability testing to identify problems and improve user experience.",
        "Created wireframes and high-fidelity interfaces aligned with product and business goals.",
        "Collaborated with developers to ensure proper design system implementation.",
      ],
      achievements: ["pass"],
    },
    {
      id: 2,
      year: "Oct 2024 - Dec 2024",
      title: "UI/UX Designer Intern",
      company: "Mediusware Ltd.",
      type: "Internship",
      image: "/images/experience/medi.png",
      responsibilities: [
        "Carried out basic user research and converted requirements into wireframes and UI designs.",
        "Created wireframes, UI screens, and prototypes using Figma.",
        "Completed deadlines while developing teamwork, communication, and time management skills.",
      ],
      achievements: ["pass"],
    },
    {
      id: 3,
      year: "Dec 2020 - Nov 2022",
      title: "Junior Executive",
      company: "Dhaka Cast Ltd.",
      type: "UI/UX & Operations",
      image: "/images/experience/dhaka-cast.jpg",
      responsibilities: [
        "Worked on telehealth UI design and UX improvements.",
        "Supported content, marketing visuals, and patient onboarding.",
        "Collaborated cross-functionally with Tech and Operations teams.",
        "Organized World Diabetes Day programs in 2021 and 2022 with 300+ participants.",
      ],
      achievements: [
        "Managed logistics, teams, and event execution for large-scale health awareness programs.",
      ],
    },
  ],

projects: [
  {
    id: 1,
    featured: true,
    title: "Shwapno - Making Daily Super Shop Effortless",
    slug: "shwapno-daily-super-shop",
    category: "UX/UI Design",
    tag: "UX Research",
    description:
      "A digital product design project focused on improving daily super shop experience.",
    excerpt:
      "Designed a user-friendly super shop experience with better product browsing, smoother checkout, and research-backed UX decisions.",
    tools: "Figma, UX Research, Wireframing, Prototyping",
    image: "/images/projects/project1.png",
    link: "pass",
  },
  {
    id: 2,
    featured: true,
    title: "AeroAssist - Airport Help & Assistance App",
    slug: "aeroassist-airport-help-app",
    category: "Mobile App Design",
    tag: "App Design",
    description:
      "Airport assistance app designed to help users navigate airport services more easily.",
    excerpt:
      "Created a mobile app concept to help travelers find airport assistance, service information, and support more easily.",
    tools: "Figma, UX Research, UI Design, Prototyping",
    image: "/images/projects/project2.png",
    link: "pass",
  },
  {
    id: 3,
    featured: true,
    title: "Frozena - Real Estate App & Website",
    slug: "frozena-real-estate-app-website",
    category: "App & Website Design",
    tag: "Responsive Design",
    description:
      "Real estate platform design for browsing properties and improving user decision-making.",
    excerpt:
      "Designed a responsive real estate platform for property browsing, filtering, and easier decision-making across app and website.",
    tools: "Figma, Design System, Responsive Design",
    image: "/images/projects/project3.png",
    link: "pass",
  },
  {
    id: 4,
    featured: true,
    title: "Wallet - Finance & Money Transfer App",
    slug: "wallet-finance-money-transfer-app",
    category: "FinTech App Design",
    tag: "FinTech",
    description:
      "Finance and money transfer app focused on simple, clear, and accessible user flows.",
    excerpt:
      "Designed a clean FinTech app experience for money transfer, wallet management, and simple financial user flows.",
    tools: "Figma, UX Research, UI Design",
    image: "/images/projects/project4.png",
    link: "pass",
  },
],

  achievements: [
    {
      title: "Selected Participant, Huawei ICT Startup Competition",
      organization: "Huawei",
      year: "2022",
      image: "/images/achievements/award1.jpg",
      description:
        "Selected participant and featured in press interview and Huawei official platforms.",
      type: "Competition",
    },
    {
      title: "Completed Simcubator Bootcamp",
      organization: "SELISE & Simcubator Bangladesh",
      year: "2022",
      image: "/images/achievements/award2.jpg",
      description: "Completed startup-focused bootcamp by SELISE and Simcubator Bangladesh.",
      type: "Bootcamp",
    },
    {
      title: "Global Hackathon Participation",
      organization: "Devpost",
      year: "pass",
      image: "/images/achievements/award3.jpg",
      description:
        "Participated in global hackathons and collaborated on product solutions.",
      type: "Hackathon",
    },
  ],

  activities: [
    {
      title: "Joint Secretary",
      organization: "Debating Club, Green University of Bangladesh",
      description: "Leadership role in university debating club.",
    },
    {
      title: "Startup & Innovation Programs",
      organization: "GPA Demo Day, Startup Bangladesh, Grameenphone",
      description: "Participated in 20+ startup and innovation programs.",
    },
  ],

  certifications: [
    {
      title: "Figma Design System",
      organization: "Grameenphone Academy",
      year: "pass",
    },
    {
      title: "Mastering SDLC",
      organization: "Tlece Bangladesh Ltd.",
      year: "pass",
    },
  ],

  training: [
    {
      title: "Business Development, Accounts & Bookkeeping, Financial Access, Online Marketing",
      organization: "PSL",
      year: "pass",
    },
    {
      title: "Entrepreneurship & Business Development Training",
      organization: "IDEA Project, ICT Division, Bangladesh Computer Council",
      year: "pass",
    },
  ],

  softSkills: [
    "User-Centered Thinking",
    "Problem Solving",
    "Critical Thinking",
    "Collaboration & Cross-functional Communication",
    "Empathy & User Advocacy",
    "Attention to Detail",
    "Adaptability & Continuous Learning",
    "Time Management & Prioritization",
  ],

  gallery: [
    { id: 1, image: "/images/gallery/gallery-1.jpg", alt: "Portfolio work sample" },
    { id: 2, image: "/images/gallery/gallery-2.jpg", alt: "Design project preview" },
    { id: 3, image: "/images/gallery/gallery-3.jpg", alt: "Research or event participation" },
    { id: 4, image: "/images/gallery/gallery-4.jpg", alt: "Achievement moment" },
    { id: 5, image: "/images/gallery/gallery-5.jpg", alt: "Professional activity" },
    { id: 6, image: "/images/gallery/gallery-6.jpg", alt: "Professional activity" },
  ],

  blogs: [
    {
      id: 1,
      title: "pass",
      slug: "pass",
      category: "pass",
      tag: "pass",
      image: "/images/blogs/blog-1.jpeg",
      excerpt: "pass",
      featured: true,
      date: "pass",
    },
  ],

  references: [
    {
      name: "Dr. Md. Mostafijur Rahman",
      designation: "Associate Professor",
      organization: "Department of CSE, Green University of Bangladesh",
      phone: "+8801783529447",
      email: "chairman@swe.green.edu.bd",
      relation: "Academic Supervisor",
    },
    {
      name: "Dr. Fahreen Hannan",
      designation: "Lead International Partnership",
      organization: "Grameen HealthTech Ltd.",
      phone: "+8801749615193",
      email: "fahreen.hannan@ghl.com",
      relation: "Professional Supervisor",
    },
  ],

  contact: {
    address: "Block-A, Lalmatia, Dhaka, 1205",
    phone: "+8801770564270",
    email: "afrozariju@gmail.com",
    resume: "pass",
  },
};

export default fallbackData;