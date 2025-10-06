const croppedSVG = (svgElement: SVGGraphicsElement): void => {
  const { x, y, width, height } = svgElement.getBBox();
  const viewBoxValue = `${x} ${y} ${width} ${height}`;
  svgElement.setAttribute('viewBox', viewBoxValue);
};

export default croppedSVG;
