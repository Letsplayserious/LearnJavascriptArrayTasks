const firstImg = "images/-5204220712062137887_121.jpg";
const secondImg = "images/-5204220712062137888_121.jpg";
const thirdImg = "images/-5204220712062137889_121.jpg";


function loadImage(url){
    return new Promise(function(resolve, reject){
        const image = new Image();
        image.src = url;
        document.body.append(image);
        image.addEventListener('load', () => {
            resolve();
        });
    });
}

const firstPic = loadImage(firstImg);