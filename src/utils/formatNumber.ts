export const fromatNumber = (num: number) => {
  const numberString = num.toString();
  const parts = numberString.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ', ');

  return parts.join('.');
};
