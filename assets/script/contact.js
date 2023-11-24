'user strict'

/**
 * Class->contact
 */
class Contact {
    #name;
    #city;
    #email;

    constructor(name, city, email) {
        this.name = name;
        this.city = city;
        this.email = email;
    }

    set name(name){
        if(name.trim() == '') {
            throw 'Please input correct name!';
        } else {
            this.#name = name;
        }
    }

    get name(){
        return this.#name;
    }

    set city(city){
        if(city.trim() == '') {
            throw 'Please input correct city!';
        } else {
            this.#city = city;
        }
    }

    get city(){
        return this.#city;
    }

    set email(email){
        var validRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(email.trim() == '' || !email.match(validRegex)) {
            throw 'Please input correct email!';
        } else {
            this.#email = email;
        }
    }

    get email(){
        return this.#email;
    }
}

export {Contact};