function preload() {
  // put preload code here
}

//function setup() {
//  createCanvas(windowWidth, windowHeight);
//  // put setup code here
//  const message =
//    "This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
//  textAlign(CENTER, CENTER);
//  textSize(16);
//  text(message, width / 2, height / 2);
//}

//function draw() {
//  // put drawing code here
//}

function setup() {
  noLoop();
  createCanvas(windowWidth, windowHeight);
}

function disegnaNellaCella(x, y, size, rowNumber) {
  quantita = pow(3, 5 - rowNumber)
  for (let q = 0; q < quantita ;q++ ){
    disegnaQuad (x,y, size)
  }
}

function disegnaQuad(x, y, size){

  //ogni punto che può variare di un tot (il range)
  //ogni punto può andare a sovrapporsi in parte su altre celle
  //devo stabilire di quanto
  let mezzoRange = size/5;

  let x1 = random (x-mezzoRange, x+mezzoRange);
  let y1 = random (y-mezzoRange, y+mezzoRange);

  let x2 = random (x+size-mezzoRange, x+size+mezzoRange);
  let y2 = random (y-mezzoRange, y+mezzoRange);

  let x3 = random (x+size+mezzoRange, x+size-mezzoRange);
  let y3 = random (y+size+mezzoRange, y+size-mezzoRange);

  let x4 = random (x-mezzoRange, x+mezzoRange);
  let y4 = random (y+size-mezzoRange, y+size+mezzoRange); 

  //il giro delle coordinate del quadrilatero parte da in alto a sinistra, poi in alto a destra, poi in basso a destra, poi in basso a sinistra
  noFill ();
  stroke (1);
  strokeWeight (1);
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
}

function draw() {

  background("grey");

 
  //definisco la grandezza che deve avere ciascuna "cella"
  let size = windowHeight/8;
  //la dimensione del margine è quanto una cella
  let margin = size;

  //definisco il numero di colonne: devo dividere la grandezza dello schermo per la dimensione di ogni cella, ma tenendo conto del margine
  let ncols = floor((windowWidth - 2*margin) / size) ;
  let nrow = 6;
  

  for (let r = 0; r < nrow; r++) {
    let y = r*size + margin;
    for (let c = 0; c < ncols; c++){
      let x = c*size + margin;
 

      if(r>0 || (r==0 && c > (ncols/2 + 1))){
        disegnaNellaCella (x, y, size, r)
      }
    }

  }
}
