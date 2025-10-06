const languageFormat = (lang: string) => {
  const languageMap = {
    en: "International",
    de: "Deutschland",
    at: "Österreich",
    gb: "United Kingdom",
    fr: "France",
    it: "Italia",
    nl: "Nederland",
    es: "España",
    pt: "Portugal",
    hr: "Hrvatska",
    pl: "Polska",
    sk: "Slovensko",
    si: "Slovenija",
    hu: "Magyarország",
    ro: "România",
    cz: "Česká republika",
  };

  return languageMap[lang] || lang;
};

export default languageFormat;
