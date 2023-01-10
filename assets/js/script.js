

var storyBlocks = document.querySelectorAll("div.stories");
var bg = document.querySelectorAll("div.bg");
var stories_block = document.querySelectorAll("#stories_block")
var currentBlock;

for (let i = 0; i < storyBlocks.length; ++i) {
    storyBlocks[i].style.display = "none";
}




var contents = document.querySelectorAll("div.content");

var storiesCurrent;
var progressBars;

for (let i = 0; i < contents.length; ++i) {

    contents[i].onclick = function (e) {
        storyBlocks[i].style.display = "flex";
        let type = contents[i].id.slice(8, contents[i].id.length);
        storiesCurrent = document.querySelectorAll("div#" + type + " div#story");
        progressBars = document.querySelectorAll("div#" + type + " div.progress_bar");
        
        for (let k = 0; k < storyBlocks.length; ++k) {
            if (storyBlocks[k].id == type) {
                storyBlocks[k].style.display = "flex";
                currentBlock = k;
                // console.log("storyBlocks")
                storyBlocks[k].addEventListener("click", (e) => {
                    var click = e.composedPath()
                    console.log(click)
                    click = click.includes(stories_block)
                    console.log(click)
                    if (!click) {
                        storyBlocks[i].style.display = "none";

                    }
    
                }) 
            }
            else {
                storyBlocks[k].style.display = "none";
            } 
        }
        main_story();
    }
}




function setCurrentBlock(id) {
    let type = contents[id].id.slice(8, contents[id].id.length);
    storiesCurrent = document.querySelectorAll("div#" + type + " div#story");
    progressBars = document.querySelectorAll("div#" + type + " div.progress_bar");

    for (let k = 0; k < storyBlocks.length; ++k) {
        if (storyBlocks[k].id == type) {
            storyBlocks[k].style.display = "flex";
            currentBlock = k;
            console.log(currentBlock)
        }
        else {
            storyBlocks[k].style.display = "none";
        }
        
    }
    
    main_story();
}
var currentStory;
var width;
var id;

function main_story() {
    currentStory = 0;
    setVisibleStory(0);
    width = 0;
    id = setInterval(frame, 10);
    for (let i = 0; i < progressBars.length; ++i) {
        progressBars[i].style.width = "0%";

    }

}
function setVisibleStory(id) {

    for (let i = 0; i < storiesCurrent.length; ++i) {
        if (i == id) {
            storiesCurrent[i].style.display = "flex";
            
        }
        else {
            storiesCurrent[i].style.display = "none";
        }

        
    }
}



function frame() {
    if (width >= 100) {
        currentStory++;
        if (currentStory < storiesCurrent.length) {
            width = 0;
            setVisibleStory(currentStory);
        }
        else {
            currentBlock++;
            if (currentBlock < storyBlocks.length) {
                setCurrentBlock(currentBlock);
            }
            else {
                clearInterval(id);
            }
        }

    } else {
        width = width + 0.1;
        progressBars[currentStory].style.width = width + '%';
    }
}


// document.addEventListener("click", (e) => {
//     var click = e.composedPath()
//     console.log(click)
    
//     click = click.includes(stories_block)
//     console.log(click)
//     if (!click) {
//         storyBlocks[k].style.display = "none";
//     } 


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


