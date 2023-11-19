// authProvider.js
const ACCESS_TOKEN = 'access_token';

function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN);
}

function setAccessToken(accessToken) {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
}

function removeAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN);
}

const fakeAuthProvider = {
    hasAccess: getAccessToken(),
    signin(accessToken, callback) {
        setAccessToken(accessToken);
        setTimeout(() => {
            callback();
        }, 100);
    },
    signout(callback) {
        removeAccessToken();
        setTimeout(() => {
            callback();
        }, 100);
    },
};

export { fakeAuthProvider };
