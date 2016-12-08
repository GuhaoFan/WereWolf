function BasePlayer (id,name,role,isDead) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.isDead = isDead;

    this.setName = function(name) {
        this.name = name;
    };
    this.setRole = function(role) {
        this.role = role;
    }
    this.setIsDead = function(isDead) {
        this.isDead = isDead;
    }
}

function GetPlayers(){
  // get players from web socket
  // ???

  // playerID:[name,...,...]
  return {player1:["p1"],
          player2:["p2"],
          player3:["p3"],
          player4:["p4"],
          player5:["p5"],
          player6:["p6"]
         }
}

function initHTML(players){
  var count = Object.keys(players).length;
  // render canvas on HTML according to number of player
  // data strucure should look like:
  // {playerID: PIXI.container,
  //  playerID: PIXI.container
  // }
}

function game(){

  // 创建房间 ？？
  var players = GetPlayers();

  //

  // 显示所有玩家名字编号状态，按照顺序排列
  initHTML(players);

  // 玩家选择自己身份
  var playerList = {};

  while(Object.keys(playerList).length <　Object.keys(players).length){  // json ? array
    // get players instruction
    // parse instructions to {playerID:[role,...]}

    // for every received instruction
    if ( role == "witch") {
      var p = new witch(id,name,role);
    }

    if ( role == "seer" ) {
      var p = new seer(id,name,role);
    }

    if ( role == "pasent" ) {
      var p = new pasent(id,name,role);
    }

    if ( role == "werewolf" ) {
      var p = new werewolf(id,name,role);
    }

    if ( role == "hunter" ) {
      var p = new hunter(id,name,role)
    }

    playerList[id]=p;
  }

}
