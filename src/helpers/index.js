export const patternMatch = (regEx, text) => {
  //event.target.value.length > 0 && event.target.value.length < 256 && regEx.test(event.target.value
  console.log("pattern check");
  return text.length > 0 && text.length < 256 && regEx.test(text) === true;
};
