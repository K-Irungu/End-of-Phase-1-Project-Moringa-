// When DOM loads, character information is fetched from the API.
// For every character in the data set, a button is created with its value as the character name.
// Each button has an event listener, so when clicked, renders the character information to 
// the display area on the right hand side of the page using the function updateInfo().
// These buttons are then appended to the display area on the left hand side, where the user 
// can scroll through the list of buttons.

// Function filterPureBloods:
// This function fetches data from te api and filters only characters whose ancestry is 'pure-blood
// and assigns that array the variable name arrayOfPureBloods
// We iterate through this array - every time we look at a pure-blood, we iterate through the
// values of the buttons listed on the left area of the page. 
// If the button value matches the pureBlood.name, then we give the button a className of listButtonHighlihted
// in order to style it.
// The same logic applies for the function filterHalfBloods();
// Function resetFilters() sets the className of every button on the list to listButton to
// return the original styling

document.addEventListener('DOMContentLoaded', fetchCharacters)
    function fetchCharacters(){
    fetch("https://hp-api.herokuapp.com/api/characters/house/slytherin")
    .then(response => response.json())
    .then(characters => renderCharacters(characters))

    document.querySelector('.pureBloodsButton').addEventListener('click', filterPureBloods)
    document.querySelector('.halfBloodsButton').addEventListener('click', filterHalfBloods)
    document.querySelector('.resetButton').addEventListener('click', resetFilters)

    function renderCharacters(characters) {
        characters.forEach(character => { 
            const btn = document.createElement('input'); 
            btn.setAttribute('type', 'button');
            btn.setAttribute('class', 'listButton');
            btn.value = character.name;
            btn.addEventListener('click', updateInfo);
            const listOfMembers = document.querySelector('#listDisplay');
            listOfMembers.appendChild(btn);
    
            function updateInfo() {
                    document.getElementById('fullNameContainer').innerHTML = (character.name);
                    document.getElementById('speciesContainer').innerHTML = (character.species);
                    document.getElementById('genderContainer').innerHTML = (character.gender);
                    const dOB = document.getElementById('dateOfBirthContainer');
                        if(character.dateOfBirth == "") {
                        dOB.innerHTML= "N/A";
                        } else {
                        dOB.innerHTML =(character.dateOfBirth); 
                        }
                    document.getElementById('wizardContainer').innerHTML = (character.wizard);
                    const ancestry = document.getElementById('ancestryContainer');
                        if(character.ancestry == "") {
                        ancestry.innerHTML= "N/A";
                        } else {
                        ancestry.innerHTML =(character.ancestry); 
                        }
                    const actor = document.getElementById('actorContainer');
                        if(character.actor == "") {
                        actor.innerHTML= "N/A";
                        } else {
                        actor.innerHTML =(character.actor); 
                        }
                    const pic = document.getElementById('characterPic');
                        if(character.image == "") {
                        pic.src = "https://www.wizardingworld.com/_next/image?url=https%3A%2F%2F%2F%2Fimages.ctfassets.net%2Fusf1vwtuqyxm%2F2hc0ybmCjDUBRqNgZIMtgU%2F8f4a5cec029262ebbf51641ff2436f19%2FSlytherin_House_Pride_Collection_V2.svg&w=375&q=75";
                        } else {
                        pic.src = (character.image);
                        }
            }
    
        })  
    }
    function filterPureBloods () {
        fetch("https://hp-api.herokuapp.com/api/characters/house/slytherin")
        .then(response => response.json())
        .then((characters) => {
            let arrayOfPureBloods = (characters.filter((character) => character.ancestry === "pure-blood"));
                for(pureBlood of arrayOfPureBloods){
                    let arrayOfListedMembers = document.getElementsByClassName('listButton');
                        for(listedMember of arrayOfListedMembers) {
                            if(pureBlood.name === listedMember.value) {  
                                listedMember.setAttribute('class', 'listButtonHighlighted');
                            }
                        }
                    }
        })
    }
    function filterHalfBloods () {
        fetch("https://hp-api.herokuapp.com/api/characters/house/slytherin")
        .then(response => response.json())
        .then((characters) => {
            let arrayOfHalfBloods = (characters.filter((character) => character.ancestry === "half-blood"));
                for(halfBlood of arrayOfHalfBloods){
                    let arrayOfListedMembers = document.getElementsByClassName('listButton');
                        for(listedMember of arrayOfListedMembers) {
                            if(halfBlood.name === listedMember.value) {
                                listedMember.setAttribute('class', 'listButtonHighlighted2');
                            }
                        }
                }
        })
    }
    function resetFilters() {
       let buttons = (document.querySelector('#listDisplay').childNodes);
       for(i = 0; i < buttons.length; i++) {
            buttons[i].className = 'listButton'
        }
    }

return (fetch('https://hp-api.herokuapp.com/api/characters/house/slytherin'))
}



      









