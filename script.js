const users = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
];

const stringifiedUsers = users.map((user) => JSON.stringify(user));
console.log(stringifiedUsers);

const uniqueStringifiedUsers = new Set(stringifiedUsers);

const uniqueUsers = Array.from(uniqueStringifiedUsers).map((userString) => JSON.parse(userString));

console.log(uniqueUsers);
