export class AdminRegistrationDto{

    username: string ="";
    name: string="";
    surname: string="";
    mailAddress: string="";
    password: string="";
    jmbg: string="";
    phone: string="";
    address: string="";
    city: string="";
    state: string="";
    gender: string="";
    occupation: string="";
    workplace: string="";
    centerId: number;
    role: string = ""

    constructor(obj?:any){
        if(obj){
        this.username=obj.username;
        this.name=obj.name;
        this.surname=obj.surname;
        this.mailAddress=obj.mailAddress;
        this.password=obj.password;
        this.jmbg=obj.jmbg;
        this.phone=obj.phone;
        this.address=obj.address;
        this.city=obj.city;
        this.state=obj.state;
        this.gender=obj.gender;
        this.occupation=obj.ocuppation;
        this.workplace=obj.workplace;
        this.centerId=obj.centerId;
        this.role = obj.role;
        }
    }

}