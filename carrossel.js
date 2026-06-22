//Código JavaScript para demonstração de passagem automática
//captura o conteúdo do elemento/tag img que exibe a imagem em destaque 
let imagemNaTela = document.getElementById("banner");
let imagemNaTela1 = document.getElementById("banner2");
//variável de controle da imagem que esta sendo exibida
let fotoAtual = 1;
let fotoAtual1 = 1;

// Função para passagem automatica das fotos sem clique
function passarFoto() {
    
    if (fotoAtual == 1) {
        imagemNaTela.src = "imagens/Banner.jpg";
        fotoAtual = 2;
        
    } else if (fotoAtual == 2) {
        imagemNaTela.src = "imagens/Banner1.png";
        fotoAtual = 1;
        
    } 
}

// Função para passagem automatica das fotos sem clique
function passarFoto1() {
    
    if (fotoAtual1 == 1) {
        imagemNaTela1.src = "imagens/Banner1.png";
        fotoAtual1 = 2;
        
    } else if (fotoAtual1 == 2) {
        imagemNaTela1.src = "imagens/Banner.jpg";
        fotoAtual1 = 1;
        
    } 
}
// Cronometro para alterar a foto a cada 2 segundos
//
setInterval(passarFoto, 2000);
setInterval(passarFoto1, 2000);