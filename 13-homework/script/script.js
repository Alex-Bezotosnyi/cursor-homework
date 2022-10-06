const mainPlanets = document.getElementById("main-main");
const chooseFilm = document.querySelector("#chooseFilm");
// Wookiee Language
const wookieeButton = document.getElementById("wookiee")
wookieeButton.addEventListener("click", pageNextPeople)

// People
let nextPeople;
const peopleNext = document.getElementById("people-next");
peopleNext.addEventListener("click", pageNextPeople);
let peopleURL = "https://swapi.dev/api/films/";

// Gender's images
const femaleIcon = `<img class="gender__image" src="./image/female.png" alt="female">`
const maleIcon = `<img class="gender__image" src="./image/male.png" alt="male">`
const undefinedIcon = `<img class="gender__image" src="./image/undefined.png" alt="undefined">`;

// Planets
let nextPlanets;
const planetsNext = document.getElementById("planets-next");
planetsNext.addEventListener("click", pageNextPlanets);
let planetsURL = "https://swapi.dev/api/planets/";

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

// Function "How many films does API have?"
window.addEventListener("DOMContentLoaded", inic);

function inic(e) {
    chooseFilms();
}

function chooseFilms() {
    async function countFilms() {
        let response = await fetch(peopleURL);
        let data = await response.json();
        let quantityFilms = data.count;
        return quantityFilms;
    }

    countFilms().then(dataFilms => {
        fetchQuantityFilms(dataFilms)
    })

    function fetchQuantityFilms(dataFilms) {
        const btnSelect = document.querySelector("#chooseFilm");
        for (let item = 1; item <= dataFilms; item++) {
            const createOption = document.createElement("option");
            btnSelect.appendChild(createOption);
            const createText = document.createTextNode(item);
            createOption.appendChild(createText)
        }
    }
}

