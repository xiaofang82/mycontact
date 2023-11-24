'use strict';
import { Contact} from "./contact.js";
import { onEvent, select, selectAll, selectById, create} from "./utilites.js";

const contactInfo = selectById('contact-info');
const btnAdd = selectById('btn-create');

onEvent('click', btnAdd, function(){
    let contactString = contactInfo.value;
    let contactArray = contactString.split(',');
    //console.log(contactArray.length);
    if(contactArray.length == 3){
        
        try{
            const contact = new Contact(contactArray[0],contactArray[1],contactArray[2]);
            //console.log(contact.email);
            listContacts(contact);
            contactInfo.value = '';
        }catch(error){
            console.log(error);
        }
    }
})

function listContacts(contactInfo){
    const background = select('.background');
    const count = selectById('count');
    const contactObj = create('div');

    contactObj.classList.add('column');
    contactObj.innerHTML = `<p><span>Name</span>: ${contactInfo.name}</p>`;
    contactObj.innerHTML += `<p><span>City</span>: ${contactInfo.city}</p>`;
    contactObj.innerHTML += `<p><span>Email</span>: ${contactInfo.email}</p>`;
    background.prepend(contactObj);
   // console.log(count.innerText);
    count.innerText = parseInt(count.innerText) + 1;
    
    onEvent('click',contactObj,function(){
        const count = selectById('count');

        contactObj.remove();
        count.innerText = parseInt(count.innerText) - 1;
    })
}