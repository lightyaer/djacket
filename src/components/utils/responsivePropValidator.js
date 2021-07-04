export default (possibilities) => {
  if (!possibilities || !Array.isArray(possibilities)) return;

  return (value) => {
    if (typeof value === "object") {
      return !!Object.keys(value).filter((value) =>
        possibilities.includes(value)
      );
    } else if (typeof value === "string") {
      return (value) => possibilities.includes(value);
    } else if (typeof value === "number") {
      // refer src/styles/spacing/_spacing.scss
      // for start and end of number values
      return (value) => value >= 1 && value <= 9;
    }
  };
};
