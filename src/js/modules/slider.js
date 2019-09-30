export default function slider() {
  const slideWrap = document.querySelector('.js_slider'),
  slide = document.querySelectorAll('.js_slider_item'),
  slideDots = document.querySelectorAll('.js_slideDots_item'),
  MAX_ITEMS = slide.length,
  next = document.querySelector('.next'),
  prev = document.querySelector('.prev');

  let   step = 0;

  slideWrap.firstElementChild.classList.add('is_active')

  const nextSlide = () => {
  if(step < MAX_ITEMS - 1){
  slide[step].classList.remove('is_active')
  slide[step].nextElementSibling.classList.add('is_active')
  slideDots[step].classList.remove('is_activeDots')
  slideDots[step].nextElementSibling.classList.add('is_activeDots')
  step += 1
  } else {
  slide[MAX_ITEMS - 1].classList.remove('is_active')
  slideWrap.firstElementChild.classList.add('is_active')
  slideDots[MAX_ITEMS - 1].classList.remove('is_activeDots')
  slideDots[0].classList.add('is_activeDots')
  step = 0
  }
  restInterval();
  }

  const prevSlide = () => {
  if(step === 0){
  slide[0].classList.remove('is_active')
  slideWrap.lastElementChild.classList.add('is_active')
  slideDots[0].classList.remove('is_activeDots')
  slideDots[MAX_ITEMS - 1].classList.add('is_activeDots')
  step = MAX_ITEMS - 1
  } else {
  slide[step].classList.remove('is_active')
  slide[step].previousElementSibling.classList.add('is_active')
  slideDots[step].classList.remove('is_activeDots')
  slideDots[step].previousElementSibling.classList.add('is_activeDots')
  step -= 1
  }
  restInterval();
  }

  next.addEventListener('click', () => {
  nextSlide()
  })

  prev.addEventListener('click', () => {
  prevSlide()
  })


  const slideOperationDots = (index) => {
  slide[step].classList.remove('is_active')
  slide[index].classList.add('is_active')
  slideDots[step].classList.remove('is_activeDots')
  slideDots[index].classList.add('is_activeDots')
  step = index;
  restInterval();
  }

  for (let i = 0 ; i < MAX_ITEMS; i++){
  slideDots[i].children[0].addEventListener('click', () => {
  slideOperationDots(i)
  })
  }
  let intervalID;

  const autoPlay = () => {
  intervalID = window.setInterval(nextSlide, 5000);
  }

  const restInterval = () => {
  clearInterval(intervalID);
  autoPlay();
  }

  autoPlay();
}