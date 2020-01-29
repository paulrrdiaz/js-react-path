var name = "Paul Diaz";
var email = "paulrrdiaz@gmail.com";
var title = "instructor";

console.log("Hi!!! my name is " + name + ", my email is " + email + " and I'm the " + title);

/*
*
*
*
*

Interpolation
*/

var myEmail = function(domain) {
  return `paulrrdiaz@${domain || "gmail.com"}`;
};

console.log(`
  My name is ${name || "default"}, 
  my email is ${myEmail()} 
  and I'm an ${title}
`);

/*
*
*
*
*

Tagged

*/

const tag = (array, ...vars) => {
  console.log(array);
  console.log(vars);
  return `${array[0]} ${vars[0]} ${array[1]} ${vars[1]}`;
};

const name = "Jon";
const title = "the Lord Commandant";
const myString = tag`My name is ${name} and I'm ${title}`;
console.log(myString, "TagString");

import React from 'react'
import styled from '@emotion/styled'

