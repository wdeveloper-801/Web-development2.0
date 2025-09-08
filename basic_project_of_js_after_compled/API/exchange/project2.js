const currencyList = {
    USD: "US",    // United States Dollar
    EUR: "EU",    // Euro
    GBP: "GB",    // British Pound
    INR: "IN",    // Indian Rupee
    PKR: "PK",    // Pakistani Rupee
    AUD: "AU",    // Australian Dollar
    CAD: "CA",    // Canadian Dollar
    JPY: "JP",    // Japanese Yen
    CNY: "CN",    // Chinese Yuan
    AED: "AE",    // UAE Dirham
    SAR: "SA",    // Saudi Riyal
    TRY: "TR",    // Turkish Lira
    NZD: "NZ",    // New Zealand Dollar
    SGD: "SG",    // Singapore Dollar
    CHF: "CH",    // Swiss Franc
    ZAR: "ZA",    // South African Rand
    MXN: "MX",    // Mexican Peso
    BRL: "BR",    // Brazilian Real
    RUB: "RU",    // Russian Ruble
    KRW: "KR",    // South Korean Won
    NGN: "NG",    // Nigerian Naira
    EGP: "EG",    // Egyptian Pound
    THB: "TH",    // Thai Baht
    MYR: "MY"     // Malaysian Ringgit
}

const fromSelect = document.querySelector("#fromm");
const toSelect = document.querySelector("#too");

// Populate dropdowns dynamically
Object.keys(currencyList).forEach(code => {
    const optionFrom = document.createElement("option");
    optionFrom.value = code;
    optionFrom.text = code;
    fromSelect.appendChild(optionFrom);

    const optionTo = document.createElement("option");
    optionTo.value = code;
    optionTo.text = code;
    toSelect.appendChild(optionTo);
});


// Set default selections
fromSelect.value = "USD";
toSelect.value = "PKR";


let btn = document.querySelector("#btn");
btn.addEventListener("click", async function () {
    let inpu = document.querySelector("#number").value;
    let from = document.querySelector("#fromm").value;
    let to = document.querySelector("#too").value;
    try {
        let done1 = await fetch(`https://v6.exchangerate-api.com/v6/83e8641663ff39b09610814a/latest/${from}`)
        let done2 = await done1.json();
        let done3 = done2.conversion_rates[to];
        let done4 = done3 * inpu;
        document.querySelector("#line").innerText = `${inpu} ${from} = ${done4.toFixed(2)} ${to}`
    } catch (error) {
           document.querySelector("#line").innerText = "Error fetching exchange rate.";
        console.log(error);
    }
})





