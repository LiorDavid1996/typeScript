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
 console.log(printSome([1])),

 function getArrayOrder(array:number[],str:string):any{
  if(str=="upsidedown"){
return   array.sort((a, b) => a - b);
  }
 return array.reverse

}
console.log(getArrayOrder([12,2,4,45,23,3],"upsidedown"))
