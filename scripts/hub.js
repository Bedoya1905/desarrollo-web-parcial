const offers = document.getElementById("offers");
const newReleases = document.getElementById("new");
const forYou = document.getElementById("for-you");

const cart = document.getElementById("Cart");
const cartContent = document.getElementById("cart-content");
const priceDiv = document.getElementById("PriceDiv");

const body = document.getElementsByTagName("body");

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
// (Fueron los primeros juegos en Amazon)
const library = [
    new Game(1, "Expedition 33", "RPG", "Sandfall Interactive", "./images/games/ps5/expedition33/front.jpg", new Date(2025, 3, 24), 50, 0.10),
    new Game(2, "College Football 26", "Sports", "EA Sports", "./images/games/ps5/collegefooball.jpg", new Date(2025, 6, 10), 70, 0.10),
    new Game(3, "Silent Hill 2", "Survival horror", "Konami", "./images/games/ps5/silenthill2.jpg", new Date(2024, 9, 8), 50, 0.4)
];
const cartItems = [];

// Cambiar esto despues al resto de las cosas
const setGamesDisplay = (arr = library, docElement, buttonAddID) => {
    docElement.innerHTML += arr.map(
        // Toca cambiar esto para que aguante lo del cambio en ofertas
        ({ id, title, release, developer, boxArt, price }) => {
            return `
                <div class="game-main" id="game-window-${id}">
                    <h3 class="game-title">${title}</h3>
                    <p class="game-date">${getDateString(release)}</p>
                    <img src="${boxArt}">
                    <p class="game-price">$${price}</p>
                    <button class="game-add-button ${buttonAddID}" id=${id}>Add to cart</button>
                </div>`
        }).join("");

    gameAddCartButtons = document.querySelectorAll(`.${buttonAddID}`);
    gameAddCartButtons.forEach(button => {
        button.addEventListener("click", () => addToCartGame(button.id));
    });
}

const addToCartGame = (id) => {
    // Aviso que juego fue añadido al carrito
    console.log(`Game #${id} added to cart`);
    id = parseInt(id);

    const gameName = getGameNameFromID(id);
    showMessage(`${gameName} added to cart!`);

    addToCartDocument(id);

    cartItems.push(getGameFromID(id));

    updatePriceElement();
};

const addToCartDocument = (id) => {
    const game = getGameFromID(id);
    //const gameCartItem = document.createElement("div");
    const numberItemsCart = document.querySelectorAll("CartItem").length;
    cartContent.innerHTML += `
        <div class="CartItem game-id-${id}" id="game-cart-number-${numberItemsCart}">
            <img src="${game.boxArt}">
            <p>${game.price}$</p>
            <button id="game-delete-number-${numberItemsCart}" onclick="deleteItemFromCart(${numberItemsCart})">X</button>
        </div>
    `;
    

    //cartContent.appendChild(gameCartItem);
    const deleteButton = cartContent.querySelector(".CartItem").querySelector(`#game-delete-number-${numberItemsCart}`);
    deleteButton.addEventListener("click", () =>  { deleteItemFromCart(numberItemsCart) });
}

const getPricePurchase = () => {
    let price = 0;
    cartItems.forEach(item => {
        price += item.price;
    });
    return price;
};

const updatePriceElement = () => {
    const totalPrice = getPricePurchase();
    const priceElement = priceDiv.querySelector("#total-price");
    priceElement.innerHTML = `${totalPrice}$`;
};

const deleteItemFromCart = (numberItemCart) => {
    const itemToDelete = document.getElementById(`game-cart-number-${numberItemCart}`);
    const gameId = itemToDelete.classList[1].replace(/\D+/, "");
    //console.log(gameId);
    itemToDelete.remove();
    indexGameDeleted = cartItems.findIndex(item => item.id === gameId);
    cartItems.splice(indexGameDeleted, 1);
    updatePriceElement();
};

// Hice esto su propia funcion ya que puede ser usado en otros casos
const showMessage = (message) => {
    const messageBox = document.createElement("div");
    messageBox.innerHTML =
    `<div id="message">
        <p>${message}</p>
    </div>`
    document.body.appendChild(messageBox);
    setTimeout(() => {
        messageBox.remove();
    }, 3000);
};

/*              <div class="CartItem">
                    <img src="images/games/ps5/silenthill2.jpg">
                    <p>50$</p>
                    <button>X</button>
                </div> */

const getGameFromID = (id) => {
    const game = library.find(game => game.id === id);
    return game
}
// Una version mas pequeña de la anterior funcion si por alguan razon solo es necesario el nombre del juego
const getGameNameFromID = (id) => {
    //id = parseInt(id);
    const game = getGameFromID(id);
    return game.title;
}

const getDateString = (date) => {
    // Se puede cambiar a fecha menos formal, pero esto funciona perfectamente
    return `${date.getDay()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
};




function addFeatured(){
    addToCartDocument(1);
}


setGamesDisplay(library, offers, "button-offers-id");
setGamesDisplay(library, newReleases, "button-newreleases-id");
setGamesDisplay(library, forYou, "button-foryou-id");
