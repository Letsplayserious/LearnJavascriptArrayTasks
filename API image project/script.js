let resultBlock = document.getElementById("result");
let pageNumberEl = document.getElementById("page-number");
let clickMeButton = document.getElementById("click-me");
clickMeButton.addEventListener("click", makeRequest);

function makeRequest() {
    $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumberEl}&count=1`, {
        success: (data) => {
            data.map(el => {
                let img = document.createElement("img");
                img.src = el.thumbnail;
                document.getElementById("result").appendChild(img);
            })
        }
    })
}