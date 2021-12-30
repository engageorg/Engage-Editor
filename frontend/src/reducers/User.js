const username = (state = 'Engage User', action) => {
    switch(action.type){
      case "login":
        state= action.user;
        return state;
      case "logout":
        state = "Engage User";
        return state;
      default:
        return state;
    }
}

export default username;
