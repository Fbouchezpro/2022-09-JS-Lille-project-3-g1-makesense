const user = [];

for (let i = 0; i < 50; i++) {
  user.push({
    id: i,
    picture: `https://randomuser.me/api/portraits/men/${i}.jpg`,
  });
}
console.log(user);
