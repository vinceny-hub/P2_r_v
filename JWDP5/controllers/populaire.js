const uuid = require('uuid/v1');
const Populaire = require('../models/Populaire');

exports.getAllPopulaires = (req, res, next) => {
  Populaire.find().then(
    (populaires) => {
      const mappedPopulaires  = populaires.map((populaire) => {
        populaire.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + populaire.imageUrl;
        return populaire;
      });
      res.status(200).json(mappedPopulaires );
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  );
};

exports.getOnePopulaire = (req, res, next) => {
  Populairel.findById(req.params.id).then(
    (populaire) => {
      if (!populaire) {
        return res.status(404).send(new Error('Teddy not found!'));
      }
      populaire.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + populaire.imageUrl;
      res.status(200).json(populaire);
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
exports.orderPopulaires  = (req, res, next) => {
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
      Populaire.findById(productId).then(
        (populaire) => {
          if (!populaire) {
            reject('Camera not found: ' + productId);
          }
          populaire.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + populaire.imageUrl;
          resolve(populaire);
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
    (populaires) => {
      const orderId = uuid();
      return res.status(201).json({
        contact: req.body.contact,
        products: populaires,
        orderId: orderId
      })
    }
  ).catch(
    (error) => {
      return res.status(500).json(new Error(error));
    }
  );
};
