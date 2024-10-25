// function createcard(titles,cName,views,monthsold,duration,thumbnail){
//     let card=document.createElement(`div`)
//     card.className="cards"
//     document.body.querySelector(".container").append(card)    
// }
function import_img(url) {
    let y=1;
    var x = document.createElement("IMG");
    x.setAttribute("src", url);
    x.setAttribute("width", "auto");
    x.setAttribute("height", "100px");
    x.setAttribute("alt", "image kyu nahi aa rahi bhenchod");
    document.body.querySelector(".container").lastChild.appendChild(x);
}
function createcard(titles, img_url) {
    let card = document.createElement(`div`)
    card.className = "cards"
    document.body.querySelector(".container").append(card)
    card.textContent = titles
    import_img(img_url)
}
for (let index = 1; index <= 4; index++) {
    if (confirm("Do you want to create a card?")) {
        createcard(prompt("Enter a title : "), prompt("Enter a URL of image : "))
    }
    else {
        alert("You are exited")
        break;
    }
    index--
}