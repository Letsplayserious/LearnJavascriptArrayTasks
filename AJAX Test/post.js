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
    try{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.addEventListener('load', ()=>{
            if(Math.floor(xhr.status/100)!==2){
                callback(`Error. Status code: ${xhr.status}`, xhr);
                return;
            }
            else{
                const response = JSON.parse(xhr.responseText);
                callback(null, response);
            }
        });

        xhr.addEventListener("error", ()=>{
            console.log("error");
        })

        xhr.send();
    } catch(error){
        callback(error);
    }
}

// specialHttpRequest({
//     method: "GET",
//     url: "https://jsonplaceholder.typicode.com/posts",

// }, (err, res) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(res);
// })

function http(){
    return{
        get(url, callback){
            try{
                const xhr = new XMLHttpRequest();
                xhr.open("GET", url);
                xhr.addEventListener('load', ()=>{
                    if(Math.floor(xhr.status/100)!==2){
                        callback(`Error. Status code: ${xhr.status}`, xhr);
                        return;
                    }
                    else{
                        const response = JSON.parse(xhr.responseText);
                        callback(null, response);
                    }
                });

                xhr.addEventListener("error", ()=>{
                    console.log("errorZ");
                })

                xhr.send();
            } catch(error){
                callback(error);
            }
        },
        post(url, body, headers, callback){
            try{
                const xhr = new XMLHttpRequest();
                xhr.open("POST", url);
                xhr.addEventListener('load', ()=>{
                    if(Math.floor(xhr.status/100)!==2){
                        callback(`Error. Status code: ${xhr.status}`, xhr);
                        return;
                    }
                    else{
                        const response = JSON.parse(xhr.responseText);
                        callback(null, response);
                    }
                });

                xhr.addEventListener("error", ()=>{
                    console.log("error");
                });

                if (headers){
                    Object.entries(headers).forEach(([key, value]) => {
                        xhr.setRequestHeader(key, value);
                    })
                }

                xhr.send(JSON.stringify(body));
            } catch(error){
                callback(error);
            }
        }
    }
}

const myHttp = http();
myHttp.post(`https://jsonplaceholder.typicode.com/posts`, myObject, {"Content-type": "application/json"}, (err, res) => {console.log(err,res)});



function getPost(id){
    return new Promise((resolve, reject) => {
        myHttp.get(`https://jsonplaceholder.typicode.com/posts/1`, (err, res) =>{
            if(err){
                reject();
            }
            resolve(res);
        })
    });
}

function getPostComments(){
    return new Promise((resolve, reject) => {
        myHttp.get(`https://jsonplaceholder.typicode.com/comments?postId=1`, (err, res) => {
            if(err){
                reject();
            }
            resolve(res);
        });
    });
}

function getUserCreatedPost(){
    return new Promise((resolve, reject)=>{
        myHttp.get(`https://jsonplaceholder.typicode.com/comments?postId=1`, (err, res) =>{
            if(err){
                reject();
            }
            resolve(res);
        })
    })
}

getPost()
.then(post => console.log(post))
.then(comments => getPostComments(comments))
.then(user => console.log(user))
.catch(err => console.log(err));