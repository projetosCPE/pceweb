const mongoose = require('mongoose');

const aparelhosSchema = new mongoose.Schema({
    numLote: String,
    numId: String, // ou tipo Number?
    dateFab: String,
    fornecedor: String,
    status: String,
    dataMovimenta: String,// ver se nao é melhor ipo inteiro
    obs: String,// definir tamanho ?
});
  
const AparelhosModel = mongoose.model('Aparelhos', aparelhosSchema);
  
class Aparelhos {
    /**
     * Get all Aparelhoss from database
     * @returns {Array} Array of Aparelhoss
     */
    static getAll() {
      return new Promise((resolve, reject) => {
        AparelhosModel.find({}).exec().then((results) => {
          resolve(results);
        }).catch((err) => {
          reject(err);
        });
      });
    }
  
    /**
     * Get a Aparelhos by it's id
     * @param {string} id - Aparelhos Id
     * @returns {Object} - Aparelhos Document Data
     */
    static getById(id) {
      return new Promise((resolve, reject) => {
        AparelhosModel.findById(id).exec().then((result) => {
          resolve(result);
        }).catch((err) => {
          reject(err);
        });
      });
    }
  
    /**
     * Create a new Aparelhos
     * @param {Object} aparelhos - Aparelhos Document Data
     * @returns {string} - New Aparelhos Id
     */
    static create(aparelhos) {
      return new Promise((resolve, reject) => {
        AparelhosModel.create(aparelhos).then((result) => {
          resolve(result._id);
        }).catch((err) => {
          reject(err);
        });
      });
    }
  
    /**
     * Update a Aparelhos
     * @param {string} id - Aparelhos Id
     * @param {Object} Aparelhos - Aparelhos Document Data
     * @returns {null}
     */
    static update(id, aparelhos) {
      return new Promise((resolve, reject) => {
        AparelhosModel.findByIdAndUpdate(id, aparelhos).then(() => {
          resolve();
        }).catch((err) => {
          reject(err);
        });
      });
    }
  
    /**
    * Delete a Aparelhos
    * @param {string} id - Aparelhos Id
    * @returns {null}
    */
    static delete(id) {
     return new Promise((resolve, reject) => {
       AparelhosModel.findByIdAndUpdate(id, { deleted: 1 }).then(() => {
         resolve();
       }).catch((err) => {
         reject(err);
       });
     });
    }
}
  
  module.exports = aparelhos;
  