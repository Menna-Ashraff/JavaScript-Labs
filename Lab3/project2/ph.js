const contacts = [];

function addContact() {
  const name = prompt("Enter the name of the contact:");
  const phoneNumber = prompt("Enter the phone number:");

  const contact = {
    name: name,
    phoneNumber: phoneNumber
  };

  contacts.push(contact);
  prompt(`"${name}" added successfully!\n`);
}

function searchContact() {
  const searchTerm = prompt("Enter a name or phone number to search:");
  const foundContacts = contacts.filter(contact => {
    return (
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phoneNumber.includes(searchTerm)
    );
  });

  if (foundContacts.length > 0) {
    console.log("\nContacts Found:");

    foundContacts.forEach(foundContact => {
      alert(`Name: ${foundContact.name}\n` + `Phone Number: ${foundContact.phoneNumber}`);
     
    });
  } else {
    alert(`\nNo contacts found for "${searchTerm}"\n`);
  }
}

while (true) {
  const operation = prompt("Enter operation (add/search/exit):");

  if (operation === "add") {
    addContact();
  } else if (operation === "search") {
    searchContact();
  } else if (operation === "exit") {
    alert("Exiting phone book app. Goodbye!");
    break;
  } else {
    alert("Invalid operation. Please enter add, search, or exit.");
  }
}