import { DOMParser, XMLSerializer } from "xmldom";

async function fetchSVG(url: RequestInfo | URL) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const svgContent = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgContent, "image/svg+xml");
    const svgElements = doc.getElementsByTagName("svg");

    if (svgElements?.length === 0) {
      throw new Error("SVG tag not found in the content");
    }

    const svgElement = svgElements[0];
    svgElement.setAttribute("class", "custom-svg-icon");

    const serializer = new XMLSerializer();
    const modifiedSVGString = serializer.serializeToString(doc);

    return modifiedSVGString;
  } catch (error) {
    console.error("Error fetching SVG:", error);
    return null;
  }
}

export default fetchSVG;
