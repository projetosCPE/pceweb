const mongoose = require('mongoose');

const ManagerSchema = new mongoose.Schema({
    codManager: String,
    cpf: Number,
    address: {
      street: String,
      number: Number,
      city: String,
      state: String,
      cep: Number,
    },
    email: String,
    phone: Number,
    name: String,
    status: String,
    type: String,
    stations: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Station'
    }]
}, {timestamps: true, static: false});

const ManagerModel = mongoose.model('Manager', ManagerSchema);

class Manager {
   /**
    * Get all Managers from database
    * @returns {Array} Array of Managers
    */
   static getAll() {
     return new Promise((resolve, reject) => {
       ManagerModel.find({}).exec().then((results) => {
         resolve(results);
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
    * Get a Manager by it's id
    * @param {string} id - Manager Id
    * @returns {Object} - Manager Document Data
    */
    static getById(id) {
      return new Promise((resolve, reject) => {
        ManagerModel.findById(id).exec().then((result) => {
          resolve(result);
        }).catch((err) => {
          reject(err);
        });
      });
    }

   /**
    * Create a new Manager
    * @param {Object} Manager - Manager Document Data
    * @returns {string} - New Manager Id
    */
   static create(Manager) {
     return new Promise((resolve, reject) => {
       ManagerModel.create(Manager).then((result) => {
         resolve(result);
         console.log(result);
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
    * Update a Manager
    * @param {string} id - Manager Id
    * @param {Object} Manager - Manager Document Data
    * @returns {null}
    */
   static update(id, Manager) {
     return new Promise((resolve, reject) => {
       ManagerModel.findByIdAndUpdate(id, Manager).then(() => {
         resolve();
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
   * Delete a Manager
   * @param {string} id - Manager Id
   * @returns {null}
   */
   static delete(id) {
    return new Promise((resolve, reject) => {
      ManagerModel.findByIdAndUpdate(id, { deleted: 1 }).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
   }

   /**
    * Get a Manager by it's email
    * @param {string} id - Manager Email
    * @returns {Object} - Manager Document Data
    */
   static getByEmail(id) {
     return new Promise((resolve, reject) => {
       ManagerModel.findOne({ email: id }).exec().then((result) => {
         resolve(result);
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
    * Get a Client by it's codId
    * @param {string} id - Client CodId
    * @returns {Object} - Client Document Data
    */
   static getByCodManager(id) {
     return new Promise((resolve, reject) => {
       ManagerModel.findOne({ codManager: id }).exec().then((result) => {
         resolve(result);
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
    * Add station
    * @param {string} id - Manager Id
    * @param {string} station - station Id
    * @returns {null}
    */
   static addStation(id, station) {
     return new Promise((resolve, reject) => {
       ManagerModel.findByIdAndUpdate(id, { $push: { stations: station } }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
    * Remove station
    * @param {string} id - Manager Id
    * @param {string} station - station Id
    * @returns {null}
    */
    static removeStation(id, station) {
      return new Promise((resolve, reject) => {
        ManagerModel.findByIdAndUpdate(id, { $pull: { stations: station } }).catch((err) => {
          reject(err);
        });
      });
    }
}

 module.exports = Manager;
