const url = 'https://api.chucknorris.io/jokes/random';
const $button = document.querySelector("#button");
const $divWrapp = document.querySelector(".wrapp")
$button.addEventListener("click", function() {
    fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(myJson) {
        let joke = myJson.value
        let p = document.createElement("p");
        p.textContent = joke;
        $divWrapp.appendChild(p);
    })
    $divWrapp.textContent = "";
})