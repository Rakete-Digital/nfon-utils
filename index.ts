// Components
export { default as SeoHead } from "./components/SeoHead.astro";

// Functions
export { default as darkenColor } from "./functions/darkenColor";
export { default as trimText } from "./functions/trimText";
export { default as transformAsset } from "./functions/transformAsset";
export { default as getSocialIcon } from "./functions/getSocialIcon";
export { default as getUrlExtension } from "./functions/getUrlExtension";
export { isImage, isVideo } from "./functions/getAssetType";
export { default as isSVG } from "./functions/isSVG";
export { default as fetchSVG } from "./functions/fetchSVG";
export { default as displaySVG } from "./functions/displaySVG";
export { default as getContrastColor } from "./functions/getContrastColor";
export { default as croppedSVG } from "./functions/croppedSVG";
export { default as extractPlainTextFromRichText } from "./functions/extractPlainTextFromRichText";