export const onLoadContact = (key, value) => {
    try {
        const getItemFromLocalStorage = localStorage.getItem(key);
        // return getItemFromLocalStorage;
        return getItemFromLocalStorage === null
            ? undefined
            : JSON.parse(getItemFromLocalStorage);
        
    } catch (err) {
        console.log(err.message);
    }
    

};
