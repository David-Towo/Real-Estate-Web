const mobile = document.querySelector('.mobile-navbar')
const button = document.querySelector('#button-one')

function revealMobileList() {
        mobile.style.display = "grid";
    }

mobile.addEventListener("click", revealMobileList); 


const previous = document.querySelector('.prev')
const next = document.querySelector('.next')
const images = document.querySelector('.second-container-images').children
const totalImages = images.length
let currentIndex = 0

previous.addEventListener('click', () => {
    previousImage()
})
next.addEventListener('click', () => {
    nextImage();
})

setInterval( () =>{
    nextImage();},2000);

// Then add a function to go to the next image
// function nextImage(){

//     images[currentIndex].classList.add('hide');
//         if(currentIndex == totalImages-1){
//         currentIndex = -1;
//         }else{
//         currentIndex++;
//         }

//     images[currentIndex].classList.remove('hide');
// }

// then add the function to go to the next image
function previousImage(){

    images[currentIndex].classList.add('hide');
      if(currentIndex == 0){
          currentIndex = totalImages-1;
      }
      else{
          currentIndex--;
      }
  
    images[currentIndex].classList.remove('hide');

  }
