/* 
    An Array of routes that are accessible to the public
    These route do not require authentication
    @type {string[]}
*/
export const publicRoutes = ["/"];

/* 
    An Array of routes that are use for authentication
    These route redirect logged in users to /settings
    @type {string[]}
*/
export const authRoutes = ["/login", "/register", "/error"];

/* 
    The prefix for API authentication routes
    Routes that start with this prefix are used for api authentication purposes
    @type {string}
*/
export const apiAuthPrefix = "/api/auth";

/* 
    The default redirect path after logging in
    @type {string}
*/

export const DEFAULT_LOGIN_REDIRECT = "/account";
