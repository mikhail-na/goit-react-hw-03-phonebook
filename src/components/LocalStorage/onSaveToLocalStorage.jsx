export const onSaveToLocalStorage = (key, value) => {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
    
};