export class ShowAppointmentsRegular{
   id: string;
    centerName: string;
    userName: string;
    userSurname: string;
    userUsername: string;
    start: string;
    duration: number;
    canDonate: boolean;

    constructor(obj?:any)
    {
        if(obj){
            this.id = obj.id;
            this.centerName=obj.centerName;
            this.userName=obj.userName;
            this.userSurname=obj.userSurname;
            this.userUsername=obj.userUsername;
            this.start=obj.start;
            this.duration=obj.duration;
            this.canDonate=obj.canDonate;
        }
    }
}