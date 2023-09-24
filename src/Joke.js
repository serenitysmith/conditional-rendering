import React, {useState} from "react"

/**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */



// to meet this challenge ...

// Create a state variable isShown to track whether the punchline is currently visible or hidden. Initialize it to false.

// Add a button that, when clicked, toggles the value of isShown back and forth between true and false.

// Conditionally render the punchline based on the value of isShown. If isShown is true, display the punchline; otherwise, hide it.
export default function Joke(props) {
   // Step 1: Create state 'isShown' to track the visibility of the punchline
   const [isShown, setIsShown] = useState(false);

   // Step 2: Define a function to toggle the visibility of the punchline
   function togglePunchLine(){
    setIsShown(!isShown); // Toggle the value of 'isShown'
   }
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
{/* Step 3: Conditionally render the punchline based on 'isShown' */} 

{isShown && <p>{props.punchline}</p>}
{/* Add a button that toggles the visibility of the punchline */}

<button onClick={togglePunchLine}> 
{isShown ? "Hide Punchline" : "Show PunchLine"}
</button>
            {/* <p>{props.punchline}</p> */}
            <hr />
        </div>
    )
}



//STAEMENT BLOW ASKS IF BOTH STATEMENTS ARE TRUE AND IF SO, CODE INSIDE BRACKETS WILL RUN
//IF WE CHANGE ONE OF THE STATEMENTS BELOW TO FALSE THE CODE WILL NOT RUN
// const cond1 = true
// const cond2 = true
// if(cond1 && cond2) {
    // this code will run
//}


// IF BOTH CONDITIONS BELOW ARE MARKED FALSE, CONSOE LOG WILL NOT RUN BUT IF THE FIRST ONE IS MARKED TRUE, CONSOLE LOG WILL RUN, THIS IS BECUASE THE CONDITION CHECKS THE FIRST ONE, IF ITS FALSY, IT SKIPS THE REST OF THE STATEMENT 


// const cond1 = false
// const cond2 = false
// if(cond1 && console.log("Hello there")) {
    // this code will NOT run
//}




// We import the useState hook from React to manage the isShown state variable.

// We create a function called togglePunchline that, when called, toggles the value of isShown between true and false.

// Inside the component's JSX, we conditionally render the punchline paragraph based on the value of isShown. If isShown is true, the punchline will be displayed; otherwise, it will be hidden.

// We add a button that, when clicked, calls the togglePunchline function to toggle the visibility of the punchline. The button's text also changes dynamically based on whether the punchline is currently shown or hidden.

// With these changes, you'll have a Joke component that displays a joke with a toggleable punchline.



// SCRIMBA SOLUTION

// export default function Joke(props) {
//     const [isShown, setIsShown] = React.useState(false)
//     /**
//      * Challenge:
//      * - Create state `isShown` (boolean, default to `false`)
//      * - Add a button that toggles the value back and forth
//      */
//     function toggleShown(){
//        
//         setIsShown(prevShown => !prevShown)
//     }
//     return (
//         <div>
//             {props.setup && <h3>{props.setup}</h3>}
//             <p>{props.punchline}</p>
//             <button onClick={toggleShown}>Show Punchline</button>
//             <hr />
//         </div>
//     )
// }