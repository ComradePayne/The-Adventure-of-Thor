window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        // Load an image and call it 'logo'.
        game.load.image( 'Background', 'assets/sprites/DA3ThrymsHall.png' );
        game.load.spritesheet('Thor', 'assets/sprites/ThorSprite.png', 90, 90);
        game.load.spritesheet('HeavyEnemy', 'assets/sprites/HeavyEnemySprite.png', 110, 110);
    }
    
    var player; //Thor
        var playerFacing = 'right'; // Which way is Thor facing (Left or right)
        player.health = 5;
    
        
    var HeavyEnemy;//The dude you need to fight.
        var enemyFacing = 'left'; // Which way is Thrym facing?
    
    var background; //Thrym's Hall
    
    //Sound
    var music;  //Suitably epic music.
    var hammerHitSound; //A whack!
    
    //Buttons!
    var cursors;    //To move.
    var attackButton;   //To strike.
    var rollButton;     //To roll.
    
    
    function create() {
        
        //Physics setup
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //Controls setup
        cursors = game.input.keyboard.createCursorKeys();
        attackButton = game.input.keyboard.addKey(Phaser.Keyboard.X);
        rollButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        //Background setup
        
        background = game.add.sprite(0,0,'Background');

        
        //Player Setup
        player = game.add.sprite(game.world.centerX - 250, game.world.centerY + 50, "Thor");
        player.scale.setTo(1.5);
        
        game.physics.enable(player,Phaser.Physics.ARCADE);
        player.body.collideWorldBounds = true;
        
            //Player Animations
            player.animations.add('idle', [0,1,2,3,4,5,6,7],20, true);
            player.animations.add('run', [9,10,11,12,13,14,15,16,17,18,19,20], 20, true);
            player.animations.add('roll', [21,22,23,24,25,26,27,28,29], 20, false);
            player.animations.add('combo1', [30,31,32,33,34,35], 20, false);
            player.animations.add('combo2', [36,37,38,39,40,41,42,43], 15, false);
            player.animations.add('combo3', [45, 46,47,48,49,50,51,52,54,55,56,57], 15, false);
            player.animations.add('combo4', [58,59,60,61,62,63,64,65,66,67,68,69], 15, false);
            
            player.animations.add('death', [72,73,74,75,76,77,78,79], 15, false);
        
        
        //Enemy Setup
        HeavyEnemy = game.add.sprite(game.world.centerX + 200, game.world.centerY + 50, "HeavyEnemy");
        HeavyEnemy.scale.setTo(2);
        
        game.physics.enable(HeavyEnemy, Phaser.Physics.ARCADE);
        HeavyEnemy.body.collideWorldBounds = true;
        
        //Enemy Animations
            HeavyEnemy.animations.add('idle', [0,1,2,3,4,5],20, true);
            HeavyEnemy.animations.add('run', [6,7,8,9,10,11,12,13,14,15], 20, true);
            HeavyEnemy.animations.add('combo1', [16,17,18,19,20,21,22], 20, false);
            HeavyEnemy.animations.add('combo2', [23,24,25,26,27,28,29,30,31,32], 15, false);
            
            HeavyEnemy.animations.add('hurt',[33,34,35,35,35],15,false)
            HeavyEnemy.animations.add('death', [36,37,38,38,38,38,38], 10, false);
        
        
       
    }
    
    function update() {
        
        //Player Movement
        
        
        
    }
    
    
    //PLAYER FUNCTIONS
    //The player's overall controls will be handled by the playerControl function, which will call all the other player functions at the appropriate times.
    
    function playerControl(){}
    
    
    function playerRun(){}
    
    function playerCombo1(){}
    
    function playerCombo2(){}

    function playerCombo3(){}

    function playerCombo4(){}
    
    function playerRoll(){}
    
    function playerHurt(){}
    
    function playerDie(){}

    //ENEMY FUNCTIONS
    //The enemy's AI is controlled by enemyAI(), which calls other enemy functions at appropriate times.
    function enemyAI(){}
    
    function enemyRun(){}

    function enemyCombo1(){}
    
    function enemyCombo2(){}
    
    function enemyDie(){}
    
    
    
};
