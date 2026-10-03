"use client";

import React from "react";
import python from "@thesvg/icons/python";
import pytorch from "@thesvg/icons/pytorch";
import cplusplus from "@thesvg/icons/cplusplus";
import fastapi from "@thesvg/icons/fastapi";
import react from "@thesvg/icons/react";
import nextdotjs from "@thesvg/icons/nextdotjs";
import postgresql from "@thesvg/icons/postgresql";
import docker from "@thesvg/icons/docker";
import git from "@thesvg/icons/git";

const customOverrides: Record<string, { svg: string; variants?: { mono?: string; default?: string } }> = {
    tensorflow: {
        svg: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m61.55 128-21.84-12.68V40.55L6.81 59.56l.08-28.32L61.55 0z" fill="#FF6F00"/><path d="M66.46 0v128l21.84-12.68V78.23l16.4 9.48-.09-24.51-16.31-9.42V40.55l32.89 19.01.08-28.32z" fill="#FFA800"/></svg>`,
        variants: {
            default: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m61.55 128-21.84-12.68V40.55L6.81 59.56l.08-28.32L61.55 0z" fill="#FF6F00"/><path d="M66.46 0v128l21.84-12.68V78.23l16.4 9.48-.09-24.51-16.31-9.42V40.55l32.89 19.01.08-28.32z" fill="#FFA800"/></svg>`,
            mono: `<svg viewBox="0 0 128 128" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m61.55 128-21.84-12.68V40.55L6.81 59.56l.08-28.32L61.55 0zm4.91-128v128l21.84-12.68V78.23l16.4 9.48-.09-24.51-16.31-9.42V40.55l32.89 19.01.08-28.32z"/></svg>`,
        },
    },
    opencv: {
        svg: `<svg viewBox="0 0 600 580" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(300, 145)"><path d="M -69.65 120.64 A 139.3 139.3 0 1 1 69.65 120.64 L 27.71 47.99 A 55.42 55.42 0 1 0 -27.71 47.99 Z" fill="#EA2027"/></g><g transform="translate(457, 420) rotate(180)"><path d="M -69.65 120.64 A 139.3 139.3 0 1 1 69.65 120.64 L 27.71 47.99 A 55.42 55.42 0 1 0 -27.71 47.99 Z" fill="#0072C6"/></g><g transform="translate(143, 420) rotate(240)"><path d="M -69.65 120.64 A 139.3 139.3 0 1 1 69.65 120.64 L 27.71 47.99 A 55.42 55.42 0 1 0 -27.71 47.99 Z" fill="#009E49"/></g></svg>`,
        variants: {
            default: `<svg viewBox="0 0 600 580" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(300, 145)"><path d="M -69.65 120.64 A 139.3 139.3 0 1 1 69.65 120.64 L 27.71 47.99 A 55.42 55.42 0 1 0 -27.71 47.99 Z" fill="#EA2027"/></g><g transform="translate(457, 420) rotate(180)"><path d="M -69.65 120.64 A 139.3 139.3 0 1 1 69.65 120.64 L 27.71 47.99 A 55.42 55.42 0 1 0 -27.71 47.99 Z" fill="#0072C6"/></g><g transform="translate(143, 420) rotate(240)"><path d="M -69.65 120.64 A 139.3 139.3 0 1 1 69.65 120.64 L 27.71 47.99 A 55.42 55.42 0 1 0 -27.71 47.99 Z" fill="#009E49"/></g></svg>`,
        },
    },
    kotlin: {
        svg: `<svg viewBox="0 0 256 256" width="256" height="256" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="thesvg-kotlin-gradient"><stop stop-color="#7F52FF" offset="0%"/><stop stop-color="#C711E1" offset="50%"/><stop stop-color="#E44857" offset="100%"/></linearGradient></defs><path fill="url(#thesvg-kotlin-gradient)" d="M256 256H0V0h256L128 128z"/></svg>`,
        variants: {
            default: `<svg viewBox="0 0 256 256" width="256" height="256" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="thesvg-kotlin-gradient"><stop stop-color="#7F52FF" offset="0%"/><stop stop-color="#C711E1" offset="50%"/><stop stop-color="#E44857" offset="100%"/></linearGradient></defs><path fill="url(#thesvg-kotlin-gradient)" d="M256 256H0V0h256L128 128z"/></svg>`,
        },
    },
    huggingface: {
        svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="54" fill="#FFD21E"/><ellipse cx="44" cy="56" rx="6" ry="8" fill="#1F2937"/><ellipse cx="76" cy="56" rx="6" ry="8" fill="#1F2937"/><path d="M42 74c4 8 32 8 36 0" stroke="#1F2937" stroke-width="5" stroke-linecap="round"/><ellipse cx="33" cy="62" rx="4" ry="2" fill="#F87171"/><ellipse cx="87" cy="62" rx="4" ry="2" fill="#F87171"/></svg>`,
    },
    langchain: {
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#10B981"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#059669"/><circle cx="12" cy="12" r="2.5" fill="#10B981"/></svg>`,
    },
    scikitlearn: {
        svg: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="58" fill="#F7931E"/><path d="M44 38c16-8 38-4 50 10 10 12 10 30-2 42-12 12-32 12-44 0-10-10-12-26-4-38l12 12c-4 6-4 14 2 20 6 6 16 6 22 0 6-6 6-16 0-22-6-6-16-6-22 0l-14-14z" fill="#2980B9"/><circle cx="64" cy="64" r="8" fill="#FFFFFF"/></svg>`,
    },
    aws: {
        svg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="8" fill="#232F3E"/><path d="M10 24c4 3 11 4.5 17 1 .4-.2.8.2.5.6-4.5 4-13 4.5-18 .5-.3-.2-.1-.6.5-.7z" fill="#FF9900"/><path d="M27.5 23.5c-.3-.4-2-.2-2.7-.1-.2 0-.3-.2-.1-.3 1.3-.9 3.5-.7 3.8-.3.3.3.1 2.5-1.1 3.5-.2.2-.4.1-.3-.1.4-.7.7-2.3.4-2.7z" fill="#FF9900"/><path d="M14 14v6m6-6v6m6-6v6" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/></svg>`,
    },
    powerbi: {
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="6" fill="#F2C811"/><rect x="7" y="15" width="4" height="10" rx="1" fill="#262626"/><rect x="14" y="10" width="4" height="15" rx="1" fill="#262626"/><rect x="21" y="7" width="4" height="18" rx="1" fill="#262626"/></svg>`,
    },
    pandas: {
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="6" fill="#150458"/><path d="M9 10v12M16 7v18M23 13v9" stroke="#E70488" stroke-width="3" stroke-linecap="round"/></svg>`,
    },
    rl: {
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" stroke="#6366F1"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" stroke="#8B5CF6"/></svg>`,
    },
    tableau: {
        svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11" y="2" width="2" height="6" rx="0.5" fill="#E8762D"/><rect x="9" y="4" width="6" height="2" rx="0.5" fill="#E8762D"/><rect x="11" y="16" width="2" height="6" rx="0.5" fill="#205B8D"/><rect x="9" y="18" width="6" height="2" rx="0.5" fill="#205B8D"/><rect x="2" y="11" width="6" height="2" rx="0.5" fill="#4B6382"/><rect x="4" y="9" width="2" height="6" rx="0.5" fill="#4B6382"/><rect x="16" y="11" width="6" height="2" rx="0.5" fill="#1B998B"/><rect x="18" y="9" width="2" height="6" rx="0.5" fill="#1B998B"/><rect x="10.5" y="8.5" width="3" height="7" rx="0.5" fill="#E83C3C"/><rect x="8.5" y="10.5" width="7" height="3" rx="0.5" fill="#E83C3C"/></svg>`,
    },
    mysql: {
        svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="10" fill="#00758F"/><path d="M12 34c4-12 14-18 24-14-3 5-9 8-15 8-3 0-6 2-9 6z" fill="#F29111"/><path d="M17 18c3-4 8-6 13-3-2 3-5 5-9 5-2 0-3-1-4-2z" fill="#FFFFFF"/></svg>`,
    },
    excel: {
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="6" fill="#107C41"/><path d="M10 9l5 7-5 7h3.5l3.2-4.8L20 23h3.5l-5-7 5-7H20l-3.3 4.8L13.5 9H10z" fill="#FFFFFF"/></svg>`,
    },
    jenkins: {
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="6" fill="#D33833"/><circle cx="16" cy="12" r="5" fill="#FFFFFF"/><path d="M10 24c0-3.3 2.7-6 6-6s6 2.7 6 6H10z" fill="#FFFFFF"/></svg>`,
    },
    oracle: {
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="6" fill="#F80000"/><rect x="8" y="11" width="16" height="10" rx="5" stroke="#FFFFFF" stroke-width="2.5" fill="none"/></svg>`,
    },
};

