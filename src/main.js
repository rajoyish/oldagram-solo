import './reset.css';
import './style.css';

const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'https://i.postimg.cc/8cdDDfv7/avatar-vangogh.jpg',
    post: 'https://i.postimg.cc/XYY3SJYv/post-vangogh.jpg',
    comment: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'https://i.postimg.cc/Hk6YVMh5/avatar-courbet.jpg',
    post: 'https://i.postimg.cc/m2RBjVxC/post-courbet.jpg',
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'https://i.postimg.cc/8C3TbSDz/avatar-ducreux.jpg',
    post: 'https://i.postimg.cc/kXc9p89Z/post-ducreux.jpg',
    comment:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
];

const mainEl = document.querySelector('.posts');

for (let i = 0; i < posts.length; i++) {
  const post = posts[i];

  const article = document.createElement('article');
  article.className = 'posts__item';
  article.setAttribute('tabindex', '0');
  article.innerHTML = `
    <div class="post">
      <header class="post__user-profile">
        <img
          src="${post.avatar}"
          alt="Profile photo of ${post.name}"
          class="post__avatar"
        />
        <div class="post__user-info">
          <h2 class="post__name">${post.name}</h2>
          <div class="post__location">${post.location}</div>
        </div>
      </header>
      <div class="post__image-wrapper">
        <img
          src="${post.post}"
          alt="Post image by ${post.name} from ${post.location}"
          class="post__image"
        />
      </div>
      <div class="post__actions" aria-label="Post actions">
        <button class="post__icon post__icon--like" aria-label="Like post by ${post.name}">
          <img
            src="https://i.postimg.cc/Rhx9jLWr/icon-heart.png"
            alt=""
            aria-hidden="true"
          />
        </button>
        <button class="post__icon post__icon--comment" aria-label="Comment on post by ${post.name}">
          <img
            src="https://i.postimg.cc/FK19cKM6/icon-comment.png"
            alt=""
            aria-hidden="true"
          />
        </button>
        <button class="post__icon post__icon--dm" aria-label="Send direct message to ${post.name}">
          <img
            src="https://i.postimg.cc/ZRd47MKF/icon-dm.png"
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>
      <p class="post__likes-count"><strong>${post.likes}</strong> likes</p>
      <div class="post__body">
        <span class="post__username">${post.username}</span>
        <span class="visually-hidden">says:</span>
        <p class="post__text">${post.comment}</p>
      </div>
    </div>
  `;
  mainEl.appendChild(article);
}
