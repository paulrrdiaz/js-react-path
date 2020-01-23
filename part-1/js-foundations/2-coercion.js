42 + "0"; // "420"
[10] - [2]; // 8
["jon", "arya"] + ["sansa", "robb"]; // 'jon,aryasansa,robb'
["jon", "arya"] - ["sansa", "robb"]; // NaN

// Falsy
("");
0;
-0;
null;
NaN;
false;
undefined;

// Truthy
("foo");
42;
{
  a: 1;
}
[1, 2];
true;
function bar() {
  console.log("baz");
}

"42" == 42;
"42" === 42;

"foo" == new String("foo");
"foo" === new String("foo");
