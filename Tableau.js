let names = []
names.push('Vincent', 'Paul', 'Arthur')

console.log(names)

for (i = 0; i < names.length; i++) {
    names[i] = names[i] + " va à la pèche"
    console.log(names[i])
}

names.forEach( name => {
    name += " et au tenis"
    console.log(name)

})