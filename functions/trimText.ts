const trimText = (text: string, limit = 25) => {
  if (text?.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
};

export default trimText;