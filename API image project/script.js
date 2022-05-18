let button = document.getElementById("button");
let inputValue = document.getElementById("quantity");
button.addEventListener("click", addingPicture);
button.addEventListener("click", ()=>console.log(inputValue.value));


function addingPicture(arg){
    $.ajax(`https://repetitora.net/api/JS/Images?page=${inputValue.value}&count=1`, {
        success: function(data) {
            let image = new Image;
            data.map(item => {
                let image = new Image();
                image.src = item.original;
                document.body.appendChild(image);
            });
        }
    });
}