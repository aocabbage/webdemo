import loginDataFile from "../src/Data/loginData";

export async function login(username, password) {
    console.log(loginDataFile);

    const loginData = loginDataFile; // array

    let loggedIn = false;

    for (let i = 0; i < loginData.length; i++) {
        if(loginData[i].username == username && loginData[i].password == password) {
            loggedIn = true;
        }
    }

    if(loggedIn) {
        console.log("Logged in!");
    }
    else {
        console.log("Failed to log in!");
    }
}