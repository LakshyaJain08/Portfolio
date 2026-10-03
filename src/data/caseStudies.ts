export interface CaseStudy {
    id: string;
    title: string;
    description: string;
    role: string;
    timeline: string;
    tags: string[];
    heroImage?: string;
    problem: string;
    constraints: string[];
    architecture?: string;
    solution: string;
    tradeoffs: {
        decision: string;
        pros: string;
        cons: string;
    }[];
    outcome: string[];
}

export const caseStudies: CaseStudy[] = [
    {
        id: "acsrag",
        title: "Adaptive Corrective Self-RAG (ACSRAG)",
        description: "Architecting an enterprise-grade retrieval pipeline with adaptive query rewriting, Reciprocal Rank Fusion, and active hallucination guardrails.",
        role: "AI Engineer & Lead Architect",
        timeline: "Oct 2025 - Dec 2025",
        tags: ["Agentic AI", "Self-RAG", "CRAG", "Vector Search", "Hybrid Retrieval", "LangChain"],
        problem:
            "Standard single-pass RAG pipelines fail under ambiguous queries, irrelevant vector retrieval, and lack self-correction, causing severe hallucination rates exceeding 30% in high-stakes domain search.",
        constraints: [
            "Sub-second latency requirements for production interactive querying.",
            "Zero tolerance for fabricated citations or out-of-context claims.",
            "Graceful fallback to dynamic web search when internal vector indices yield low-confidence evidence.",
            "Scalable vector index + BM25 sparse index synchronization without high compute overhead."
        ],
        solution:
            "Architected an Adaptive Corrective Self-RAG (ACSRAG) stateful pipeline using LangGraph and hybrid search.\n\n**Stage 1: Hybrid Retrieval & Reciprocal Rank Fusion (RRF)**\nImplemented dual-branch retrieval marrying dense vector embeddings with sparse BM25 indices, merged dynamically via RRF and cross-encoder re-ranking for top-k contextual density.\n\n**Stage 2: Self-Evaluation & Corrective Routing**\nAn automated evaluator grades retrieved chunks for query relevance. Low-scoring contexts trigger adaptive query rewrites and conditional fallbacks to real-time search engines.\n\n**Stage 3: Evidence-Grounded Verification**\nGenerated responses are passed through a Self-RAG verification node verifying claim-to-evidence attribution before output streaming.",
        tradeoffs: [
            {
                decision: "Reciprocal Rank Fusion vs. Pure Vector Search",
                pros: "Significantly elevates domain-specific keyword recall (+41%) and handles exact acronyms accurately.",
                cons: "Increases retrieval computation time by ~12ms compared to single vector index lookups.",
            },
            {
                decision: "Pre-Response Claim Verification Gate",
                pros: "Reduces hallucination rate by 54% and guarantees factual faithfulness to source documentation.",
                cons: "Adds an additional LLM verification call, managed via speculative small-model grading.",
            },
        ],
        outcome: [
            "Achieved +32% improvement in answer correctness compared to baseline naive RAG.",
            "Boosted retrieval precision and contextual relevance by 41% with RRF reranking.",
            "Reduced hallucinated outputs by 54% using active claim-evidence verification.",
        ],
    },
    {
        id: "plantdoc-cv",
        title: "Multi-Branch Deep Learning Perception for Plant Disease Classification",
        description: "Designing a robust multi-branch CNN architecture with attention fusion for fine-grained agricultural disease diagnosis.",
        role: "Deep Learning & CV Researcher",
        timeline: "Jul 2025 - Sep 2025",
        tags: ["Computer Vision", "PyTorch", "Deep Learning", "Attention Fusion", "Explainable AI"],
        problem:
            "Complex visual similarities between early-stage plant diseases and field noise (uncontrolled lighting, leaf overlaps, shadows) lead standard single-backbone CNNs to high false-positive rates.",
        constraints: [
            "Limited annotated data per micro-class requiring regularized multi-branch representation learning.",
            "Interpretability requirement: domain practitioners must visually verify diagnostic focus areas via Grad-CAM.",
            "Inference optimization for edge and field deployments."
        ],
        solution:
            "Engineered a novel multi-branch PyTorch architecture that separately processes spatial geometry, texture wavelets, and multi-scale contextual features before unifying them through an attention fusion bottleneck.\n\n**Feature Branching:**\nParallel branches capture micro-lesions via specialized high-frequency filters while global branches preserve leaf topology.\n\n**Attention Fusion & XAI:**\nCross-attention weights prioritize discriminative lesions over ambient background clutter, verified using Grad-CAM heatmaps and SHAP feature attributions.",
        tradeoffs: [
            {
                decision: "Multi-Branch Attention Fusion vs. Monolithic Vision Transformer",
                pros: "Superior data efficiency on specialized agricultural datasets; lower VRAM consumption during training.",
                cons: "Requires custom gradient routing and balanced learning rates across branch backbones.",
            },
            {
                decision: "Grad-CAM Validation in Evaluation Pipeline",
                pros: "Guarantees network classifies actual lesions rather than field background artifacts or watermarks.",
                cons: "Additional compute required during automated benchmark validation passes.",
            },
        ],
        outcome: [
            "Attained 86% overall multiclass accuracy and 80% macro F1-score across challenging classes.",
            "Reached up to 99% diagnostic accuracy on key commercial crop target categories.",
            "Produced explainable, publication-quality saliency maps validating biological symptom localization.",
        ],
    },
];
