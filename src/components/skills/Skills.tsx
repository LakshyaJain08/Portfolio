"use client";

import {motion} from "framer-motion";
import Section from "@/components/ui/Section";
import {
    Brain,
    Cpu,
    Globe,
    Award,
    Sparkles,
    CheckCircle2,
    ShieldCheck,
    LineChart,
    Server
} from "lucide-react";
import {TheSvgIcon} from "@/components/ui/TheSvgIcon";

interface SkillItem {
    name: string;
    iconName: string;
    badge: string;
    description: string;
}

interface SkillCluster {
    title: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    color: string;
    skills: SkillItem[];
}

const skillClusters: SkillCluster[] = [
    {
        title: "AI Engineering & Agentic Systems (Primary Focus)",
        icon: Sparkles,
        color: "text-indigo-500",
        skills: [
            {
                name: "LangChain & LangGraph",
                iconName: "langchain",
                badge: "Agentic AI",
                description: "Stateful agent graphs, multi-agent coordination, human-in-the-loop, LangSmith, MCP tooling",
            },
            {
                name: "Adaptive Self-RAG (ACSRAG)",
                iconName: "rl",
                badge: "Retrieval Engineering",
                description: "Vector search + BM25, Reciprocal Rank Fusion (RRF), Cross-Encoder reranking, claim verification",
            },
            {
                name: "LLMs & Transformers",
                iconName: "huggingface",
                badge: "Generative AI",
                description: "Hugging Face, Prompt Engineering, LlamaIndex, context compression, semantic search, LLM eval",
            },
            {
                name: "FastAPI & Agent Tooling",
                iconName: "fastapi",
                badge: "APIs & Serving",
                description: "Model Context Protocol (MCP), n8n workflow automation, high-throughput asynchronous endpoints",
            },
        ],
    },
    {
        title: "Deep Learning & Computer Vision Research",
        icon: Brain,
        color: "text-purple-500",
        skills: [
            {
                name: "PyTorch & Neural Networks",
                iconName: "pytorch",
                badge: "Deep Learning",
                description: "Multi-branch CNNs, attention mechanisms, cross-attention fusion, spectral encoding & wavelets",
            },
            {
                name: "Computer Vision",
                iconName: "opencv",
                badge: "Perception",
                description: "Spatial & contextual feature learning, fine-grained plant disease classification on PlantDoc, OpenCV",
            },
            {
                name: "Explainable AI (XAI)",
                iconName: "rl",
                badge: "Interpretability",
                description: "Grad-CAM, LIME, and SHAP to validate prediction behavior, verify symptoms, and conduct ablations",
            },
            {
                name: "Reinforcement Learning (MARL)",
                iconName: "rl",
                badge: "Optimization",
                description: "PPO, RLlib, TraCI & SUMO multi-agent traffic signal optimization, multi-objective reward shaping",
            },
        ],
    },
    {
        title: "Machine Learning, Predictive Analytics & RecSys",
        icon: Cpu,
        color: "text-emerald-500",
        skills: [
            {
                name: "Scikit-Learn, XGBoost & LightGBM",
                iconName: "scikitlearn",
                badge: "Gradient Boosting",
                description: "Classification, clustering, feature importance, predictive customer churn modeling (BCG simulation)",
            },
            {
                name: "Recommendation Systems",
                iconName: "scikitlearn",
                badge: "Personalization",
                description: "Collaborative & content filtering, matrix factorization, Precision@K, RMSE, cold-start mitigation",
            },
            {
                name: "Time-Series Forecasting",
                iconName: "pandas",
                badge: "Forecasting",
                description: "SARIMA, ARIMA(5,1,0), trend decomposition & seasonality, Walmart store-level sales demand forecasting",
            },
            {
                name: "Optuna & Experimentation",
                iconName: "python",
                badge: "Model Tuning",
                description: "Automated hyperparameter tuning, k-fold cross-validation, feature engineering & statistical modeling",
            },
        ],
    },
    {
        title: "Business Analysis, BI & Stakeholder Strategy",
        icon: LineChart,
        color: "text-blue-500",
        skills: [
            {
                name: "Requirements & SDLC",
                iconName: "git",
                badge: "Business Analysis",
                description: "Requirements elicitation (BRD/FRD), Process Mapping, Gap & Root Cause Analysis, UAT, Agile/Scrum",
            },
            {
                name: "Power BI & Tableau",
                iconName: "powerbi",
                badge: "BI Dashboards",
                description: "Automated KPI tracking, SLA monitoring dashboards, operational decision analytics, Tableau reporting",
            },
            {
                name: "Customer & Revenue Analytics",
                iconName: "tableau",
                badge: "Growth Insights",
                description: "RFM segmentation, K-Means clustering, Customer Lifetime Value (CLV), cohort retention modeling",
            },
            {
                name: "Excel & Quantitative Analysis",
                iconName: "excel",
                badge: "Business Modeling",
                description: "Pivot tables, XLOOKUP/VLOOKUP, financial transaction modeling ($35.8M revenue), executive summaries",
            },
        ],
    },
    {
        title: "Data Engineering, Databases & Cloud Infrastructure",
        icon: Server,
        color: "text-amber-500",
        skills: [
            {
                name: "Advanced SQL & Warehousing",
                iconName: "postgresql",
                badge: "Data Modeling",
                description: "Joins, CTEs, Window Functions, Stored Procedures, star-schema data models, query optimization",
            },
            {
                name: "Python Scientific Stack",
                iconName: "python",
                badge: "Data Science Core",
                description: "Pandas, NumPy, statistical hypothesis testing, large-scale EDA, data cleaning & preprocessing",
            },
            {
                name: "Relational DBs & ETL",
                iconName: "mysql",
                badge: "Data Engineering",
                description: "PostgreSQL, MySQL, automated SQL validation across 15,000+ records, scalable ETL data pipelines",
            },
            {
                name: "Cloud & DevOps Runtimes",
                iconName: "aws",
                badge: "Cloud & Ops",
                description: "AWS (ML & Data Associate, SAA), Oracle Cloud (OCI) Data Science, Docker, Jenkins CI/CD, Git",
            },
        ],
    },
];

