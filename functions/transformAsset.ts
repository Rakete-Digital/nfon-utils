const getAssetsHostDomain = (): string =>
    import.meta.env.HOST_ASSETS_URL ?? '/web-assets';

const transformAsset = (
    src: string,
    transformer?: (p: string) => string
): string => {
    if (!src) return src;

    const useNfonHost = import.meta.env.NFON_IMAGE_HOST === 'yes';
    let assetSrc = src;

    if (useNfonHost && src.includes('https://a.storyblok.com')) {
        assetSrc = src.replace('https://a.storyblok.com', getAssetsHostDomain());
    }

    return transformer ? transformer(assetSrc) : assetSrc;
};

export default transformAsset;