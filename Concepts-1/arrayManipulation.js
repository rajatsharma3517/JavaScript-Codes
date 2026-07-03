const players = [
  { id: 1, name: "MS Dhoni", active: false, score: 85 },
  { id: 2, name: "Virat Kohli", active: true, score: 110 },
  { id: 3, name: "Sanju Samson", active: true, score: 75 }
];

const dhoniProfile = players.find(player => player.name === "MS Dhoni");

const activePlayers = players.filter(player => player.active === true);

const activePlayerNames = activePlayers.map(player => player.name);

console.log(dhoniProfile);
console.log(activePlayers);
console.log(activePlayerNames);