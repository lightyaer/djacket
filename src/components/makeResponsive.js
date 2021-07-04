export default (prefix, values) => {
  if (typeof values === "object") {
    return Object.keys(values).reduce((acc, key) => {
      const value = values[key];
      if (typeof values === "boolean") {
        return {
          ...acc,
          [`${key === "default" ? "" : `${key}-`}${prefix}`]: value,
        };
      }

      return {
        ...acc,
        [`${key === "default" ? "" : `${key}-`}${prefix}${value}`]: !!value,
      };
    }, {});
  }

  if (typeof values === "boolean") {
    return {
      [`${prefix}`]: values,
    };
  }

  return {
    [`${prefix}${values}`]: !!values,
  };
};
