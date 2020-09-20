new fullpage('#fullpage', {
  //options here
  licenseKey: '1A848552-FFD34058-A6D0F08A-F33DC2F0',
  autoScrolling: true,
  scrollHorizontally: false,
  menu: '#menu',
  anchors: ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6'],
  lockAnchors: true
})
// story.size = true

document.querySelectorAll('.menu-item').forEach((el, i) => {
  el.addEventListener('click', () => {
    console.log(i)
    fullpage_api.moveTo(i + 1)
  })
})