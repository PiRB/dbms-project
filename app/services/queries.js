var pool = require('../utils/db');

module.exports = {
    mainSelect: async function() {
        let conn;
        conn = await pool.getConnection();
        const rows = await conn.query(
            "select film.film_id, film.title, film.rental_rate as price, film.rating, category.name as category, count(*) as nb_rate \n" +
            "from rental\n" +
            "join inventory using(inventory_id)\n" +
            "join film using(film_id)\n" +
            "join film_category using(film_id)\n" +
            "join category using(category_id)\n" +
            "group by film.film_id\n" +
            "limit 50\n" +
            "offset 0;");
        return rows;
    },
    selectWithParameters: async function(limit, offset, sortColumn, sortDirection) {
        let conn;
        conn = await pool.getConnection();
        const rows = await conn.query(
            "select film.film_id, film.title, film.rental_rate as price, film.rating, category.name as category, count(*) as nb rate \n" +
            "from rental\n" +
            "join inventory using(inventory_id)\n" +
            "join film using(film_id)\n" +
            "join film_category using(film_id)\n" +
            "join category using(category_id)\n" +
            "group by film.film_id\n" +
            `order by ${sortColumn} ${sortDirection}\n` +
            `limit ${limit}\n` +
            `offset ${offset};`
        )
    }
}