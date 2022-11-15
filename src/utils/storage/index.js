export const getDataFromLocal = key => localStorage.getItem(key)
export const addDataFromLocal = (key, data) => localStorage.setItem(key, data)
export const deleteDataFromLocal = key => localStorage.removeItem(key)
export const clearLocal = () => localStorage.clear()