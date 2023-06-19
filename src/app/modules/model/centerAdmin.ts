export class CenterAdmin {
    id: number = -1;

    name: string = "";
    surname: string = "";

    jmbg: string = "";

    address: string = "";
    city: string = "";
    state: string = "";

    phone: string = "";
    email: string = "";

    workplace: string = "";
    occupation: string = "";

    public constructor(obj?: any){
        if(obj){
            this.id = obj.Id;

            this.name = obj.name;
            this.surname = obj.surname;

            this.jmbg = obj.jmbg;

            this.address = obj.address;
            this.city = obj.city;
            this.state = obj.state;

            this.phone = obj.phone;
            this.email = obj.email;

            this.workplace = obj.workplace;
            this.occupation = obj.occupation;
        }
    }
}