export interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    period: string;
    description?: string;
    achievements?: string[];
    type: "work" | "education";
    active?: boolean;
    logo: string;
}

export const experienceData: ExperienceItem[] = [
    {
        id: "cv-research",
        role: "Research Intern — Deep Learning & Computer Vision",
        company: "Center for Cyber-Physical Systems (CCPS), VIT",
        period: "May 2026 - Present",
        type: "work",
        description:
            "Designing multi-branch deep learning architectures for fine-grained agricultural disease classification and visual interpretability.",
        achievements: [
            "Achieved 86% classification accuracy and 80% macro F1-score by designing a multi-branch PyTorch architecture integrating spatial, contextual, interaction-aware, and wavelet-based feature learning on PlantDoc",
            "Achieved up to 99% accuracy and 98% F1-score on specific categories with custom attention-based feature extraction and cross-attention fusion",
            "Improved classification robustness through species-aware hierarchical classification and spectral encoding modules",
            "Validated model behavior using Grad-CAM, LIME, and SHAP to ensure model interpretability and cross-validation reliability",
        ],
        active: true,
        logo: "/experience/vit.png",
    },
    {
        id: "microsoft-aicte",
        role: "Power BI Data Analytics Intern",
        company: "Microsoft Elevate & AICTE",
        period: "Feb 2026 - Mar 2026",
        type: "work",
        description:
            "Automated operational reporting, SLA monitoring, and data quality assurance across 15,000+ records.",
        achievements: [
            "Achieved 28% faster reporting by developing automated Power BI dashboards and KPI workflows for SLA monitoring",
            "Achieved 99% reporting accuracy across 15,000+ records with SQL validation workflows and star-schema models",
            "Optimized SQL queries and automated reporting workflows translating business requirements into analytical dashboards",
        ],
        active: false,
        logo: "/experience/aicte.png",
    },
    {
        id: "quantium-forage",
        role: "Data Analytics & Commercial Insights Simulation",
        company: "Quantium (Forage)",
        period: "Jan 2026",
        type: "work",
        description:
            "Customer segmentation, purchasing behavior analysis, and commercial data modeling for category management.",
        achievements: [
            "Completed commercial insights simulation by executing customer segmentation and purchasing behavior analysis",
            "Conducted statistical experimentation and commercial analytics to develop executive recommendations for category management",
        ],
        active: false,
        logo: "/experience/quantium.svg",
    },
    {
        id: "deloitte-forage",
        role: "Data Analytics Job Simulation",
        company: "Deloitte Australia (Forage)",
        period: "Oct 2025",
        type: "work",
        description:
            "Data preparation, visualization, and executive reporting for strategic decision support.",
        achievements: [
            "Executed data cleaning, transformation, and business reporting on complex tabular datasets",
            "Delivered structured dashboards providing clarity on operational metrics and executive decision-making",
        ],
        active: false,
        logo: "/experience/deloitte.svg",
    },
    {
        id: "bcg-forage",
        role: "Data Science Advanced Simulation",
        company: "BCG (Boston Consulting Group — Forage)",
        period: "Jan 2026",
        type: "work",
        description:
            "Exploratory data analysis and predictive churn modeling using Python and SQL to identify customer retention patterns.",
        achievements: [
            "Performed exploratory data analysis (EDA) and built predictive churn models using Python and SQL-driven workflows",
            "Identified customer behavior patterns and key operational factors associated with customer churn",
            "Translated analytical and machine learning findings into actionable commercial retention recommendations",
        ],
        active: false,
        logo: "/experience/bcg.svg",
    },
    {
        id: "vit",
        role: "Bachelor of Technology in Computer Science & Engineering",
        company: "VIT University",
        period: "2023 - 2027",
        type: "education",
        description: "CGPA: 8.4 · Rigorous foundations in Deep Learning, Computer Vision, Reinforcement Learning, and Data Science",
        active: true,
        logo: "/experience/vit.png",
    },
];
