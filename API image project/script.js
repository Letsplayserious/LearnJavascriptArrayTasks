



let a = 198;

$.ajax('https://repetitora.net/api/JS/Images?page=4&count=2', {
    success: function(data) {
        let image = new Image;
        data.map(item => {
            let image = new Image();
            image.src = item.original;
            document.body.appendChild(image);
        });
    }
});