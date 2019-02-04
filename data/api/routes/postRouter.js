const express = require ('express');
const knex = require ('knex');
const router = express.Router ();
const helper = require ('../helpers/postHelpers');

router.get ('/', (req, res) => {
  helper
    .getPosts ()
    .then (posts => {
      res.status (200).json (posts);
    })
    .catch (err =>
      res.status (500).json ({errorMessage: 'cant receive posts'})
    );
});

module.exports = router;
