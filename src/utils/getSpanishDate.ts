export const getSpanishDate = () => {
  const date = new Date();
  return date.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
