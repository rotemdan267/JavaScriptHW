var posts = [
    {
        title: "title 1",
        body: "body 1"
    },
    {
        title: "title 2",
        body: "body 2"
    }
];

function addPost(post) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 3000);
    });
}

function getPosts() {
    let body = '';
    posts.forEach(element => {
        body += `<li>${element.title}</li>`
    });
    document.body.innerHTML = body;
}

async function printPosts() {
    await addPost({ title: "title 3", body: "body 3" });
    getPosts();
}

getPosts();
printPosts();