// Functions People
async function fetchPeople(dataFilms) {
    let results = await fetch(peopleURL + `${chooseFilm.value}`);
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
                            let ID = dataSecond.hurcan.match(/\d+/)[0];
                            result = [dataSecond.whrascwo, dataSecond.rhahrcaoac_roworarc, dataSecond.rrwowhwaworc, ID]
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
                            let ID = dataSecond.url.match(/\d+/)[0];
                            result = [dataSecond.name, dataSecond.birth_year, dataSecond.gender, ID]
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

        // Change gender-words to images
        function genderImages(data) {
            getNamesData(data)

            function getNamesData(data) {
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

                    // The object with People and their ID
                    const people = [
                        {
                            ID: "1",
                            value: `<img class="person__image" src="./image/luke-skywalker.png" alt="luke-skywalker">`
                        },
                        {
                            ID: "2",
                            value: `<img class="person__image" src="./image/c-3po.png" alt="c-3po">`
                        },
                        {
                            ID: "3",
                            value: `<img class="person__image" src="./image/r2-d2.png" alt="r2-d2">`
                        },
                        {
                            ID: "4",
                            value: `<img class="person__image" src="./image/dart-vader.png" alt="dart-vader">`
                        },
                        {
                            ID: "5",
                            value: `<img class="person__image" src="./image/leia-organa.png" alt="leia-organa">`
                        },
                        {
                            ID: "6",
                            value: `<img class="person__image" src="./image/owen-lars.png" alt="owen-lars">`
                        },
                        {
                            ID: "7",
                            value: `<img class="person__image" src="./image/beru-lars.png" alt="beru-lars">`
                        },
                        {
                            ID: "8",
                            value: `<img class="person__image" src="./image/r5-d4.png" alt="r5-d4">`
                        },
                        {
                            ID: "9",
                            value: `<img class="person__image" src="./image/darklighter.png" alt="darklighter">`
                        },
                        {
                            ID: "10",
                            value: `<img class="person__image" src="./image/obi-wan.png" alt="obi-wan">`
                        },
                        {
                            ID: "11", //
                            value: `<img class="person__image" src="./image/anakin.png" alt="anakin">`
                        },
                        {
                            ID: "12", //
                            value: `<img class="person__image" src="./image/wilhuff-tarkin.png" alt="wilhuff-tarkin">`
                        },
                        {
                            ID: "13",
                            value: `<img class="person__image" src="./image/chewbacca.png" alt="chewbacca">`
                        },
                        {
                            ID: "14",
                            value: `<img class="person__image" src="./image/han-solo.png" alt="han-solo">`
                        },
                        {
                            ID: "15",
                            value: `<img class="person__image" src="./image/greedo.png" alt="greedo">`
                        },
                        {
                            ID: "16",
                            value: `<img class="person__image" src="./image/jabba.png" alt="jabba">`
                        },
                        {
                            ID: "18",
                            value: `<img class="person__image" src="./image/wedge-antilles.png" alt="wedge-antilles">`
                        },
                        {
                            ID: "19",
                            value: `<img class="person__image" src="./image/jek-tono.png" alt="jek-tono">`
                        },
                        {
                            ID: "20",
                            value: `<img class="person__image" src="./image/yoda.png" alt="yoda">`
                        },
                        {
                            ID: "21",
                            value: `<img class="person__image" src="./image/palpatine.png" alt="palpatine">`
                        },
                        {
                            ID: "22",
                            value: `<img class="person__image" src="./image/boba-fett.png" alt="boba-fett">`
                        },
                        {
                            ID: "23",
                            value: `<img class="person__image" src="./image/ig-88.png" alt="ig-88">`
                        },
                        {
                            ID: "24",
                            value: `<img class="person__image" src="./image/bossk.png" alt="bossk">`
                        },
                        {
                            ID: "25",
                            value: `<img class="person__image" src="./image/lando-calrissian.png" alt="lando-calrissian">`
                        },
                        {
                            ID: "26",
                            value: `<img class="person__image" src="./image/lobot.png" alt="lobot">`
                        },
                        {
                            ID: "27",
                            value: `<img class="person__image" src="./image/ackbar.png" alt="ackbar">`
                        },
                        {
                            ID: "28",
                            value: `<img class="person__image" src="./image/mon-mothma.png" alt="mon-mothma">`
                        },
                        {
                            ID: "29",
                            value: `<img class="person__image" src="./image/arvel-crynyd.png" alt="arvel-crynyd">`
                        },
                        {
                            ID: "30",
                            value: `<img class="person__image" src="./image/wicket.png" alt="wicket">`
                        },
                        {
                            ID: "31",
                            value: `<img class="person__image" src="./image/nien-nunb.png" alt="nien-nunb">`
                        },
                        {
                            ID: "32",
                            value: `<img class="person__image" src="./image/qui-gon.png" alt="qui-gon">`
                        },
                        {
                            ID: "33",
                            value: `<img class="person__image" src="./image/nute-gunray.png" alt="nute-gunray">`
                        },
                        {
                            ID: "34",
                            value: `<img class="person__image" src="./image/finis-valorum.png" alt="finis-valorum">`
                        },
                        {
                            ID: "35",
                            value: `<img class="person__image" src="./image/padme-amidala.png" alt="padme-amidala">`
                        },
                        {
                            ID: "36",
                            value: `<img class="person__image" src="./image/jar-jar-binks.png" alt="jar-jar-binks">`
                        },
                        {
                            ID: "37",
                            value: `<img class="person__image" src="./image/roos-tarpals.png" alt="roos-tarpals">`
                        },
                        {
                            ID: "38",
                            value: `<img class="person__image" src="./image/rugor-nass.png" alt="rugor-nass">`
                        },
                        {
                            ID: "39",
                            value: `<img class="person__image" src="./image/ric-olie.png" alt="ric-olie">`
                        },
                        {
                            ID: "40",
                            value: `<img class="person__image" src="./image/watto.png" alt="watto">`
                        },
                        {
                            ID: "41",
                            value: `<img class="person__image" src="./image/sebulba.png" alt="sebulba">`
                        },
                        {
                            ID: "42",
                            value: `<img class="person__image" src="./image/quarsh-panaka.png" alt="quarsh-panaka">`
                        },
                        {
                            ID: "43",
                            value: `<img class="person__image" src="./image/shmi-skywalker.png" alt="shmi-skywalker">`
                        },
                        {
                            ID: "44",
                            value: `<img class="person__image" src="./image/darth-maul.png" alt="darth-maul">`
                        },
                        {
                            ID: "45",
                            value: `<img class="person__image" src="./image/bib-fortuna.png" alt="bib-fortuna">`
                        },
                        {
                            ID: "46",
                            value: `<img class="person__image" src="./image/ayla-secura.png" alt="ayla-secura">`
                        },
                        {
                            ID: "47",
                            value: `<img class="person__image" src="./image/ratts-tyerel.png" alt="ratts-tyerel">`
                        },
                        {
                            ID: "48",
                            value: `<img class="person__image" src="./image/dud-bolt.png" alt="dud-bolt">`
                        },
                        {
                            ID: "49",
                            value: `<img class="person__image" src="./image/gasgano.png" alt="gasgano">`
                        },
                        {
                            ID: "50",
                            value: `<img class="person__image" src="./image/ben-quadinaros.png" alt="ben-quadinaros">`
                        },
                        {
                            ID: "51",
                            value: `<img class="person__image" src="./image/mace-windu.png" alt="mace-windu">`
                        },
                        {
                            ID: "52",
                            value: `<img class="person__image" src="./image/ki-adi-mundi.png" alt="ki-adi-mundi">`
                        },
                        {
                            ID: "53",
                            value: `<img class="person__image" src="./image/kit-fisto.png" alt="kit-fisto">`
                        },
                        {
                            ID: "54",
                            value: `<img class="person__image" src="./image/eeth-koth.png" alt="eeth-koth">`
                        },
                        {
                            ID: "55",
                            value: `<img class="person__image" src="./image/adi-gallia.png" alt="adi-gallia">`
                        },
                        {
                            ID: "56",
                            value: `<img class="person__image" src="./image/saesee-tiin.png" alt="saesee-tiin">`
                        },
                        {
                            ID: "57",
                            value: `<img class="person__image" src="./image/yarael-poof.png" alt="yarael-poof">`
                        },
                        {
                            ID: "58",
                            value: `<img class="person__image" src="./image/plo-koon.png" alt="plo-koon">`
                        },
                        {
                            ID: "59",
                            value: `<img class="person__image" src="./image/mas-amedda.png" alt="mas-amedda">`
                        },
                        {
                            ID: "60",
                            value: `<img class="person__image" src="./image/gregar-typho.png" alt="gregar-typho">`
                        },
                        {
                            ID: "61",
                            value: `<img class="person__image" src="./image/corde.png" alt="corde">`
                        },
                        {
                            ID: "62",
                            value: `<img class="person__image" src="./image/cliegg-lars.png" alt="cliegg-lars">`
                        },
                        {
                            ID: "63",
                            value: `<img class="person__image" src="./image/poggle-lesser.png" alt="poggle-lesser">`
                        },
                        {
                            ID: "64",
                            value: `<img class="person__image" src="./image/luminara-unduli.png" alt="luminara-unduli">`
                        },
                        {
                            ID: "65",
                            value: `<img class="person__image" src="./image/barriss-offee.png" alt="barriss-offee">`
                        },
                        {
                            ID: "66",
                            value: `<img class="person__image" src="./image/dorme.png" alt="dorme">`
                        },
                        {
                            ID: "67",
                            value: `<img class="person__image" src="./image/dooku.png" alt="dooku">`
                        },
                        {
                            ID: "68",
                            value: `<img class="person__image" src="./image/bail-prestor.png" alt="bail-prestor">`
                        },
                        {
                            ID: "69",
                            value: `<img class="person__image" src="./image/jango-fett.png" alt="jango-fett">`
                        },
                        {
                            ID: "70",
                            value: `<img class="person__image" src="./image/zam-wesell.png" alt="zam-wesell">`
                        },
                        {
                            ID: "71",
                            value: `<img class="person__image" src="./image/dexter-jettster.png" alt="dexter-jettster">`
                        },
                        {
                            ID: "72",
                            value: `<img class="person__image" src="./image/lama-su.png" alt="lama-su">`
                        },
                        {
                            ID: "73",
                            value: `<img class="person__image" src="./image/taun-we.png" alt="taun-we">`
                        },
                        {
                            ID: "74",
                            value: `<img class="person__image" src="./image/jocasta-nu.png" alt="jocasta-nu">`
                        },
                        {
                            ID: "75",
                            value: `<img class="person__image" src="./image/r4-p17.png" alt="r4-p17">`
                        },
                        {
                            ID: "76",
                            value: `<img class="person__image" src="./image/wat-tambor.png" alt="wat-tambor">`
                        },
                        {
                            ID: "77",
                            value: `<img class="person__image" src="./image/san-hill.png" alt="san-hill">`
                        },
                        {
                            ID: "78",
                            value: `<img class="person__image" src="./image/shaak-ti.png" alt="shaak-ti">`
                        },
                        {
                            ID: "79",
                            value: `<img class="person__image" src="./image/grievous.png" alt="grievous">`
                        },
                        {
                            ID: "80",
                            value: `<img class="person__image" src="./image/tarfful.png" alt="tarfful">`
                        },
                        {
                            ID: "81",
                            value: `<img class="person__image" src="./image/raymus-antilles.png" alt="raymus-antilles">`
                        },
                        {
                            ID: "82",
                            value: `<img class="person__image" src="./image/sly-moore.png" alt="sly-moore">`
                        },
                        {
                            ID: "83",
                            value: `<img class="person__image" src="./image/tion-medon.png" alt="tion-medon">`
                        },
                    ]

                    function getNames(people) {
                        if (data[3]) {
                            let res = people.find(el => el.ID === data[3]);
                            return res.value;
                        } else {
                            return [];
                        }
                    }

                    // Output the info
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