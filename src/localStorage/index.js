import SecureStorage from 'react-secure-storage';

// Function to save data
export const saveData = (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    SecureStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error("Error saving data", e);
  }
};

// Function to retrieve data
export const getData = (key) => {
  try {
    const jsonValue = SecureStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Error retrieving data", e);
  }
};

// Function to remove data
export const removeData = (key) => {
  try {
    SecureStorage.removeItem(key);
  } catch (e) {
    console.error("Error removing data", e);
  }
};

// Function to login user
export const loginUser = async (email, password) => {
  const user = getData('registerDetails');
  if (!user || user.email !== email || user.password !== password) {
    throw new Error('Invalid email or password');
  }
  const loginDetails = { email, password };
  saveData('loginDetails', loginDetails);
};

// Function to get logged-in user info
export const loginUserInfo = async () => {
  return getData('loginDetails');
};

export const logoutUser = async () => {
  try {
    removeData('loginDetails');
    console.log('User logged out successfully.');
  } catch (e) {
    console.error("Error logging out", e);
  }
};

// Function to register user
export const registerUser = async (name, email, phone, password) => {
  const registerDetails = { name, email, phone, password };
  saveData('registerDetails', registerDetails);
};


export const isUserLogin = async () => {
  const user = getData('loginDetails');
  return user !== null;
};