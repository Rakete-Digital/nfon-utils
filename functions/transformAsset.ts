const getAssetsHostDomain = () => {
    return import.meta.env.HOST_ASSETS_URL || '/web-assets';
}

const transformAsset = (src: string, transformer?: (p: string) => string): string => {
    let assetSrc = src;

    if (assetSrc && assetSrc.includes('https://a.storyblok.com')) {
        const assetsHostDomain = getAssetsHostDomain();
        assetSrc = assetSrc.replace('https://a.storyblok.com', assetsHostDomain);
    }

    return transformer ? transformer(assetSrc) : assetSrc;
};

export default transformAsset;