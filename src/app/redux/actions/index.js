//USER SUCCESSFUL LOGIN
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const successfulLogin = () => ({type: LOGIN_SUCCESSFUL});

//USE FOR 'isLogin' OBJECT (UI STATE)
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const failedLogin = () => ({type: LOGIN_FAILED});