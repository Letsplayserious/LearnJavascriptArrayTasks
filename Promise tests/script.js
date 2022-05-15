const firstImg = "images/-5204220712062137887_121.jp";
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
        image.addEventListener('error', () => {
            reject();
        })
    });
}

const firstPic = loadImage(firstImg);

firstPic
.then(()=>{
    console.log("ok");
    // loadImage(secondImg);
})
.catch(()=>console.log("not ok"))
.finally(()=>console.log("finally"));
// .then(()=>loadImage(thirdImg))
// .then(()=>console.log("third"));