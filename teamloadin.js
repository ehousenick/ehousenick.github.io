function fadeIn() {
  var portraits = document.getElementsByClassName('face');
  for (var i = 0; i < portraits.length; i++) {
    portraits[i].classList.add("teamfadein");
  }
  var infos = document.getElementsByClassName('teamdescript');
  var names = document.getElementsByClassName('nameheader');
  setTimeout(function() {
    for (i = 0; i < infos.length; i++) {
      names[i].classList.add("teamfadein");
    }
  }, 500);
  setTimeout(function() {
    for (i = 0; i < infos.length; i++) {
      infos[i].classList.add("teamfadein");
    }
  }, 1000);
}
window.addEventListener("load", fadeIn);
