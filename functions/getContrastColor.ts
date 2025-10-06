function getContrastColor(hexColor: string) {
  if (!hexColor) return;

  // Validate hex color format
  const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  if (!hexPattern.test(hexColor)) {
    throw new Error('Invalid hex color format');
  }

  if (hexColor.toLocaleLowerCase() === "#ff6473") {
    return '#FFFFFF';
  }

  // Expand shorthand hex color to full form (e.g. #03F -> #0033FF)
  if (hexColor?.length === 4) {
    hexColor = '#' + hexColor[1] + hexColor[1] + hexColor[2] + hexColor[2] + hexColor[3] + hexColor[3];
  }

  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.6 ? '#000000' : '#FFFFFF';
}

export default getContrastColor;
