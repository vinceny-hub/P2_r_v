const uuid = require('uuid/v1');
const Hotel = require('../models/Hotel');

exports.getAllHotels = (req, res, next) => {
  Hotel.find().then(
    (hotels) => {
      const mappedHotels = hotels.map((hotel) => {
        hotel.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + hotel.imageUrl;
        return hotel;
      });
      res.status(200).json(mappedHotels);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  );
};

exports.getOneHotel = (req, res, next) => {
  Hotel.findById(req.params.id).then(
    (hotel) => {
      if (!hotel) {
        return res.status(404).send(new Error('Teddy not found!'));
      }
      hotel.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + hotel.imageUrl;
      res.status(200).json(hotel);
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
exports.orderHotels = (req, res, next) => {
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
      Hotel.findById(productId).then(
        (hotel) => {
          if (!hotel) {
            reject('Camera not found: ' + productId);
          }
          hotel.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + hotel.imageUrl;
          resolve(hotel);
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
    (hotels) => {
      const orderId = uuid();
      return res.status(201).json({
        contact: req.body.contact,
        products: hotels,
        orderId: orderId
      })
    }
  ).catch(
    (error) => {
      return res.status(500).json(new Error(error));
    }
  );
};
