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
        HeavyEnemy = game.add.sprite(game.world.centerX + 200, game.world.centerY + 50, "HeavyEnemy");
        
        //Player Setup
        player = game.add.sprite(game.world.centerX - 250, game.world.centerY + 50, "Thor");
        player.scale.setTo(1.5);
        
        game.physics.enable(player,Phaser.Physics.ARCADE);
        player.body.collideWorldBounds = true;
        
            //Player Animations
            player.animations.add('idle', [0,1,2,3,4,5,6,7],6, true);
        
        
        
        
        HeavyEnemy.scale.setTo(2);
        
        
        
        
       
    }
    
    function update() {
        
    }
};