const CERTIFICATIONS = [
    {
        name: "AWS Certified Machine Learning Engineer – Associate (MLA-C01)",
        issuer: "Amazon Web Services (AWS)",
        badge: "AWS Certified",
        iconColor: "text-amber-500",
        bgBadge: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    },
    {
        name: "AWS Certified Data Engineer – Associate (DEA-C01)",
        issuer: "Amazon Web Services (AWS)",
        badge: "AWS Certified",
        iconColor: "text-blue-500",
        bgBadge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    },
    {
        name: "AWS Certified Solutions Architect – Associate (SAA-C03)",
        issuer: "Amazon Web Services (AWS)",
        badge: "AWS Certified",
        iconColor: "text-amber-600",
        bgBadge: "bg-amber-600/10 text-amber-600 dark:text-amber-400 border-amber-600/20",
    },
    {
        name: "Oracle Cloud Infrastructure (OCI) 2025 Certified Data Science Professional",
        issuer: "Oracle Corporation",
        badge: "OCI Certified",
        iconColor: "text-red-500",
        bgBadge: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
    },
    {
        name: "Business Analyst Certification",
        issuer: "Skillsetmaster",
        badge: "Business Analysis",
        iconColor: "text-indigo-500",
        bgBadge: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    },
    {
        name: "Certified AI & Data Science Professional",
        issuer: "iHUB DivyaSampark, IIT Roorkee – Intellipaat",
        badge: "IIT Roorkee",
        iconColor: "text-emerald-500",
        bgBadge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    },
    {
        name: "Data Analytics Essentials",
        issuer: "Cisco Networking Academy",
        badge: "Cisco Certified",
        iconColor: "text-cyan-500",
        bgBadge: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    },
    {
        name: "DevOps and Cloud Foundations",
        issuer: "IBM",
        badge: "IBM Verified",
        iconColor: "text-purple-500",
        bgBadge: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    },
];

