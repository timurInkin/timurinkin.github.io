
// // FORM

// Form submit
let HTMLForm = document.querySelector('form')
HTMLForm.addEventListener('submit',formSubmit)

function formSubmit(event) {
  event.preventDefault()
  let name = document.querySelector('#name').value
  let email = document.querySelector('#email').value
  let tel = document.querySelector('#tel').value
  let rectype = document.querySelector('.rec-type').value
  let recdate = document.querySelector('#rec-date').value
  let message = document.querySelector('#message').value

  if (tel[0] == '+') {
    tel = tel.substring(1,tel.length)
  }

  if (tel[0] == '8') {
    tel = '7' + tel.substring(1, tel.length)
  }


  let data = "name="+name+"&email="+email+"&tel="+tel+"&rectype="+rectype+"&recdate="+recdate+"&message="+message
  var request = new XMLHttpRequest();
  request.open("POST", "action.php", true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(data);
  HTMLForm.reset();
  let submitMessage = document.createElement('p')
  submitMessage.innerHTML = "Заявка отправлена"
  submitMessage.className = "submit-message"
  HTMLForm.append(submitMessage);
  setTimeout(() => {submitMessage.remove()}, 2000);
}

// Form open

let form = document.querySelector(".form-container");
let recordButton = document.querySelectorAll(".rec-btn")

recordButton.forEach((elem) => elem.addEventListener("click", (event) => {
  form.style.display = "flex";
  document.body.style.overflow = 'hidden'
  let online = document.querySelector('#rec-online')
  let offline = document.querySelector('#rec-offline')
  if (event.target.classList.contains("rec-online")) {
    online.setAttribute("checked","")
  } else if(event.target.classList.contains("rec-offline")) {
    offline.setAttribute("checked","")
  }
}))


form.addEventListener("click", (event) => {
    if (event.target.className == "form-container") {
        form.style.display = "none"
        document.body.style.overflow = 'visible'
        document.querySelectorAll('option').forEach((elem) => elem.removeAttribute("selected"))
    }
})


// STORIES

let storyIcons = document.querySelectorAll(".img_container img")
let stories = document.querySelectorAll('.stories_block')
let storyWrapper = document.querySelector('.stories')
let innerStories
let innerStoryCounter = 0
let storyNumber = 0
let progressBar
let switchBar



stories.forEach((elem) => elem.style.display = 'none')
storyIcons.forEach((elem) => elem.addEventListener('click', (event) => 
{
    storyWrapper.style.display = 'flex'
    document.body.style.overflow = 'hidden'
    storyNumber = parseInt(event.target.getAttribute('num'));
    renderStoryBlock(storyNumber)
    switchBar = stories[storyNumber].querySelectorAll('#switch')
    switchBar.forEach((elem) => {elem.classList.add('switch-active')})
    switchBar.forEach((elem) => elem.addEventListener('animationend', () => {
      switchBar.forEach((elem2) => {elem2.classList.remove('switch-active')})
    }))
}
))

function switchStoryLeft(event) {
  if (innerStoryCounter !== 0) {
    innerStoryCounter-=1
    renderStory()
  }  else if(innerStoryCounter == 0 && storyNumber !== 0) {
    storyNumber-=1
    innerStoryCounter = 0
    innerStoryCounter = stories[storyNumber].querySelectorAll('#story').length -1
    renderStoryBlock()
  }
  else if (storyNumber == 0 && innerStoryCounter == 0) {
    closeStories()
  }

}

function switchStoryRight(event) {
  if (innerStoryCounter !== innerStories.length - 1){
      innerStoryCounter+=1
      renderStory()
    }  else if (storyNumber == stories.length -1 && innerStoryCounter == innerStories.length -1) {
        closeStories()
      } else if (innerStoryCounter == innerStories.length-1) {
        storyNumber+=1
        innerStoryCounter = 0;
        renderStoryBlock()
       }
  }

function renderStoryBlock() {
    stories.forEach((elem) => elem.style.display = 'none')
    stories[storyNumber].style.display = 'flex';
    renderStory()
  }

function renderStory() {
    innerStories = stories[storyNumber].querySelectorAll('#story')
    progressBar = stories[storyNumber].querySelectorAll('.progress_bar_wrap')
    innerStories.forEach((elem) => elem.style.display = 'none')
    innerStories[innerStoryCounter].style.display = 'flex' 
    progressBar.forEach((elem) => elem.style.backgroundColor = '#dedede')
    for (let i = 0; i < innerStoryCounter +1; i+=1){
      progressBar[i].style.backgroundColor = '#ffffff'
    }
    // set bg image when opened first story
    if (storyNumber == 0 && innerStoryCounter == 0) {
      stories[storyNumber].style.backgroundImage = "url('../assets/img/ju_pic.jpg')"
      stories[storyNumber].style.backgroundSize = "cover"
    } else {
      stories[storyNumber].style.backgroundImage = "none"
      stories[storyNumber].style.backgroundSize = "cover"
    }
}

storyWrapper.addEventListener('click', (event) => {
  if (event.target.classList.contains('stories')){
    storyWrapper.classList.remove('stories-active')
    closeStories()
  }
})

function closeStories() {
  storyWrapper.style.display = 'none'
  stories.forEach((elem) => elem.style.display = 'none')
  document.body.style.overflow = 'visible'
  storyNumber = 0
  innerStoryCounter = 0
  switchBar.forEach((elem) => {elem.classList.remove('switch-active')})
  switchBar = 0
}

let sliderParams = {
  infinite: false,
  dots: true,
  arrows: false,
  autoplay: false,
  // autoplaySpeed: 0,
  speed: 500,
  cssEase: 'linear',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
        }
    },
]
}

