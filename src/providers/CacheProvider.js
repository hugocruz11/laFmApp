import { AsyncStorage } from 'react-native';

const setItem = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return null;
  }
};

const getItem = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    return null;
  }
};

export default {
  getItem,
  setItem,
};
