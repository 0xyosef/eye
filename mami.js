document.querySelector('body').addEventListener("mousemove", eyes);

function eyes(){
  let eye = document.querySelectorAll('.eye i');
  eye.forEach(function(eye){
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
    let rod = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = (rod * (180 / Math.PI) * -1) + 280;
    eye.style.transform = "rotate("+ rot +"deg)";
  }
  
  )
}