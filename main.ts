function printTen ():void{
    let num:any=document.getElementById("myInput")
    if(num.value>10)
    {console.log("greater then 10")}
     else console.log("less then 10");
     };
 
     function someFunc():void{
        let num:any=document.getElementById("myInput")
        switch (num.value) {
            case num.value>10:
                console.log("greater then 10");
                break;
            case num<10:
                console.log("less then 10");
                break
            default:
                console.log("equal to 10");
                
                break;
        }
     }

       function someFunc2():void{
        let first:any=document.getElementById("myInput")
        let second:any=document.getElementById("myInput2")
          switch(first){
            case first<second:
                console.log("");
                
          }
    }
    function someFunc(num1:number,num2:number):number{
        let minNum:number=Math.min(num1,num2)
       return (minNum)
     }
      console.log(someFunc(233,3213))
     
      function someFunc1(num1:number,num2:number,num3:number):number{
        let minNum:number=Math.min(num1,num2,num3)
       return (minNum)
     }
      console.log(someFunc1(2323,3213,342))
     
      function someFunc3(num1:number,num2:number,num3:number):number{
        let sum:number=(num1+num2+num3)/3
        return sum
      } console.log(someFunc3(34,34,23))
     
     function someFunc4(num1:number,num2:number,num3:number,num4:number):number{
         let sum:number=num1+num2+num3+num4
         return sum
       
     } console.log(someFunc4(23,32,45,341))
     
     function minArrrayNum(array:number[]):number{
      let minNum:number=array[0]
  for(let i:number=1;i<array.length;i++){
      if(array[i]<minNum){
          minNum=array[i]
      }
  }
  return minNum
  }
  console.log(minArrrayNum([12,3,4,11,2,44,65]))
  
  function Average(array:number[]):number{
    let sum:number=0
    let average:number=0

for(let i:Number=0;i<array.length;i++){
sum+=array[i]
average=sum/array.length

}
return average

}console.log(Average([12,3,23,4,5]))

function getSum(array:number[]):number{
  let sum:number=0
for(let i:number=0;i<array.length;i++){
sum+=array[i]
}
return sum

}console.log(getSum([12,3,23,4,2]))
// question 11
function getSecundIndex(array:number[]):number{
  return array[1]
}
console.log(getSecundIndex([12,32,34,33,5]))
// question 12
function getFirstAname(array:string[]):string{
  for(let i:number=0;i<array.length;i++){
      if(array[i][0]=="A")
          return array[i]
      
  }
}console.log(getFirstAname(["lior","david","Aviel","daniel"])),

// question 13
function printEvenNum(array:number[]):any{
    for (let i of array){
        if(array[i]%2==0){
           return  ("there is even number")
        }     
    }
   return "nooo"
}
console.log(printEvenNum([1,1,1,9])),


// question 14
function printDate(date:string):string{
    const d:string = new Date(date)
    return d
}
 console.log(printDate("6/17/1996")) ,

// question 15
function printName(text:string,num:number):any{
    for (let i=0; i<num; i++) {
        for (let i=0; i<num; i++) {
     return   console.log (text)
    }
    }
},
// question 16
function printValidAge(name:string,age:number):any{
    if(age>=18){
        return `wellcome my name is ${name}`
    }else{
        return  `no entrey ${name}`
    }
}
console.log(printValidAge("lior",24)),

// question 17
function printChar(fName:string,lName:string):any{
    if(fName[0]==lName[0]){
        return console.log(fName[0]) 
    }
    else{
        console.log(0) 
    }
    }

printChar("lior","david"),

// question 18
function  printSome(array:any[]):any{
    switch(array.length){
          case  0 :
          return "no data";
         
          case  1:
          return "one item";
 
          case 2:
          return "tow item"
      }
 }
 console.log(printSome([1]))

