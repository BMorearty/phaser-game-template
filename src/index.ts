import Phaser from 'phaser';

import SimpleScene from './scenes/SimpleScene';

const gameConfig = {
  width: 600,
  height: 400,
  scene: SimpleScene,
};

const game = new Phaser.Game(gameConfig);
export default game;
