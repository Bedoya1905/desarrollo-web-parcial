const main = document.getElementById("main");

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
// (Fueron los primeros juegos en Amazon)
const library = [
    new Game(1, "Expedition 33", "RPG", "Sandfall Interactive", "../images/games/ps5/expedition33/front.jpg", new Date(2025, 3, 24), 50, 0.10),
    new Game(2, "College Football 26", "Sports", "EA Sports", "../images/games/ps5/collegefooball.jpg", new Date(2025, 6, 10), 70, 0.10),
    new Game(3, "Silent Hill 2", "Survival horror", "Konami", "../images/games/ps5/silenthill2.jpg", new Date(2024, 9, 8), 50, 0.4)

];

// Cambiar esto despues al resto de las cosas
const setGamesDisplay = (arr = library, docElement) => {
    docElement.innerHTML += arr.map(
        // Toca cambiar esto para que aguante lo del cambio en ofertas
        ({ id, title, release, developer, boxArt, price }) => {
            return `
                <div class="game-main" id="game-window-${id}">
                    <h3 class="game-title">${title}</h3>
                    <p class="game-date">${getDateString(release)}</p>
                    <img src="${boxArt}">
                    <p class="game-price">$${price}</p>
                    <button class="game-add-button">Add to cart</button>
                </div>`
        }
    ).join("");
/*
    gameAddCartButtons = document.querySelectorAll(".game-add-button");
    gameAddCartButtons.forEach(button => {
        button.addEventListener("click", () => console.log(`Click en ${button.id}`))
    });
*/
}

const getDateString = (date) => {
    // Se puede cambiar a fecha menos formal, pero esto funciona perfectamente
    return `${date.getDay()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
};

setGamesDisplay(library, main);
