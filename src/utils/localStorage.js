export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromStorage = (key, fallback = []) => {
  const data = localStorage.getItem(key);
  if (!data) return fallback;
  try {
    return JSON.parse(data);
  } catch {
    return fallback;
  }
};