export default function Skills() {
    return (
        <Section
            id="skills"
            className="relative py-28 sm:py-36 overflow-hidden border-t border-stone-200/80 dark:border-stone-800/80"
        >
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-14 text-center sm:text-left">
                    <motion.div
                        initial={{opacity: 0, y: 12}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-[#1c1917] border border-stone-200/80 dark:border-stone-800/80 text-stone-600 dark:text-stone-400 text-xs font-mono font-medium uppercase tracking-wider mb-4"
                    >
                        <Sparkles size={13} className="text-indigo-500" />
                        <span>Technical Arsenal</span>
                    </motion.div>
                    <motion.h2
                        initial={{opacity: 0, y: 16}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: 0.1}}
                        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 dark:text-[#fafaf9]"
                    >
                        Skills &amp; Capabilities
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 16}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: 0.15}}
                        className="mt-3 text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-2xl font-normal leading-relaxed"
                    >
                        Comprehensive toolkits across AI Engineering, Deep Learning Perception, Predictive Modeling, Business Intelligence, and Scalable Cloud Systems.
                    </motion.p>
                </div>

                {/* Categorized Bento Clusters */}
                <div className="space-y-12">
                    {skillClusters.map((cluster, clusterIdx) => {
                        const Icon = cluster.icon;
                        return (
                            <motion.div
                                key={cluster.title}
                                initial={{opacity: 0, y: 24}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: clusterIdx * 0.08}}
                            >
                                <div className="flex items-center gap-2.5 mb-5">
                                    <div className="p-1.5 rounded-lg bg-stone-100 dark:bg-[#1c1917] border border-stone-200/80 dark:border-stone-800/80">
                                        <Icon size={16} className={cluster.color} />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                                        {cluster.title}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {cluster.skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="p-5 rounded-2xl bg-stone-100/60 dark:bg-[#1c1917]/70 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 shadow-xs hover:border-indigo-500/40 dark:hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                                        >
                                            <div>
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="w-11 h-11 rounded-xl bg-white dark:bg-[#292524] p-2 flex items-center justify-center border border-stone-200/80 dark:border-stone-700/60 shadow-xs group-hover:scale-105 transition-transform">
                                                        <TheSvgIcon name={skill.iconName} size={24} />
                                                    </div>
                                                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-stone-200/60 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-300/40 dark:border-stone-700/40">
                                                        {skill.badge}
                                                    </span>
                                                </div>

                                                <h4 className="font-bold text-stone-900 dark:text-stone-100 text-base mb-1">
                                                    {skill.name}
                                                </h4>

                                                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                                                    {skill.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Professional Certifications Showcase */}
                <motion.div
                    initial={{opacity: 0, y: 24}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="mt-20 pt-12 border-t border-stone-200/80 dark:border-stone-800/80"
                >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <Award size={18} className="text-amber-500" />
                                <h3 className="font-display text-2xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                                    Professional Certifications
                                </h3>
                            </div>
                            <p className="text-sm text-stone-600 dark:text-stone-400">
                                Industry-recognized credentials validating Machine Learning, Cloud Architecture, Data Engineering, and Business Analytics expertise.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {CERTIFICATIONS.map((cert) => (
                            <div
                                key={cert.name}
                                className="p-5 rounded-2xl bg-stone-100/60 dark:bg-[#1c1917]/70 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 shadow-xs hover:border-indigo-500/40 transition-all flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="p-2 rounded-xl bg-white dark:bg-[#292524] border border-stone-200/80 dark:border-stone-700/60 shadow-xs">
                                            <ShieldCheck size={20} className={cert.iconColor} />
                                        </div>
                                        <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${cert.bgBadge}`}>
                                            {cert.badge}
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm leading-snug mb-1">
                                        {cert.name}
                                    </h4>
                                    <p className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                                        {cert.issuer}
                                    </p>
                                </div>
                                <div className="mt-4 pt-3 border-t border-stone-200/60 dark:border-stone-800/60 flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                                    <CheckCircle2 size={13} />
                                    <span>Verified Credential</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
