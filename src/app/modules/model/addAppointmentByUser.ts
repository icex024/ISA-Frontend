export class  UserAppointmentAdd{
    dateTime?: Date=new Date();
    centerId?: Number=-1;

    public constructor(obj?:any){
        if(obj){
        this.dateTime=obj.dateTime;
        this.centerId=obj.centerId;
        }
    }
}