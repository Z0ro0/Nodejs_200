const listUser=[
    {name: 'Lisa', age: 31},
    {name: 'Rosa', age: 28},
    {name: 'Nasa', age: 34}
];

listUser.forEach(function(user){
    console.log(user);
});

listUser.forEach(user => console.log(user));