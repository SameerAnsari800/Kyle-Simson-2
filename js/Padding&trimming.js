
// Padding Start

var str = "Hello";
str.padStart( 5 );              // "Hello"
str.padStart( 8 );              // "   Hello"
str.padStart( 8, "*");         // "***Hello"
str.padStart( 8, "12345");     // "123Hello"
str.padStart( 8, "ab");        //"abaHello"

// Padding End
var str2 = "Hello" ;

str2.padEnd( 5 );   // "Hello"
str2.padEnd( 8 );   // "Hello   "
str2.padEnd( 8,"*" );   // "Hello***"
str2.padEnd( 8,"12345" );   // "Hello123"
str2.padEnd( 8,"ab");   // "Helloaba"


// Trimming


var str3 = "    Some Stuff    \t\t";

str3.trim();   // "Some Stuff"
str3.trimStart();   // "Some Stuff              "
str3.trimEnd();   // "   Some Stuff"



















