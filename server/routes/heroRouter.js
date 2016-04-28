var router = require('express').Router();
var Hero = require('../../models/hero');

router.get('/', function(req, res){
  Hero.find({}, function(err, heroes){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(heroes);
    }
  });
});

router.post('/', function(req, res){
  console.log(req.body);
  Hero.create(req.body, function(err){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/:id', function(req, res){
  Hero.findOneAndRemove({_id: req.params.id}, function(err, hero){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('Deleted hero', hero);
      res.sendStatus(200);
    }
  });
});

module.exports = router;
