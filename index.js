//Project Insights
// 1. Child Combinator ( > ), selects all the nodes that are direct children of parent element.
// 2. trigger-enter and trigger-enter-active, a two stage process has been introduced as when trigger-enter initiates display is set to block and DOMRect can return with values of height, width etc even if they are not visible(opacity set to 0), in the meantime when trigger-enter-active has yet not been initiated.




//grab triggers
 const triggers = document.querySelectorAll(".cool > li");

//grab background 
const background = document.querySelector(".dropdownBackground");

//grab nav
const nav = document.querySelector(".top");


//funct for mouse enters
function handleMouseEnter(e)
{

    //adding trigger-enter class to all triggers, to get dropdown display : block
    this.classList.add("trigger-enter");

    //adding trigger-enter-active class to all triggers, to get dropdown visible
    setTimeout(  () => {this.classList.add("trigger-enter-active") }, 200);

    //add open class to background
    background.classList.add("open");

    //grab dropdown
    const dropdown = this.querySelector(".dropdown");

    //get DOMRect of dropdown
    const coordsDropdown = dropdown.getBoundingClientRect();

    //get DOMRect of nav
    const navCoords = nav.getBoundingClientRect();

    //creating coordinates
    coords = { 
        height: coordsDropdown.height,
        width: coordsDropdown.width,
        top: coordsDropdown.top - navCoords.top,
        left: coordsDropdown.left - navCoords.left
    }

    //set width of background
    background.style.setProperty("width", `${coords.width}px`);

    //set height of background
    background.style.setProperty("height", `${coords.height}px`);

    //set transform of background
    background.style.setProperty("transform", `translate(${coords.left}px, ${coords.top}px`);



  

}

//funct for mouse enters
function handleMouseExit()
{

    //removing trigger-enter and trigger-enter-active classes on mouse hover exit
    this.classList.remove("trigger-enter","trigger-enter-active");

    //remove open class to background
    background.classList.remove("open");


  


}


//if mouse hovers over triggers, call funn handleMouseEnter
triggers.forEach( function ( trigger){
    trigger.addEventListener("mouseenter", handleMouseEnter);
})


//if mouse leaves triggers, call funn handleMouseExit
triggers.forEach( function ( trigger){
    trigger.addEventListener("mouseleave", handleMouseExit);
})
