const mainPlanets = document.getElementById("main-main");

// Wookiee Language
const wookieeButton = document.getElementById("wookiee")
wookieeButton.addEventListener("click", pageNextPeople)
let wookieeUrl = "https://swapi.dev/api/films/2/?format=wookiee"

// People
let nextPeople;
const peopleNext = document.getElementById("people-next");
peopleNext.addEventListener("click", pageNextPeople);
let peopleURL = "https://swapi.dev/api/films/2";

// Gender's images
const femaleIcon = `<img class="gender__image" src="./image/female.png" alt="female">`
const maleIcon = `<img class="gender__image" src="./image/male.png" alt="male">`
const undefinedIcon = `<img class="gender__image" src="./image/undefined.png" alt="undefined">`;

// Planets
let nextPlanets;
const planetsNext = document.getElementById("planets-next");
planetsNext.addEventListener("click", pageNextPlanets);
let planetsURL = "https://swapi.dev/api/planets/";
// let planetsURL = "https://swapi.dev/api/planets/?page=1";

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
    let char = data.characters;
    let outPut = ' ';

    document.getElementById("btn").addEventListener('click', function (e) {
        let target = e.target;
        if (target.id === 'wookiee') {

            // Fetch Wookiee Language
            function getNamesFetchWookiee(char) {
                let result = [];
                char.forEach((el) => {
                        async function getNamesFetch() {
                            let responseSecond = await fetch(`${el}` + "/?format=wookiee");
                            let dataSecond = await responseSecond.json();
                            if (wookieeUrl) {
                                let ID = dataSecond.hurcan.match(/\d+/)[0];
                                result = [dataSecond.whrascwo, dataSecond.rhahrcaoac_roworarc, dataSecond.rrwowhwaworc, ID]
                            }
                            return result;
                        }
                        getNamesFetch().then(data => {
                            genderImages(data);
                        })
                    }
                )
            }
            getNamesFetchWookiee(char)

            //Fetch Non-Wookiee Language
        } else if (target.id === 'people-next') {
            function getNamesFetch(char) {
                let result = [];
                char.forEach((el) => {
                        async function getNamesFetch() {
                            let responseSecond = await fetch(el);
                            let dataSecond = await responseSecond.json();
                            if (wookieeUrl) {
                                let ID = dataSecond.url.match(/\d+/)[0];
                                result = [dataSecond.name, dataSecond.birth_year, dataSecond.gender, ID]
                            }
                            return result;
                        }

                        getNamesFetch().then(data => {
                            genderImages(data);
                        })
                    }
                )
            }
            getNamesFetch(char);
        }

        // Заміна виводу слів "Gender" на картинки
        function genderImages(data) {
            // console.log(data)
            getNamesData(data)
            function getNamesData(data) {
                // console.log(data)
                for (let item = 0; item < 1; item++) {
                    let itemGender = data[2];
                    if (itemGender === "scraanwo" || itemGender === "male") {
                        itemGender = itemGender.replace(/scraanwo|male/gi, maleIcon)
                    }
                    if (itemGender === "wwwoscraanwo" || itemGender === "female") {
                        itemGender = itemGender.replace(/wwwoscraanwo|female/gi, femaleIcon)
                    } else {
                        itemGender = itemGender.replace(/n\/a/gi, undefinedIcon)
                    }

                    const people = [
                        {
                            ID: "1",
                            person: "Luke Skywalker",
                            value: `<img class="person__image" src="./image/luke-skywalker.png" alt="luke-skywalker">`
                        },
                        {
                            ID: "2",
                            person: "C-3PO",
                            value: `<img class="person__image" src="./image/c-3po.png" alt="c-3po">`
                        },
                        {
                            ID: "3",
                            person: "R2-D2",
                            value: `<img class="person__image" src="./image/r2-d2.png" alt="r2-d2">`
                        },
                        {
                            ID: "4",
                            person: "Darth Vader",
                            value: `<img class="person__image" src="./image/dart-vader.png" alt="dart-vader">`
                        },
                        {
                            ID: "5",
                            person: "Leia Organa",
                            value: `<img class="person__image" src="./image/leia-organa.png" alt="leia-organa">`
                        },
                        {
                            ID: "6",
                            person: "Owen Lars",
                            value: `<img class="person__image" src="./image/owen-lars.png" alt="owen-lars">`
                        },
                        {
                            ID: "7",
                            person: "Beru Whitesun lars",
                            value: `<img class="person__image" src="./image/beru-lars.png" alt="beru-lars">`
                        },
                        {
                            ID: "8",
                            person: "R5-D4",
                            value: `<img class="person__image" src="./image/r5-d4.png" alt="r5-d4">`
                        },
                        {
                            ID: "9",
                            person: "Biggs Darklighter",
                            value: `<img class="person__image" src="./image/darklighter.png" alt="darklighter">`
                        },
                        {
                            ID: "10",
                            person: "Obi-Wan Kenobi",
                            value: `<img class="person__image" src="./image/obi-wan.png" alt="obi-wan">`
                        },
                        {
                            ID: "11", //
                            person: "Anakin Skywalker",
                            value: `<img class="person__image" src="./image/anakin.png" alt="anakin">`
                        },
                        {
                            ID: "12", //
                            person: "Wilhuff Tarkin",
                            value: `<img class="person__image" src="./image/wilhuff-tarkin.png" alt="wilhuff-tarkin">`
                        },
                        {
                            ID: "13",
                            person: "Chewbacca",
                            value: `<img class="person__image" src="./image/chewbacca.png" alt="chewbacca">`
                        },
                        {
                            ID: "14",
                            person: "Han Solo",
                            value: `<img class="person__image" src="./image/han-solo.png" alt="han-solo">`
                        },
                        {
                            ID: "15",
                            person: "Greedo",
                            value: `<img class="person__image" src="./image/greedo.png" alt="greedo">`
                        },
                        {
                            ID: "16",
                            person: "Jabba Desilijic Tiure",
                            value: `<img class="person__image" src="./image/jabba.png" alt="jabba">`
                        },
                        {
                            ID: "18",
                            person: "Wedge Antilles",
                            value: `<img class="person__image" src="./image/wedge-antilles.png" alt="wedge-antilles">`
                        },
                        {
                            ID: "19",
                            person: "Jek Tono Porkins",
                            value: `<img class="person__image" src="./image/jek-tono.png" alt="jek-tono">`
                        },
                        {
                            ID: "20",
                            person: "Yoda",
                            value: `<img class="person__image" src="./image/yoda.png" alt="yoda">`
                        },
                        {
                            ID: "21",
                            person: "Palpatine",
                            value: `<img class="person__image" src="./image/palpatine.png" alt="palpatine">`
                        },
                        {
                            ID: "22",
                            person: "Boba Fett",
                            value: `<img class="person__image" src="./image/boba-fett.png" alt="boba-fett">`
                        },
                        {
                            ID: "23",
                            person: "IG-88",
                            value: `<img class="person__image" src="./image/ig-88.png" alt="ig-88">`
                        },
                        {
                            ID: "24",
                            person: "Bossk",
                            value: `<img class="person__image" src="./image/bossk.png" alt="bossk">`
                        },
                        {
                            ID: "25",
                            person: "Lando Calrissian",
                            value: `<img class="person__image" src="./image/lando-calrissian.png" alt="lando-calrissian">`
                        },
                        {
                            ID: "26",
                            person: "Lobot",
                            value: `<img class="person__image" src="./image/lobot.png" alt="lobot">`
                        },
                        {
                            ID: "27",
                            person: "Ackbar",
                            value: `<img class="person__image" src="./image/ackbar.png" alt="ackbar">`
                        },
                    ]

                    // Призначення картинок до ID персонажу
                    function getNames(people) {
                        if (data[3]) {
                            let res = people.find(el => el.ID === data[3]);
                            return res.value;
                        } else {
                            return [];
                        }
                    }

                    // Вивід інформації
                    outPut += `<div class="card card-people">
                  <h2>${data[0]}</h2>
                  <div>${getNames(people)}</div>
                  <h5>Birth Year: ${data[1]}</h5>
                  <h5>Gender: ${itemGender}</h5>
               </div>`
                    mainPlanets.innerHTML = outPut;
                }
            }
        }

    });
}

function pageNextPeople() {
    if (nextPeople) {
        URL_People = new URL(peopleURL);
        console.log(peopleURL)
    } else if (nextPeople) {
        console.log(peopleURL)
        peopleURL = new URL(wookieeUrl)
    }
    fetchPeople()
        .then(response => {
            console.log(`Success: akwoooakanwo`);
        })
        .catch(error => {
            console.log(`error!`)
            console.error(error)
        });
}