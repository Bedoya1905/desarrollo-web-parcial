const offers = document.getElementById("offers");
const showMoreOffers = document.getElementById("show-more-offers");

// Clase de Game
// Yo creo que se debe de editar en algun momento en el futuro
class Game {
    constructor(id, title, genre, develpoer, boxArt, release, price, offer) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.developer = develpoer;
        this.boxArt = boxArt;
        this.release = release;
        this.price = price;
        this.offer = offer;
    }
}

// Esto va a ser epicamente ineficiente, pero por limitantes de mis habilidades y tiempo tocara de esta forma
// Esta lista contendra toda la libreria de nuestra tienda digital

const library = [
    new Game(1, "Expedition 33", "RPG", "Sandfall Interactive", "./images/games/ps5/expedition33.jpg", new Date(2025, 3, 24), 50, 0.10),
    new Game(2, "Collegue Football 26", "Sports", "EA Sports", "./images/games/ps5/colleguefootball.jpg", new Date(2025, 6, 10), 65, 0.10),
    new Game(3, "Silent Hill 2", "Survival horror", "Konami", "./images/games/ps5/silenthill2.jpg", new Date(2024, 9, 8), 50, 0.4)
]