//  qustion 19
 function getArrayOrder(array:number[],str:string):any{
  if(str=="upsidedown"){
return   array.sort((a, b) => a - b);
  }
 return array.reverse

}
console.log(getArrayOrder([12,2,4,45,23,3],"upsidedown"))
//  qustion 21
function printData (name:string,lastName?:string):string{
   return lastName?  `${name} ${lastName}`:`${name}`
}console.log(printData("lior","david"))
//  qustion 22
function printData1(fullName:string,email?:string):void{
     email? console.log(`${fullName} ${email}`) : console.log(`${fullName}`)
}printData1("liorDavid","liordavid356@gmail.com")
//  qustion 23
function printCatName(age:number,type?:string):void{
    type? console.log(`${age} ${type}`) :console.log(`${age}`)
}
printCatName(24,"dca")
//  qustion 24
function printText(text:string,bul:boolean=true):string{
    return bul? `hello ${text} `: `welcome ${text} `
}console.log(printText("liortheking",false))
//  qustion 25
function printStr(name:string,lastName:string="miss"){
return `${lastName} ${name}`

}console.log(printStr("batel"))
//  qustion 26
 function printText2(str:string,str1?:string,num:number=1):string{
     for(let i:number=0;i<num;i++){
         
      str1?  console.log(`${str} ${str1}`) : console.log(`${str}`)
     }
 }printText2("lior","david",8)
//  qustion 27
function sortStr(...str:string[]):void{
console.log(str.sort())
}sortStr('a','s','f','e')
//  qustion 28
 function sortNumBigTosmall(...num:number[]):void{
    console.log (num.sort((a, b) => a - b))
 }sortNumBigTosmall(23,4,52,45,32,2,11)

 //  qustion 29
 function sortNumSmallToBig(...num:number[]):void{
    console.log (num.sort((a, b) => b - a))
 }sortNumSmallToBig(23,4,52,45,32,2,11)
  //  qustion 30
 function sortNames(...str:string[]){
    return  str.sort()
    }
    console.log(sortNames("lior","david","aviel","taka","natan","blay"))
     //  qustion 31
    function getArr(str:string="end",...strA:string[]){
    return strA
    }
    console.log(getArr("start","lior","david","aviel","taka","natan","blay"))
     //  qustion 32
    function sortAndPrintStudint(name:string,celass?:string,ste:string="pass",...arr:number[]){
        let Scores:number[]=arr.sort((a,b)=>a -b)
        return `${name} ${celass} ${ste} ${arr}`
    }
    console.log(sortAndPrintStudint("lior","hf5","dd",4,33,5,2,))
    // qustion 33
    function swimsuit(product:string,color:string="black",discountPercentage?:number,...sizeArr:number[]){
        let sizeSort:number[]=sizeArr.sort((a,b)=>a -b)
        return discountPercentage?`${product} ${color } sale:${discountPercentage}% ${sizeArr}`:`${product} ${color } ${sizeSort}`
        }
        console.log(swimsuit("pents","yellow",45,3,1,6,4,33))
 //  qustion 34
 class cars{
    brand:string;
    model:string;
    color:string
    constructor(brand:string,model:string,color:string){
        this.brand=brand
        this.model=model
        this.color=color
    }
}
 //  qustion 35
class elefent{
    height:string;
    type:string;
    age:number;
    contry:string;
    constructor(height:string,type:string,age:number,contry:string){
        this.height=height
        this.type=type
        this.age=age 
        this.contry=contry
    }
    printText (){
        return `${this.height} ${this.type} ${this.age} ${this.contry}`
    }}
//  qustion 36
    class pents{
        size:string
        color:string
        taype:string
        lengte:number
        isavibel:boolean
        constructor(size:string,color:string,taype:string,lengte:number,isavible:boolean){
            this.size=size
            this.color=color
            this.taype=taype
            this.lengte=lengte
            this.isavibel=isavible
        }
    private printDetels():string{
        return `${this.size}${this.color}${this.taype}${this.lengte}${this.isavibel}`
    }
    get pentsDetels():string{
     return this.printDetels()
    }

    }
