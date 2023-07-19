import excludedRefs from "../data/excludedRefs";

export const parsedRefValues = {};

export const traverse = (obj) => {
  for (const key in obj) {
    if (key === "ref") {
      const ref = obj[key];
      const value = obj[key];

      if (ref && !excludedRefs.includes(ref)) {
        if (!parsedRefValues[ref]) {
          parsedRefValues[ref] = [];
        }
        parsedRefValues[ref].push(value);
      }
    } else if (typeof obj[key] === "object") {
      traverse(obj[key]);
    }
  }
};