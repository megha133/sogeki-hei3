class Player {
    constructor(){
      this.index = null;
      this.playersKilled=0
      //this.distance = 0;
      this.name = null;
      //this.rank =0;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
      name:this.name,
      });
    }
    static updatePlayersKilled(count){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
      playersKilled:count,
      }); 
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
   
  }
  