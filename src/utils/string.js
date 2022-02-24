export const changeToNumber = (str) => {
  const regex = /-?[^0-9]/g;
  return Number(str.replace(regex, ''));
};
