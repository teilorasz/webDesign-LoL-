// making list for champions
function makeList(temp) {
    const champions = [
        "Aatrox",
        "Ahri",
        "Akali",
        "Akshan",
        "Alistar",
        "Amumu",
        "Anivia",
        "Annie",
        "Aphelios",
        "Ashe",
        "Aurelion",
        "Azir",
        "Bard",
        "BelVeth",
        "Blitzcrank",
        "Brand",
        "Braum",
        "Caitlyn",
        "Camille",
        "Cassiopeia",
        "ChoGath",
        "Corki",
        "Darius",
        "Diana",
        "DrMundo",
        "Draven",
        "Ekko",
        "Elise",
        "Evelynn",
        "Ezreal",
        "Fiddlesticks",
        "Fiora",
        "Fizz",
        "Galio",
        "Gangplank",
        "Garen",
        "Gnar",
        "Gragas",
        "Graves",
        "Gwen",
        "Hecarim",
        "Heimerdinger",
        "Illaoi",
        "Irelia",
        "Ivern",
        "Janna",
        "JarvanIV",
        "Jax",
        "Jayce",
        "Jhin",
        "Jinx",
        "KaiSa",
        "Kalista",
        "Karma",
        "Karthus",
        "Kassadin",
        "Katarina",
        "Kayle",
        "Kayn",
        "Kennen",
        "KhaZix",
        "Kindred",
        "Kled",
        "KogMaw",
        "Ksante",
        "LeBlanc",
        "LeeSin",
        "Leona",
        "Lillia",
        "Lissandra",
        "Lucian",
        "Lulu",
        "Lux",
        "Malphite",
        "Malzahar",
        "Maokai",
        "MasterYi",
        "MissFortune",
        "Mordekaiser",
        "Morgana",
        "Nami",
        "Nasus",
        "Nautilus",
        "Neeko",
        "Nidalee",
        "Nocturne",
        "Nunu",
        "Olaf",
        "Orianna",
        "Ornn",
        "Pantheon",
        "Poppy",
        "Pyke",
        "Qiyana",
        "Quinn",
        "Rakan",
        "Rammus",
        "RekSai",
        "Rell",
        "RenataGlasc",
        "Renekton",
        "Rengar",
        "Riven",
        "Rumble",
        "Ryze",
        "Samira",
        "Sejuani",
        "Senna",
        "Seraphine",
        "Sett",
        "Shaco",
        "Shen",
        "Shyvana",
        "Singed",
        "Sion",
        "Sivir",
        "Skarner",
        "Sona",
        "Soraka",
        "Swain",
        "Sylas",
        "Syndra",
        "TahmKench",
        "Taliyah",
        "Talon",
        "Taric",
        "Teemo",
        "Thresh",
        "Tristana",
        "Trundle",
        "Tryndamere",
        "TwistedFate",
        "Twitch",
        "Udyr",
        "Urgot",
        "Varus",
        "Vayne",
        "Veigar",
        "VelKoz",
        "Vex",
        "Vi",
        "Viego",
        "Viktor",
        "Vladimir",
        "Volibear",
        "Warwick",
        "Wukong",
        "Xayah",
        "Xerath",
        "XinZhao",
        "Yasuo",
        "Yone",
        "Yorick",
        "Yuumi",
        "Zac",
        "Zed",
        "Zeri",
        "Ziggs",
        "Zilean",
        "Zoe",
        "Zyra"
    ];



    champions.forEach((champion) => {
        if(temp === champion){
            // Create the popup3 div element
            const popup3 = document.createElement('div');
            popup3.classList.add('popup3');

            // Create the close button div element
            const closeBtn = document.createElement('div');
            closeBtn.classList.add('close-btn');
            closeBtn.textContent = 'x';
            popup3.appendChild(closeBtn);
            closeBtn.addEventListener('click', function(){
                popup3.classList.remove("active");
                document.body.removeChild(popup3);
            })
            // Section below can be edited further. This is only a base line for such pop up.
            // Create the form div element
            const form = document.createElement('div');
            form.classList.add('form');
            popup3.appendChild(form);

            // Create the form-element div element
            const formElement = document.createElement('div');
            formElement.classList.add('form-element');
            formElement.style.margin = '0';
            form.appendChild(formElement);

            // Create the image element and set its attributes
            const championsDir = 'champions/';
            const imageName = 'RiotX_ChampionList_' + champion.toLowerCase() + '.jpg';
            const img = document.createElement('img');
            img.src = championsDir + imageName;
            img.style.objectFit = 'cover';
            img.style.height = '30vmin';
            img.style.width = '35vmin';
            img.style.borderRadius = '10px';
            formElement.appendChild(img);

            // Add the champion name to the form element
            const championName = document.createElement('p');
            championName.textContent = champion;
            championName.style.textAlign = 'center';
            formElement.appendChild(championName);

            // Add the popup3 element to the HTML document
            document.body.appendChild(popup3).classList.add("active");
        }
    });
}
//calls the function for each click on the champion img
const images = document.getElementsByTagName('img');
const myButton = document.getElementsByClassName('myButton');
for(let i = 0; i < myButton.length ; i++){
    const alt = images[i+1].getAttribute('alt');
    myButton[i].addEventListener('click', function(){
        makeList(alt);
    });
}
