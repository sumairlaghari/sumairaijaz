
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("sliderclose")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
  
//   document.getElementById("add_me").innerHTML = ` 
        
//         <div class="mySlides sliderfade"> 
//         <div class="slidernumbertext">1/10</div> 
//         <br/> 
//         <img src="project/breez/b1.png" style="height: 100%; justify-self: center;"/> 
//         </div>
//         <a class="sliderprev" onclick="plusSlides(-1)">❮</a>
//         <a class="slidernext" onclick="plusSlides(1)">❯</a>
        
//     `;
//     modal.style.display = "block";
//     showSlides(1);
// }

function showModal(data){
    for(i=0; i<data.length; i++){
        //console.log(data[i]);
        document.getElementById("add_me").innerHTML += ` 
          
          <div class="mySlides sliderfade"> 
          <div class="slidernumbertext">${i+1 + " / " + data.length}</div> 
          <br/> 
          <img src="${data[i]}" style="height: 100%; justify-self: center;"/> 
          </div>
          <a class="sliderprev" onclick="plusSlides(-1)">❮</a>
          <a class="slidernext" onclick="plusSlides(1)">❯</a>
          
      `;
      document.getElementById("add_dots").innerHTML += `
      <span class="sliderdot" onclick="currentSlide(${i+1})"></span> 
      `;
    }
    modal.style.display = "block";
    showSlides(1);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  document.getElementById("add_me").innerHTML = "";
  document.getElementById("add_dots").innerHTML = "";
  modal.style.display = "none";
  slideIndex = 1;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    document.getElementById("add_me").innerHTML = "";
    document.getElementById("add_dots").innerHTML = "";
    modal.style.display = "none";
    slideIndex = 1;
  }
}

let slideIndex = 1;


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("sliderdot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slideractive", "");
  }
  slides[slideIndex-1].style.display = "grid";  
  dots[slideIndex-1].className += " slideractive";
}