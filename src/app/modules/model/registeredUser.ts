export class RegisteredUser {

    id: number = -1;
    

    name: string="";
    surname: string="";
    username: string="";
    password: string="";
    confirmPassword: string = "";
    email: string = "";
    jmbg: string ="";
    phone: string = "";
    address: string = "";
    city: string = "";
    state: string = ""; 
    occupation: string = "";
    workplace: string = "";
    penalties: number = -1 ;
    gender: string = "";
   
    /*
    public constructor(obj: any){
        if(obj){
            this.id = obj.Id;
            this.name=obj.name;
            this.surname=obj.surname;
            this.username = obj.username;
            this.password=obj.password;
            this.phone = obj.phone;
            this.address = obj.address;
            this.city = obj.city;
            this.state = obj.state;
            this.occupation = obj.occupation;
            this.workplace = obj.workplace;
            this.penalties = obj.penalties;
           
        }
    }*/
    public constructor(){}
}