document.addEventListener("DOMContentLoaded", function(){
  $('.slider').slick(sliderParams);
});

// document.querySelector('.slider').addEventListener('mouseover', () => {
//   $('.slider').slick('slickPause');
//   $('.slider').slick('slickSetOption', 'speed', 600)
// })

let firstSlide = document.querySelectorAll(".first-slide")
let secondSlide = document.querySelectorAll(".second-slide")

let firstTab = document.querySelector(".first-tab")
let secondTab = document.querySelector(".second-tab")

let activeTab = 0;

let toggle = document.querySelector(".toggle-active")

firstTab.addEventListener("click", () => changeSlider(0))

secondTab.addEventListener("click", () => changeSlider(1));

function changeSlider (i  = 0) {
  firstSlide.forEach((elem) => elem.style.display = i === 0 ? "block" : "none")
  secondSlide.forEach((elem) => elem.style.display = i === 0 ? "none" : "block")
  toggle.style.left = i === 0 ? "0%" : "50%"
  activeTab = i
}

window.addEventListener("DOMContentLoaded", () => {
  const sliderItems = document.querySelectorAll(".slick-slide");
  const parentSlider = document.querySelector(".slick-track");

  const containerSlider = parseInt(parentSlider.style.width.replace("px", "")); // забираю ширину блока, который есть сейчас
  const widthSliderItem = parseInt(sliderItems[0].style.width.replace("px", "")); // забираю ширину блока, который есть сейчас

  const bigViewSlider = widthSliderItem + (widthSliderItem / 3); // Тоже самое что и пункт ниже.
  const magicNum1 = containerSlider + (containerSlider / 3); // константа для контейнера со слайдерами (Супер рандомное число)

  let defaultWidthSliderItem = sliderItems[0].style.width; // сколько пикселей занимает сейчас поле с фоткой

  document.querySelector(".slick-dots").addEventListener("click", () => {
    // NOTE сори это ебучий костыль, но если его не сделать, тогда окно слайдера ресайзиться и фотка лезет на одну ниже. С этой вроде получше немного
    setTimeout(() => {
      if (parentSlider.style.width !== `${magicNum1}px`) {
        parentSlider.style.width = `${magicNum1}px`;
      }
    }, 500);
  })

  for (let i = 0; i !== sliderItems.length; i++) {
    // Если пользователь навёл мышку то делаем код ниже
    sliderItems[i].addEventListener("mouseenter", (e) => {
      // Указываю у большего контейнера ширину если там вдруг стоит другая.
      if (parentSlider.style.width !== `${magicNum1}px`) {
        parentSlider.style.width = `${magicNum1}px`;
      }

      e.target.style.width = `${bigViewSlider}px`;
      const bl = e.target.querySelector(activeTab === 0 ? ".block-1" : ".block-2");
      bl.style.display = "block";
    });
    
    // Если пользователь увёл мышку с блока то делаем это
    sliderItems[i].addEventListener("mouseleave", (e) => {
      e.target.style.width = defaultWidthSliderItem;

      const bl = item.querySelector(activeTab === 0 ? ".block-1" : ".block-2" )
      bl.style.display = "none";
    })
  }
})