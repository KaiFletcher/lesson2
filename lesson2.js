const harry = {
    firstName: "Harry",
    lastName: "Potter",
    hairColor:"black",
};
const hermione = {
    firstName: "Hermione",
    lastName: "Granger",
    hairColor:"brown",
};
const ron = {
    firstName: "Ron",
    lastName: "Weasley",
    hairColor:"red",
};

/*const createButton = document.createElement('button');
createButton.innerText= 'Render';
document.body.appendChild(createButton);
createButton.addEventListener('click', () => {
    const setCharacteristicsToElementByFirstnameAsId = (person) => {
        const personElement = document.getElementById(person.firstName.toLowerCase());
        personElement.innerHTML = person.firstName + " " + person.lastName;
        personElement.style = "color: " + person.hairColor;
    };
    setCharacteristicsToElementByFirstnameAsId(harry);
    setCharacteristicsToElementByFirstnameAsId(hermione);
    setCharacteristicsToElementByFirstnameAsId(ron); 
})*/


const unorderedList = document.getElementById("list");

const allWizards = [harry,hermione,ron];

const renderAllTheWizards = (allWizards) => {
    allWizards.forEach((wizard) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${wizard.firstName} ${wizard.lastName}`;
        listItem.style.cssText = `color: ${wizard.hairColor}`;
        unorderedList.appendChild(listItem);  
    })
};
renderAllTheWizards(allWizards);

const button = document.createElement('button');
button.innerText= 'Again';
document.body.appendChild(button)
button.addEventListener('click', () => {
    renderAllTheWizards(allWizards);
});

