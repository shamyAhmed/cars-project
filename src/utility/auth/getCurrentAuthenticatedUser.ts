export default () => {
    try {
        const userObj = JSON.parse(window.localStorage.getItem("currentLoggedInUser") || "");
        return userObj
    } catch (e) {
        return null;
    }
}