import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() =>{
      try {
        // const localStorageItem = localStorage.getItem(itemName);
        // let parsedItem;
  
        // if (!localStorageItem) {
        //   localStorage.setItem(itemName, JSON.stringify(initialValue));
        //   parsedItem = initialValue;
        // }else {
        //   parsedItem = JSON.parse(localStorageItem);
        //   setItem(parsedItem);
        // }
        let parsedItem = !localStorage.getItem(itemName)
          ? initialValue
          : JSON.parse(localStorage.getItem(itemName));
        setItem(parsedItem);
  
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    },2000);
  }, []);

  const saveStorage = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };

  const saveItem = (newItem) => {
    saveStorage(newItem);
    setItem(newItem);
  };
  // console.log(item);
  return { item, saveItem, loading, error };
}

export { useLocalStorage };
