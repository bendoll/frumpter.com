// Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-3WLV6XLM6N");

var products = [
  "https://www.ebay.ca/itm/333200896831", // 1:
  "https://www.ebay.ca/itm/333200896831", // 2:
  "https://www.ebay.ca/itm/333200896831", // 3:
  "https://www.ebay.ca/itm/333200896831", // 4:
  "https://www.ebay.ca/itm/333200896831", // 5:
  "https://www.ebay.ca/itm/333200896831", // 6:
  "https://www.ebay.ca/itm/333200896831", // 7:
  "https://www.ebay.ca/itm/333200896831", // 8;
  "https://www.ebay.ca/itm/333200896831", // 9:
  "https://www.ebay.ca/itm/333200896831", // 10:
  "https://www.ebay.ca/itm/333200896831", // 11:
  "https://www.ebay.ca/itm/333200896831", // 12:
  "https://www.ebay.ca/itm/333200896831", // 13:
  "https://www.ebay.ca/itm/333200896831", // 14:
  "https://www.ebay.ca/itm/333200896831", // 15:
  "https://www.ebay.ca/itm/333200896831", // 16:
  "https://www.ebay.ca/itm/333200896831", // 17:
  "https://www.ebay.ca/itm/333200896831", // 18:
  "https://www.ebay.ca/itm/333200896831", // 19:
  "https://www.ebay.ca/itm/333200896831", // 20:
  "https://www.ebay.ca/itm/333200896831", // 21:
  "https://www.ebay.ca/itm/333200896831", // 22:
  "https://www.ebay.ca/itm/333200896831", // 23:
  "https://www.ebay.ca/itm/333200896831", // 24:
  "https://www.ebay.ca/itm/333200896831", // 25:
  "https://www.ebay.ca/itm/333200896831", // 26:
  "https://www.ebay.ca/itm/333200896831", // 27:
  "https://www.ebay.ca/itm/333200896831", // 28:
  "https://www.ebay.ca/itm/333200896831", // 29:
  "https://www.ebay.ca/itm/333200896831", // 30:
  "https://www.ebay.ca/itm/333200896831", // 31:
  // "https://www.ebay.ca/itm/333200896831", // chili
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
