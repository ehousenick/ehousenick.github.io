function openDetails(name) {
  fullscreen.style.display = "block";
  fullscreen.classList.add("slide-in-bottom");

  setTimeout(function() {
    orangelogo.src = "Images/shflogodark.png";
  }, 250);

  var allspans = document.getElementsByClassName('menuspan');
  for (var i = 0; i < allspans.length; i++) {
    allspans[i].style.background = '#121212';
  }



  if (name === 'dog') {
    document.getElementById("headerimage").src = "Images/Stills/dog.png";
    document.getElementById("title").textContent="Dog From A Graveyard";
    document.getElementById("filmdescription").textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt mauris eget hendrerit aliquam. Vivamus non consectetur dolor, vel volutpat dui.";
    document.getElementById("year").textContent="tba";
    document.getElementById("linktext").textContent="";
  } else if (name === 'trust') {
    document.getElementById("headerimage").src = "Images/Stills/trust.png";
    document.getElementById("title").textContent="Trust";
    document.getElementById("filmdescription").textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt mauris eget hendrerit aliquam. Vivamus non consectetur dolor, vel volutpat dui.";
    document.getElementById("year").textContent="2021";
    document.getElementById("linktext").textContent="";
  } else if (name === 'rednecro') {
    document.getElementById("headerimage").src = "Images/Stills/rednecro.png";
    document.getElementById("title").textContent="The Rednecromancer";
    document.getElementById("filmdescription").textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt mauris eget hendrerit aliquam. Vivamus non consectetur dolor, vel volutpat dui.";
    document.getElementById("year").textContent="2022";
    document.getElementById("linktext").textContent="";
  } else if (name === 'sbm') {
    document.getElementById("headerimage").src = "Images/Stills/placeholder.png";
    document.getElementById("title").textContent="The Stinkbugman Man";
    document.getElementById("filmdescription").textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt mauris eget hendrerit aliquam. Vivamus non consectetur dolor, vel volutpat dui.";
    document.getElementById("year").textContent="tba";
    document.getElementById("linktext").textContent="";
  } else if (name === 'kma') {
    document.getElementById("headerimage").src = "Images/Stills/kma.png";
    document.getElementById("title").textContent="Kiss My Ass Cookin";
    document.getElementById("filmdescription").textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt mauris eget hendrerit aliquam. Vivamus non consectetur dolor, vel volutpat dui.";
    document.getElementById("year").textContent="ongoing";
    document.getElementById("vidlink").href ="https://youtu.be/XM5z4gOSI4E";
  } else if (name === 'cadaver') {
    document.getElementById("headerimage").src = "Images/Stills/cadaver.png";
    document.getElementById("title").textContent="Cadaver";
    document.getElementById("filmdescription").textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt mauris eget hendrerit aliquam. Vivamus non consectetur dolor, vel volutpat dui.";
    document.getElementById("year").textContent="2018";
    document.getElementById("vidlink").href ="https://youtu.be/VOE1jzZl4Yg";
  } else if (name === 'syb') {
    document.getElementById("headerimage").src = "Images/Stills/syb.png";
    document.getElementById("title").textContent="Seeing You Bleed";
    document.getElementById("filmdescription").textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt mauris eget hendrerit aliquam. Vivamus non consectetur dolor, vel volutpat dui.";
    document.getElementById("year").textContent="2018";
    document.getElementById("vidlink").href ="https://youtu.be/COGA2NsgkKc";
  } else if (name === 'janitor') {
    document.getElementById("headerimage").src = "Images/Stills/janitor.png";
    document.getElementById("title").textContent="The Janitor";
    document.getElementById("filmdescription").textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt mauris eget hendrerit aliquam. Vivamus non consectetur dolor, vel volutpat dui.";
    document.getElementById("year").textContent="2017";
    document.getElementById("vidlink").href ="https://youtu.be/hr-xJQE15Ms";
  } else if (name === 'skits') {
    document.getElementById("headerimage").src = "Images/Stills/placeholder.png";
    document.getElementById("title").textContent="Random-ass-skits";
    document.getElementById("filmdescription").textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt mauris eget hendrerit aliquam. Vivamus non consectetur dolor, vel volutpat dui.";
    document.getElementById("year").textContent="ongoing";
    document.getElementById("vidlink").href ="https://youtu.be/MZLruo8E_gg";
  }
}

function closeDetails() {
  fullscreen.style.display = "none";
  document.getElementById("linktext").textContent="watch now";
  orangelogo.src="Images/shflogolarge.png";
  var allspans = document.getElementsByClassName('menuspan');
  for (var i = 0; i < allspans.length; i++) {
    allspans[i].style.background = '#cf610f';
  }
}
