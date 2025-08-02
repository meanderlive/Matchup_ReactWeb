
export const getKey = () => {
    const datingId = localStorage.getItem("userData");
    const dattingObj = JSON.parse(datingId);
    if (dattingObj?.data?.mode === "65943637acc570d6b14edf38") {
      return "metrimonial";
    } else if (dattingObj?.data?.mode === "659436bcacc570d6b14edf41") {
      return "dating";
    } else {
      return "dating";
    }
  };

  export const Mode = () => {
    const user = localStorage.getItem("userData");
    const users = JSON.parse(user);
    const mode = users?.data?.mode || '659436bcacc570d6b14edf41';
    return mode;
}

// export mode 
export const modeId = Mode();
export const MODE_METRI = '65943637acc570d6b14edf38';
export const MODE_DATING = '659436bcacc570d6b14edf41';


// EXPORT USER FROM LOCAL STORAGE 
export const LOCAL_USER_GENDER = () => {
  const user = localStorage.getItem("userData");
  const users = JSON.parse(user);
  return users?.data?.iAm;
}
export const LOCAL_USER_GENDER_METRI = () => {
  const user = localStorage.getItem("userData");
  const users = JSON.parse(user);
  return users?.data?.iAm;
}

// export curuent user
export const CURRENT_LOGIN_USER = () => {
  const user = localStorage.getItem("userData");
  const users = JSON.parse(user);
  return users?.data?._id;
}

export const USER_ID_LOGGEDIN = CURRENT_LOGIN_USER()

  


