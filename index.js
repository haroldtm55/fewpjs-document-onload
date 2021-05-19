document.addEventListener('DOMContentLoaded', function() {
  console.log('The Dom had loaded')
  document.getElementById('text').innerHTML = 'This is really cool!'
})

console.log(
  'This console.log() fires when index.js loads - before DOMContentLoaded is triggered'
)