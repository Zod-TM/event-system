class Organizer{
    constructor(name, description , url ){
        this._name = name;
        this._description = description;
        this._url = url;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    get description(){
        return this._description;
    }
    set description(value){
        this._description = value;
    }
    get includeFee(){
        return this._url;
    }
    set includeFee(value){
        this._url = value;
    }
}

export { Organizer }