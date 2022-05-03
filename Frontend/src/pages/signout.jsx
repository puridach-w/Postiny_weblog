import React from "react";

function signout() {
    localStorage.clear();
    window.location = "/";
    return;
}

export default signout;