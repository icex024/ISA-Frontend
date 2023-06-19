export class ShowReportRegular{
    bloodQuantity?: number;
    punctureArm: string = "";
    hemoglobin?: number;
    hematocrit?: number;
    start?: string;
    end?: string;
    bloodGroup?: string

    public constructor(){
        this.bloodQuantity = 0.1;
        this.punctureArm = "LEFT";
        this.hemoglobin = 13.7;
        this.hematocrit = 0.8;
        this.start=""
        this.end=""
        this.bloodGroup=""
    }


}