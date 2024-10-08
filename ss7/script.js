let conversionRates = {
    "VND": {
        "USD": 0.00004,
        "VND": 1
    },
    "USD": {
        "VND": 24842,
        "USD": 1
    }
};

function convertCurrency() {
    let amount = parseFloat(document.getElementById("amount").value);
    let  fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;


    if (isNaN(amount) || amount <= 0) {
        return "Vui lòng nhập một số hợp lệ.";
    }


    const convertedAmount = amount * conversionRates[fromCurrency][toCurrency];
    return `Kết quả: ${convertedAmount.toFixed(2)} ${toCurrency}`;
}

document.getElementById("convertBtn").addEventListener("click", function() {
    let resultText = convertCurrency();
    document.getElementById("result").textContent = resultText;
});
