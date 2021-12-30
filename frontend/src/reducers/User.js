const username = (state = 'Sasha Grey', action) => {
    switch(action.type){
      case "login":
        state= action.user;
        return state;
      case "logout":
        state = "User";
        return state;
      default:
        return state;
    }
}

export default username;
