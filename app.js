// app.js
document.addEventListener('DOMContentLoaded', function() {
    const newPostForm = document.getElementById('new-post-form');
    const postsDiv = document.getElementById('posts');

    newPostForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const content = document.getElementById('new-post-content').value;
        if (content) {
            const newPost = document.createElement('div');
            newPost.className = 'post';
            newPost.innerHTML = `
                <h3 class="post-author">Author</h3>
                <p class="post-content">${content}</p>
                <button class="like-btn">Like</button>
                <button class="comment-btn">Comment</button>
                <div class="comments"></div>
            `;
            postsDiv.prepend(newPost);
            document.getElementById('new-post-content').value = '';
        }
    });

    postsDiv.addEventListener('click', function(event) {
        if (event.target.classList.contains('like-btn')) {
            // Handle like button
        } else if (event.target.classList.contains('comment-btn')) {
            // Handle comment button
        }
    });
});
