export class ShowCentersDTO{
  id: number = 0
  name: string = ""
  address: string = ""
  city: string = ""
  state: string = ""
  rating: string = ""

  public constructor(obj?: any){
    if(obj){
      this.id = obj.id
      this.name = obj.name
      this.address = obj.address
      this.city = obj.city
      this.state = obj.state
      this.rating = obj.rating
    }
  }
}