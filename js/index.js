// Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-3WLV6XLM6N");

var products = [
  "https://www.ebay.ca/itm/185681140136", // 1:
  "https://www.ebay.ca/itm/185681140136", // 2:
  "https://www.ebay.ca/itm/185681140136", // 3:
  "https://www.ebay.ca/itm/185681140136", // 4:
  "https://www.ebay.ca/itm/185681140136", // 5:
  "https://www.ebay.ca/itm/185681140136", // 6:
  "https://www.ebay.ca/itm/185681140136", // 7:
  "https://www.ebay.ca/itm/185681140136", // 8;
  "https://www.ebay.ca/itm/185681140136", // 9:
  "https://www.ebay.ca/itm/185681140136", // 10:
  "https://www.ebay.ca/itm/185681140136", // 11:
  "https://www.ebay.ca/itm/185681140136", // 12:
  "https://www.ebay.ca/itm/185681140136", // 13:
  "https://www.ebay.ca/itm/185681140136", // 14:
  "https://www.ebay.ca/itm/185681140136", // 15:
  "https://www.ebay.ca/itm/185681140136", // 16:
  "https://www.ebay.ca/itm/185681140136", // 17:
  "https://www.ebay.ca/itm/185681140136", // 18:
  "https://www.ebay.ca/itm/185681140136", // 19:
  "https://www.ebay.ca/itm/185681140136", // 20:
  "https://www.ebay.ca/itm/185681140136", // 21:
  "https://www.ebay.ca/itm/185681140136", // 22:
  "https://www.ebay.ca/itm/185681140136", // 23:
  "https://www.ebay.ca/itm/185681140136", // 24:
  "https://www.ebay.ca/itm/185681140136", // 25:
  "https://www.ebay.ca/itm/185681140136", // 26:
  "https://www.ebay.ca/itm/185681140136", // 27:
  "https://www.ebay.ca/itm/185681140136", // 28:
  "https://www.ebay.ca/itm/185681140136", // 29:
  "https://www.ebay.ca/itm/185681140136", // 30:
  "https://www.ebay.ca/itm/185681140136", // 31:
];

window.onload = function startUp() {
  const disclaimer = document.createComment(
    "DISCLAIMER: This website been created as a parody and a learning exercise with no intent to impersonate, mislead, disparage, defame or otherwise negatively impact any real-world persons or entities. All content is a work of fiction. Any similarity to real-world corporations, people, or current events is entirely coincidental. Please don't sue us."
  );
  var htmlElement = document.documentElement;
  htmlElement.insertBefore(disclaimer, htmlElement.firstChild);

  if (document.getElementById("year")) {
    const year = new Date().getFullYear();
    document.getElementById("year").innerHTML = year;
  }
  if (document.getElementById("potd")) {
    const today = new Date().getDate();
    document.getElementById("potd").href = products[today];
  }
};
