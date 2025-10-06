import { getUrlExtension } from "..";

function isSVG(url: string) {
  if(!url) return false;
  
  return getUrlExtension(url) === "svg";
}

export default isSVG;