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

  /*************** 
  CUSTOM SELECT
  ****************/
  // let arr_selects = Array.from(document.querySelectorAll('.custom-select'));
  // arr_selects.forEach(function(item, i, arr) {
  //     let btn = item.querySelector('button');
  //     let options = item.querySelector('.options');

  //     const toggleMenu = function() {
  //         options.style.display = (options.style.display == 'block') ? 'none' : 'block'
  //     }

  //     btn.addEventListener('click', () => {
  //         toggleMenu();
  //     });

  //     document.addEventListener('click', function(e) {
  //         const target = e.target;
  //         const current_sel = target == item || item.contains(target);
  //         const sel_is_opened = options.style.display == 'block';
  //         if (!current_sel && sel_is_opened) {
  //             toggleMenu();
  //         }
  //     });

  //     let arr_radio = Array.from(item.querySelectorAll('input[type="radio"]'));
  //     arr_radio.forEach(function(item, i, arr) {
  //         if(item.checked){
  //             btn.innerHTML = item.value;
  //         }
  //         item.addEventListener('change', (event) => {
  //             btn.innerHTML = item.value;
  //             options.style.display = 'none';
  //         });
  //     });
  // });

  // /* show/hide element */
  // function toggle(el){
  //     el.style.display = (el.style.display == 'block') ? 'none' : 'block'
  // }
}