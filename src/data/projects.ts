export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
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
        image: "/images/projects/giftbound.png",
        link: "#projects",
        github: "https://github.com",
        tags: ["Agentic AI", "LLMs", "RAG", "Vector Search"],
        techStack: ["LangChain", "Vector DB", "BM25", "Cross-Encoder", "FastAPI"],
        problem:
            "Standard RAG models suffer from hallucination and severe context degradation on ambiguous user prompts.",
        outcome:
            "Improved answer correctness by 32%, boosted retrieval relevance by 41% (RRF), and reduced hallucinations by 54%.",
    },
    {
        id: "traffic-marl",
        title: "Multi-Objective Traffic Optimization (MARL)",
        description:
            "Multi-Agent Reinforcement Learning framework with PPO across a 4-intersection SUMO network for proactive congestion control.",
        image: "/images/projects/rubiks-cube.png",
        link: "#projects",
        github: "https://github.com",
        tags: ["Reinforcement Learning", "MARL", "PPO", "SUMO"],
        techStack: ["RLlib", "PyTorch", "SUMO", "TraCI", "ARIMA"],
        problem:
            "Fixed-time signals fail to adapt dynamically, escalating carbon emissions and vehicular delay.",
        outcome:
            "Achieved 93.1% reduction in waiting time, 22.5% reduction in CO2 emissions, and 22.5% reduction in fuel consumption.",
    },
    {
        id: "plantdoc-cv",
        title: "Multi-Branch PlantDoc CV Classifier",
        description:
            "Deep learning perception architecture integrating spatial, contextual, interaction-aware, and wavelet-based feature extraction.",
        image: "/images/projects/wifi-card.png",
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
        image: "/images/projects/claw-machine.png",
        link: "#projects",
        github: "https://github.com",
        tags: ["Time-Series", "Predictive Analytics", "Machine Learning", "Forecasting"],
        techStack: ["LightGBM", "Optuna", "SARIMA", "Python", "Pandas"],
        problem:
            "Fluctuating multi-store retail demand and complex seasonal variations caused inventory forecasting errors.",
        outcome:
            "Achieved 69% baseline accuracy, optimized hyperparameter tuning with Optuna, and modeled seasonal demand dynamics.",
    },
    {
        id: "recsys",
        title: "Personalized Hybrid Recommendation System",
        description:
            "Personalized ranking engine combining collaborative filtering, content-based filtering, and matrix factorization.",
        image: "/images/projects/giftbound.png",
        link: "#projects",
        github: "https://github.com",
        tags: ["Machine Learning", "Recommendation Systems", "Personalization"],
        techStack: ["Python", "Scikit-learn", "Matrix Factorization", "Precision@K", "RMSE"],
        problem:
            "Cold-start latency and sparse user-item interaction matrices degraded personalized discovery.",
        outcome:
            "Boosted recommendation precision by 24%, reduced prediction error by 18%, and enhanced diversity by 22%.",
    },
    {
        id: "powerbi-analytics",
        title: "Operational SLA Analytics (Microsoft & AICTE)",
        description:
            "Automated Power BI operational dashboard and SQL validation pipeline tracking SLAs across 15,000+ enterprise records.",
        image: "/images/projects/hug-bunny.png",
        link: "#projects",
        github: "https://github.com",
        tags: ["Business Intelligence", "Power BI", "Data Modeling", "SQL"],
        techStack: ["Power BI", "SQL", "Star-Schema", "Data Validation", "DAX"],
        problem:
            "Manual data compilation caused compliance reporting delays and data discrepancy risks.",
        outcome:
            "Accelerated reporting turnaround by 28% and achieved 99% reporting accuracy with star-schema data models.",
    },
];
