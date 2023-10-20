// let myString:String='jadeja arjuninh dharmendrasinh';
// let uppercase:string=myString.toUpperCase()
// let lowercase:string=myString.toLowerCase()
// console.log(uppercase);
// console.log(lowercase);


// let subString:string='jadeja arjunsinh dharmendrasinh';
// let result=subString.substring(0,10)
// console.log(result);

// let product:string='Lectop';
// let price:number=35000;

// console.log(`this ${product} price is ${price}`)

// let one:string='hello';
// let two:string='hello';

// let result:boolean=one===two;
// console.log(result);

// function num(a:number):boolean{
//     return (a%4 && a%8)===0
// }
// console.log(num(16))

// function isEven(a:number):boolean{
//  return a%2===0
// }
// console.log(isEven(5));

// let maximum:bigint=9007199254740991n
// console.log(maximum);

// let another=BigInt('90071992547409925')
// console.log(another);

// let sum:bigint=maximum+another;
// console.log(sum);


// const isPalidrom=(a:String):Boolean=>{
//     let b=a.split('').reverse().join('')
//     return b===a;
// }
// console.log(isPalidrom('12321'));

// let message='hello,Typescript!'
// console.log(message);

// let calculate=(a,b)=>{
//     return a*b
// }
// console.log(10,5);

// let convert1:number[]=[1,2,3,4,5]

// let con=convert.map((curVal)=>curVal.toString())
// console.log(con)

// let con1=convert.map((curVal)=>curVal*3)
// console.log(con1);

// let con2:number[]=convert1.filter((item:number)=> item %2==0)
// console.log(con2);

// let string=['One','Two','Three','Four','Fv','6']

// let uppercase=string.map((item)=>item.toUpperCase())
// console.log(uppercase);

// let cutFirst=string.filter((item)=>item.indexOf('O')!==0)
// console.log(cutFirst)

// let arr:number[]=[1,2,3,4,5,6]

// let result=arr.map((item:number)=>Math.pow(item,2))
// console.log(result);

// let other=string.filter((item)=>item[0]==='T')
// console.log(other)

// type student={
//     name:string,
//     age:number;
//     gender?:string;
//     greet:(country:string)=> string
// }

// let student1:student={
//     name:'Arjunsinh',
//     age:27,
//     greet:(country):string=>`hello,mt name is ${student1.name} and my age is ${student1.age} and im from ${country}`

// }
 
// let introduction=(student1:student)=>{
//     let {name,age}=student1
//     return `hello,mt name is ${name} and my age is ${age} `
// }
// console.log(introduction(student1));
// console.log(student1.greet('rajkot'));

// type student={
//     name:string;
//     age:number;
//     city:string;
//     other:(country:string)=>string
// }
// let student1:student={
//     name:'arjunsinh',
//     age:27,
//     city:'rajkot',
//     other:(country:string)=>`my name is ${student1.name} age is ${student1.age} my city is ${student1.city} my country is ${country}`
// }

// let student2:student={
//     name:'mayursinh',
//     age:26,
//     city:'bhavnagar',
//     other:(country:string)=>`my name is ${student2.name} age is ${student2.age} my city is ${student2.city} my country is ${country}`

// }
// let introduction=(student2:student)=>{
//     let {name,age,city}=student2
//     return `my name is ${name} age is ${age} my city is ${city}`

// }
// console.log(introduction(student2))
// console.log(student1.other('rajkot'))
// console.log(student2.other('bhavnagar'))

// enum Roles{
//     user='user',
//     admin='admin'
// }

// type LogicDetails={
//     name?:string;
//     email:string;
//     password:number;
//     role:Roles
// }
// let user1:LogicDetails={
//     name:'arjunsinh',
//     email:'arjun@gmail.com',
//     password:123,
//     role:Roles.admin
// }
// let user2:LogicDetails={
//     name:'mayursinh',
//     email:'mayur@gmail.com',
//     password:321,
//     role:Roles.user
// }

// let isAdmin = (user:LogicDetails)=>{
//     let {name,email,role}=user;
//     role ==='admin'? `${name} is loggin` : `${name} is not allowed to loggin`
// }

// console.log(isAdmin(user1))
// console.log(isAdmin(user2))


