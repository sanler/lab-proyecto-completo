
function Player(key1, key2, key3,key4,keyDelete, keyServe,clientBurger) {

this.pressedIngredients=[];
this.clientBurger=clientBurger;
this.key1=key1;//pan
this.key2=key2;//carne
this.key3=key3;//queso
this.key4=key4;//lechuga

this.keyDelete=keyDelete;
this.keyServe=keyServe;

this.setListeners();

//array con palabras aleatorias mínimo 3
/*this.secretWord='';//palabra elegida al azar
this.letters=[];//array de teclas pulsadas por el usuario
this.guessedLetter='';//cadena con las letras acertadas. La usaremos para ver si hemos ganado
this.errorsLeft=10;//max de errores*/
 }




 Player.prototype.delete = function () {

 };

 Player.prototype.serve = function () {

};

Player.prototype.setListeners = function() {

  document.onkeydown = function(event) {

    if (event.keyCode==this.key1) {
     alert('1');
      this.pressedIngredients.push(1);


    }else if(event.keyCode==this.key2){
      alert('2');

      this.pressedIngredients.push(2);


    }else if(event.keyCode==this.key3){
      alert('3');

      this.pressedIngredients.push(3);


    }else if(event.keyCode==this.key4){
      alert('4');

      this.pressedIngredients.push(4);


    }else if(event.keyCode==this.keyDelete){
      alert('delete');

      this.pressedIngredients=[];

    }else if(event.keyCode==this.keyServe){

        alert('burger player 1 : '+this.pressedIngredients);

         if(this.checkWinner()){

              alert('acierto');

         }else{

          alert('fallo');


         }
    }

  }.bind(this);
};

/*
 Hangman.prototype.checkIfLetter = function (keyCode) {


if(keyCode>=65 && keyCode<=90){

//codigos ascii para letras mayúsculas
return true;

}else if(keyCode>=97 && keyCode<=122){

return true;

}else{

return false;

}

 };

Hangman.prototype.checkClickedLetters = function (key) {


  if(this.letters.indexOf(key.toUpperCase())===-1){


      return true;


  }else{

      return false;

  }


};

 Hangman.prototype.addCorrectLetter = function (i) {
 
 
  this.guessedLetter+=this.secretWord[i].toUpperCase();//añadir letra adivinada

 return this.checkWinner();
  //hemos ganado?

    
 };

 Hangman.prototype.addWrongLetter = function (letter) {

  var palabraCorrecta=this.secretWord;//palabra correcta

  if(palabraCorrecta.indexOf(letter)==-1){


    this.errorsLeft--;
  }
  

return this.checkGameOver();

};

 Hangman.prototype.checkGameOver = function () {


    if(this.errorsLeft==0){

      return true;
      
    }else{


      return false;

    }

 };
*/
 Player.prototype.checkWinner = function (clientBurger) {

  var selectedBurger=clientBurger.ingredientes;//palabra correcta
  var acierto=1;
  var i=0;
  var playerIngredients=this.pressedIngredients;

  if(selectedBurger.length===playerIngredients.length){


      while((acierto==1)&& (i<selectedBurger.length)){

          if(selectedBurger[i]!==playerIngredients[i]){
          
            acierto=0;

        }else{

            i++;
        }
  }
  //hemos ganado?
  }
    

    if(acierto===1){
      
        console.log('ACIERTO');
        return true;

    }else{

      console.log('NOT YET');
      return false;
    }

  
 };





/*
document.onkeydown = function (e) {
  var winner=false;
  var gameOver=false;

  //comprobar si es una letra. sino lo es no hacer nada

      if(hangman.checkIfLetter(e.keyCode)){
          
          alert('ES LETRA');
          console.log(e);

          //Comprobamos si está pulsada, sino, la añadimos al array de letters.
          //si está pulsada no hacemos nada

          if(hangman.checkClickedLetters(e.key)){
   
          hangman.letters.push(e.key);


          }
          var indice=hangman.secretWord.indexOf(e.key);
          if(indice!==-1){

            hangman.guessedLetter+=e.key;
            winner = hangman.addCorrectLetter(indice);
             //pintarla con writeCorrectLetter
              canvas.writeCorrectLetter(hangman.secretWord[indice],indice);
            alert('W'+winner);
            alert('acertada'+e.key);

          }else{

            alert('no');
            gameOver= hangman.addWrongLetter(e.key);
            //pintarla con writeWrongLetter
            alert('gO'+gameOver);

          }

          
      //comprobamos si está acertada. si lo está llamamos a writeCorrectLetter
      //Sino es acierto llamamos a writeWrongLetter
      
    }
alert('llega');
     if(winner===true){
       
      alert('GANASTE');

    }
     if(gameOver===true){alert('PERDISTE GASTASTE TU 10 INTENTOS');}
  
};*/
