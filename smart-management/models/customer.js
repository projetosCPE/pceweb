const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    codCustomer: String,
    razaoSocial: String,
    nomeFantasia: String,
    cnpj: Number,
    endereco: {
      rua: String,
      numero: Number,
      bairro: String,
      cidade: String,
      estado: String,
    },
    email: String,
    telefone: Number,
    nomeContato: String,
    status: String,
}, {timestamps: true, static: false});

const CustomerModel = mongoose.model('Customer', CustomerSchema);

class Customer {
   /**
    * Get all Customers from database
    * @returns {Array} Array of Customers
    */
   static getAll() {
     return new Promise((resolve, reject) => {
       CustomerModel.find({}).exec().then((results) => {
         resolve(results);
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
    * Get a Customer by it's id
    * @param {string} id - Customer Id
    * @returns {Object} - Customer Document Data
    */
   static getById(id) {
     return new Promise((resolve, reject) => {
       CustomerModel.findById(id).exec().then((result) => {
         console.log(result._id);
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
    * Create a new Customer
    * @param {Object} Customer - Customer Document Data
    * @returns {string} - New Customer Id
    */
   static create(customer) {
     return new Promise((resolve, reject) => {
       CustomerModel.create(customer).then((result) => {
         resolve(result);
         console.log(result);
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
    * Update a Customer
    * @param {string} id - Customer Id
    * @param {Object} Customer - Customer Document Data
    * @returns {null}
    */
   static update(id, customer) {
     return new Promise((resolve, reject) => {
       CustomerModel.findByIdAndUpdate(id, customer).then(() => {
         resolve();
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
   * Delete a Customer
   * @param {string} id - Customer Id
   * @returns {null}
   */
   static delete(id) {
    return new Promise((resolve, reject) => {
      CustomerModel.findByIdAndUpdate(id, { deleted: 1 }).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
   }
}

 module.exports = Customer;
