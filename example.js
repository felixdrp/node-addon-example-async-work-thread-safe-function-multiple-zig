// How to access Buffers in Zig // //C++
const example = require('./dist/lib.node');

example.startThread(a=>console.log(a))
example.startThread(a=>console.log('2 thread => ' + a))
example.startThread(a=>console.log('3 thread => ' + a))

setTimeout(() => {console.log('hello!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')}, 1000)

setTimeout(() => {
    console.log('Starting 4 threads!')
    example.startThread(a=>console.log('4 thread => ' + a))
}, 3000)
