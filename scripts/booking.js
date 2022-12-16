/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dayCost = 0

let dayCount = 0

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function addClicked(day) {
    if (day.classList.contains("clicked")){
        //pass
    }
    else {
        day.classList.add("clicked")
        dayCount = dayCount +1
    }
    
}

document.getElementById("monday").onclick = function() {addClicked(monday)}
document.getElementById("tuesday").onclick = function() {addClicked(tuesday)}
document.getElementById("wednesday").onclick = function() {addClicked(wednesday)}
document.getElementById("thursday").onclick = function() {addClicked(thursday)}
document.getElementById("friday").onclick = function() {addClicked(friday)}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearButton = document.getElementById("clear-button")

clearButton.onclick = () => {
    document.getElementById("monday").classList.remove("clicked")
    document.getElementById("tuesday").classList.remove("clicked")
    document.getElementById("wednesday").classList.remove("clicked")
    document.getElementById("thursday").classList.remove("clicked")
    document.getElementById("friday").classList.remove("clicked")
    dayCount = 0
    dayCost = 0
} /*There's definitely a cleaner way to do this but I couldn't figure out how to target all the <li> from here*/

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


