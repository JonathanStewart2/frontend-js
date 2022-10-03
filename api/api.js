'use strict;'

document.getElementById("crypto").addEventListener("click", function () {
    let url = "https://api2.binance.com/api/v3/ticker/24hr"

    axios.get(url)
        .then(response => appendData(response.data))
        .catch(err => console.error(err));

        const appendData = (data) => {
            console.log(data);
            let cryptoList = document.getElementById("infoDiv");
            for (let i = 0; i < 10; i++){
                let subCrypto = document.createElement("p");
        
                let subCryptoHead = document.createElement("h3");
                subCryptoHead.innerText = data[i].symbol;
        
                let subCryptoHeadInfo = document.createElement("h6");
                subCryptoHeadInfo.innerText = `Ask Price: ${data[i].askPrice}`;
        
                subCryptoHead.appendChild(subCryptoHeadInfo);
                subCrypto.appendChild(subCryptoHead);
        
                let breakLine = document.createElement("hr");
                cryptoList.appendChild(breakLine);
        
                cryptoList.appendChild(subCrypto);
        
            }
        }
});

document.getElementById("monster").addEventListener("click", function () {
    let url = "https://app.pixelencounter.com/api/basic/monsters/random";
    axios.get(url)
        .then(response => drawMonster(response.data))
        .catch(err => console.error(err));
    
        const drawMonster = (data) => {
            console.log(data);
            //let monsterDisplay = document.createElement("img");
        }

        }
    
})

const urlWSB = "https://www.reddit.com/r/Wallstreetbets/top.json?limit=10&t=year"