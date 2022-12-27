export const formatDate = (date: Date) => {
  return new Date(date).toISOString();
};

export const isValidDate = (date): boolean => {
  const temp = new Date(date);
  return temp instanceof Date && !isNaN(temp as unknown as any);
};
