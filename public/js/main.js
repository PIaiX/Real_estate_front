window.onload = function() {
const sliders = Array.from(document.querySelectorAll('.slider'));
sliders.forEach(function(item, i, arr) {
  // const sections = Array.from(item.querySelectorAll('.section'));
  const slides = Array.from(item.querySelectorAll('img'));
  const box = item.querySelector('.box')
  let count = slides.length;

  let sections = [];
  sections.push('<div class="section active"></div>');
  for(let j = 1; j<count; j++){
    sections.push('<div class="section"></div>');
  }
  box.innerHTML = sections.join(' ');
  // sections.forEach(function(item, i, arr) {
  //   box.append(item);
    
  // });


  let secArr = Array.from(item.querySelectorAll('.section'));
 

  let lastIndicator = secArr[0];
  // запоминается последний активный индикатор.
  // нужно для того, что бы при убирании курсора 
  // за слайдер, он не "гаснул".

  secArr.forEach(section => {
    section.addEventListener('mouseenter', mouseEnterHandler);
    section.addEventListener('mouseleave', mouseLeaveHandler);
  })

  function mouseEnterHandler(e) {
    console.log("mouseEnterHandler");
    lastIndicator.classList.remove('active');
    e.target.classList.add('active');
    changeSlide(e.target);
  }
  
  function mouseLeaveHandler(e) {
    lastIndicator = e.target;
  }
  
  function changeSlide(section) {
    let index = secArr.indexOf(section);
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    slides[index].classList.add('active');
  }
});
}