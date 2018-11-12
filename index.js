class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate) 
  }
  
 yearsExperienceFromBeginningOf(year){
   return new Date(year,0,01).getFullYear() - this.startDate.getFullYear() 
 }
}
