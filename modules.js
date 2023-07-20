// lib.js
export const hello = 'Hello, world!';

// app.js
import { hello } from './lib.js';
console.log(hello); // Hello, world!




// Example 2:
	
// module1.js
export function add(a, b) {
  return a + b;
}
 
// module2.js
import { add } from './module1.js';
 
const sum = add(2, 3);
 
console.log(sum); // 5