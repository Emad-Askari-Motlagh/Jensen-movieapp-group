import FetchFromStorage from "utils/fetchFromStorage";

export default function addToStorage(key, value) {
  try {
    if (!key || !value) {
      throw new Error("Invalid key");
    }
    localStorage.setItem(key, value);
  } catch (error) {
    throw error;
  }
}
