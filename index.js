class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date() 
  }
  
 yearsExperienceFromBeginningOf(){
   return new Date().getFullYear() - this.startDate.getFullYear()
 }
}
