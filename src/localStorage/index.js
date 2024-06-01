import SecureStorage from 'react-secure-storage';


export const saveData = (key, value) => {
  SecureStorage.setItem(key, value);
};

export const getData = (key) => {
  return SecureStorage.getItem(key);
};

export const removeData = (key) => {
  SecureStorage.removeItem(key);
};
