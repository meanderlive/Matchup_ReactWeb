
const store = () => {
  const setData = (key, val) => {
    localStorage.setItem(key, val);
  };
  const setObjectData = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val));
  };
  const getObjectData = (key) => {
    return JSON.parse(localStorage.getItem(key))
  };
  const getData = (key) => {
    const data = localStorage.getItem(key);
    if (!data) return null;
    try {
      return JSON.parse(data);
    } catch {
      return data;
    }
  };

  return { setData, getData, getObjectData, setObjectData }
};

export default store;