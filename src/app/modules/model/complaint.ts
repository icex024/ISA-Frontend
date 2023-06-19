export class Complaint {
    id: number;
    type: number;
    complaintText: string;
    answer: string;
    complaintEntity: string;
    resolved: boolean;
    createdAt: Date;
    resolvedBy: string;
    createdBy: string;
}