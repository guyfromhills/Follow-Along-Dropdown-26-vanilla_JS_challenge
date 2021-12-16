//Project Insights
// 1. Child Combinator ( > ), selects all the nodes that are direct children of parent element.
// 2. trigger-enter and trigger-enter-active, a two stage process has been introduced as when trigger-enter initiates display is set to block and DOMRect can return with values of height, width etc even if they are not visible(opacity set to 0), in the meantime when trigger-enter-active has yet not been initiated.



// grabbing trigger
const triggers = document.querySelectorAll(".cool > li");

//grab dropdown background
const background = document.querySelector(".dropdownBackground");

//grab nav
const nav = document.querySelector(".top");

function handleEnter()
{

    this.classList.add("trigger-enter");

    setTimeout(()=> {
        if( this.classList.contains("trigger-enter")){
            this.classList.add("trigger-enter-active")
        }
    }, 150);




    background.classList.add("open");

    const dropdown = this.querySelector(".dropdown");

    const dropdownCoords = dropdown.getBoundingClientRect();

    const navCoords = nav.getBoundingClientRect();
    console.log(navCoords);

    const coords = { 
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    

    };

    background.style.setProperty("width", `${coords.width}px`);
    background.style.setProperty("height", `${coords.height}px`);
    background.style.setProperty("transform", `translate(${coords.left}px, ${coords.top}px)`);


  
}

function handleLeave()
{


    this.classList.remove("trigger-enter", "trigger-enter-active");
    background.classList.remove("open");




}

triggers.forEach( function (trigger){
    trigger.addEventListener("mouseenter", handleEnter);
})


triggers.forEach( function (trigger){
    trigger.addEventListener("mouseleave", handleLeave);
})
