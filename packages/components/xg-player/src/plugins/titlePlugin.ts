import { Plugin } from 'xgplayer'

const { POSITIONS } = Plugin

export default class titlePlugin extends Plugin {
  static get pluginName() {
    return 'titlePlugin'
  }

  static get defaultConfig () {
      return {
        position: POSITIONS.ROOT_TOP
      }
  }

  constructor (args) {
    super(args)
  }

  beforePlayerInit () {
    
  }

  afterPlayerInit () {
    
  }

  afterCreate () {
    this.parent.style.left = 0
    this.parent.style.right = 0
    this.title = this.find('.title')
    this.title.style.textAlign = "left"
    this.title.style.fontSize = "15px"
    this.title.style.color = "white"
    this.title.style.position = 'absolute'
    this.title.style.padding = '10px 16px'
    this.title.style.height = '40px'
    this.title.style.left = 0
    this.title.style.right = 0
    this.title.style.top = 0
    this.title.style.zIndex = 10
    this.title.style.backgroundImage = 'linear-gradient(0deg,transparent,rgba(0,0,0,.37),rgba(0,0,0,.75),rgba(0,0,0,.75))'
    this.title.innerHTML = this.playerConfig.videoTitle
    this.clickHandler = this.hook("titleDoubleClick", (e) => {
    }, {
      pre: function pre(e) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
    this.bind('.title', 'dblclick', this.clickHandler)
  }

  destroy () {
    this.unbind('.title', 'dblclick', this.clickHandler)
    this.title = null
  }

  render () {
    return `<div><div class="title"></div></div>`
  }
}