const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    codClient: String,
    corporateName: String,
    fantasyname: String,
    cnpj: Number,
    address: {
      street: String,
      number: Number,
      city: String,
      state: String,
      cep: Number,
    },
    email: String,
    phone: Number,
    nameContact: String,
    status: String,
}, {timestamps: true, static: false});

const ClientModel = mongoose.model('Client', ClientSchema);

class Client {
   /**
    * Get all Clients from database
    * @returns {Array} Array of Clients
    */
   static getAll() {
     return new Promise((resolve, reject) => {
       ClientModel.find({}).exec().then((results) => {
         resolve(results);
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
    * Get a Client by it's id
    * @param {string} id - Client Id
    * @returns {Object} - Client Document Data
    */
   static getById(id) {
     return new Promise((resolve, reject) => {
       ClientModel.findById(id).exec().then((result) => {
         console.log(result._id);
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
    * Create a new Client
    * @param {Object} Client - Client Document Data
    * @returns {string} - New Client Id
    */
   static create(Client) {
     return new Promise((resolve, reject) => {
       ClientModel.create(Client).then((result) => {
         resolve(result);
         console.log(result);
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
    * Update a Client
    * @param {string} id - Client Id
    * @param {Object} Client - Client Document Data
    * @returns {null}
    */
   static update(id, Client) {
     return new Promise((resolve, reject) => {
       ClientModel.findByIdAndUpdate(id, Client).then(() => {
         resolve();
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
   * Delete a Client
   * @param {string} id - Client Id
   * @returns {null}
   */
   static delete(id) {
    return new Promise((resolve, reject) => {
      ClientModel.findByIdAndUpdate(id, { deleted: 1 }).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
   }
}

 module.exports = Client;
