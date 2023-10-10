import FetchFromStorage from "utils/fetchFromStorage";

export default function addToStorage(key, value) {
  try {
    if (!key || !value) {
      throw new Error("Invalid key");
    }
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw error;
  }
}
