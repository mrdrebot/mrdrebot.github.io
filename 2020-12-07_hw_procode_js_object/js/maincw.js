let str = "block_element--modificator";
let str2 = "";

// str2 = str.slice(0, str.indexOf("_")).slice((str.length - 1));
// str2 = `${str.slice(0, str.indexOf("_"))}${str.slice(str.lastIndexOf("--"))}`;
// str2 = `${str.slice(0, str.indexOf("_"))}${str.slice(str.indexOf("--"))}`;
// str2 = `${str.slice((str.indexOf("--") + 2))}`;
// str2 = str.slice(0, str.indexOf("_"));
str2 = str.replaceAll("--", "-").replaceAll("__", "-").replaceAll("_", "-").split("-").map(elem => `${elem[0].toUpperCase()}${elem.substring(1)}`).map(elem => `${elem[0].toUpperCase()}${elem.substring(1)}`).join("");


console.log(str2);