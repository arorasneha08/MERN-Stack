const os = require("os"); 
console.log(os.arch()); //  x64
console.log(os.hostname()); // SnehaArora
console.log(os.platform()); // win32
console.log(os.tmpdir()); // C:\Users\sneha\AppData\Local\Temp
console.log(os.type()); // Windows_NT

const freeMemory = os.freemem(); 
console.log(freeMemory); // 8991576064 (in bytes)

const totalMemory = os.totalmem(); 
console.log(totalMemory); // 16859500544 (in bytes)