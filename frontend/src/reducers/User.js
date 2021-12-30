const username = (state = 'Engage User', action) => {
    switch(action.type){
      case "login":
        state = action.user;
        console.log('name change')
        return state;
      case "logout":
        state = "Engage User";
        return state;
      default:
        return state;
    }
}

export default username;
