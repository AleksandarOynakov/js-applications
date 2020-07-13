function attachEvents() {
    let outputPosts = document.getElementById('posts');
    let btnLoadPosts = document.getElementById('btnLoadPosts');
    let btnViewPost = document.getElementById('btnViewPost');
    let comments = document.getElementById('post-comments');
    btnLoadPosts.addEventListener('click', async function () {
        handleDataLoad(await sendRequest(`https://blog-apps-c12bf.firebaseio.com/posts.json`, 'GET'));
    });

    btnViewPost.addEventListener('click', async function () {
        let responseJSON = await sendRequest(`https://blog-apps-c12bf.firebaseio.com/posts/${outputPosts.value}.json`, 'GET');
        document.getElementById('post-title').textContent = responseJSON.title;
        document.getElementById('post-body').textContent = responseJSON.body;
        let commentsResponse = await sendRequest(`https://blog-apps-c12bf.firebaseio.com/comments.json`, 'GET');
        comments.innerHTML = '';
        for (const key in commentsResponse) {
            if (commentsResponse[key].postId === responseJSON.id) {
                let li = document.createElement('li');
                li.setAttribute('id',`${commentsResponse[key].id}`);
                li.textContent = commentsResponse[key].text;
                comments.appendChild(li);
            }
        }

    });

    async function sendRequest(url, method) {
        try {
            let response = await fetch(url, { method });
            if (response.status !== 200) {
                throw (response);
            }
            let dataJSON = await response.json();
            return dataJSON;
        } catch (err) {
            document.getElementById('post-comments').textContent = err.statusText;
        }
    }

    function handleDataLoad(dataJSON) {
        for (const key in dataJSON) {
            let option = document.createElement('option');
            option.value = key;
            option.textContent = dataJSON[key].title;
            outputPosts.appendChild(option);
        }
    }
}

attachEvents();

