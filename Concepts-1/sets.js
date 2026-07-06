const tags = ["react", "node", "react", "js", "node"];

const uniqueTags = [...new Set(tags)]; 

const result = uniqueTags.length > 3 ? "Too many tags" : "Tags are fine";

console.log(uniqueTags);
console.log(result);