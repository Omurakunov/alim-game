import Phaser from 'phaser'

const buttonStyle = {
  font: '20px Arial',
  fill: '#fff',
  align: 'center'
}

const width = window.screen.width < 640 ? window.screen.width : 640

export class MenuScene extends Phaser.Scene {
  constructor() {
    super({key: 'MenuScene'})
  }

  create() {
    const logo = this.add.text(width / 2, 100, 'Игра про C3', {font: '48px Arial', fill: '#fff'})
    logo.setOrigin(0.5, 0.5)

    const score = this.add.text(width / 2, 200, 'Лучший счет: 0', {font: '32px Arial', fill: '#fff'})
    score.setOrigin(0.5, 0.5)

    const playButton = this.add.text(width / 2, 300, 'Начать игру', buttonStyle)
    playButton.setOrigin(0.5, 0.5)
    playButton.setInteractive()
    playButton.on('pointerdown', this.onPlay, this)
    playButton.on(
      'pointerover',
      () => {
        this.onHover(playButton)
      },
      this
    )
    playButton.on(
      'pointerout',
      () => {
        this.onOut(playButton)
      },
      this
    )

    const optionsButton = this.add.text(width / 2, 400, 'Как играть', buttonStyle)
    optionsButton.setOrigin(0.5, 0.5)
    optionsButton.setInteractive()
    optionsButton.on('pointerdown', this.onOptions, this)
    optionsButton.on(
      'pointerover',
      () => {
        this.onHover(optionsButton)
      },
      this
    )
    optionsButton.on(
      'pointerout',
      () => {
        this.onOut(optionsButton)
      },
      this
    )
  }

  onPlay() {
    this.scene.start('MainScene')
  }

  onOptions() {
    this.scene.start('OptionsMenu')
  }

  onHover(button) {
    console.log(button)
    button.setTint(0xff0000)
  }

  onOut(button) {
    console.log(button)
    button.setTint(0xffffff)
  }
}
