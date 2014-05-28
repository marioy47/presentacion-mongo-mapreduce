use meetup;

var map_fn = function() {
    var key = this.nombre + ' ' + this.apellido;
    var value = {
        count: 1,
        subtotal: this.compra
    }
    emit (key, value);
}

var reduce_fn = function(keys, values) {
    reduced = {conteo: 0, total: 0};

    for (var i = 0; i < values.length; i++) {
        reduced.conteo += values[i].count;
        reduced.total += values[i].subtotal;
    }

    return reduced;
}

db.test.mapReduce(
    map_fn,
    reduce_fn,
    {
        query: {},
        out: { merge: "map2"},
    }
);


