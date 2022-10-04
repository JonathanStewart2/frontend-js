'use strict;'

document.getElementById("bitcoin"),addEventListener("click", function () {
    const catURL = "https://api.coindesk.com/v1/bpi/currentprice.json";
    axios.get(catURL)
        .then(response => appendData(response.data.bpi))
        .catch(err => console.error(err));
    
    const appendData = (data) => {
        console.log(data.EUR);
        let BTCprice = document.getElementById("infoDiv");

        let BTCpriceTitle = document.createElement("h1");
        BTCpriceTitle.innerText = "Bitcoin Price";
        BTCprice.appendChild(BTCpriceTitle);

        const createElement = (parent, name, data) => {
            let paraHead = document.createElement("p");
            let paraHeadTitle = document.createElement("h3");
            paraHeadTitle.innerText = `${name}`;
            paraHead.appendChild(paraHeadTitle);

            let itemPrice = document.createElement("h6");
            itemPrice.innerText = `£${data}`;
            paraHead.appendChild(itemPrice);
            parent.appendChild(paraHead);
        }

        BTCGBP = document.createElement("p");
        createElement(BTCGBP, "GBP", data.GBP.rate);
        BTCprice.appendChild(BTCGBP);

        BTCUSD = document.createElement("p");
        createElement(BTCUSD, "USD", data.USD.rate);
        BTCprice.appendChild(BTCUSD);

        BTCEUR = document.createElement("p");
        createElement(BTCEUR, "EUR", data.EUR.rate);
        BTCprice.appendChild(BTCEUR);
    }
})



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