import React from "react";

const useIndexDb = (db_name, obj_name) => {
  if (!window["indexedDB"]) {
    console.warn("This browser doesn't support IndexedDB");
    return null;
  }

  let db, collection, transaction;

  const request = window.indexedDB.open(db_name, 1);

  request.onupgradeneeded = function (event) {
    db = event.target.result;

    if (!db.objectStoreNames.contains(obj_name)) {
      collection = db.createObjectStore(obj_name);
    } 
   
  };
  request.onsuccess = function (event){
     db = event.target.result;
     transaction = db.transaction([obj_name], "readwrite");
     collection = transaction.objectStore(obj_name);

  }
  const setData = (data) => {
    collection.add(data)
  };

  const getData = async (id) => {
    const getREquet = collection.get(id);
     return new Promise((resolve)=>{
      getREquet.onsuccess= function(event){
        const data = event.target.result;
         resolve(data)
      }
     })
  };

  return {setData, getData}
};

export default useIndexDb;