export class CreateComplaintDto {
    type: number;
    complaintText: string;
    complaintEntityId: string;

    public constructor() {
        this.complaintText = "";
        this.complaintEntityId = "";
        this.type = 0;
    }
}