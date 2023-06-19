export class EditRegisteredUser{
  id: number = 0
  name: string = ""
  surname: string = ""
  password: string = ""
  phone: string = ""
  address: string = ""
  city: string = ""
  state: string = ""
  occupation: string = ""
  workplace: string = ""
  penalties: number = 0
  mailAddress: string = ""

  public constructor(obj?: any){
    if(obj){
      this.id = obj.id
      this.name = obj.name
      this.surname = obj.surname
      this.password = obj.password
      this.phone = obj.phone
      this.address = obj.address
      this.city = obj.city
      this.state = obj.state
      this.occupation = obj.occupation
      this.workplace = obj.workplace
      this.penalties = obj.penalties
      this.mailAddress = obj.mailAddress
    }
  }
}