export class CenterRegistrationDto{
    id: number = -1;
    name: string="";
    address: string="";
    city: string="";
    state: string="";
    description: string="";
    rating: number = 1;
    workStart: number = 8;
    workEnd: number = 16;
    longitude: number = 0.0
    latitude: number = 0.0

    public constructor(obj?: any){
        if(obj){
            this.id = obj.id;
            this.name=obj.name;
            this.address=obj.surname;
            this.address = obj.address;
            this.city = obj.city;
            this.state = obj.state;
            this.description = obj.description;
            this.workStart = obj.workStart;
            this.workEnd = obj.workEnd;
            this.longitude = obj.longitude
            this.latitude = obj.latitude
        }

    }
}