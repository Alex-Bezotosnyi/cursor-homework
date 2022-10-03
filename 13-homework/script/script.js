const mainPlanets = document.getElementById("main-main");
const planetsNext = document.getElementById("planets-next");

let planetsURL = "https://swapi.dev/api/planets/?page=1";
let nextPlanets;

planetsNext.addEventListener("click", pageNextPlanets);

const peopleNext = document.getElementById("people-next");

let peopleURL = "https://swapi.dev/api/films/2";
let nextPeople;

peopleNext.addEventListener("click", pageNextPeople);

// Gender's images
const femaleIcon = `<img class="gender__image" src="./image/female.png" alt="female">`
let maleIcon = `<img class="gender__image" src="./image/male.png" alt="male">`
const undefinedIcon = `<img class="gender__image" src="./image/undefined.png" alt="undefined">`;

// Functions Planets
async function getPlanetsFetch() {
    let results = await fetch(planetsURL);
    let data = await results.json();
    nextPlanets = data.next;
    let planets = data.results;
    let output = " ";
    planets.forEach((item) => {
        output += `<div class="card card-planet">
                    <ul class="planets__names_list">
                    <li class="planets__names_item">${item.name}</li>
                </ul>
                </div>`
    })
    mainPlanets.innerHTML = output;
}

function pageNextPlanets() {
    if (nextPlanets) {
        planetsURL = new URL(nextPlanets);
    }
    getPlanetsFetch()
        .then(response => {
            console.log(`Success: Planets`);
        })
        .catch(error => {
            console.log(`error!`)
            console.error(error)
        });
}

// Functions People
async function fetchPeople() {
    let results = await fetch(peopleURL);
    const data = await results.json();
    nextPeople = data.next;
    let char = data.characters;
    let outPut = ' ';

    function getNamesFetch(char) {
        let result = [];
        char.forEach((el) => {
            async function getNamesFetch() {
                let responseSecond = await fetch(el);
                let dataSecond = await responseSecond.json();
                result = [dataSecond.name, dataSecond.birth_year, dataSecond.gender]
                return result;
            }

            getNamesFetch().then(data => {
                getNamesData(data);
            })
        })
    }

    function getNamesData(data) {
        for (let item = 0; item < 1; item++) {
            let itemGender = data[2];
            if (itemGender === "male") {
                itemGender = itemGender.replace(/male/gi, maleIcon)
            }
            if (itemGender === "female") {
                itemGender = itemGender.replace(/female/gi, femaleIcon)
            } else {
                itemGender = itemGender.replace(/n\/a/gi, undefinedIcon)
            }
            const people = [
                {
                    person: "Luke Skywalker",
                    value: `<img class="person__image" src="./image/luke-skywalker.png" alt="luke-skywalker">`
                },
                {
                    person: "C-3PO",
                    value: `<img class="person__image" src="./image/c-3po.png" alt="c-3po">`
                },
                {
                    person: "R2-D2",
                    value: `<img class="person__image" src="./image/r2-d2.png" alt="r2-d2">`
                },
                {
                    person: "Darth Vader",
                    value: `<img class="person__image" src="./image/dart-vader.png" alt="dart-vader">`
                },
                {
                    person: "Leia Organa",
                    value: `<img class="person__image" src="./image/leia-organa.png" alt="leia-organa">`
                },
                {
                    person: "Owen Lars",
                    value: `<img class="person__image" src="./image/owen-lars.png" alt="owen-lars">`
                },
                {
                    person: "Beru Whitesun lars",
                    value: `<img class="person__image" src="./image/beru-lars.png" alt="beru-lars">`
                },
                {
                    person: "R5-D4",
                    value: `<img class="person__image" src="./image/r5-d4.png" alt="r5-d4">`
                },
                {
                    person: "Biggs Darklighter",
                    value: `<img class="person__image" src="./image/darklighter.png" alt="darklighter">`
                },
                {
                    person: "Obi-Wan Kenobi",
                    value: `<img class="person__image" src="./image/obi-wan.png" alt="obi-wan">`
                },
                {
                    person: "Chewbacca",
                    value: `<img class="person__image" src="./image/chewbacca.png" alt="chewbacca">`
                },
                {
                    person: "Han Solo",
                    value: `<img class="person__image" src="./image/han-solo.png" alt="han-solo">`
                },
                {
                    person: "Wedge Antilles",
                    value: `<img class="person__image" src="./image/wedge-antilles.png" alt="wedge-antilles">`
                },
                {
                    person: "Yoda",
                    value: `<img class="person__image" src="./image/yoda.png" alt="yoda">`
                },
                {
                    person: "Palpatine",
                    value: `<img class="person__image" src="./image/palpatine.png" alt="palpatine">`
                },
                {
                    person: "Boba Fett",
                    value: `<img class="person__image" src="./image/boba-fett.png" alt="boba-fett">`
                },
                {
                    person: "IG-88",
                    value: `<img class="person__image" src="./image/ig-88.png" alt="ig-88">`
                },
                {
                    person: "Bossk",
                    value: `<img class="person__image" src="./image/bossk.png" alt="bossk">`
                },
                {
                    person: "Lando Calrissian",
                    value: `<img class="person__image" src="./image/lando-calrissian.png" alt="lando-calrissian">`
                },
                {
                    person: "Lobot",
                    value: `<img class="person__image" src="./image/lobot.png" alt="lobot">`
                },
                {
                    person: "N/A",
                    value: `<img class="person__image" src="./image/yoda.png" alt="yoda">`
                },
            ]

            function getNames(people) {
                if (data[0]) {
                    let res = people.find(el => el.person === data[0]);
                    return res.value;
                } else {
                    return [];
                }
            }

            outPut += `<div class="card card-people">
                  <h2>${data[0]}</h2>
                  <div>${getNames(people)}</div>
                  <h5>Birth Year: ${data[1]}</h5>
                  <h5>Gender: ${itemGender}</h5>
               </div>`
            mainPlanets.innerHTML = outPut;
        }
    }

    getNamesFetch(char)
}

function pageNextPeople() {
    if (nextPeople) {
        peopleURL = new URL(nextPeople);
    }
    fetchPeople()
        .then(response => {
            console.log(`Success: People`);
        })
        .catch(error => {
            console.log(`error!`)
            console.error(error)
        });
}