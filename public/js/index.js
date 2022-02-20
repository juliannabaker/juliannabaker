
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

const title = document.getElementById('job-title')
const titles = ['Product Designer', 'Developer', 'UX Engineer', 'UX/UI Designer']
let count = 0

setInterval(() => {
  console.log('yo dawg')
  if (count === titles.length) count = 0

  title.innerText = titles[count]
  count++
}, 2000)
