'use strict;'

// removeAllChildNodes: clears current info on HTML page
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

document.getElementById("bitcoin").addEventListener("click", function () {
    const btcURL = "https://api.coindesk.com/v1/bpi/currentprice.json";
    axios.get(btcURL)
        .then(response => appendData(response.data.bpi))
        .catch(err => console.error(err));
    
    const appendData = (data) => {
        //console.log(data.EUR);

        let BTCprice = document.getElementById("infoDiv");
        removeAllChildNodes(BTCprice);

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

            let cryptoList = document.getElementById("infoDiv");
            removeAllChildNodes(cryptoList);

            let title = document.createElement("h3");
            title.innerText = "Other Cryptocurrency Prices vs Bitcoin";
            cryptoList.appendChild(title);

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


document.getElementById("nft").addEventListener("click", function () {
    const openseaURL = "https://api.opensea.io/api/v1/assets?format=json"

    axios.get(openseaURL)
        .then(response => appendData(response.data))
        .catch(err => console.error(err));
    
    const appendData = (data) => {
        let divArea = document.getElementById("infoDiv");
        removeAllChildNodes(divArea);
    
        let table = document.createElement("table");
        let tableTopRow = document.createElement("tr");
        let tableTopRowHeading1 = document.createElement("th");
        let tableTopRowHeading2 = document.createElement("th");
        tableTopRowHeading1.innerText = "Collection Name";
        tableTopRowHeading2.innerText = "Thumbnail";
        tableTopRow.appendChild(tableTopRowHeading1);
        tableTopRow.appendChild(tableTopRowHeading2);
        table.appendChild(tableTopRow);
        
    
        const appendTable = (assetData) => {

            let newRow = document.createElement("tr");
    
            let newName = document.createElement("td");
            let getName = document.createElement("p");
            getName.innerText = assetData.collection.name;
            newName.appendChild(getName);
            newRow.appendChild(newName);
    
            let newThumbnail = document.createElement("td");
            let thumbnailURL = document.createElement("img");

            if (assetData.image_thumbnail_url){
                thumbnailURL.src = assetData.image_thumbnail_url;
            } else {
                thumbnailURL.src = assetData.collection.image_url;
            }

            thumbnailURL.src = assetData.image_thumbnail_url;
            newThumbnail.appendChild(thumbnailURL);
            newRow.appendChild(newThumbnail);
            table.appendChild(newRow)
        }
    
        for (let i=0; i<5; i++){
            if (data.assets[i]){
                let assetData = data.assets[i];
                appendTable(assetData);
            }  
        }
        
        divArea.appendChild(table);
    }
})
