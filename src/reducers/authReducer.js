
const authReducer = (state=null, {type, payload}) => {
    switch(type){
        case "LOGIN":
            return true;
        case "LOGOUT":
            return false;
        default:
            return state;
    }
}

export default authReducer;