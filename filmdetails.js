function openDetails(name) {
  fullscreen.style.display = "block";
  fullscreen.classList.add("slide-in-bottom");

  var allspans = document.getElementsByClassName('menuspan');
  for (var i = 0; i < allspans.length; i++) {
    allspans[i].style.background = '#121212';
  }



  if (name === 'dog') {
    document.getElementById("headerimage").src = "Images/Stills/dog.png";
    document.getElementById("title").textContent="Dog From A Graveyard";
    document.getElementById("filmdescription").textContent="A mysterious yet adorable dog arises from his century long slumber, determined to find the best no-budget short films ever made.";
    document.getElementById("year").textContent="tba";
    document.getElementById("linktext").textContent="";
  } else if (name === 'trust') {
    document.getElementById("headerimage").src = "Images/Stills/trust.png";
    document.getElementById("title").textContent="Trust";
    document.getElementById("filmdescription").textContent="A potentially deranged man and a journal embark on an ominous journey through the woods.";
    document.getElementById("year").textContent="2021";
    document.getElementById("linktext").textContent="";
  } else if (name === 'rednecro') {
    document.getElementById("headerimage").src = "Images/Stills/rednecro.png";
    document.getElementById("title").textContent="The Rednecromancer";
    document.getElementById("filmdescription").textContent="A redneck alchemist and his pet frog find out what happens when you make a deal with the devil.";
    document.getElementById("year").textContent="2022";
    document.getElementById("linktext").textContent="";
  } else if (name === 'sbm') {
    document.getElementById("headerimage").src = "Images/Stills/placeholder.png";
    document.getElementById("title").textContent="The Stinkbugman Man";
    document.getElementById("filmdescription").textContent="When the exterminator should be exterminated.";
    document.getElementById("year").textContent="tba";
    document.getElementById("linktext").textContent="";
  } else if (name === 'kma') {
    document.getElementById("headerimage").src = "Images/Stills/kma.png";
    document.getElementById("title").textContent="Kiss My Ass Cookin";
    document.getElementById("filmdescription").textContent="A long-lost found footage video of a cooking show gone wrong resurfaces as a fully televised series dedicated to bringing you the best in southern cooking.";
    document.getElementById("year").textContent="ongoing";
    document.getElementById("vidlink").href ="https://youtu.be/XM5z4gOSI4E";
  } else if (name === 'cadaver') {
    document.getElementById("headerimage").src = "Images/Stills/cadaver.png";
    document.getElementById("title").textContent="Cadaver";
    document.getElementById("filmdescription").textContent="A small-time criminal gets himself tangled up in the wrong side of the business.";
    document.getElementById("year").textContent="2018";
    document.getElementById("vidlink").href ="https://youtu.be/VOE1jzZl4Yg";
  } else if (name === 'syb') {
    document.getElementById("headerimage").src = "Images/Stills/syb.png";
    document.getElementById("title").textContent="Seeing You Bleed";
    document.getElementById("filmdescription").textContent="One man's ride to band practice goes terribly wrong when he stumbles upon a tome that unleashes a deadly demon who wreaks havoc on a small property off of Boone Lake.";
    document.getElementById("year").textContent="2018";
    document.getElementById("vidlink").href ="https://youtu.be/COGA2NsgkKc";
  } else if (name === 'janitor') {
    document.getElementById("headerimage").src = "Images/Stills/janitor.png";
    document.getElementById("title").textContent="The Janitor";
    document.getElementById("filmdescription").textContent="Ray - a janitor by day, vampire hunter by night, serves to protect his campus from the undead at all costs.";
    document.getElementById("year").textContent="2017";
    document.getElementById("vidlink").href ="https://youtu.be/hr-xJQE15Ms";
  } else if (name === 'skits') {
    document.getElementById("headerimage").src = "Images/Stills/placeholder.png";
    document.getElementById("title").textContent="Random-ass-skits";
    document.getElementById("filmdescription").textContent="";
    document.getElementById("year").textContent="ongoing";
    document.getElementById("vidlink").href ="https://youtu.be/MZLruo8E_gg";
  }
}

function closeDetails() {
  fullscreen.style.display = "none";
  document.getElementById("linktext").textContent="watch now";
  var allspans = document.getElementsByClassName('menuspan');
  for (var i = 0; i < allspans.length; i++) {
    allspans[i].style.background = '#cf610f';
  }
}
