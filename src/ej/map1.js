use meetup;

db.test.mapReduce(
    function() {
        emit(this.nombre, this.compra);
    },
    function(key, value) {
        return Array.sum(value)
    },
    {
        query: {},
        out: "map1"
    }
);

