var products = [
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
    'https://www.ebay.ca/itm/185681140136',
]

function getPOTD() {
    var today = new Date().getDate();
    document.getElementById("potd").href = products[today];
}