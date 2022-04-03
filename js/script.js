// Api: 

// https://developer.mozilla.org/ru/docs/Learn/JavaScript/Client-side_web_APIs/Introduction

// JSON: 

// https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/JSON

// Metod: fetch() 

// https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch

// Metod: map()

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// Metod: join()

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// Operator: return 

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/return



fetch(
    'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
.then((res) => res.json()
.then(data => setHeroes(data, console.log(data) ))

);


function setHeroes({ squadName, homeTown, formed, members }) {
    document.body.insertAdjacentHTML(
        'afterbegin',
        `
            <h1>${squadName}</h1>
            <h2>Hometown: ${homeTown} //Formated: ${formed}</h1>
            <div class="heroes">${setMembers(members)}</div>

        `
    );
}


function setMembers(members) {
    return members.map(
        (hero) => 
        
        `
        <div>
            <h3>${hero.name}</h3>
            <p class="secret">Secret identity: ${hero.secretIdentity}</p>
            <p>Age: ${hero.age}</p>
            <p>Superpower: </p>
            <ul>
                ${hero.powers.map((power) => `<li>${power}</li>`).join('')}
            </ul>
        </div>

        `
    ).join('');
}

