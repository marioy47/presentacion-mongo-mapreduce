use meetup;

db.test.drop();

for (var i = 1; i <= 15; i++) {
    db.test.insert({nombre: "Mario", apellido: "Yepes", compra: i*3});
}
for (var i = 1; i <= 15; i++) {
    db.test.insert({nombre: "Carlos", apellido: "Alvarez", compra: i*2});
}
for (var i = 1; i <= 15; i++) {
    db.test.insert({nombre: "Juan", apellido: "Cifuentes", compra: i*5});
}

db.test.find().count();
