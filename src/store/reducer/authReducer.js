initialState = {
  isAuthorized: false,
};
function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'SIGNIN':
      return {isAuthorized: true};
    case 'EXIT':
      return {isAuthorized: false};

    default:
      return state;
  }
}
export default authReducer
