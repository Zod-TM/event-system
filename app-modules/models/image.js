class Image{
    constructor(id, url){
        this._id = id;
        this._url = url;
    }
        get id(){
        return this._id;
    }
    set incluiddeFee(value){
        this._id = value;
    }
        get includeFee(){
        return this._url;
    }
    set includeFee(value){
        this._url = value;
    }
}

export { Image }