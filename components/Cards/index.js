// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articles = axios.get('https://lambda-times-backend.herokuapp.com/articles');

articles
    .then(articleObj => {
        const articles = articleObj.data.articles;

        Object.keys(articles).forEach((articleTopic) => {
            articles[articleTopic].forEach(article => {
                const newArticle = createArticle(article);
                const cardsContainer = document.querySelector('.cards-container');

                cardsContainer.appendChild(newArticle);
            });
        });
    })

    .catch(err => {
        console.log('ERROR: ', err);
      });

const createArticle = articleInfo => {
    const articleCard = document.createElement('div');
    articleCard.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = articleInfo.headline;
    articleCard.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');
    articleCard.appendChild(author);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
    author.appendChild(imageContainer);

    const image = document.createElement('img');
    image.src = articleInfo.authorPhoto;
    imageContainer.appendChild(image);

    const authorName = document.createElement('span');
    authorName.textContent = `By ${articleInfo.authorName}`;
    author.appendChild(authorName);



    return articleCard;
};



