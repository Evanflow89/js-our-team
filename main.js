const cardContainer = document.querySelector(".team-container");

const cards = [
    {
        name: "Wayne Barnett",
        img: "img/wayne-barnett-founder-ceo.jpg",
        role: "Founder & CEO",
    },
    {
        name: "Angela Caroll",
        img: "img/angela-caroll-chief-editor.jpg",
        role: "Chief Editor",
    },
    {
        name: "Walter Gordon",
        img: "img/walter-gordon-office-manager.jpg",
        role: "Office Manager",
    },
    {
        name: "Angela Lopez",
        img: "img/angela-lopez-social-media-manager.jpg",
        role: "Social Media Manager",
    },
    {
        name: "Scott Estrada",
        img: "img/scott-estrada-developer.jpg",
        role: "Developer",
    },
    {
        name: "Barbara Ramos",
        img: "img/barbara-ramos-graphic-designer.jpg",
        role: "Graphic Designer",
    },
];


for (let i = 0; i < cards.lenght; i++) {
    console.log(cards[i]);
}