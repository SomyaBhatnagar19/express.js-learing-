// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 0)

// setTimeout(() => console.log('d'), 1000)

// setTimeout(() => console.log('e'), 2000)
const printInSequence = async () => {

    console.log('a');
   
    console.log('b');
   
    await new Promise(resolve => setTimeout(resolve, 3000));
   
    console.log('c');
   
    console.log('d');
   
    console.log('e');
   
   };
   
   
   
   printInSequence();