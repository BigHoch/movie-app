exports.seed = function (knex) {
  return knex('movie_table')
    .del()
    .then(function () {

      return knex('movie_table').insert([
        { title: 'Mean Girls' },
        { title: 'Hackers' },
        { title: 'The Grey' },
        { title: 'Sunshine' },
        { title: 'Ex Machina' },
        { title: 'Ironman' },
        { title: 'Finding Nemo' },
        { title: 'Bee Movie' }
      ]);
    });
};