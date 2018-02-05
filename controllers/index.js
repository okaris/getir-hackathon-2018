var data = require('../dataAccess');

exports.home = (req, res, next) => {

  if(!req.body){
    res.status(404);
    res.send('Not found');
    next();
    return;
  }

  var query = req.body;

  data.Records.find({
      'createdAt': {
        '$gte': new Date(query.startDate),
        '$lte': new Date(query.endDate)
      },
      'counts': {
        '$elemMatch': {
          '$gte': query.minCount,
          '$lte': query.maxCount
        }
      }
    }).lean().exec().then((result) => {
      res.send(result);
      next();
    }).catch((error) => {
      console.log(error)
      res.status(404);
      res.send('Not found');
      next();
    })
}
