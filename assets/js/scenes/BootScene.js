class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }
  
  preload() {
    // load images
    this.loadImages();
    // load spritesheets
    this.loadSpriteSheets();
    // load audio
    this.loadAudio();
    // load tilemap
    this.loadTileMap();
  }

  loadImages() {
    this.load.image('button1', 'https://jsbin-user-assets.s3.amazonaws.com/fariazz/blue_button01.png');
    this.load.image('button2', 'https://jsbin-user-assets.s3.amazonaws.com/fariazz/blue_button02.png');
    // load the map tileset image
    this.load.image('background', 'https://jsbin-user-assets.s3.amazonaws.com/fariazz/background-extruded.png');
  }

  loadSpriteSheets() {
    this.load.spritesheet('items', 'https://jsbin-user-assets.s3.amazonaws.com/fariazz/items.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('characters', 'https://jsbin-user-assets.s3.amazonaws.com/fariazz/characters.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('monsters', 'https://jsbin-user-assets.s3.amazonaws.com/fariazz/monsters.png', { frameWidth: 32, frameHeight: 32 });
    
  }

  loadAudio() {
    this.load.audio('goldSound', ['https://jsbin-user-assets.s3.amazonaws.com/fariazz/Pickup.wav']);
    this.load.audio('enemyDeath', ['https://jsbin-user-assets.s3.amazonaws.com/fariazz/EnemyDeath.wav']);
    this.load.audio('playerAttack', ['https://jsbin-user-assets.s3.amazonaws.com/fariazz/PlayerAttack.wav']);
    this.load.audio('playerDamage', ['https://jsbin-user-assets.s3.amazonaws.com/fariazz/PlayerDamage.wav']);
    this.load.audio('playerDeath', ['https://jsbin-user-assets.s3.amazonaws.com/fariazz/PlayerDeath.wav']);
  }

  // load the Tile map
  loadTileMap() {
    // map made with Tiled in JSON format
    this.load.tilemapTiledJSON('map', 'https://zalargeprojectfiles.blob.core.windows.net/project-files/large_level.json');
  }

  create() {
    this.scene.start('Game');
  }
}
