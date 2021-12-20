const { route } = require("express/lib/application");

const routeri = async () => {
    const routeri = [
        {path:"/", view: () => console.log("Naxulobs Mtavar martvis panels")},
        {path:"/", view: () => console.log("Naxulobs Postebis gverds")},
        {path:"/", view: () => console.log("Naxulobs Settingebs")},
    ];
    const SavaraudoShetavseba = routeri.map(route)
};