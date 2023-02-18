import Phaser from 'phaser'
import First from './assets/backgrounds/pageOne.jpg'
import Second from './assets/backgrounds/pageTwo.jpg'
import Third from './assets/backgrounds/pageThree.jpg'
import Right from './assets/icons/arrowRight.png'
import Left from './assets/icons/arrowLeft.png'
import Cross from './assets/icons/cross.png'
export default class GuideScene extends Phaser.Scene {
  constructor() {
    super({key: 'guideScene'})
    this.pages = ['firstPage', 'secondPage', 'thirdPage']
    this.currentPage = 0
  }
  preload() {
    this.load.image('firstPage', First)
    this.load.image('secondPage', Second)
    this.load.image('thirdPage', Third)
    this.load.image('next', Right)
    this.load.image('previous', Left)
    this.load.image('cross', Cross)
  }
  create() {
    this.add.image(470, 320, this.pages[this.currentPage])
    const left = this.add.image(50, 320, 'previous')
    const right = this.add.image(890, 320, 'next')
    const cross = this.add.image(890, 50, 'cross')
    cross.setInteractive()
    left.setInteractive()
    right.setInteractive()
    cross.on('pointerdown', () => {
      this.scene.start('MenuScene')
    })
    left.on('pointerdown', () => {
      if (this.currentPage > 0) {
        this.currentPage -= 1
      }
      this.add.image(470, 320, this.pages[this.currentPage])
    })
    right.on('pointerdown', () => {
      if (this.currentPage < 2) {
        this.currentPage += 1
      }
      this.add.image(470, 320, this.pages[this.currentPage])
    })
  }
}
