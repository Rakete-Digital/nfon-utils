function getUrlExtension(url: string): string | undefined {
    if (!url) return undefined;
    const parts = url.split(/[#?]/)[0].split(".");
    const ext = parts.pop();
    return ext ? ext.trim() : undefined;
}

export default getUrlExtension;
