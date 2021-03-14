const uuid = require('uuid/v1');
const Activity = require('../models/activity');

exports.getAllActivities = (req, res, next) => {
  Activity.find().then(
    (activities) => {
      const mappedActivities = activities.map((activity) => {
        activity.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + activity.imageUrl;
        return activity;
      });
      res.status(200).json(mappedActivities);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  );
};

exports.getOneActivity = (req, res, next) => {
  Activity.findById(req.params.id).then(
    (activity) => {
      if (!activity) {
        return res.status(404).send(new Error('Camera not found!'));
      }
      activity.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + activity.imageUrl;
      res.status(200).json(activity);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  )
};

/**
 *
 * Expects request to contain:
 * contact: {
 *   firstName: string,
 *   lastName: string,
 *   address: string,
 *   city: string,
 *   email: string
 * }
 * products: [string] <-- array of product _id
 *
 */
exports.orderActivities = (req, res, next) => {
  if (!req.body.contact ||
      !req.body.contact.firstName ||
      !req.body.contact.lastName ||
      !req.body.contact.address ||
      !req.body.contact.city ||
      !req.body.contact.email ||
      !req.body.products) {
    return res.status(400).send(new Error('Bad request!'));
  }
  let queries = [];
  for (let productId of req.body.products) {
    const queryPromise = new Promise((resolve, reject) => {
      Activity.findById(productId).then(
        (activity) => {
          if (!activity) {
            reject('Camera not found: ' + productId);
          }
          activity.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + activity.imageUrl;
          resolve(activity);
        }
      ).catch(
        () => {
          reject('Database error!');
        }
      )
    });
    queries.push(queryPromise);
  }
  Promise.all(queries).then(
    (activities) => {
      const orderId = uuid();
      return res.status(201).json({
        contact: req.body.contact,
        products: activities,
        orderId: orderId
      })
    }
  ).catch(
    (error) => {
      return res.status(500).json(new Error(error));
    }
  );
};
