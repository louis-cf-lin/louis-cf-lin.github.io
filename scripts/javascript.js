new fullpage('#fullpage', {
  //options here
  licenseKey: '1A848552-FFD34058-A6D0F08A-F33DC2F0',
  autoScrolling: true,
  scrollHorizontally: false,
  menu: '#menu',
  anchors: ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6'],
  lockAnchors: true,
	onLeave: function(origin, destination, direction){
		if (destination.index == 6) {
			document.querySelector('nav').classList.toggle('up')
		} else if (origin.index == 6) {
      document.querySelector('nav').classList.toggle('up')
    } else if (origin.index !== 6 && destination.index == 5) {
      document.getElementById('cv').classList.add('engaged')
    } else if (origin.index == 5 && destination.index !== 6) {
      document.getElementById('cv').classList.remove('engaged')
    }
  },
  afterRender: function() {
    document.getElementById('home-suppress').id = ''
  }
})

document.querySelectorAll('.menu-item').forEach((el, i) => {
  el.addEventListener('click', () => {
    fullpage_api.moveTo(i + 1)
  })
})

document.querySelectorAll('video').forEach((el, i) => {
  var width = el.style.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  ratio = 500 / 1280
  el.style.width = width / 3 + 'px'
  el.style.height = width / 3 * ratio + 'px'
  el.addEventListener('timeupdate', () => {
    if (el.currentTime < 0.2 && el.getAttribute('status') === '1') {
      el.setAttribute('status', '0')
    } else if (el.currentTime > 0.2 && el.getAttribute('status') === '0') {
      el.pause()
      el.setAttribute('status', '1')
    }
  })
  el.addEventListener('mouseenter', () => {
    el.play()
  })
  el.addEventListener('ended', () => {
    el.play()
  })
})

document.querySelectorAll('.footer-item').forEach((el, i) => {
  el.querySelector('h3').addEventListener('click', () => {
    fullpage_api.moveTo(i + 2)
  })
})

document.getElementById('cv-work-exp').addEventListener('click', () => {
  fullpage_api.moveTo(4)
})
document.getElementById('cv-projects').addEventListener('click', () => {
  fullpage_api.moveTo(3)
})
document.getElementById('footer-logo').addEventListener('click', () => {
  fullpage_api.moveTo(1)
})

var pauseFunc = () => {
  console.log(this)
  if (this.currentTime >= 0.5) {
    this.pause()
    this.removeEventListener('timeupdate', pauseFunc)
  }
}