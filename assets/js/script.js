let lemezek = []
let index = 0
fetch("https://raw.githubusercontent.com/IsaacGilgames/bakelitlemezeim_adatok/main/bakelitlemezek.json")
    .then(resp => resp.json())
    .then(data => {
        lemezek = data.lemezek
        console.log(lemezek)
        general(lemezek[index])
    })
    .catch(err => console.error("Nem sikerült betölteni a JSON fájlt:", err));

document.querySelector(".felnyil").onclick = function(){
    if(index < lemezek.length - 1) index+=1
    else index = 0
    general(lemezek[index])
}

document.querySelector(".lenyil").onclick = function(){
    if(index > 0) index-=1
    else index = lemezek.length - 1 
    general(lemezek[index])
}

function general(lemez) {
    console.log(lemez)
    let lista = ""
    lista = lemez.dalok.map(x => `<p>${x}</p>`).join("")
    document.querySelector(".card").innerHTML = `
        <div class="first-row">
            <div class="cim">
                <h2 id="valami" class="cim">${lemez.eloado}</h2>
                <h3>${lemez.album}</h3>
                <p>${lemez.mufaj}</p>
                <p>${lemez.kiadas_eve}</p>
            </div>
            <img src="${lemez.boritokep}" alt="${lemez.eloado} - ${lemez.album}">
        </div>
        <div class="second-row"> 
            ${lista}
        </div>
    `
}




