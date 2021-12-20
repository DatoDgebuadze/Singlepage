const router = async () => {
    const routes = [
        {path:"/", view: () => console.log("Naxulobs Mtavar martvis panels")},
        {path:"/posts", view: () => console.log("Naxulobs Postebis gverds")},
        {path:"/settings", view: () => console.log("Naxulobs Settingebs")},
    ];
    const SavaraudoShetavseba = router.map(route => {
        return{
            route: route,
            isMatch: location.pathname === route.path
        };
    });
    console.log(SavaraudoShetavseba);
};
document.addEventListener("DomContentLoaded", () => {
    router();
});

 


