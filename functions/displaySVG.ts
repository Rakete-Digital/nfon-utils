
import { isSVG, fetchSVG } from "..";

async function displaySVG(url: string) {
    if (!url) return;

    if (isSVG(url)) {
        try {
            const svgContent = await fetchSVG(url);
            return svgContent;
        } catch (error) {
            console.error("Error fetching SVG:", error);
        }
    } else {
        console.error("URL is not an SVG file:", url);
    }
}

export default displaySVG;