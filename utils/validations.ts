export const validateEmail = (email: string): boolean => {
  if (email.length === 0) return true;
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};

export const validateStringOnly = (str: string): boolean => {
  if (str.length === 0) return true;
  return /^[a-zA-Z]+$/.test(str);
};

export const validateName = (name: string): boolean => {
  if (name.length === 0) return true;
  return /^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/.test(name);
};
