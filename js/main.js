
/*
Social news program
*/

// add quit functionality to end or escape program
// add the ability to list the show links on the dom rather than the alert
//  have add and delete add to dom when show links is active

class Link {
    constructor(title, url, author) {
        let absoluteUrl = url;
        // Check if url starts with "http://" or "https://"
        if (
            !absoluteUrl.startsWith("http://") &&
            !absoluteUrl.startsWith("https://")
        ) {
            // If not, add "http://" at the beginning
            absoluteUrl = `http://${absoluteUrl}`;
        }
        // Add data properties
        this.title = title;
        this.author = author;
        this.url = absoluteUrl;
    }
    // Describe the link as a string
    toString() {
        return `${this.title} (${this.url}). Author: ${this.author}`;
    }
}


// Initial links array
const links = [];
links.push(new Link("Hacker News", "https://news.ycombinator.com", "Baptiste"));
links.push(new Link("Reddit", "https://reddit.com", "Thomas"));
links.push(new Link("Boing Boing", "boingboing.net", "Daniel"));

let choicetext = document.querySelector('#line1');
let button = document.querySelector('#activate')
let choice;



// Main program loop
// Display options until the user chooses to quit
let showLinks = () => {
    if (links.length > 0) {
        // Show each link in an alert window
        for (let i = 0; i < links.length; i++) {
            alert(`${i + 1}: ${links[i].toString()}`);
        }
    }
    else {
        alert("No links to display!");
    }
};
let addLink = () => {
    const title = prompt("Enter the link title:");
    const url = prompt("Enter the link url:");
    const author = prompt("Enter the link author:");
    // Add new link to array
    links.push(new Link(title, url, author));
}
let deleteLink = () => {
    if (links.length > 0) {
        // Input link index (must be between 1 and the number of links)
        let index = -1;
        const maxIndex = links.length;
        while (index < 1 || index > links.length) {
            index = Number(
                prompt(`Enter the index of the link to be removed (between 1 and ${maxIndex}):`)
            );
        }
        // Remove selected link from array
        links.splice(index - 1, 1);
    }
    else {
        alert("No links to remove!");
    }
}

let options = {
    'show links': showLinks,
    "add a link": addLink,
    'remove a link': deleteLink
};



if (choice !== "0") {
    let choices = "<BR>Show links";
    choices += "<BR>Add a link";
    choices += "<BR>Remove a link";
    // choices += "<BR>Quit";
    // choice = prompt(`Choose an option: ${choices}`);
    choicetext.innerHTML = `Type option in the space below: ${choices}`
    button.addEventListener('click', function optionSelect() {
        let inputValue = document.querySelector('#inputt').value.toLowerCase();
        if (inputValue == 'show links' || inputValue == "add a link" || inputValue == 'remove a link') {
            (options[inputValue])();
        }
        else {
            alert(' please type your selection then press button')
        }
    })
}





    // switch (choice) {
    //     case "1": {

    //         break;
    //     }
    //     case "2": {
    //         // Input link properties
    //         const title = prompt("Enter the link title:");
    //         const url = prompt("Enter the link url:");
    //         const author = prompt("Enter the link author:");
    //         // Add new link to array
    //         links.push(new Link(title, url, author));
    //         break;
    //     }
    //     case "3": {
    //         if (links.length > 0) {
    //             // Input link index (must be between 1 and the number of links)
    //             let index = -1;
    //             const maxIndex = links.length;
    //             while (index < 1 || index > links.length) {
    //                 index = Number(
    //                     prompt(`Enter the index of the link to be removed (between 1 and ${maxIndex}):`)
    //                 );
    //             }
    //             // Remove selected link from array
    //             links.splice(index - 1, 1);
    //         } else {
    //             alert("No links to remove!");
    //         }
    //         break;
    //     }
    // }

// alert("See you later!");