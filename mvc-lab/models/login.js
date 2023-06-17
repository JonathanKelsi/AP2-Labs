    const users = [
    { username: "guest", password: "1234" },
    { username: "hemi", password: "1234" },
];

function checkUsernameAndPassword(username, password) {
    for (const i in users) {
        const user = users[i];
        if (user.username == username && user.password == password) return true;
    }

    return false;
}

export default {
    checkUsernameAndPassword
};
