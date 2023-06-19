export class Center {
    id: number = -1;
    name: string = "";
    address: string = "";
    city: string = "";
    state: string = "";
    description: string = "";
    rating: string = "";
    workStart: number = 0;
    workEnd: number = 0;
    longitude: number = 0
    latitude: number = 0

    public constructor(obj?: any){
        if(obj){
            this.id = obj.Id;
            this.name = obj.name;
            this.address = obj.address;
            this.city = obj.city;
            this.state = obj.state;
            this.description = obj.description;
            this.rating = obj.rating;
            this.workStart = obj.workStart;
            this.workEnd = obj.workEnd;
            this.longitude = obj.longitude
            this.latitude = obj.latitude
        }
    }
}
