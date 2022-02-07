document.addEventListener('keydown', (event) => {
    let KeyName = event.key;
    const regex = /[qsdfghjzetyuQSDFGHJZETYU]/g;
    if (KeyName.match(regex) !== null) {
        switch (KeyName) {
            case "q":
            case "Q":
                let audioA = new Audio("white_keys/A.mp3");
                    audioA.play();
                break;
            case "s":
            case "S":
                let audioS = new Audio("white_keys/S.mp3");
                audioS.play();
                break;
            case "d":
            case "D":
                let audioD = new Audio("white_keys/D.mp3");
                audioD.play();
                break;
            case "f":
            case "F":
                let audioF = new Audio("white_keys/F.mp3");
                audioF.play();
                break;
            case "g":
            case "G":
                let audioG = new Audio("white_keys/G.mp3");
                audioG.play();
                break;
            case "h":
            case "H":
                let audioH = new Audio("white_keys/H.mp3");
                audioH.play();
                break;
            case "j":
            case "J":
                let audioJ = new Audio("white_keys/J.mp3");
                audioJ.play();
                break
            case "z":
            case "Z":
                let audioW = new Audio("black_keys/W.mp3");
                audioW.play();
                break;
            case "e":
            case "E":
                let audioE = new Audio("black_keys/E.mp3");
                audioE.play();
                break;
            case "t":
            case "T":
                let audioT = new Audio("black_keys/T.mp3");
                audioT.play();
                break;
            case "y":
            case "Y":
                let audioY = new Audio("black_keys/Y.mp3");
                audioY.play();
                break;
            case "u":
            case "U":
                let audioU = new Audio("black_keys/U.mp3");
                audioU.play();
                break;
        }

    } else {
        console.error("you haven't pressed the right key!");
    }
})