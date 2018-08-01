function groups() {
  if (document.getElementById("favGroups").style.display="none") {
    document.getElementById("favGroups").style.display="block";
    document.getElementById("click").innerHTML="Hide more favorites";
  } else {
    document.getElementById("favGroups").style.display="none";
    document.getElementById("click").innerHTML="Show more favorites";
    }
}
