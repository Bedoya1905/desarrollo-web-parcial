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

