let storyIcons = document.querySelectorAll(".img_container")
let stories = document.querySelectorAll('.stories')
let switchStory = document.querySelectorAll('#switch')
let innerStories
let storyNumber
let innerStoryNumber = 0

stories.forEach((elem) => elem.style.display = 'none')
storyIcons.forEach((elem) => elem.addEventListener('click', (event) => 
{
    storyNumber = parseInt(event.target.getAttribute('num'));
    stories[storyNumber].style.display = 'flex';
    innerStories = stories[storyNumber].querySelectorAll('#story')
    for (let i = 1; i < innerStories.length; i++) {
      innerStories[i].style.display = 'none'
    }
    console.log('Main: ' + storyNumber)
    console.log('Inner: ' + innerStoryNumber)
}
))

switchStory.forEach((elem) => elem.addEventListener('click',(event) => {
  if (event.target.className == 'left-side'){
    switch (true) {
      case (storyNumber == 0 && innerStoryNumber !== 0):
        switchInnerStories(0);
        break
      case (storyNumber !== 0 && innerStoryNumber !== 0): 
        switchInnerStories(0)
        console.log('предыдущая история')
        break
      case (storyNumber !== 0 && innerStoryNumber == 0):
        switchMainStories(0)
        console.log('предыдущий блок')
      break
      // case (storyNumber == 0 && innerStoryNumber !== 0):
    }
  } else if (event.target.className == 'right-side'){
    switch(true) {
      case (innerStoryNumber == 3 && storyNumber == 3):
        console.log('Конец')
        break
      case (innerStoryNumber !== innerStories.length-1): 
      switchInnerStories(1)
      console.log('следующая история')
      break
      case (innerStoryNumber == innerStories.length-1): 
      switchMainStories(1)
      console.log('следующий блок')
      break
    }
  }
  console.log('Main: ' + storyNumber)
  console.log('Inner: ' + innerStoryNumber)
}))



function switchMainStories(property) {
    stories[storyNumber].style.display = 'none';
    if (property == 0) {
      storyNumber--
      stories[storyNumber].style.display = 'flex';
      innerStories = stories[storyNumber].querySelectorAll('#story')
      innerStories.forEach((elem) => elem.style.display = 'none')
      for (let i = 1; i < innerStories.length; i++) {
        innerStories[i].style.display = 'none'
      }
      // innerStories[innerStories.length-1].style.display = 'block'
    } else if (property == 1) {
      storyNumber++
      stories[storyNumber].style.display = 'flex';
      innerStories = stories[storyNumber].querySelectorAll('#story')
      for (let i = 1; i < innerStories.length; i++) {
        innerStories[i].style.display = 'none'
      }
    }
    // stories[stories.length-1].style.display = 'block'
    innerStoryNumber = 0
  }

function switchInnerStories(property) {
  innerStories[innerStoryNumber].style.display = 'none';
  if (property == 0) {
    innerStoryNumber--
  } else if (property ==1) {
    innerStoryNumber++
  }
  innerStories[innerStoryNumber].style.display = 'block';
}



// function StartStories() {  
//     let innerStories = stories[storyNumber].querySelectorAll('#story')
//     console.log(innerStories)
//     // innerStories.forEach((elem) => elem.style.display = 'none')
//     Timer = setTimeout(function() {             
//       if (storyNumber < 4) {
//         StartInnerStories(innerStories)
//         stories.forEach((elem) => elem.style.display = 'none')
//         stories[storyNumber].style.display = 'flex';
//         // console.log(storyNumber)
//         StartStories();
//       } else if (storyNumber == 4) {
//         stories.forEach((elem) => elem.style.display = 'none')
//       }
//       storyNumber++;
//     }, storyDelay)
//   }


// function StartInnerStories(innerStories) {
//         // console.log(innerStoryNumber)
//         if (innerStoryNumber < innerStories.length) {
//             innerStoryNumber++;
//             StartInnerStories(innerStories)
//         } else if (innerStoryNumber = innerStories.length) return
//         innerStoryNumber = 0
// }


// CLOSE STORIES

// stories.forEach((elem) => elem.addEventListener('click', (event) => {
//     if (event.target.className == 'stories') {
//         event.target.style.display = 'none'
//         clearTimeout(Timer)
//     }
// }))






// FORM

let form = document.querySelector(".form-container");
let recordButton = document.querySelector(".rec-btn")

recordButton.addEventListener("click", () => {
    form.style.display = "flex";
})

form.addEventListener("click", (event) => {
    if (event.target.className == "form-container") {
        form.style.display = "none"
    }
})
