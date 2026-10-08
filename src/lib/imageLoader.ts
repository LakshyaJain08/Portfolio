export function getAssetPath(path: string): string {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    if (path.startsWith("/") && !path.startsWith("//")) {
        return `${basePath}${path}`;
    }
    return path;
}

export default function imageLoader({
    src,
}: {
    src: string;
    width?: number;
    quality?: number;
}): string {
    return getAssetPath(src);
}
