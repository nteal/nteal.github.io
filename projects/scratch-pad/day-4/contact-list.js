// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      2. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      3. length(): returns the number of contacts within the list.
 *      4. find(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 * 
 * BONUS : add a all() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The all() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.add(); // => Max Gaudin
 *                                 John Fraboni
 *                                 Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 * 
 * RUNNING YOUR CODE:
 * 
 * You can run the individual test by entering the following command:
 * 
 *   mocha -R spec -g "#contact-list"
 */
 
// var contacts = require('./data/contact.json');

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    /*
        factory function: 
        takes an id, firstname, and last name, 
        returns object with corresponding key/value pairs
    */
    return{
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast,
    }
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     var contacts = [];
    
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            /*
                takes contact object
                pushes into array
            */
            
            contacts.push(contact);
            return 1; //returns truthy value to validate action
        },
        removeContact: function(contact){
            /*
                takes a contact object
                returns 'binary' value to reflect if succeeded
                removes all instances of given object from array
            */
            var found = 0;
            for(var i = 0; i < contacts.length; i++){
                if(contacts[i].id === contact.id && contacts[i].nameFirst === contact.nameFirst && contacts[i].nameLast === contact.nameLast){
                    //i is our index!
                    contacts.splice(i, 1);
                    found = 1;
                }
            }
            return found //'binary' value to reflect if at least 1 instance of the object was found -> 1 if any found, 0 if none found
        },
        find: function(fullName){
            /*
            takes string of full name
            returns contact object if found/undefined if not found
            parses fullname and searches contact list for nameFirst and nameLast, regardless of case:
            */
           var nameArray = fullName.split(" ");
            nameArray[0] = nameArray[0].toLowerCase();
            nameArray[1] = nameArray[1].toLowerCase();
            for(var i = 0; i < contacts.length; i++){
                if(contacts[i].nameFirst.toLowerCase() === nameArray[0] && contacts[i].nameLast.toLowerCase() === nameArray[1]){
                    return contacts[i];
                }else{
                    return undefined;
                }
            }
        },
        all: function(){
            /*
                takes no arguments
                returns string of all names in contacts array
                loops over all contacts except the last one, concatenating all first and last names separated by \n; then adds the last

            */
            var final = "";
            for(var i = 0; i < contacts.length - 1; i++){
                final += (contacts[i].nameFirst + " " + contacts[i].nameLast + "\n");
            }
            //note: considered adding conditional to for loop to only add \n before the last contact name, BUT this has less runtime.
            final += contacts[contacts.length - 1].nameFirst + " " + contacts[contacts.length -1].nameLast;
            return final;
        },
        
        
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}