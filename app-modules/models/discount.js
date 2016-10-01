class Discount{
    constructor(code, percentOff, quantityAvailable, qunatitySold, expirationDate){
        this._code = code;
        this._percentOff = percentOff;
        this._quantityAvailable = quantityAvailable;
        this._qunatitySold = qunatitySold;
        this._expirationDate = expirationDate;
    }
    get code(){
        return this._code;
    }
    set code(value){
        this._code = value;
    }
    get percentOff(){
        return this._percentOff;
    }
    set percentOff(value){
        this._percentOff = value;
    }
     get quantityAvailable(){
        return this._quantityAvailable;
    }
    set quantityAvailable(value){
        this._quantityAvailable = value;
    }
    get qunatitySold(){
        return this._qunatitySold;
    }
    set qunatitySold(value){
        this._qunatitySold = value;
    }
    get expirationDate(){
        return this._expirationDate;
    }
    set expirationDate(value){
        this._expirationDate = value;
    }
}

export { Discount }