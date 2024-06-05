function calculateTMB() {
    var gender = document.getElementById("gender").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var age = parseInt(document.getElementById("age").value);
    var resultElement = document.getElementById("result");

    if (gender === "male") {
        var tmb = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        var tmb = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    resultElement.textContent = "Sua Taxa de Metabolismo Basal é: " + tmb.toFixed(2) + " calorias por dia.";
}
