const changeButton = document.getElementById('changeColorButton');
const colorName = document.getElementById('colorNmae');

const containerColorName = document.querySelector('.container-color-name');
const body = document.querySelector('body');

const HEX = "0123456789ABCDEF";
const hexNumbers = HEX.split('');


const randomNumHex = () => {
    return Math.floor(Math.random() * HEX.length)
}

const copyHexNum = (copybtn, hex) => {
    copybtn.addEventListener("click", () => {
        let tempInput = document.createElement('input');

        tempInput.value = hex;

        document.body.appendChild(tempInput)
        tempInput.select();
        document.execCommand('copy');

        document.body.removeChild(tempInput)
    })
}

const changeColor = () => {
    changeButton.addEventListener('click', () => {

        let rawHex = "";
        for (let i = 0; i < 6; i++) {
            rawHex += hexNumbers[randomNumHex()]
        }

        let readyHex = `#${rawHex}`;

        body.style.backgroundColor = readyHex;
        containerColorName.innerHTML = `<p  id = "colorName" ><span class="hex">СOPY HEX COLOR</span> </p>`
        const hex = document.querySelector('.hex');
        copyHexNum(hex, readyHex)



    })
}

changeColor();


