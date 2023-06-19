

export class CreateExaminationReportDto {
    bloodQuantity?: number;
    punctureArm: string = "";
    hemoglobin?: number;
    hematocrit?: number;
    start?: Date;
    end?: Date;
    bloodGroup?: string

    public constructor(){
        this.bloodQuantity = 0.1;
        this.punctureArm = "LEFT";
        this.hemoglobin = 13.7;
        this.hematocrit = 0.8;
       this.bloodGroup="A";

    }
}