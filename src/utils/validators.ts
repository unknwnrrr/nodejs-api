
export const empty = (str) => {
  return !str || !/[^\s]+/.test(str);
}