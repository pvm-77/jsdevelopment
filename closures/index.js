const posts=[
    {'title':'Post One', 'body':'This is post one'},
    {'title':'Post Two', 'body':'This is post two'}

];


function getPosts(){
setTimeout(()=>{
    let output='';
    posts.forEach((post,index)=>{
        output+=`<li>${post.title}</li>`;
    });
    document.body.innerHTML=output;
},1000);

}

function createPost(post){
    return new Promise(function(resolve,reject){
       setTimeout(
           function(){
               posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }



           },2000
       ); 
    });

}

// async await
async function init(){
    await createPost({title:'Post Three', body:'This is post three'});
    getPosts();
}
// init();
// async await with fetch

async function fetchUsers(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    console.log(data);

}
fetchUsers();

// createPost({
//     title:'post 3',
//     body:'This is post three'
// }).then(getPosts).catch(err=>console.log(err));

// promise.all()

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('promise 1');
//     },2000);
// }
// );
// const promise2=10;
// const promise3=Promise.resolve('hi');

// Promise.all([promise1,promise2,promise3]).then(
//     function(values){
//         console.log(values);

//     }
// );