const iconMap: Record<string, { svg: string; variants?: { mono?: string; default?: string } }> = {
    python,
    pytorch,
    tensorflow: customOverrides.tensorflow,
    opencv: customOverrides.opencv,
    cplusplus,
    fastapi,
    react,
    nextdotjs,
    postgresql,
    docker,
    git,
    kotlin: customOverrides.kotlin,
    huggingface: customOverrides.huggingface,
    langchain: customOverrides.langchain,
    scikitlearn: customOverrides.scikitlearn,
    aws: customOverrides.aws,
    powerbi: customOverrides.powerbi,
    pandas: customOverrides.pandas,
    rl: customOverrides.rl,
    tableau: customOverrides.tableau,
    mysql: customOverrides.mysql,
    excel: customOverrides.excel,
    jenkins: customOverrides.jenkins,
    oracle: customOverrides.oracle,
};

interface TheSvgIconProps {
    name: string;
    size?: number;
    className?: string;
    variant?: "default" | "mono";
}

export function TheSvgIcon({
                               name,
                               size = 28,
                               className = "",
                               variant = "default",
                           }: Readonly<TheSvgIconProps>) {
    const iconData = iconMap[name];

    if (!iconData) {
        return null;
    }

    const svgContent =
        variant === "mono" && iconData.variants?.mono
            ? iconData.variants.mono
            : iconData.variants?.default || iconData.svg;

    return (
        <span
            className={`inline-flex items-center justify-center shrink-0 [&>svg]:w-full [&>svg]:h-full ${className}`}
            style={{width: size, height: size}}
            dangerouslySetInnerHTML={{__html: svgContent}}
        />
    );
}
