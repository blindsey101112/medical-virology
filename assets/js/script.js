  // Data for available pages
const data = {
    "Influenza": "/medical-virology/pages/influenza.html",
    "SARS-CoV-2": "sars-cov-2.html",
    "Cytomegalovirus": "cmv.html",
    "Epstein-Barr Virus": "ebv.html",
    "HIV": "hiv.html",
    "Viral Encephalitis": "encephalitis.html",
    "Viral Hepatitis": "hepatitis.html"
};

// Function to display suggestions as you type
function showSuggestions() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "";

    if (input) {
        for (let key in data) {
            if (key.toLowerCase().includes(input)) {
                const suggestion = document.createElement("p");
                suggestion.textContent = key;
                suggestion.onclick = () => {
                    window.location.href = data[key];
                };
                suggestionsDiv.appendChild(suggestion);
            }
        }
    }
}
