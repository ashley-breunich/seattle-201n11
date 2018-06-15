// add a form to your html
//in JS you'll need a form variable to work with 
//ex: var storeForm = document.getElementById('store-form');
//create an event handler for the submission of a new store
//ex: function handleStoreAdd(event) {}
//it's looking for the event in the function
//remember to add a event.preventDefault(); to prevent the page from reloading on submit event
//you'll need an if statement to manage input
//ex: if(!event.target.storename.value || !event.target.mincust.value ||) return "Fields cannot be empty";
//event listener for new store submission form look at pg 254 in your books
//storeForm.addEventListener('submit', handleStoreAdd);
//remember to clear the form by setting the value to null