//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;
let xRaqueteOponente = 585
let yRaqueteOponente = 150

//velocidade da bolinha
let velocidadeXBolinha = 5;
 let velocidadeYBolinha = 5;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let RaqueteLargura = 10;
let RaqueteAltura = 90;

//sons do jogo
let ponto;
let trilha;
let raquetada;

let colidiu = false;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
 raquetada = loadSound("raquetada.mp3");
  
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}
function draw() {
  background(0);
  mostraBolinha();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaBolinha();
  verificaoColisaoBorda();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}
function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}
 function movimentaBolinha (){
    
  xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}
function verificaoColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= - 1;
    
  }
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= - 1;
  }
}

function mostraRaquete(x,y){
 rect(x,y,xRaquete,yRaquete,RaqueteLargura,RaqueteAltura);

}

function mostraRaqueteOponente(){
 rect(xRaqueteOponente,yRaqueteOponente,RaqueteLargura,RaqueteAltura);

}


function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
   if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function movimenteRaqueteOponente(){
if(keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
   if(keyIsDown(83)){
    yRaqueteOponente += 10;
   }
}

function  verificaColisaoRaquete(){
 if(xBolinha-raio< xRaquete + RaqueteLargura
   && yBolinha - raio < yRaquete + RaqueteAltura
   && yBolinha + raio > yRaquete) {
  velocidadeXBolinha *= - 1;
}
}
  function verificaoColisaoRaquete(x,y){
    colidiu = collideRectCircle(x,y,RaqueteLargura, RaqueteAltura, xBolinha, yBolinha, raio);
    
    if(colidiu){
       
  velocidadeXBolinha *= - 1;
      raquetada.play();
    }
  }
 function incluiPlacar(){
   stroke("red");
   textAlign(CENTER);
   textSize(16);
   fill(255);
   
   //placar meusPontos
   fill(color(255,171,0));
   rect(135, 10, 35, 20);
   fill("blue");
   text(meusPontos,150,26);
   
   //placar pontosOponente
   fill(color(255,171,0));
   rect(430, 10, 35, 20);
   fill("blue");
   text(pontosOponente,445,26);
  
   
 }
  
function marcaPonto(){
  if(xBolinha >590){
    meusPontos += 1;
    ponto.play();
  }
  if(yBolinha <10){
    pontosOponente += 1;
    ponto.play();
  }
}
function MudaCorPlacar(){
  fill("blue");
  
}
function mudacorBolinha(){
  fill("orange")
  
}