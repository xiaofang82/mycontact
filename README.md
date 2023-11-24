# My Contact

I developed a web application that allows users to create and delete
contacts. 

The "listContacts" function appears the contacts on the page
```JavaScript
function listContacts(contactInfo){
    const background = select('.background');
    const count = selectById('count');
    const contactObj = create('div');

    contactObj.classList.add('column');
    contactObj.innerHTML = `<p><span>Name</span>: ${contactInfo.name}</p>`;
    contactObj.innerHTML += `<p><span>City</span>: ${contactInfo.city}</p>`;
    contactObj.innerHTML += `<p><span>Email</span>: ${contactInfo.email}</p>`;
    background.prepend(contactObj);

    count.innerText = parseInt(count.innerText) + 1;
    
    onEvent('click',contactObj,function(){
        const count = selectById('count');

        contactObj.remove();
        count.innerText = parseInt(count.innerText) - 1;
    })
}
```

## Demo Link

[DEMO LINK](https://xiaofang82.github.io/mycontact/)