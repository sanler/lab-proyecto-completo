function Game(canvadId) {
    this.canvas = document.getElementById(canvadId);
    this.ctx = this.canvas.getContext("2d");
    this.reset();
  }
  
  Game.prototype.start = function() {
    this.draw();


    alert('burger');
    

   // alert(client.selectedBurger.ingredientes);
   // document.getElementById('cliente').innerHTML=myBurger.ingredientes;
  



  };
  

  
  Game.prototype.gameOver = function() {
    this.stop();
    
    if(confirm("GAME OVER. Play again?")) {
      this.reset();
      this.start();
    }
  };
  
  Game.prototype.reset = function() {

    this.background = new Background(this);

    this.client = new Client(this);
    
    this.client.getBurger();

    this.player1=new Player(38,39,40,37,18,16);
    this.player2=new Player(38,39,40,37,18,16);


  };
  
  
  Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }; 
  
  Game.prototype.draw = function() {
    this.background.draw();
    this.client.draw();
    //this.player.draw();

  };
  

  