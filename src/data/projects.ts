export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    link?: string;
    github?: string;
    tags?: string[];
    techStack?: string[];
    problem?: string;
    outcome?: string;
}

export const projectsData: Project[] = [
    {
        id: "acsrag",
        title: "Adaptive Corrective Self-RAG (ACSRAG)",
        description:
            "A high-precision Corrective RAG pipeline engineering adaptive query rewriting, web-search fallbacks, and claim-evidence verification.",
        image: "/images/projects/acsrag.png",
        link: "https://adaptive-corrective-self-rag.onrender.com/",
        github: "https://github.com/LakshyaJain08/Adaptive_Corrective_Self_Rag",
        tags: ["Agentic AI", "LangGraph", "Reranker", "RAG", "Vector Search", "LLMs"],
        techStack: ["LangGraph", "LangChain", "Cross-Encoder Reranker", "BM25", "Vector DB", "FastAPI"],
        problem:
            "Standard RAG models suffer from hallucination and severe context degradation on ambiguous user prompts.",
        outcome:
            "Improved answer correctness by 32%, boosted retrieval relevance by 41% (RRF), and reduced hallucinations by 54%.",
    },
    {
        id: "plantdoc-cv",
        title: "Multi-Branch PlantDoc CV Classifier",
        description:
            "Deep learning perception architecture integrating spatial, contextual, interaction-aware, and wavelet-based feature extraction.",
        image: "/images/projects/plantdoc-cv.jpg",
        link: "#projects",
        github: "https://github.com",
        tags: ["Computer Vision", "Deep Learning", "PyTorch", "XAI"],
        techStack: ["PyTorch", "Torchvision", "Grad-CAM", "SHAP", "OpenCV"],
        problem:
            "Fine-grained confusion between visually similar agricultural diseases under uncontrolled field lighting.",
        outcome:
            "Achieved 86% classification accuracy, 80% macro F1-score, and up to 99% accuracy on targeted disease categories.",
    },
    {
        id: "walmart-forecasting",
        title: "Walmart Sales Forecasting & Demand Analytics",
        description:
            "End-to-end time-series forecasting pipeline using LightGBM, Optuna tuning, and SARIMA modeling across 5 retail stores.",
        image: "/images/projects/walmart-forecasting.png",
        link: "https://github.com/LakshyaJain08/Walmart-Sales-Forecasting",
        github: "https://github.com/LakshyaJain08/Walmart-Sales-Forecasting",
        tags: [
            "Data Analytics",
            "Time-Series",
            "Predictive Analytics",
            "Exploratory Data Analysis (EDA)",
            "Demand Forecasting",
            "Statistical Modeling",
        ],
        techStack: ["LightGBM", "Optuna", "SARIMA", "Python", "Pandas", "Statistical Analysis"],
        problem:
            "Fluctuating multi-store retail demand and complex seasonal variations caused inventory forecasting errors.",
        outcome:
            "Achieved 69% baseline accuracy, optimized hyperparameter tuning with Optuna, and modeled seasonal demand dynamics.",
    },
    {
        id: "healthflow",
        title: "HealthFlow — Clinical AI & Predictive Healthcare Platform",
        description:
            "Clinical data science platform featuring supervised appointment no-show prediction (GBM/RF), NLP symptom triage with urgency scoring, and 30-day departmental demand forecasting.",
        image: "/images/projects/healthflow.png",
        link: "https://github.com/LakshyaJain08/healthflow",
        github: "https://github.com/LakshyaJain08/healthflow",
        tags: ["Data Science", "Healthcare AI", "Predictive Analytics", "NLP"],
        techStack: ["Python", "FastAPI", "Scikit-Learn", "Gradient Boosting", "NLP (TF-IDF)", "Pandas"],
        problem:
            "Unpredictable patient no-show rates (~20-30%) and uncalibrated manual triage cause severe physician downtime, operational revenue loss, and emergency misallocations.",
        outcome:
            "Built end-to-end ML pipeline with 88.4% ROC-AUC on no-show classification, automated symptom-to-specialty triage, and 30-day multi-horizon capacity planning.",
    },
    {
        id: "powerbi-analytics",
        title: "Operational SLA Analytics (Microsoft & AICTE)",
        description:
            "Automated Power BI operational dashboard and SQL validation pipeline tracking SLAs across 15,000+ enterprise records.",
        image: "/images/projects/powerbi-analytics.png",
        link: "https://drive.google.com/file/d/11yZk5lD0SHsFQ260MPCJSfbvxJj3rPMm/view?usp=sharing",
        github: "https://github.com/LakshyaJain08/TAT_Analytics_Power_BI_Report",
        tags: ["Business Intelligence", "Power BI", "Data Modeling", "SQL"],
        techStack: ["Power BI", "SQL", "Star-Schema", "Data Validation", "DAX"],
        problem:
            "Manual data compilation caused compliance reporting delays and data discrepancy risks.",
        outcome:
            "Accelerated reporting turnaround by 28% and achieved 99% reporting accuracy with star-schema data models.",
    },
    {
        id: "retail-marketing-analysis",
        title: "Retail & Marketing Analytics (Customer Segmentation & CLV)",
        description:
            "Strategic business analytics system uncovering customer lifecycle behavior through RFM segmentation, K-Means clustering, cohort retention analysis, and CLV/CAC modeling across $1.07M revenue.",
        image: "/images/projects/retail-marketing-analysis.png",
        link: "https://drive.google.com/drive/folders/1v5TSnQS5tQ2G4zreIGke3NFn3TTi54Ie?usp=sharing",
        github: "https://github.com/LakshyaJain08/Retail-and-Marketing-Analysis",
        tags: [
            "Business Analysis",
            "Customer Segmentation",
            "RFM Analysis",
            "Cohort Analysis",
            "Customer Lifetime Value (CLV)",
            "Business Intelligence",
        ],
        techStack: ["Python", "Pandas", "Scikit-Learn", "K-Means", "PCA", "Seaborn", "Plotly", "EDA"],
        problem:
            "Unsegmented retail sales data obscured high-value customer drivers, leaving at-risk customer churn unmonitored and marketing budget unoptimized.",
        outcome:
            "Segmented 1,986 customers into actionable tiers (VIP cohort driving 66.2% of revenue), analyzed 89.1% retention rate, and established a 150.4x CLV/CAC acquisition efficiency ratio.",
    },
    {
        id: "traffic-marl",
        title: "Multi-Objective Traffic Optimization (MARL)",
        description:
            "Multi-Agent Reinforcement Learning framework with PPO across a 4-intersection SUMO network for proactive congestion control.",
        image: "/images/projects/rubiks-cube.png",
        link: "https://docs.google.com/document/d/1qNZ9KOKzdBHoVyo6pPsM9O8ESiVuN3nX/edit?usp=sharing&ouid=118415578802050278811&rtpof=true&sd=true",
        github: "https://github.com/LakshyaJain08/traffic_light_optimization_using_MARL",
        tags: ["Reinforcement Learning", "MARL", "PPO", "SUMO"],
        techStack: ["RLlib", "PyTorch", "SUMO", "TraCI", "ARIMA"],
        problem:
            "Fixed-time signals fail to adapt dynamically, escalating carbon emissions and vehicular delay.",
        outcome:
            "Achieved 93.1% reduction in waiting time, 22.5% reduction in CO2 emissions, and 22.5% reduction in fuel consumption.",
    },
];
