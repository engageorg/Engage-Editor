var userName = 'Engage User';
if(localStorage.getItem("engage-user")){
   userName = localStorage.getItem("engage-user");
}
const username = (state = userName, action) => {
    switch(action.type){
      case "login":
        state = action.user;
        localStorage.setItem("engage-user", action.user);
        return state;
      case "logout":
        state = "Engage User";
        return state;
      default:
        return state;
    }
}

export default username;
