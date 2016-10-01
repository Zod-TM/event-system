class User{
    constructor(name, firstName, lastName, email, registerDate, eventsSaved){
        this._name = name;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._registerDate = registerDate;
        this._eventsSaved = eventsSaved;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(value){
        this._firstName = value;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(value){
        this._lastName = value;
    }
    get email(){
        return this._email;
    }
    set email(value){
        this._email = value;
    }
    get registerDate(){
        return this._registerDate;
    }
    set registerDate(value){
        this._registerDate = value;
    }
    get eventsSaved(){
        return this._eventsSaved;
    }
    set eventsSaved(value){
        this._eventsSaved = value;
    }
}

export { User }