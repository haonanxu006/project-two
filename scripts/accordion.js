var acc = document.getElementsByClassName('contentBx');

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){this.classList.toggle("active")})
}

