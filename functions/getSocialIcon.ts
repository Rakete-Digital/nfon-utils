import { facebookIcon, twitterIcon, youtubeIcon, instagramIcon, linkedInIcon } from "..";


function getSocialIcon(link) {
    if (link.includes("linkedin.com")) {
        return linkedInIcon;
    } else if (link.includes("facebook.com")) {
        return facebookIcon;
    } else if (link.includes("twitter.com") || link.includes("x.com")) {
        return twitterIcon;
    } else if (link.includes("youtube.com")) {
        return youtubeIcon;
    } else if (link.includes("instagram.com")) {
        return instagramIcon;
    } else {
        return "";
    }
}

export default getSocialIcon;