//  qustion 37
class Atlet{
    fullName:string
    dateBirth:number
    field:string
    sex:string
    constructor(fullName:string,dateBirth:number,field:string,sex?:string){
        this.fullName=fullName
        this.dateBirth=dateBirth
        this.field=field
       this.sex=sex? sex: ""
    }
    printGetDetels(){
        return `${this.fullName}${this.dateBirth}${this.field}${this.sex}`
    }
    protected Detels(){
        return this.printGetDetels()
    }
}
//  qustion 38
class footboler extends Atlet{
    isplay:boolean
    team:string
 constructor(fullName:string,dateBirth:number,field:string,team:string,isplay:boolean,sex?:string){
     super(fullName,dateBirth,field,sex);{
         this.isplay=isplay
         this.team=team

     }

    }
    printDetel(){
        return `${this.Detels} ${this.team} ${this.isplay}`
    }
}
//  qustion 39
class user{
    fullName:string
    age:number
    pasword:string
    private isConnected:boolean =true
    constructor(fullName:string,age:number,pasword:string){
        this.fullName=fullName
        this.age=age
        this.pasword=pasword
    }
get getisConnectede(){
  return  this.isConnected
}
set setisConnected(user:boolean){
    this.isConnected=user
}
static olderYunger(str:string,...array:user[]){
  let getArray:user[]=array.sort((a, b) => a.age - b.age)
    return str=="yung"? getArray[0] : getArray[getArray.length-1]

}

}
//  qustion 40
class student extends user{
    firstName:string
    lastName:string
    dateBirth:number
    email:string
      constructor(firstName:string,lastName:string,age:number,pasword:string,dateBirth:number,email:string){
        super(`${firstName}${lastName}`,age,pasword);{
            this.firstName=firstName
            this.lastName=lastName
            this.dateBirth=dateBirth
            this.email=email

        }
    }
    printDetels(){
        return `${this.firstName}${this.lastName}${this.age}${this.pasword}${this.dateBirth}${this.email}`
    }
    getGreenOrRed(){
        return this.getisConnectede? "green":"red"
    }
}
let lior:student= new student("lior","david",26,"lioree2",18/4/1996,"liordavid356@gmail.com")
let aviel:student= new student("aviel","aviel",20,"avree2",18/4/1996,"liordavid356@gmail.com")
let or:student= new student("or","gadamo",23,"czree2",18/4/1996,"liordavid356@gmail.com")
console.log(student.olderYunger("yung",lior,aviel,or))
//  qustion 41
class room{
    street:string
    length:number
    size:number
    private isWindow:boolean=true
    constructor(street:string,lenght:number,size:number){
    this.street=street
    this.length=lenght
    this.size=size
    }
    get getRoomisWindow(){
       return this.isWindow
    }

    set setRoomWindowMode(room:boolean){
         this.isWindow=room
    }
    static getSmallOrBifRoom(str:string,...roomArrObj:room[]){
      let  sortRoom:room[]=roomArrObj.sort((a,b)=>a.size -b.size)
     return   str=="big"?   sortRoom[sortRoom.length-1] :sortRoom[0]

    }

}
//  qustion 42
class kitchen extends room{
    cabinetsNum:number
    constructor(street:string,lenght:number,size:number,cabinetsNum:number){
        super(street,lenght,size);{
        this.cabinetsNum=cabinetsNum

        }
    }
    printDetel(){
        return `${this.street}${this.length}${this.size}${this.cabinetsNum}`
    }
    printWindow(){
        return this.getRoomisWindow? "have window" : "close room"
    }
}
let italian:kitchen = new kitchen("5ht",5,12,3)
let  india:kitchen = new kitchen("5ht",5,10,3)
let arabi:kitchen = new kitchen("5ht",5,37,3)

console.log(kitchen.getSmallOrBifRoom("big",india,italian,arabi))
//  qustion 43
class livingRoom extends room{
    airFlowt:number
    seatsNum:number
    constructor(street:string,lenght:number,size:number,seatsNum:number,airFlowt:number){
        super(street,lenght,size);{
            this.seatsNum=seatsNum
            this.airFlowt=airFlowt
        }
    }
    printDetel(){
        return `${this.street}${this.length}${this.size}${this.seatsNum}${this.airFlowt}`
    }
    getwindow(){
     return   this.getRoomisWindow? `have window ${this.airFlowt}` : `close room`
    }

}
//  qustion 44
class product{
    width:number
   length:number
   weight:number
   price:number
   private isOrder:boolean=true
   constructor(width:number,length:number,weight:number,price:number){
       this.width=width
       this.length=length
       this.weight=weight
       this.price=price
   }
   get getOrder(){
       return this.isOrder
   }
   set setOrder(product:boolean){
       this.isOrder=product

   }
   static expensiveOrCheap(str:string="expensive",...arr:product[]){
   let  sortArr:product[]=arr.sort((a,b)=>a.price -b.price)
     return   str=="expensive"?   sortArr[sortArr.length-1] :sortArr[0]

   }

}
//  qustion 45
class computer extends product {
   power:string
    constructor(width:number,length:number,weight:number,price:number,power:string){
        super(width,length,weight,price);{
         this.power=power
        }
    }
    printDetel(){
        return `${this.width}${this.length}${this.weight}${this.price}${this.power}${this.power}`
    }
    getOrderedOrNot(){
        return this.getOrder? "Ordered" : "not Ordered"
    }

}

