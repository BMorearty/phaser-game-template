import Phaser from 'phaser';

export default class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('maggie', 'assets/maggie.png');
  }

  create() {
    this.add.text(250, 100, 'Hello Phaser!', { fill: '#0f0' });
    this.add.image(100, 200, 'maggie');
  }
}
