export const extractIdFromUrl = (url: string) => {
  // Split the URL by forward slashes and get the last part
  const parts = url.split("/");
  const lastPart = parts[parts.length - 1];

  // You can further validate the ID if needed
  // For example, if the ID should match a specific pattern
  // For now, we assume the last part of the URL is the ID

  return lastPart;
};
