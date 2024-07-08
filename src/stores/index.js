export const setLocalStorage = (key, value) => {
  if (key && value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const isConnected = () => {
  return Boolean(getSessionStorage("token"));
};

export const getLocalStorage = (key) => {
  if (key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return null;
};

export const setSessionStorage = (key, value) => {
  if (key && value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};

export const getSessionStorage = (key) => {
  if (key) {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return null;
};

export const clearAllStore = () => {
  sessionStorage.clear();
  localStorage.clear();
};
