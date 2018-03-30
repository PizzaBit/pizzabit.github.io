var keys

$.getJSON('keys.json', function(data) {
  keys = data
})

function chkKey() {
  let enteredKey = document.getElementById("key").value
  if (keys[md5(enteredKey)]) {
    document.head.innerHTML = '<meta http-equiv="refresh" content="2; URL=http://google.com/">'
    document.body.innerHTML = 'If your browser doesn\u0027t automatically go there within a few seconds,you may want to go to <a href="http://google.com/">the destination</a> manually.'
  }
}
