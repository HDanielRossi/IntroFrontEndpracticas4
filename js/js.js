const mainScreen = document.querySelector('.main-screen');
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeFrontImage = document.querySelector('.poke-front-image');
const pokeBackImage = document.querySelector('.poke-back-image');
const pokeTypeOne = document.querySelector('.poke-type-one');
const pokeTypeTwo = document.querySelector('.poke-type-two');
const pokeWeight = document.querySelector('.poke-weight');
const pokeHeight = document.querySelector('.poke-height');

const TYPES = [
    'normal', 'fighting', 'flying',
    'poison', 'ground', 'rock',
    'bug', 'ghost', 'steel',
    'fire', 'water', 'grass',
    'electric', 'psychic', 'ice',
    'dragon', 'dark', 'fairy'
  ];

const resetScreen = () => {
  mainScreen.classList.remove('hide');
    for (const type of TYPES) {
      mainScreen.classList.remove(type);
    }
};

function getInputValue() {
    var inputVal = document.getElementById("pokeName1").value;
    inputVal = inputVal.toLowerCase();
    console.log(inputVal.textContent)
    const url = `https://pokeapi.co/api/v2/pokemon/${inputVal}`;
    fetch (url)
    .then(res => res.json())
    .then(data => {console.log(data);
        resetScreen();

        const dataTypes = data['types'];
        const dataFirstType = dataTypes[0];
        const dataSecondType = dataTypes[1];
        pokeTypeOne.textContent = dataFirstType['type']['name'];
        if (dataSecondType){
            pokeTypeTwo.classList.remove('hide');
            pokeTypeTwo.textContent = dataSecondType['type']['name'];
        }else{
            pokeTypeTwo.classList.add('hide');
            pokeTypeTwo.textContent = '';
        }
        mainScreen.classList.add(dataFirstType['type']['name']);
        mainScreen.classList.remove('hide');
        pokeName.textContent = data['name'];
        pokeId.textContent = '#' + data['id'].toString() .padStart(3, '0');
        pokeWeight.textContent = data['weight'];
        pokeHeight.textContent = data['height'];
        pokeFrontImage.src = data['sprites']['front_default'] || '';
        pokeBackImage.src = data['sprites']['back_default'] || '' ;

        
    });

}
