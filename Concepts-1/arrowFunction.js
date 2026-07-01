const formatTaskUpdate = (taskName, status) => {
  let formattedString = `[Tech Morphs Alert] Task: ${taskName} is currently ${status}.`;
  
  return formattedString;
};

let task1 = formatTaskUpdate("Fix Node.js Server", "Pending");
let task2 = formatTaskUpdate("Deploy AI Sahayak", "Completed");

console.log(task1);
console.log(task2);