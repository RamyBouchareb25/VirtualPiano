document.addEventListener('keydown', (event) => {
    let KeyName = event.key;
    const regex = /[asdfghjASDFGHJ]/g;
    if (KeyName.match(regex) !== null) {
        switch (KeyName) {
            case "a":
            case "A":
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
                break;

        }

    } else {
        console.error("you haven't pressed the right key!");
    }
})