// type personInfo= readonly[string,number,boolean]

// const person1:personInfo=['arjun',27,true]
// const person2:personInfo=['mayur',26,false]

// const displayInfo=(person:personInfo)=>{
//     const [name,age,hasLicense]=person;
//     console.log(`Name : ${name} , Age is ${age} , Driver's Licence ${hasLicense ? 'Yes' : 'NO'}`)

// }

// (displayInfo(person1));
// (displayInfo(person2));


// const userInput=(value:number|string):string|number=>{
//     if(typeof value==='number'){
//         return value*2
//     }else if(typeof value === 'string'){
//         return value.toUpperCase()
//     }else{
//         throw new Error('Invalid input data')
//     }
   
// }
// console.log(userInput(55));

// console.log(userInput('hello'));

// const extraUser=(data:number|string|boolean):number|string|boolean=>{
//     if(typeof data==='number' ){
//         return `$$${data/100}`
//     }else if(typeof data==='boolean'){
//         return data===true?'Yes':'No'
//     }else if(typeof data ==='string'){
//         return data.charAt(0).toUpperCase()+data.slice(1)
//     }else{
//         throw new Error('Invalid Data')
//     }
//    }
//    console.log(extraUser(55));
//    console.log(extraUser(false));
//    console.log(extraUser(true));
//    console.log(extraUser('arjunsinh'));

// type Person={
//     name:string;
//     age:number
// }
// type Employee={
//     emp_id:number;
//     department:string
// }
// type EmpDetails=Person&Employee

// const employee:EmpDetails={
//     name:'Arjunsinh',
//     age:27,
//     emp_id:111,
//     department:'IT'
// }
// console.log(employee);

// type User={
//     name:string;
//     age:number
// }
// type MyLocation={
//     city:string;
//     country:string
// }

// const user:User={
//     name:'Arjunsinh',
//     age:27
// }
// const myLocation:MyLocation={
//     city:'Rajkot',
//     country:'India'
// }
// const userDetails=(userData:User,location:MyLocation)=>{
//     // return `my name is ${userData.name} i am from ${location.city}`
//     return {...user,...myLocation}
// }
// const fullDetails:User & MyLocation=userDetails(user,myLocation)
// console.log(fullDetails)
   
// type UserId={
//     name:string;
//     email:string
// }
// type Account={
//     accountId:number;
//     accountType:string;
//     balance:number
// }
// const user:UserId={
//     name:'Arjunsinh',
//     email:'arjunsinh@gmail.com'
// }
// const account:Account={
//     accountId:111,
//     accountType:'saving',
//     balance:25000
// }
// const userDetails=(userData:UserId,account1:Account)=>{
   
//     // return `my ${userData.name} email is ${userData.email} account id is ${account.accountId}`
//     return {...user,...account}
// }
// const detsils:UserId & Account= userDetails(user,account)
// console.log(detsils)

// let prectice=<T>(a:T,b:T):T=>{
//     return a+b;
// }
// let result=prectice<number>(5,7)
// console.log(result)

// interface Products{
//     name:string;
//     price:number;
//     quantity:number
// }

// const product1:Products={
//     name:'lectop',
//     price:30000,
//     quantity:6
// }
// const product2:Products={
//     name:'tv',
//     price:25000,
//     quantity:10
// }
// const calculatePrice=(product:Products)=>{
//     const {price,quantity}=product
//     return price*quantity
// }
// console.log('product1',calculatePrice(product1));
// console.log('product2',calculatePrice(product2))

// console.log('hello new ')
// console.log('hello new ')
// console.log('hello new ')


// class person{
//     name:string;
//     age:number;
//     hobbies:string[];

//     constructor(names:string,age:number,hobbies:string[]){
//         this.name=names;
//         this.age=age;
//         this.hobbies=hobbies
//     }
// }

// const person1:person=new person('arjunsinh',27,['reading','coding'])

// console.log(person1);

class BankAccount{
    private _balance:number=0;

    public get balance():number{
        return this._balance
    }
    public set balance(newBalance:number){
        if(newBalance<0){
            throw new Error('Invalid balance')
        }
        this._balance=newBalance;
    }


}

const account=new BankAccount()
account.balance=10;
console.log(account.balance);

































