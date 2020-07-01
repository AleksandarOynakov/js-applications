class Person{
    constructor(first,last){
        this._firstName = first;
        this._lastName = last;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(first){
        this._firstName = first;
        this._fullName = `${this._firstName} ${this._lastName}`;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(last){
        this._lastName = last;
        this._fullName = `${this._firstName} ${this._lastName}`;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    set fullName(value){
        if(value.includes(" ")){
            let [first,sec] = value.split(" ");
            this._firstName = first;
            this._lastName = sec;
            this._fullName = `${this._firstName} ${this._lastName}`;
        }
    }
}




