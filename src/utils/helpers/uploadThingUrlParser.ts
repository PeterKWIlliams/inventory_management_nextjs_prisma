export const extractIdFromUrl = (url: string) => {
  const parts = url.split('/');
  const lastPart = parts[parts.length - 1];
  return lastPart;
};
