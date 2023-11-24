'use strict';
import { Contact} from "./contact.js";
import { onEvent, select, selectAll, selectById, create} from "./utilites.js";

const contactInfo = selectById('contact-info');
const btnAdd = selectById('btn-create');

onEvent('click', btnAdd, function(){
    let contactString = contactInfo.value;
    let contactArray = contactString.split(',');
    console.log(contactArray.length);
    if(contactArray.length == 3){
        
        try{
            const contact = new Contact(contactArray[0],contactArray[1],contactArray[2]);
            console.log(contact.email);
        }catch(error){
            console.log(error);
        }
    }
})

