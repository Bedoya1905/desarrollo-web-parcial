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
    new Game(3, "Silent Hill 2", "Survival horror", "Konami", "./images/games/ps5/silenthill2.jpg", new Date(2024, 9, 8), 50, 0.4),
    new Game(4, "Doom Eternal", "FPS", "id Software", "./images/games/ps5/Doom.jpg", new Date(2020, 2, 20), 40, 0.25),
    new Game(5, "Castlevania: Lords of Shadow 2", "Action-Adventure", "MercurySteam", "./images/games/ps5/Los2.jpg", new Date(2014, 1, 25), 30, 0.50),
    new Game(6, "Tiny Tina's Wonderlands", "Action RPG", "Gearbox Software", "./images/games/ps5/Tinytinas.jpeg", new Date(2022, 2, 25), 50, 0.30),
    new Game(7, "Tomb Raider Survivor Trilogy", "Action-Adventure", "Crystal Dynamics", "./images/games/ps5/TomboSurvivor.jpeg", new Date(2021, 2, 18), 60, 0.35),
    new Game(8, "VR Kanojo", "Simulation", "Illusion", "./images/games/ps5/VR kanojo.avif", new Date(2017, 1, 28), 40, 0.15), // ojo: formato AVIF
    new Game(9, "Death Stranding", "Action", "Kojima Productions", "./images/games/ps5/DeathStranding.jpeg", new Date(2019, 10, 8), 50, 0.40),
    new Game(10, "Hellblade II: Senua’s Saga", "Action-Adventure", "Ninja Theory", "./images/games/ps5/Hellblade2.png", new Date(2024, 4, 21), 60, 0.20),
    new Game(11, "Payday 3", "Shooter / Co-op", "Starbreeze Studios", "./images/games/ps5/Payday.jpg", new Date(2023, 8, 21), 70, 0.25),
    new Game(12, "Dungeon Rampage", "Action RPG", "Rebel Entertainment", "./images/games/ps5/DungeonRampage.jpg", new Date(2012, 3, 1), 20, 0.60),
    new Game(13, "Minecraft", "Sandbox", "Mojang", "./images/games/ps5/Minecraft.png", new Date(2011, 10, 18), 30, 0.15),
    new Game(14, "BattleBlock Theater", "Platformer", "The Behemoth", "./images/games/ps5/BattleblockTeather.png", new Date(2013, 3, 3), 20, 0.40),
    new Game(15, "The Binding of Isaac: Rebirth", "Roguelike", "Nicalis", "./images/games/ps5/isaac.jpeg", new Date(2014, 10, 4), 25, 0.50),
    new Game(16, "Alan Wake 2", "Survival Horror", "Remedy Entertainment", "./images/games/ps5/AlanWake.png", new Date(2023, 9, 27), 60, 0.25),
    new Game(17, "Persona 3 Reload", "JRPG", "Atlus", "./images/games/ps5/Persona3.jpeg", new Date(2024, 1, 2), 70, 0.20),
    new Game(18, "Yakuza Kiwami 2", "Action-Adventure", "Ryu Ga Gotoku Studio", "./images/games/ps5/Yakuza_Kiwami_2.png", new Date(2018, 8, 28), 40, 0.30),
    new Game(19, "Dragon Ball Z: Kakarot", "Action RPG", "CyberConnect2", "./images/games/ps5/kakarot.jpeg", new Date(2020, 0, 16), 50, 0.35),
    new Game(20, "Dragon Ball: Sparking! ZERO", "Fighting", "Spike Chunsoft", "./images/games/ps5/sparking zero.avif", new Date(2025, 8, 10), 70, 0.10), // ojo: formato AVIF
    new Game(21, "Dragon Ball FighterZ", "Fighting", "Arc System Works", "./images/games/ps5/fighterz.jpg", new Date(2018, 0, 26), 40, 0.50),
    new Game(22, "Grand Theft Auto V", "Open World", "Rockstar Games", "./images/games/ps5/gta5.jpeg", new Date(2013, 8, 17), 30, 0.20),
    new Game(23, "Assassin's Creed Valhalla", "Action RPG", "Ubisoft", "./images/games/ps5/valhalla.jpeg", new Date(2020, 10, 10), 60, 0.25),
    new Game(24, "Resident Evil 4 Remake", "Survival Horror", "Capcom", "./images/games/ps5/re4.jpeg", new Date(2023, 2, 24), 60, 0.30),
    new Game(25, "Crash Bandicoot N. Sane Trilogy", "Platformer", "Vicarious Visions", "./images/games/ps5/crashbandicoot.avif", new Date(2017, 5, 30), 40, 0.40), // ojo: formato AVIF
    new Game(26, "Elden Ring", "Action RPG", "FromSoftware", "./images/games/ps5/EldenRing.jpg", new Date(2022, 1, 25), 70, 0.30),
    new Game(27, "Baldur's Gate 3", "RPG", "Larian Studios", "./images/games/ps5/baldursgate3.jpeg", new Date(2023, 7, 3), 70, 0.15),
    new Game(28, "Warhammer 40,000: Space Marine 2", "Action", "Saber Interactive", "./images/games/ps5/space marine 2.jpeg", new Date(2025, 8, 9), 70, 0.10),
    new Game(29, "Metal Gear Solid V: The Phantom Pain", "Action-Adventure", "Kojima Productions", "./images/games/ps5/Metal_Gear_Solid_V_The_Phantom_Pain_cover.png", new Date(2015, 8, 1), 30, 0.50),
    new Game(30, "UnicornOverlord", "Strategy", "Konami", "./images/games/ps5/UnicornOverlord.avif", new Date(2024, 9, 8), 60, 0.4)

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

    // Añade informacion al URl
    const url = new URL(window.location);
    const amountItemsInCart = document.querySelectorAll(".CartItem").length;
    url.searchParams.set(`game-${amountItemsInCart}`, gameName);
    window.history.pushState({}, "", url);

    updatePriceElement();
};

const addToCartDocument = (id) => {
    const game = getGameFromID(id);
    //const gameCartItem = document.createElement("div");
    const numberItemsCart = document.querySelectorAll(".CartItem").length;
    cartContent.innerHTML += `
        <div class="CartItem game-id-${id}" id="game-cart-number-${numberItemsCart}">
            <img src="${game.boxArt}">
            <p>${game.price}$</p>
            <button id="game-delete-number-${numberItemsCart}" onclick="deleteItemFromCart(${numberItemsCart})">X</button>
        </div>
    `;
    

    //cartContent.appendChild(gameCartItem);
    //const deleteButton = cartContent.querySelector(".CartItem").querySelector(`#game-delete-number-${numberItemsCart}`);
    //deleteButton.addEventListener("click", () =>  { deleteItemFromCart(numberItemsCart) });
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

    // Eliminar link
    const url = new URL(window.location);
    console.log(numberItemCart + 1);
    url.searchParams.delete(`game-${numberItemCart + 1}`);
    window.history.pushState({}, "", url);

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
