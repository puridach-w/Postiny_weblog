
function signout() {
    localStorage.clear();
    window.location = "/";
    return;
}

export default signout;