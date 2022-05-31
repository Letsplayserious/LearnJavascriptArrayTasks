function pushingData(body, callback){
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `https://jsonplaceholder.typicode.com/posts`);
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        callback(response);
    });

    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

    xhr.send(JSON.stringify(body));
}

const myObject = {
    title: 'Therre is n...',
    body: 'believe in yourself and heaven will fall at your feet',
}

const postButton = document.getElementById("post-button");

postButton.addEventListener("click", () => {
    pushingData(myObject, (response) => {
        const backPost = document.createElement("div");
        backPost.classList.add("post");
        const myBackOutput = document.getElementById("output");
        myBackOutput.appendChild(backPost);

        const myBackTitle = document.createElement("h4");
        myBackTitle.classList.add("post__title");
        myBackTitle.innerHTML = response.title;
        backPost.appendChild(myBackTitle);

        const myBackText = document.createElement("p");
        myBackText.classList.add("post__txt");
        myBackText.innerHTML = response.body;
        backPost.appendChild(myBackText);
        console.log(response);
    })
});

function specialHttpRequest({method, url} = {}, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.addEventListener('load', ()=>{
        const response = JSON.parse(xhr.responseText);
        callback(response);
    });

    xhr.addEventListener("error", ()=>{
        console.log("error");
    })

    xhr.send();
}

specialHttpRequest({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",

}, res => {
    console.log(res);
})