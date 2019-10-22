const mongoose = require('mongoose');

const StationSchema = new mongoose.Schema({
    codeStation: String,
    numberAp: Number,
    nameEmployed: String,
    toleranceTime: Number,
    status: String,
    officeHours: String,
    inputHour: String,
    outputHour: String,
    days: String,
}, {timestamps: true, static: false});

const StationModel = mongoose.model('Station', StationSchema);

class Station {
   /**
    * Get all Stations from database
    * @returns {Array} Array of Stations
    */
   static getAll() {
     return new Promise((resolve, reject) => {
       StationModel.find({}).exec().then((results) => {
         resolve(results);
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
    * Get a Station by it's id
    * @param {string} id - Station Id
    * @returns {Object} - Station Document Data
    */
   static getById(id) {
     return new Promise((resolve, reject) => {
       StationModel.findById(id).exec().then((result) => {
         console.log(result);
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
    * Create a new Station
    * @param {Object} Station - Station Document Data
    * @returns {string} - New Station Id
    */
   static create(Station) {
     return new Promise((resolve, reject) => {
       StationModel.create(Station).then((result) => {
         resolve(result._id);
         console.log(result);
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
    * Update a Station
    * @param {string} id - Station Id
    * @param {Object} Station - Station Document Data
    * @returns {null}
    */
   static update(id, Station) {
     return new Promise((resolve, reject) => {
       StationModel.findByIdAndUpdate(id, Station).then(() => {
         resolve();
       }).catch((err) => {
         reject(err);
       });
     });
   }

   /**
   * Delete a Station
   * @param {string} id - Station Id
   * @returns {null}
   */
   static delete(id) {
    return new Promise((resolve, reject) => {
      StationModel.findByIdAndUpdate(id, { deleted: 1 }).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
   }
}

 module.exports = Station;
