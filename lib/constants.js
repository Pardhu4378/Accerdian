// Site-wide constants and content data

export const SITE_CONFIG = {
  name: "Accredian",
  tagline: "Where Talent Becomes Transformation",
  description:
    "India's leading enterprise learning platform. Partner with IITs, IIMs, XLRI & SP Jain to upskill your workforce with programs that deliver measurable ROI.",
  url: "https://accredian.com",
  email: "support@accredian.com",
  phone: "+91 9657 58 5580",
  address: "4th Floor, Plot No. 250, Udyog Vihar, Phase IV, Gurugram, Haryana 122015",
  social: {
    linkedin: "https://www.linkedin.com/company/accredianedu/",
    twitter: "https://twitter.com/accredianedu",
    instagram: "https://www.instagram.com/accredian_edu",
    youtube: "https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA",
    facebook: "https://facebook.com/accredianlearn",
  },
};

export const NAV_LINKS = [
  {
    label: "Programs",
    href: "#solutions",
  },
  {
    label: "Edge",
    href: "#edge",
  },
  {
    label: "CAT Framework",
    href: "#cat-framework",
  },
  {
    label: "Journey",
    href: "#learning-journey",
  },
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export const METRICS = [
  {
    value: 10000,
    suffix: "+",
    label: "Professionals Trained",
    description: "Across leading Indian enterprises",
    icon: "Users",
  },
  {
    value: 60,
    suffix: "%",
    label: "Average Salary Hike",
    description: "Reported by program alumni",
    icon: "TrendingUp",
  },
  {
    value: 200,
    suffix: "+",
    label: "Sessions Delivered",
    description: "Live, interactive expert sessions",
    icon: "PlayCircle",
  },
  {
    value: 15,
    suffix: "+",
    label: "Academic Partners",
    description: "IITs, IIMs, XLRI & more",
    icon: "Building2",
  },
];

export const SOLUTIONS = [
  {
    id: "gen-ai",
    icon: "Sparkles",
    title: "Generative AI & ML",
    description:
      "Equip your teams with cutting-edge AI capabilities — from LLM fine-tuning to enterprise AI deployment at scale.",
    tags: ["LLM", "Prompt Engineering", "MLOps"],
    color: "blue",
  },
  {
    id: "leadership",
    icon: "Crown",
    title: "Leadership Elevation",
    description:
      "Transform high-potential managers into visionary leaders through curated IIM-backed executive programs.",
    tags: ["Executive MBA", "C-Suite", "Strategy"],
    color: "gold",
  },
  {
    id: "product",
    icon: "Layers",
    title: "Product & Innovation",
    description:
      "Build product thinking across your organisation with frameworks, case studies, and live mentorship from industry PMs.",
    tags: ["Product Strategy", "UX", "Agile"],
    color: "purple",
  },
  {
    id: "data",
    icon: "BarChart3",
    title: "Tech & Data Insights",
    description:
      "Turn raw data into competitive advantage — analytics, BI, Python, and advanced data engineering curricula.",
    tags: ["Data Science", "Analytics", "Python"],
    color: "teal",
  },
  {
    id: "fintech",
    icon: "Landmark",
    title: "Fintech Innovation",
    description:
      "Navigate the future of financial services with specialised programs in BFSI, digital banking, and regulatory tech.",
    tags: ["BFSI", "Digital Banking", "RegTech"],
    color: "green",
  },
  {
    id: "operations",
    icon: "Cog",
    title: "Operations Excellence",
    description:
      "Drive operational efficiency through Six Sigma, supply chain mastery, and process optimisation certifications.",
    tags: ["Six Sigma", "Supply Chain", "Process"],
    color: "orange",
  },
];

export const ACCREDIAN_EDGE = [
  {
    id: "faculty",
    size: "large",
    icon: "GraduationCap",
    title: "World-Class Faculty Network",
    description:
      "Learn directly from IIT & IIM professors, industry CXOs, and subject-matter experts — not just recorded lectures.",
    stat: "500+",
    statLabel: "Expert Instructors",
  },
  {
    id: "live",
    size: "small",
    icon: "Radio",
    title: "100% Live Classes",
    description: "Interactive sessions with real-time doubt clearing.",
    stat: "Live",
    statLabel: "Every Session",
  },
  {
    id: "career",
    size: "small",
    icon: "Rocket",
    title: "Career Acceleration",
    description: "Resume building, mock interviews, and placement support.",
    stat: "60%",
    statLabel: "Avg. Salary Hike",
  },
  {
    id: "roi",
    size: "small",
    icon: "LineChart",
    title: "ROI Dashboard",
    description: "Real-time performance tracking for HR and L&D leaders.",
    stat: "Real-time",
    statLabel: "Analytics",
  },
  {
    id: "security",
    size: "small",
    icon: "ShieldCheck",
    title: "Enterprise Security",
    description: "SSO, RBAC, and enterprise-grade data compliance built in.",
    stat: "SOC 2",
    statLabel: "Compliant",
  },
  {
    id: "lifetime",
    size: "large",
    icon: "Infinity",
    title: "Lifetime Learning Access",
    description:
      "Every certified learner retains perpetual access to course materials, updated curricula, and the alumni network — long after program completion.",
    stat: "∞",
    statLabel: "Access Duration",
  },
];

export const CAT_STEPS = [
  {
    step: "01",
    letter: "C",
    word: "Calibrate",
    title: "Skill Gap Analysis",
    description:
      "We conduct a thorough diagnostic of your team's current capabilities versus your business objectives — identifying the precise gaps that matter most.",
    icon: "ScanSearch",
    features: ["Team Assessment", "Competency Mapping", "Priority Scoring"],
  },
  {
    step: "02",
    letter: "A",
    word: "Accelerate",
    title: "Customised Training Plan",
    description:
      "Our curriculum architects design a bespoke learning journey — selecting the right programs, sequencing, cohort structure, and delivery format for your organisation.",
    icon: "Compass",
    features: ["Custom Curriculum", "Flexible Delivery", "Expert Faculty"],
  },
  {
    step: "03",
    letter: "T",
    word: "Transform",
    title: "Measurable Transformation",
    description:
      "Live cohort training begins, backed by real-time performance dashboards so L&D leaders can track ROI, engagement, and skill acquisition at every milestone.",
    icon: "Zap",
    features: ["Live Cohorts", "ROI Tracking", "Certification"],
  },
];

export const LEARNING_JOURNEY = [
  {
    phase: "Week 1–2",
    title: "Onboarding & Orientation",
    description:
      "Meet your cohort, get acquainted with the platform, set learning goals with your dedicated program advisor.",
    icon: "MapPin",
  },
  {
    phase: "Week 3–8",
    title: "Core Learning Modules",
    description:
      "Attend live sessions with IIT/IIM faculty, complete real-world assignments, and participate in peer discussions.",
    icon: "BookOpen",
  },
  {
    phase: "Week 9–14",
    title: "Applied Projects",
    description:
      "Apply concepts to industry-grade capstone projects reviewed by expert mentors and domain practitioners.",
    icon: "Beaker",
  },
  {
    phase: "Week 15–18",
    title: "Certification & Assessment",
    description:
      "Sit your final evaluations, receive your accredited certification from our partner institution.",
    icon: "Award",
  },
  {
    phase: "Ongoing",
    title: "Career & Alumni Support",
    description:
      "Lifetime access to the alumni network, career services, updated curriculum, and exclusive industry events.",
    icon: "Users",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Submit Your Enquiry",
    description:
      "Tell us about your organisation, team size, and skill development goals through our brief enquiry form.",
    icon: "ClipboardList",
  },
  {
    step: "02",
    title: "Needs Assessment Call",
    description:
      "Our enterprise learning consultants schedule a discovery call to deeply understand your workforce objectives.",
    icon: "Phone",
  },
  {
    step: "03",
    title: "Custom Program Design",
    description:
      "We craft a tailored learning pathway — selecting programs, faculty, and delivery formats that fit your timeline.",
    icon: "PenLine",
  },
  {
    step: "04",
    title: "Deploy & Track ROI",
    description:
      "Training begins across your cohorts. Monitor real-time performance, engagement, and business impact on our dashboard.",
    icon: "BarChart2",
  },
];

export const FAQS = [
  {
    question: "What types of organisations does Accredian work with?",
    answer:
      "Accredian serves organisations of all sizes — from high-growth startups to Fortune 500 enterprises. Our enterprise clients include technology firms, BFSI institutions, manufacturing conglomerates, and professional services companies across India and Southeast Asia.",
  },
  {
    question: "How are the programs delivered?",
    answer:
      "All programs are delivered 100% live online via our enterprise learning platform. Sessions are conducted by IIT/IIM faculty and industry experts, with interactive doubt-clearing built into every class. We also support on-site delivery for organisations with 50+ learners.",
  },
  {
    question: "Can programs be fully customised for our industry?",
    answer:
      "Absolutely. Our curriculum architects work with your L&D team to design a bespoke program — selecting relevant modules, case studies from your industry vertical, and tailoring the capstone project to your business context.",
  },
  {
    question: "What academic institutions are involved?",
    answer:
      "Accredian partners with premier Indian institutions including IIT Kanpur, IIT Jammu, IIM Lucknow, IIM Visakhapatnam, IIM Tiruchirappalli, IIM Ranchi, IIM Amritsar, XLRI, and SP Jain School of Global Management.",
  },
  {
    question: "Is there a minimum team size for enterprise programs?",
    answer:
      "We recommend a minimum cohort of 10 learners for our enterprise programs to ensure meaningful peer learning and group project experiences. However, we can accommodate smaller teams through our blended cohort model.",
  },
  {
    question: "How do you measure training ROI?",
    answer:
      "Our enterprise dashboard provides real-time visibility into learner engagement, assessment scores, skill acquisition milestones, and post-program performance indicators. We work with your HR team to map learning outcomes to business KPIs.",
  },
  {
    question: "What security and compliance standards do you meet?",
    answer:
      "Accredian's enterprise platform supports Single Sign-On (SSO) via SAML 2.0, Role-Based Access Control (RBAC), and data residency options. We comply with enterprise data protection standards and can execute custom DPAs.",
  },
  {
    question: "Do learners receive recognised certifications?",
    answer:
      "Yes. All program completers receive a certification from the respective partner institution (e.g., IIT Kanpur Certificate, IIM Executive Certificate). These are verifiable credentials recognised by top Indian and global employers.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    name: "Strategic HR & Talent Leader",
    role: "L&D Team Partner",
    company: "ADP",
    initials: "AD",
    rating: 5,
    program: "Workforce Upskilling Partner",
  },
  {
    quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    name: "Global L&D Director",
    role: "Capabilities Architect",
    company: "Bayer",
    initials: "BY",
    rating: 5,
    program: "Leadership Elevation Track",
  },
  {
    quote: "Accredian has been instrumental in upskilling our technology and analytics teams. The live interactive IIT/IIM cohorts and structured projects delivered measurable improvements in delivery performance.",
    name: "VP of Engineering",
    role: "Tech Innovation Partner",
    company: "Razorpay",
    initials: "RZ",
    rating: 5,
    program: "Data Science & AI Track",
  },
];

export const PARTNER_LOGOS = [
  {
    name: "IIT Kanpur",
    src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/logo/iit-kanpur-logo-round.webp",
  },
  {
    name: "IIM Lucknow",
    src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/logo/iiml-lucknow-logo-100x100.webp",
  },
  {
    name: "IIM Visakhapatnam",
    src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/iimv-logo-v5.png",
  },
  {
    name: "XLRI",
    src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/xlri-logo.jpg",
  },
  {
    name: "IIM Amritsar",
    src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/logo/iim-amritsar-round-logo.webp",
  },
  {
    name: "IIT Jammu",
    src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/iit-jammu-short-logo.webp",
  },
  {
    name: "IIM Ranchi",
    src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/logo/IIM-Ranchi-Logo.png",
  },
  {
    name: "SP Jain",
    src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/logo/soj-brochure-logo.webp",
  },
];

export const TRUSTED_BY_COMPANIES = [
  "Tata Consultancy Services",
  "Infosys",
  "Wipro",
  "HCL Technologies",
  "Razorpay",
  "PhonePe",
  "Paytm",
  "Flipkart",
  "Swiggy",
  "Zomato",
  "Ola",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Mahindra",
];

export const FOOTER_LINKS = {
  programs: [
    { label: "Data Science & AI", href: "#" },
    { label: "Product Management", href: "#" },
    { label: "Leadership & Management", href: "#" },
    { label: "Generative AI", href: "#" },
    { label: "Fintech Innovation", href: "#" },
    { label: "Operations Excellence", href: "#" },
  ],
  company: [
    { label: "About Accredian", href: "#" },
    { label: "Why Accredian", href: "#" },
    { label: "Blog", href: "https://blog.accredian.com", external: true },
    { label: "Success Stories", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
  enterprise: [
    { label: "Enterprise Learning", href: "#" },
    { label: "CAT Framework", href: "#cat-framework" },
    { label: "ROI Dashboard", href: "#" },
    { label: "Refer & Earn", href: "#" },
    { label: "Become a Trainer", href: "#" },
    { label: "Partner with Us", href: "#" },
  ],
};
