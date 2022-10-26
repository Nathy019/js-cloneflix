// let filme01 = 'imagens/filme01.jpg'
// let filme02 = 'imagens/filme02.jpg'
// let filme03 = 'imagens/filme03.jpg'
// let filme04 = 'imagens/filme04.jpg'
// let filme05 = 'imagens/filme05.jpg'
// let filme06 = 'imagens/filme06.jpg'
// document.querySelector(".container").innerHTML += "<img src='" + filme01 + "'> "
// document.querySelector(".container").innerHTML += "<img src='" + filme02 + "'> "
// document.querySelector(".container").innerHTML += "<img src='" + filme03 + "'> "
// document.querySelector(".container").innerHTML += "<img src='" + filme04 + "'> "
// document.querySelector(".container").innerHTML += "<img src='" + filme05 + "'> "
// document.querySelector(".container").innerHTML += "<img src='" + filme06 + "'> "

let filmes = ['imagens/filme01', 'imagens/filme02.jpg', 'imagens/filme03.jpg', 'imagens/ruamedo66.jpg', 'imagens/ruamedo78.jpg', 'imagens/ruamedo94.jpg']
document.querySelector(".container").innerHTML += "<img src='" + filmes[0] + "'> ";
document.querySelector(".container").innerHTML += "<img src='" + filmes[1] + "'> ";
document.querySelector(".container").innerHTML += "<img src='" + filmes[2] + "'> ";
document.querySelector(".container").innerHTML += "<img src='" + filmes[3] + "'> ";
document.querySelector(".container").innerHTML += "<img src='" + filmes[4] + "'> ";
document.querySelector(".container").innerHTML += "<img src='" + filmes[5] + "'> ";

// colocar + é o operador para se conectar com o que está dentro das ""
//+= manter o que já existe
//css = ./igual a classe do css # = iD do csstag somente a que fro colocada no codigo 