var express = require('express');
var router = express.Router();
var pg = require('pg');

/* add page. */
router.post('/', function(request, response, next) {
  var reqUserId = request.body["reqUserId"];
  var resUserId = request.body["resUserId"];

  var pool = pg.Pool({
    database: 'd6vurap31v4bj9',
    user: 'glvweamppkdamk',
    password: 'ec8e5087294a8a2795927e61e9dc34658da44ae506e81471c6ba2fd9c73024b9',
    host: 'ec2-174-129-41-127.compute-1.amazonaws.com',
    port: 5432,
    ssl: true,
  });
  pool.connect( function(err, client) {
    if (err) {
      console.log(err);
    } else {
      client.query(
        'INSERT INTO couples(id, req_user_id, res_user_id, status) VALUES(5, $1, $2, 10);',
        [reqUserId, resUserId],
        function (err, result) {
          response.redirect('/');
          console.log(result);
        }
      );
    }
  });
});

module.exports = router;