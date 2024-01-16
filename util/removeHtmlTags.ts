// Add docs
export const removeHtmlTags = (input: string | undefined) => {
  return input?.replace(/<\/?[^>]+(>|$)/g, "");
};
