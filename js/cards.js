var parentDir = "./images/";
const cardsArray = [
    {
        id: 1,
        title: "Tonic",
        caption: "CANOPY &#8226;Back End Dev &#8226;2022",
        description: "A daily selection of privately personalized reads; no accounts <br> or sign-ups required.",
        featuredImage: parentDir + "snapshoot_1.jpg",
        imageAlt: "good looking elphant"
    },
    {
        id: 2,
        title: "Multi-Post Stories",
        caption: "FACEBOOK &#8226;Full Stack Dev &#8226;2022",
        description: "Experimental content creation feature that allows users to <br> add to an existing story over the course of a day without <br> spamming their friends.",
        featuredImage: parentDir + "snapshoot_2.jpg",
        imageAlt: "good looking elphant"
    },
    {
        id: 3,
        title: "Facebook 360",
        caption: "FACEBOOK &#8226;Full Stack Dev &#8226;2022",
        description: "Exploring the future of media in Facebook's first Virtual Reality <br> app; a place to discover and enjoy 360 photos and videos on <br> Gear VR.",
        featuredImage: parentDir + "snapshoot_3.jpg",
        imageAlt: "good looking elphant"
    },
    {
        id: 4,
        title: "Uber Navigation",
        caption: "Uber &#8226;Lead Developer &#8226;2022",
        description: "A smart assistant to make driving more safe, efficient, and fun <br> by unlocking your most expensive computer: your car.",
        featuredImage: parentDir + "snapshoot_4.png",
        imageAlt: "good looking elphant"
    }
];

let htmlCode = ``;

cardsArray.forEach(function (card) {

    htmlCode =
        htmlCode +
        `
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
                <button type="button" class="button">See Project</button>
            </div>
    </div>
    `;
});

const cards = document.querySelector(".cards");
cards.innerHTML = htmlCode;






