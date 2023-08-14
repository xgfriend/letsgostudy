// setTimeout(() => console.log(3), 2000);
// setTimeout(() => console.log(2), 1000);
// console.log(1)

const first = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000); 
}) //resolve는 허용할 때, reject는 거부할 때 거절하는 애

const second =()=> new Promise((resolve,reject)=>{
    setTimeout(() => resolve(2), 1000);
})

const third =()=> new Promise((resolve,reject)=>{
    resolve(3)
})

//text()
first()
.then((result)=>{
    console.log(result)
    return second()
})
.then(result => {
    console.log(result)
    return third()
})
.then(result => console.log(result))
.catch(e => console.log(e))