import { getUrlExtension } from "..";


const isImage = (url: string) => {
    if (!url) return false;

    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'];
    return imageExtensions.includes(getUrlExtension(url) ?? '');
};

const isVideo = (url: string) => {
    if (!url) return false;

    const videoExtensions = ['mp4', 'avi', 'mov', 'wmv', 'flv', 'mkv', 'webm'];
    return videoExtensions.includes(getUrlExtension(url) ?? '');
};

export { isImage, isVideo };
