import Phaser from 'phaser'
import WinPage from './assets/backgrounds/win.jpg'
import Tiles from './assets/tileset/RPG Nature Tileset.png'
import LevelOne from './assets/tileset/level_one/untitled.json'
import Player from './player.js'
import Up from './assets/icons/up.png'
import Down from './assets/icons/down.png'
import Right from './assets/icons/forward.png'
import Left from './assets/icons/backward.png'
import Start from './assets/icons/buttonStart.png'
import Loop from './assets/icons/open.png'

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({key: 'MainScene'})
    this.queue = []
    this.step = null
    this.board = null
    this.map = null
    this.isStaying = true
    this.currentQueue = 'actions'
    this.loop = []
    this.demoLoop = []
  }

  preload() {
    Player.preload(this)
    this.load.image('win', WinPage)
    this.load.image('tiles', Tiles)
    this.load.tilemapTiledJSON('map', LevelOne)
    this.load.image('up', Up)
    this.load.image('down', Down)
    this.load.image('right', Right)
    this.load.image('left', Left)
    this.load.image('start', Start)
    this.load.image('loop', Loop)
  }

  create() {
    let actionsHeader = this.add.text(700, 230, 'ACTIONS', {color: 'white', fontSize: '18px'})
    let functionHeader = this.add.text(800, 230, 'FUNCTION', {color: 'white', fontSize: '18px'})
    this.step = this.add.text(700, 270, '', {color: 'white'})
    this.function = this.add.text(800, 270, '', {color: 'white'})
    this.map = this.make.tilemap({key: 'map'})
    const tileset = this.map.addTilesetImage('RPG Nature Tileset', 'tiles', 32, 32, 0, 0)
    this.map.createLayer('Grass', tileset, 0, 0)
    const water = this.map.createLayer('Water', tileset, 0, 0)
    this.map.createLayer('Ground', tileset, 0, 0)
    this.player = new Player({scene: this, x: 30, y: 30, texture: 'knight', frame: 'eliteknight_idle_1'})
    const objects = this.map.createLayer('Objects', tileset, 0, 0)
    objects.setCollisionByProperty({collapse: true})
    water.setCollisionByProperty({collapse: true})
    this.matter.world.convertTilemapLayer(water)
    this.matter.world.convertTilemapLayer(objects)
    this.board = [this.map.findByIndex(3).pixelX, this.map.findByIndex(3).pixelY]
    const up = this.add.image(790, 30, 'up')
    const down = this.add.image(790, 90, 'down')
    const right = this.add.image(820, 60, 'right')
    const left = this.add.image(760, 60, 'left')
    const start = this.add.image(750, 150, 'start')
    const loop = this.add.image(830, 150, 'loop')
    actionsHeader.setInteractive()
    actionsHeader.on('pointerdown', () => {
      this.currentQueue = 'actions'
    })
    functionHeader.setInteractive()
    functionHeader.on('pointerdown', () => {
      this.currentQueue = 'function'
    })
    up.setInteractive()
    up.on('pointerdown', () => {
      if (this.isStaying) {
        this.currentQueue === 'actions' ? this.queue.push('up') : this.loop.push('up')
      }
    })
    down.setInteractive()
    down.on('pointerdown', () => {
      if (this.isStaying) {
        this.currentQueue === 'actions' ? this.queue.push('down') : this.loop.push('down')
      }
    })
    left.setInteractive()
    left.on('pointerdown', () => {
      if (this.isStaying) {
        this.currentQueue === 'actions' ? this.queue.push('left') : this.loop.push('left')
      }
    })
    right.setInteractive()
    right.on('pointerdown', () => {
      if (this.isStaying) {
        this.currentQueue === 'actions' ? this.queue.push('right') : this.loop.push('right')
      }
    })
    start.setInteractive()
    start.on('pointerdown', () => {
      this.Start()
    })
    loop.setInteractive()
    loop.on('pointerdown', () => {
      this.loop.forEach(element => this.demoLoop.push(element))
      this.queue.push('function')
    })
  }

  update() {
    this.player.update()
    this.step.text = this.queue
    this.function.text = this.loop
    if (
      this.board[0] - 30 < this.player.x &&
      this.player.x < this.board[0] + 30 &&
      this.board[1] - 30 < this.player.y &&
      this.player.y < this.board[1] + 30
    ) {
      this.switchScene()
    }
  }

  switchScene() {
    this.scene.stop('MainScene')
    setTimeout(() => {
      this.scene.start('WinScene')
    }, 600)
  }
  Loop() {
    console.log(this.demoLoop)
    this.player.direction = this.demoLoop.shift()
    setTimeout(() => {
      this.player.direction = 'stop'
      if (this.demoLoop.length === 0) {
        this.Start()
      } else {
        this.Loop(this.demoLoop)
      }
    }, 400)
  }

  Start() {
    console.log(this.demoLoop)
    this.isStaying = false
    let current = this.queue.shift()
    if (current === 'function') {
      this.Loop()
    } else {
      this.player.direction = current
    }
    setTimeout(() => {
      this.player.direction = 'stop'
      if (this.queue.length !== 0) {
        this.Start()
      } else {
        this.isStaying = true
      }
    }, 400)
  }
}
