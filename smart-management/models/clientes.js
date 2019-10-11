const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    codCliente: String,
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

const ClienteModel = mongoose.model('Cliente', ClienteSchema);

class Cliente {
   /**
    * Get all Clientes from database
    * @returns {Array} Array of Clientes
    */
   static getAll() {
     return new Promise((resolve, reject) => {
       ClienteModel.find({}).exec().then((results) => {
         resolve(results);
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
    * Get a Cliente by it's id
    * @param {string} id - Cliente Id
    * @returns {Object} - Cliente Document Data
    */
   static getById(id) {
     return new Promise((resolve, reject) => {
       ClienteModel.findById(id).exec().then((result) => {
         resolve(result);
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
    * Create a new Cliente
    * @param {Object} Cliente - Cliente Document Data
    * @returns {string} - New Cliente Id
    */
   static create(Cliente) {
     return new Promise((resolve, reject) => {
       ClienteModel.create(Cliente).then((result) => {
         resolve(result._id);
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
    * Update a Cliente
    * @param {string} id - Cliente Id
    * @param {Object} Cliente - Cliente Document Data
    * @returns {null}
    */
   static update(id, Cliente) {
     return new Promise((resolve, reject) => {
       ClienteModel.findByIdAndUpdate(id, Cliente).then(() => {
         resolve();
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
   * Delete a Cliente
   * @param {string} id - Cliente Id
   * @returns {null}
   */
   static delete(id) {
    return new Promise((resolve, reject) => {
      ClienteModel.findByIdAndUpdate(id, { deleted: 1 }).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
   }
}

 module.exports = Cliente;
