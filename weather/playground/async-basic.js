console.log('starting app');

setTimeout(() => {
 console.log('inside of callback');
}, 2000);

setTimeout(() => {
 console.log('Second setTimeout');
}, 0);


console.log('finishing up');