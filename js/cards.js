const parentDir = './images/';
const btnSourceImage = `${parentDir}git.png`;
const btnLiveImage = `${parentDir}elp.jpg`;

const cardsProject = [
  {
    id: 1,
    title: 'Tonic',
    caption: 'CANOPY &#8226;Back End Dev &#8226;2022',
    description: 'A daily selection of privately personalized reads; no accounts <br> or sign-ups required.',
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br> been the industry's standard dummy text ever since the 1500s, when an unknown printer took a <br> galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the <br> printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text <br> ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with <br> the releorem Ipsum is simply dummy text of the <br> printing and typesetting industry. Lorem Ipsum <br> han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of <br> type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and <br> typesetting industry. Lorem Ipsum<br> has been the industry's standard dummy text ever since <br> the 1500s, when an unknown printer took a galley of <br>type and scrambled it 1960s with the relea",
    featuredImage: `${parentDir}snapshoot_1.jpg`,
    imageAlt: 'tonic project',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    caption: 'FACEBOOK &#8226;Full Stack Dev &#8226;2022',
    description: 'Experimental content creation feature that allows users to <br> add to an existing story over the course of a day without <br> spamming their friends.',
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br> been the industry's standard dummy text ever since the 1500s, when an unknown printer took a <br> galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the <br> printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text <br> ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with <br> the releorem Ipsum is simply dummy text of the <br> printing and typesetting industry. Lorem Ipsum <br> han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of <br> type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and <br> typesetting industry. Lorem Ipsum<br> has been the industry's standard dummy text ever since <br> the 1500s, when an unknown printer took a galley of <br>type and scrambled it 1960s with the relea",
    featuredImage: `${parentDir}snapshoot_2.jpg`,
    imageAlt: 'Multi-Post Stories project',
  },
  {
    id: 3,
    title: 'Facebook 360',
    caption: 'FACEBOOK &#8226;Full Stack Dev &#8226;2022',
    description: "Exploring the future of media in Facebook's first Virtual Reality <br> app; a place to discover and enjoy 360 photos and videos on <br> Gear VR.",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br> been the industry's standard dummy text ever since the 1500s, when an unknown printer took a <br> galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the <br> printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text <br> ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with <br> the releorem Ipsum is simply dummy text of the <br> printing and typesetting industry. Lorem Ipsum <br> han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of <br> type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and <br> typesetting industry. Lorem Ipsum<br> has been the industry's standard dummy text ever since <br> the 1500s, when an unknown printer took a galley of <br>type and scrambled it 1960s with the relea",
    featuredImage: `${parentDir}snapshoot_3.jpg`,
    imageAlt: 'Facebook 360 project',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    caption: 'Uber &#8226;Lead Developer &#8226;2022',
    description: 'A smart assistant to make driving more safe, efficient, and fun <br> by unlocking your most expensive computer: your car.',
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br> been the industry's standard dummy text ever since the 1500s, when an unknown printer took a <br> galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the <br> printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text <br> ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with <br> the releorem Ipsum is simply dummy text of the <br> printing and typesetting industry. Lorem Ipsum <br> han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of <br> type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and <br> typesetting industry. Lorem Ipsum<br> has been the industry's standard dummy text ever since <br> the 1500s, when an unknown printer took a galley of <br>type and scrambled it 1960s with the relea",
    featuredImage: `${parentDir}snapshoot_4.png`,
    imageAlt: 'Uber Navigation project',
  },
];

let htmlCard = '';

cardsProject.forEach((card) => {
  htmlCard += `
  <div class="card-tonic">
    <img src="${card.featuredImage}" alt="${card.imageAlt
}">
        <div class="card-detail">

            <h2>${card.title}</h2>
            <p class="card-subtitle">${card.caption}</p>
            <p class="card-message">
                ${card.description}
            </p>
            <ul class="languages-list">
                <li>html</li>
                <li>css</li>
                <li>javascript</li>
            </ul>
            <button type="button" class="button" onclick="toggleModal(${card.id})">See Project</button>
        </div>
        </div>
        <div class="modal">
            <div class="modal-box">
                <div class="detail-top">
                    <h2>${card.title}</h2>
                    <span class="close-button">X</span>
                </div>
                <div class="detail-img">
                <p class="card-subtitle">${card.caption}</p>
                <img id="img-detail" src="${card.featuredImage}" alt="${card.imageAlt
}">
                </div>

            <div class="detail-description">
                  <div>
                    <p>
                        ${card.details}
                    </p>
                  </div>
                  <div class="details-container">
                  <div class="list-menu-one">
                    <ul>
                    <li>html</li>
                    <li>css</li>
                    <li>javascript</li>
                   </ul>
                    </div>
                    <div class="list-menu-two">
                    <ul>
                        <li>gitthub</li>
                        <li>ruby</li>
                        <li>Bootstraps</li>
                    </ul>
           
                    </div>
                   
                    <div class="btn-details">
                    <button type="button" class="button-detail" onclick="location.href='https://looh16.github.io/portfolio.github.io/';">See live<img id="img-live" src="${btnLiveImage}" alt="${card.imageAlt
}"></button>
                        <button type="button" class="button-detail" onclick="location.href='https://github.com/looh16/Portfolio';">See Source<img id="img-source" src="${btnSourceImage}" alt="${card.imageAlt
}"></button>
                    </div>
                  
                  </div>
                   
           </div></div>
    </div>
`;
});

const cards = document.querySelector('.cards');
cards.innerHTML = htmlCard;

const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

function toggleModal(cardId) {
  const card = cardsProject.filter((x) => x.id === cardId);
  const image = document.getElementById('img-detail');
  if (card.length > 0) { image.src = card[0].featuredImage; }

  modal.classList.toggle('show-modal');
}

closeButton.addEventListener('click', toggleModal);
