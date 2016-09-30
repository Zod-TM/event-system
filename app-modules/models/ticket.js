class Ticket{
    constructor(quantityTotal, quantitySold, includeFee){
        this._quantityTotal = quantityTotal;
        this._quantitySold = quantitySold;
        this._includeFee = includeFee;
    }
    get quantityTotal(){
        return this._quantityTotal;
    }
    set quantityTotal(value){
        this._quantityTotal = value;
    }
    get quantitySold(){
        return this._quantitySold;
    }
    set quantitySold(value){
        this._quantitySold = value;
    }
    get includeFee(){
        return this._includeFee;
    }
    set includeFee(value){
        this._includeFee = value;
    }
}

export { Ticket }