let asusPc:computer =new computer(5,10,9,4000,"13vw")
let apllePc:computer =new computer(5,10,9,3000,"16vw")
let dellPc:computer =new computer(5,10,9,4200,"10vw")
console.log(computer.expensiveOrCheap("chip",apllePc,asusPc,dellPc))
//  qustion 46
class computerScreen extends product {
    ordersNum:number
    resolution:string

    constructor(width:number,length:number,weight:number,price:number,ordersNum:number resolution:string){
      super(width,length,weight,price);{
       this.ordersNum=ordersNum
       this.resolution=resolution
      }
    }
 printComputerScreeDetel(){
     return `${this.width}${this.length}${this.weight}${this.price}${this.ordersNum}${this.resolution}`
 }
 getOrderedOrNot(){
     return this.getOrder? `Ordered ${this.ordersNum}` : `need to ordere`
 }
}
let asusScreen:computerScreen =new computerScreen(5,10,9,4000,4,"13vw")
let aplleScreen:computerScreen =new computerScreen(5,10,9,3000,3,"16vw")
let dellScreen:computerScreen =new computerScreen(5,10,9,4200,12,"10vw")


console.log(computerScreen.expensiveOrCheap("expensive",asusScreen,aplleScreen,dellScreen))
//  qustion 47
class factory{
   name:string
   city:string
   employeesNum:number
   isAccepted:boolean=true
   private isAutomation:boolean=true

   constructor(name:string,city:string,employeesNum:number,isAccepted:boolean){
       this.name=name
       this.city=city
       this.employeesNum=employeesNum
       this.isAccepted=isAccepted
   }
get gtautomation(){
    return this.isAutomation
}
set setautomation(automation:boolean){
    this.isAutomation=automation

}
static getHighLow(str:string="high",...arr:factory[]){
     let  sortArr:factory[]=arr.sort((a,b)=>a.employeesNum -b.employeesNum)
     return   str=="high"?   sortArr[sortArr.length-1] :sortArr[0]

}

}
 //  qustion 48
class tvWarehouse extends factory {
    numOfTv:number
    constructor(name:string,city:string,employeesNum:number,isAccepted:boolean,numOfTv:number){
        super(name,city,employeesNum,isAccepted);{
            this.numOfTv=numOfTv
        }
    }
    printDetel(){
        `${this.name}${this.city}${this.employeesNum}isAccepted:${this.isAccepted}${this.numOfTv}`
    }
    getapproved(){
       return this.isAccepted? "approved" : "An order for the product has been sent"
    }
}

let verr:tvWarehouse =new tvWarehouse("verr","lA",39,false,44)
let tvworld:tvWarehouse =new tvWarehouse("tyworld","tlv",59,true,190)
let mycinima:tvWarehouse =new tvWarehouse("mycinima","tokyo",559,true,1222)
console.log(tvWarehouse.getHighLow("high",verr,tvworld,mycinima))
//  qustion 49
class sandwiches extends factory {
    iscosher:boolean
    constructor(name:string,city:string,employeesNum:number,isAccepted:boolean,iscosher:boolean){
        super(name,city,employeesNum,isAccepted);{
            this.iscosher=iscosher
        }
    }
 printDetel(){
     return `${this.name}${this.city}${this.employeesNum} isAccepted:${this} iscosher:${this}`
 }
 getAutomation(){
     this.gtautomation?`There is automation ${this.employeesNum}`: `No automation`
 }
}

let lordSandwiche:sandwiches= new sandwiches("lordSandwiche","rehovot",60,true,true)
let bigSandwiche:sandwiches= new sandwiches("bigSandwiche","gedra",350,true,true)
let yourSandwiche:sandwiches= new sandwiches("yourdSandwiche","k.maLACHI",136,true,true)
console.log(sandwiches.getHighLow("high",lordSandwiche,bigSandwiche,yourSandwiche))





