// // 构造函数  类
// function student(){
// 	this.name='zhangsan';
// 	this.age=19;
//     this.sex='man';
//     this.sleep=function(){
//     	alert('休息');
//     }
// }
// let zhangsan=new student();
// zhangsan.classes='wuif1707';
// console.log(zhangsan);

// function student(name,age,sex){
// 	this.name=name;
// 	this.age=age;
//     this.sex=sex;
//     this.sleep=function(){
//     	alert('休息');
//     }
// }

// let lisi=new student('lisi',18,'女');
// let wangwu=new student('wangwu',20,'女');
// lisi.sleep();
// console.log(lisi);
// console.log(wangwu);


// function Iphone(){
// 	this[1]="a";
// 	this[2]="b";
// 	this.model='iphone8';
// 	this.size=5.5;
// 	this.price=3456;

// 	this.calls=function(){
// 		alert('打电话');
// 	}
// 	this.music=function(){
// 		alert('听音乐');
// 	}
// 	// this.stype=function(){
// 	// 	this.calls();
// 	// }
	
// }
// let iphone8 = new Iphone();
// // alert(iphone8.music());
// alert(iphone8.system);   // 没有属性，undefined
// // iphone8.system();   // 没有方法，报错
// console.log(iphone8);
// console.log(iphone8.size);
// console.log(iphone8['size']);
// console.log(iphone8['music']());

// // for in 遍历
// // i->属性名，相当于字符串
// for(let i in iphone8){
// 	console.log(`${i}---${iphone8[i]}`);
// };

// json
// console.log(cs);
// let cs={};
// cs.age=16;
// cs.name='cs';
// cs.say=function(){
// 	alert(cs.name);
// }
// constructor 返回
// console.log(cs.constructor);

// // json 另一种方法
// let cx={
// 	'age':18,
// 	'sex':'男',
// 	say:function(){
// 		alert(1);
// 	}
// }
// cx.say();
// console.log(cx);

// // class  es6
// class Student{
// 	constructor(){
// 		this.name='chengzi';
// 		this.age=18;
// 		this.music=function(){
// 			alert('听音乐');
// 		}
// 	}
//     study(){
//     	alert('学习');
//     }
// }
// let chengzi=new Student();
// chengzi.music();
// chengzi.study();
// console.log(chengzi);

// // prototype  原型
// // 构造函数里 传参
// // 类中
// // 方法中：参数写到方法的后边


// myArray
// var arr=new Array('a','b','c');
// console.log(arr);
var arr=new myArray('a','b','c',1,2,3);
console.log(arr);
arr.push(4,5,6);
function myArray(){
	for(let i=0;i<arguments.length;i++){
		this[i]=arguments[i];
	}
	this.length=arguments.length;

	this.push=function(){
		for(let i=0;i<arguments.length;i++){
			this[this.length]=arguments[i];
            this.length++;
		}
	}
}
// IndexOf 某一元素首次出现的位置  找到返回下标，否则为-1.
// lastIndextOf  某一元素最后出现的位置
// includes是否存在 存在返回true，否则false;
//reverse join
//sort
//some  every
//map
//filter
 