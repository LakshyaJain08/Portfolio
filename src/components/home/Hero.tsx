"use client";

import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {ArrowRight, FileText, Sparkles, TrendingDown, TrendingUp, ShieldCheck, BarChart3, ArrowUpRight, Database} from "lucide-react";
import Link from "next/link";
import {Magnetic} from "@/components/ui/Magnetic";
import {getAssetPath} from "@/lib/imageLoader";

const ROLES = [
    { title: "AI Engineer", article: "an" },
    { title: "ML Engineer", article: "a" },
    { title: "Data Scientist", article: "a" },
    { title: "Data Analyst", article: "a" },
    { title: "Business Analyst", article: "a" },
];

function AnimatedCounter({
    value,
    decimals = 0,
    prefix = "",
    suffix = "",
}: {
    value: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        const duration = 1600;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(easeOut * value);
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        const handle = requestAnimationFrame(step);
        return () => cancelAnimationFrame(handle);
    }, [value]);

    return (
        <span className="tabular-nums font-bold tracking-tight">
            {prefix}
            {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}
            {suffix}
        </span>
    );
}

const IMPACT_METRICS = [
    {
        id: "acsrag",
        value: 54,
        decimals: 0,
        prefix: "-",
        suffix: "%",
        label: "Hallucinations",
        discipline: "Agentic AI",
        project: "Adaptive Self-RAG",
        detail: "LangGraph · +41% Relevance",
        icon: Sparkles,
        badgeClass: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
        href: "/#projects",
    },
    {
        id: "agentic-sql-analyst",
        value: 100,
        decimals: 0,
        prefix: "",
        suffix: "%",
        label: "Execution Accuracy",
        discipline: "Agentic SQL",
        project: "NL-to-SQL Agent",
        detail: "105 Queries · -85% Turnaround",
        icon: Database,
        badgeClass: "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20",
        href: "/#projects",
    },
    {
        id: "healthflow",
        value: 88.4,
        decimals: 1,
        prefix: "",
        suffix: "%",
        label: "Predictive ROC-AUC",
        discipline: "Data Science",
        project: "HealthFlow AI",
        detail: "Clinical No-Show & 30D Forecast",
        icon: ShieldCheck,
        badgeClass: "text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/20",
        href: "/#projects",
    },
    {
        id: "powerbi-analytics",
        value: 15000,
        decimals: 0,
        prefix: "",
        suffix: "+",
        label: "SLA Records Modeled",
        discipline: "Data Analytics",
        project: "Power BI & SQL",
        detail: "+28% Speed · 99% Accuracy",
        icon: BarChart3,
        badgeClass: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20",
        href: "/#projects",
    },
    {
        id: "retail-marketing-analysis",
        value: 1.07,
        decimals: 2,
        prefix: "$",
        suffix: "M",
        label: "Revenue & CLV Modeled",
        discipline: "Business Analytics",
        project: "Retail Analytics",
        detail: "150.4x CLV:CAC · 89.1% Retention",
        icon: TrendingUp,
        badgeClass: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
        href: "/#projects",
    },
    {
        id: "traffic-marl",
        value: 93.1,
        decimals: 1,
        prefix: "-",
        suffix: "%",
        label: "Traffic Wait Delay",
        discipline: "Reinforcement Learning",
        project: "Multi-Agent RL",
        detail: "PPO in SUMO · 22.5% Fuel Cut",
        icon: TrendingDown,
        badgeClass: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        href: "/#projects",
    },
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 2600);
        return () => clearInterval(timer);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-[90vh] flex flex-col justify-center items-center pt-24 md:pt-32 pb-20 overflow-hidden"
        >
            {/* Ambient Background Gradient Mesh */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-emerald-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-10 left-1/4 w-[360px] h-[300px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[100px] rounded-full" />
                <div className="absolute top-1/3 right-1/4 w-[320px] h-[280px] bg-emerald-500/8 dark:bg-emerald-500/10 blur-[90px] rounded-full" />
                {/* Subtle Grid texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                {/* Live Status Pill */}
                <motion.div
                    initial={{opacity: 0, y: 12}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, ease: [0.23, 1, 0.32, 1]}}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100/90 dark:bg-[#1c1917]/90 border border-stone-200/80 dark:border-stone-800/80 text-stone-700 dark:text-stone-300 text-xs font-medium mb-8 shadow-xs"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Incoming Software Engineer @ <strong className="text-stone-900 dark:text-stone-100 font-semibold">Infosys</strong></span>
                </motion.div>

                {/* Display Name */}
                <motion.h1
                    initial={{opacity: 0, y: 16}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1]}}
                    className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-stone-900 dark:text-[#fafaf9] leading-[1.06]"
                >
                    Lakshya Jain
                </motion.h1>

                {/* Dynamic Rotating Roles */}
                <motion.div
                    initial={{opacity: 0, y: 16}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.16, ease: [0.23, 1, 0.32, 1]}}
                    className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xl sm:text-2xl md:text-3xl font-display font-medium text-stone-700 dark:text-stone-300"
                >
                    <span className="text-stone-400 dark:text-stone-500 font-normal inline-flex items-center gap-1.5">
                        <span>I am</span>
                        <span className="relative inline-flex justify-center min-w-[1.6ch]">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={ROLES[roleIndex].article}
                                    initial={{opacity: 0, y: 6}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: -6}}
                                    transition={{duration: 0.25, ease: [0.23, 1, 0.32, 1]}}
                                    className="inline-block"
                                >
                                    {ROLES[roleIndex].article}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </span>
                    <span className="relative inline-flex items-center min-w-[200px] sm:min-w-[240px] md:min-w-[280px] h-10 sm:h-11 px-3.5 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-600 dark:text-indigo-400 font-bold overflow-hidden shadow-xs">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={ROLES[roleIndex].title}
                                initial={{y: 24, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                exit={{y: -24, opacity: 0}}
                                transition={{duration: 0.35, ease: [0.23, 1, 0.32, 1]}}
                                className="block w-full text-center"
                            >
                                {ROLES[roleIndex].title}
                            </motion.span>
                        </AnimatePresence>
                    </span>
                </motion.div>

                {/* Tagline / Worldview */}
                <motion.p
                    initial={{opacity: 0, y: 16}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.22, ease: [0.23, 1, 0.32, 1]}}
                    className="mt-6 text-lg sm:text-xl md:text-2xl text-stone-600 dark:text-stone-300 max-w-2xl font-normal leading-relaxed text-balance"
                >
                    AI Engineer building reliable, end-to-end intelligent systems at the intersection of{" "}
                    <span className="text-stone-900 dark:text-stone-100 font-semibold">Deep Learning</span>,{" "}
                    <span className="text-stone-900 dark:text-stone-100 font-semibold">Agentic AI</span>{" "}
                    &amp;{" "}
                    <span className="text-stone-900 dark:text-stone-100 font-semibold">Retrieval-Augmented Generation (RAG)</span>.
                </motion.p>

                {/* Primary Action Buttons */}
                <motion.div
                    initial={{opacity: 0, y: 16}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.28, ease: [0.23, 1, 0.32, 1]}}
                    className="mt-8 flex flex-wrap items-center justify-center gap-3"
                >
                    <Magnetic strength={0.15}>
                        <Link
                            href="/#projects"
                            className="group inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-indigo-600/25 active:scale-95 shrink-0"
                        >
                            <span>Explore Selected Work</span>
                            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Magnetic>

                    <Magnetic strength={0.15}>
                        <a
                            href={getAssetPath("/LakshyaJain_Resume.pdf")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-stone-100/90 dark:bg-[#1c1917]/90 hover:bg-stone-200/80 dark:hover:bg-[#292524] text-stone-800 dark:text-stone-200 font-medium text-sm border border-stone-200/80 dark:border-stone-800/80 transition-all duration-200 active:scale-95 shadow-xs shrink-0"
                        >
                            <FileText size={15} className="text-stone-500 dark:text-stone-400" />
                            <span>Resume</span>
                        </a>
                    </Magnetic>

                    {/* Quick Social & Professional Links */}
                    <div className="flex items-center gap-2">
                        <Magnetic strength={0.2}>
                            <a
                                href="https://github.com/LakshyaJain08"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                title="GitHub"
                                className="w-11 h-11 inline-flex items-center justify-center rounded-xl bg-stone-100/90 dark:bg-[#1c1917]/90 hover:bg-stone-200/80 dark:hover:bg-[#292524] text-stone-600 dark:text-stone-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-stone-200/80 dark:border-stone-800/80 hover:border-indigo-500/40 transition-all duration-200 active:scale-95 shadow-xs shrink-0"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                </svg>
                            </a>
                        </Magnetic>

                        <Magnetic strength={0.2}>
                            <a
                                href="https://www.linkedin.com/in/lakshya-jain-837ab7288/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                title="LinkedIn"
                                className="w-11 h-11 inline-flex items-center justify-center rounded-xl bg-stone-100/90 dark:bg-[#1c1917]/90 hover:bg-stone-200/80 dark:hover:bg-[#292524] text-stone-600 dark:text-stone-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-stone-200/80 dark:border-stone-800/80 hover:border-indigo-500/40 transition-all duration-200 active:scale-95 shadow-xs shrink-0"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 0 0 0-2.8 1.4 1.4 0 0 0 0 2.8m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                                </svg>
                            </a>
                        </Magnetic>

                        <Magnetic strength={0.2}>
                            <a
                                href="mailto:lakshyajain2085@gmail.com"
                                aria-label="Email Lakshya"
                                title="Email"
                                className="w-11 h-11 inline-flex items-center justify-center rounded-xl bg-stone-100/90 dark:bg-[#1c1917]/90 hover:bg-stone-200/80 dark:hover:bg-[#292524] text-stone-600 dark:text-stone-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-stone-200/80 dark:border-stone-800/80 hover:border-indigo-500/40 transition-all duration-200 active:scale-95 shadow-xs shrink-0"
                            >
                                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </a>
                        </Magnetic>
                    </div>
                </motion.div>

                {/* High-Impact Proof Points (5-Metric Grid with Live Counters) */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.38, ease: [0.23, 1, 0.32, 1]}}
                    className="mt-14 w-full"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
                        </span>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-semibold">
                            Quantified Engineering Impact
                        </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5 text-left">
                        {IMPACT_METRICS.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className="group relative p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-[#1c1917]/70 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between overflow-hidden"
                                >
                                    <div className="flex items-center justify-between gap-1 mb-2">
                                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono font-medium border ${item.badgeClass}`}>
                                            <IconComponent size={11} />
                                            <span>{item.project}</span>
                                        </span>
                                        <ArrowUpRight size={13} className="text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    <div className="mt-1">
                                        <div className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 dark:text-[#fafaf9]">
                                            <AnimatedCounter
                                                value={item.value}
                                                decimals={item.decimals}
                                                prefix={item.prefix}
                                                suffix={item.suffix}
                                            />
                                        </div>
                                        <div className="text-xs sm:text-[13px] font-semibold text-stone-700 dark:text-stone-300 mt-0.5">
                                            {item.label}
                                        </div>
                                    </div>

                                    <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-2 line-clamp-1 border-t border-stone-200/60 dark:border-stone-800/60 pt-2">
                                        {item.detail}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
