class Event {
    constructor(name, description, url, start, end, venue, image, organizer, tickets, discount=null){
        this._name = name;
        this._description = description;
        this._url = url;
        this._start = start;
        this._end = end;
        this._venue = venue;
        this._image = image;
        this._organizer = organizer;
        this._tickets = tickets;
        this._discount = discount;
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
    get url(){
        return this._url;
    }
    set url(value){
        this._url = value;
    }
    get start(){
        return this._start;
    }
    set start(value){
        this._start = value;
    }
    get end(){
        return this._end;
    }
    set end(value){
        this._end = value;
    }
    get venue(){
        return this._venue;
    }
    set venue(value){
        this._venue = value;
    }
    get image(){
        return this._image;
    }
    set image(value){
        this._image = value;
    }
    get organizer(){
        return this._organizer;
    }
    set organizer(value){
        this._organizer = value;
    }
    get tickets(){
        return this._tickets;
    }
    set tickets(value){
        this._tickets = value;
    }
    get discount(){
        return this._discount;
    }
    set discount(value){
        this._discount = value;
    }
}

export { Event }

