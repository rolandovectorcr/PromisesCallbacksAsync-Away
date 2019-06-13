const { taskOne, taskTwo } = require('./task');


async function main(){
    try{
        //Sequential
        console.time('Measuring time');
        const valueOne = await taskOne();
        const valueTwo = await taskTwo();
        console.timeEnd('Measuring time');

        console.log('Task One returned', valueOne);
        console.log('Task Two returned', valueTwo);

        //Parallel
        console.time('Measuring time');
        const results = await Promise.all([taskOne(), taskTwo()])
        console.timeEnd('Measuring time');

        console.log('Task One returned', results[0]);
        console.log('Task Two returned', results[1]);
           
    }
    catch(e){
        console.log(e);
    }
}

main();