var sections = document.querySelectorAll('.section');
var slides = document.querySelectorAll('img');

// запоминается последний активный индикатор.
// нужно для того, что бы при убирании курсора 
// за слайдер, он не "гаснул".
var lastIndicator = sections[0].firstElementChild;

sections.forEach(section => {
  section.addEventListener('mouseenter', mouseEnterHandler);
  section.addEventListener('mouseleave', mouseLeaveHandler);
})

function mouseEnterHandler(e) {
  lastIndicator.classList.remove('indicator_full');
  e.target.firstElementChild.classList.add('indicator_full');
  changeSlide(e.target);
}

function mouseLeaveHandler(e) {
  lastIndicator = e.target.firstElementChild;
}

function changeSlide(section) {
  slides.forEach(slide => {
    if (section.dataset.for == slide.id)
      slide.classList.remove('hidden');
    else
      slide.classList.add('hidden');
  })
}