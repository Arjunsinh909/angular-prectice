import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title:string = 'angularprectice';
  // data:string | null='Arjunsinh Jadeja';
  // data1:string='mayursinh jadeja'

  // arjunsinh:string='Bapu Jadeja'
  // code:number=25
  // code1:number=50
  // Cdata:any;
  // getdata(val:any){
  //   this.Cdata=val;
  // }
  // isValid:boolean=true;
  // changevalue(valid:any){
  //   this.isValid=valid;
  // name='Ram'

  // Child:any[]=[
  //   {name:'Ram',age:20},
  //   {name:'Ramesh',age:21},
  //   {name:'mayur',age:22},
  //   {name:'parth',age:23},
  //   {name:'masum',age:24},
  //   {name:'asav',age:25},
  // ]

  // student:any[];
  // constructor(){
  //   this.student=[
  //     {studentId:1,name:'Ram',age:24,gender:'Male',course:'MCA'},
  //     {studentId:2,name:'shyam',age:25,gender:'Male',course:'CA'},
  //     {studentId:3,name:'mayur',age:26,gender:'Male',course:'BCA'},
  //     {studentId:4,name:'parth',age:27,gender:'Male',course:'IT'},
  //     {studentId:5,name:'arjunsinh',age:28,gender:'Male',course:'EC'},
  //     {studentId:6,name:'rajalba',age:24.5,gender:'female',course:'M.COM'}
  //   ]
  // }
  // getmorestudents(){
  //   this.student=[
  //     {studentId:1,name:'Ram',age:24,gender:'Male',course:'MCA'},
  //     {studentId:2,name:'shyam',age:25,gender:'Male',course:'CA'},
  //     {studentId:3,name:'mayur',age:26,gender:'Male',course:'BCA'},
  //     {studentId:4,name:'parth',age:27,gender:'Male',course:'IT'},
  //     {studentId:5,name:'arjunsinh',age:28,gender:'Male',course:'EC'},
  //     {studentId:6,name:'rajalba',age:24.5,gender:'female',course:'M.COM'},
  //     {studentId:7,name:'krishna',age:20,gender:'female', course:'BSA'}
  //   ]
  // }
  // trackbystudent(index:number,student:any):string{
  //   return student.studentId
  // }

//   Countrydetails:any[]=[
//     {'country':'india',
//   'people':[
//     {'name':'arjunsinh','age':27},
//     {'name':'mayursinh','age':24},
//     {'name':'jayvirsinh','age':25},
//     {'name':'dharmrasinh','age':22},
//     {'name':'shripalsinh','age':21},
//   ]
// },
//     {'country':'UK',
//   'people':[
//     {'name':'abc','age':27},
//     {'name':'xyz','age':24},
//     {'name':'pqr','age':25},
//     {'name':'stq','age':22},
//     {'name':'fgh','age':21},
//   ]
// },
//     {'country':'europ',
//   'people':[
//     {'name':'123','age':27},
//     {'name':'345','age':24},
//     {'name':'567','age':25},
//     {'name':'678','age':22},
//     {'name':'890','age':21},
//   ]
// },
//   ]


// people:any[]=[
// {'name':'arjunsinh','country':'india'},
// {'name':'mayursinh','country':'india'},
// {'name':'vishal','country':'usa'},
// {'name':'manthan','country':'usa'},
// {'name':'arav','country':'uk'},
// {'name':'parth','country':'india'},
// {'name':'masum','country':'uk'},
// {'name':'mandan','country':'urop'},
// {'name':'bhardvaj','country':'urop'},
// ];
// getcolor(country:any):any{
//   switch(country){
//     case 'india':return 'green';
//     case 'uk':return 'orange';
//     case 'usa':return'red';
//     case 'urop':return 'blue';
//   }
// }


// employee:any[]=[
//   {code:111,name:'arjunsinh',salary:25000,dob:10/10/203},
//   {code:123,name:'arjreunsinh',salary:25000,dob:10/10/203},
//   {code:456,name:'sfsf',salary:25000,dob:10/10/203},
//   {code:156,name:'fsdfds',salary:25000,dob:10/10/203},
//   {code:189,name:'fsfs',salary:25000,dob:10/10/203},
//   {code:179,name:'tytr',salary:25000,dob:10/10/203},
// ]

// dob=new Date(2023,9,20)
// salary:number=25000

// dob=new Date()
// pdata:number=0.1234567890


public employee:any[]=[
  {id:101,name:'mohan',gender:'Male', age:20,country:'india'},
  {id:102,name:'sham',gender:'female',age:22,country:'usa'},
  {id:103,name:'arjun',gender:'male',age:23,country:'uk'},
  {id:104,name:'mayur',gender:'female',age:24,country:'london'},
  {id:105,name:'parht',gender:'male',age:25,country:'aus'},
  {id:106,name:'masum',gender:'female ',age:26,country:'west'},
]









}
