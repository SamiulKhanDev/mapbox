const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder')

const StoreSchema = new mongoose.Schema({
    storeId: {
        type: String,
        required: [true, "please add a store id"],
        unique: true,
        
    },
    address: {
        type: String,
        required:[true,"add an address"]
    },
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
         
        },
        coordinates: {
          type: [Number],
          index:'2dsphere'
        },
        formattedAddress: String,
        createAt: {
            type: Date,
            default:Date.now
        }
      }
})
StoreSchema.pre('save', async function(next){
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: "Point",
    coordinates: [loc[0].latitude, loc[0].longitude],
    formattedAddress:loc[0].formattedAddress
  }
  this.address = undefined;
  next();
    
})

module.exports = mongoose.model('store', StoreSchema);