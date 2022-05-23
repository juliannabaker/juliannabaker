
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

const title = document.getElementById('job-title')
const titles = ['Software Engineer', 'UX Engineer', 'UX/UI Designer', 'UX Researcher', 'Mobile Developer']
let count = 0

setInterval(() => {
  console.log('yo dawg')
  console.log('you found me dawg')
  if (count === titles.length) count = 0

  title.innerText = `${titles[count]}\n`
  count++
}, 2000)
