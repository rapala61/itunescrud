const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');

// do your db stuff here
const dbConnection = 'mongodb://localhost:27017/itunescrud';

function getFavorites(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
      .find({})
      .toArray((arrayError, data) => {
        if (arrayError) return next(arrayError);

        // return the data
        res.favorites = data;
        db.close();
        return next();
      });
    return false;
  });
  return false;
}

function saveFavorite(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
    .insert(req.body.favorite, (insertErr, result) => {
      if (insertErr) return next(insertErr);

      res.saved = result;
      db.close();
      return next();
    });
    return false;
  });
  return false;
}

function deleteFavorite(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
      .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, doc) => {
        if (removeErr) return next(removeErr);

        // return the data
        res.removed = doc;
        db.close();
        return next();
      });
    return false;
  });
  return false;
}

module.exports = {
  saveFavorite,
  deleteFavorite,
  getFavorites
};
