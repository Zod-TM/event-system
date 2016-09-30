class Venue{
    constructor(name, longitude, latitude, address){
        this._name = name;
        this._longitude = longitude;
        this._latitude = latitude;
        this._address = address;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    get longitude(){
        return this._longitude;
    }
    set longitude(value){
        this._longitude = value;
    }
    get latitude(){
        return this._latitude;
    }
    set latitude(value){
        this._latitude = value;
    }
    get address(){
        return this._address;
    }
    set address(value){
        this._address = value;
    }
}

export { Venue }