export function loadState(key) {
  try {
    const serializedState = localStorage.getItem(key);
    if (!serializedState) return undefined;
    
    const parsedState = JSON.parse(serializedState);

    // Agar ma'lumotning muddati o'tgan bo'lsa, uni o'chirish
    if (parsedState.expireAt < Date.now()) {
      localStorage.removeItem(key);
      return undefined;
    }

    return parsedState; // Yangi holatni qaytarish
  } catch (e) {
    console.error("Error loading state:", e);
    return undefined;
  }
}

export async function saveState(key, state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (e) {
    console.error("Error saving state:", e);
  }
}
