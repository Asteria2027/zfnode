class Document{
    constructor(){
        this.cookies = [];
    }
    set cookie(cookie){
        this.cookies.push(cookie);
    }
    get cookie(){
        return this.cookies.join(';');
    }
}

var document = new Document();
document.cookie = 'name=zzxx';
document.cookie = 'age=6';

console.log(document.cookie);