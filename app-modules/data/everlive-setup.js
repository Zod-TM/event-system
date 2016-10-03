const everlive = new Everlive({
    appId: "41vzn3bx8qqhv7v0",
    scheme: "https",
    authentication: {
        persist: true,
        onAuthenticationRequired: () => {
            window.location = '/#login';
        }
    }
});

export { everlive };