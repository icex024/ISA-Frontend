export class Survey {
   
    moreThan50kg: boolean=false;
    hasFever: boolean=false;
    hasBloodPressure: boolean=false;
    useAntibiotics: boolean=false;
    hasPMS: boolean=false;
    hasToothIntervention: boolean=false;
    hasSkinIntervention: boolean=false;

    constructor(obj?:any){
        if(obj){
            this.moreThan50kg=obj.moreThan50kg;
            this.hasFever=obj.hasFever;
            this.hasBloodPressure=obj.hasBloodPressure;
            this.useAntibiotics=obj.useAntibiotics;
            this.hasPMS=obj.hasPMS;
            this.hasToothIntervention=obj.hasToothIntervention;
            this.hasSkinIntervention=obj.hasSkinIntervention;
        }
    }




}