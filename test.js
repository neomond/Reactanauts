async function sleep(time){
 
 return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve();
    },time)
 })
}



console.log("Before sleep");
sleep(3000).then(() => console.log("result after"));


