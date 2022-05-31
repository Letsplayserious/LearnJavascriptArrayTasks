function myPostPrint(){
    const xhr = new XMLHttpRequest();
    // настроили запрос
    xhr.open('GET', `https://jsonplaceholder.typicode.com/posts`);
    xhr.addEventListener("load", () =>{
        let feedback = JSON.parse(xhr.responseText);
        // xhr.responseText - здесь хранится ответ с сервера, когда он приходит
        feedback.map(item => {
            console.log(item);
            const myBlock = document.createElement('div');
            myBlock.classList.add("post");
            output.appendChild(myBlock);
            const myBlockTitle = document.createElement('h4');
            myBlockTitle.classList.add("post__title");
            myBlockTitle.innerHTML = item.title;
            myBlock.appendChild(myBlockTitle);

            const myBlockText = document.createElement('div');
            myBlockText.innerHTML = item.body;
            myBlock.appendChild(myBlockText);
            // let myBLockText = item.body;

            // console.log(myBlockTitle, myBLockText);
        });
    });

    // отправили запрос
    xhr.send();
}

const button = document.getElementById("button");
const output = document.getElementById("output");
button.addEventListener("click", myPostPrint);
