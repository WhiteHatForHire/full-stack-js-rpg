
module.exports = function(app) {

  app.route('/')
  .get(function(req, res, next) {
    res.render('main/character-create', {message: ('')});
    heroExt.test = 'jdjd';
    console.log(heroExt.test);
  })  
  .post(function(req, res, next) {
    var hero = {
      name: req.body.name,
      class: req.body.inlineRadioOptions
    }
    if (hero.name != '' && hero.class != null) {
      res.render('main/character-dashboard', {hero});
    } else {
      res.render('main/character-create', {message: (`Please fill out the form`)});
    }
  });


}