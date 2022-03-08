const course={
    courseId:1,
    courseName:"Javascript",
    courseDuration:'2 months',
    courseFee:5000,
    courseDiscount:0,
    courseStatus:'active',
    courseInstructor:['Sarfaraz','Hussain'],
    // courseFeeAfterDiscount:function(){
    //    console.log(`course fee after discount is ${this.courseFee-this.courseDiscount}`); 
    //     // return this.courseFee-this.courseDiscount;
    // },
    // alternate way to write above method
    courseFeeAfterDiscount(){
        console.log(`course fee after discount is ${this.courseFee-this.courseDiscount}`); 
         // return this.courseFee-this.courseDiscount;
     }
}

// console.log(course.courseFeeAfterDiscount());


// const perso={
//     name:'Sarfaraz',
//     introduceSelf(){
//         console.log('my name is '+perso.name)
//     }
// }
// console.log(perso.introduceSelf());
// const p2={
//     name:'Hussain',
//     introduceSelf(){
//         console.log('my name is '+p2.name)
//     }
// }

// console.log(p2.introduceSelf());


// first version of using obj wihtout constructor

function createPerson(name){
    const obj={}
    obj.name=name
    obj.introduceSelf=function(){
        console.log('my name is '+obj.name)
    }
    return obj
}

// using constructor

function Person(name){
    this.name=name
    this.introduceSelf=function(){
        console.log('my name is '+this.name)
    }
}
const obj=new Person('sarfaraz')
console.log(obj.introduceSelf());
const mynotification=new Notification('hello')
console.log(mynotification);


const myFavBand={
    name:'The Beatles',
    nationality:'india',
    genre:'hip hop',
    members:3,
    formed:2013,
    split:2014,
    albums:[{name:'yuppi',released:2013}],
}

let bandInfo=`${myFavBand.name} ${myFavBand.members}`
myFavBand['bandInfo']=bandInfo
console.log(myFavBand.bandInfo);