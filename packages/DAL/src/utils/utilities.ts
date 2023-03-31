export const formatDate = (date: Date) => {
  return new Date(date).toISOString();
};

export const isValidDate = (date): boolean => {
  const temp = new Date(date);
  return temp instanceof Date && !isNaN(temp as unknown as any);
};

// TODO: add real validation in the function and hash passwords!
export const validatePassword = (PWFromUser: string, PWFromDB: string) => {
  return PWFromUser === PWFromDB;
}
