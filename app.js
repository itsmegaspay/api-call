let currentPage = 1;
const postsContainer = document.getElementById('posts');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function fetchPosts(page) {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
        .then(response => response.json())
        .then(data => {
            displayPosts(data);
            currentPage = page;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayPosts(posts) {
    postsContainer.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
        postsContainer.appendChild(postElement);
    });
}

function setupPagination() {
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            fetchPosts(currentPage - 1);
        }
    });
    nextBtn.addEventListener('click', () => {
        fetchPosts(currentPage + 1);
    });
}

fetchPosts(currentPage);
setupPagination();
