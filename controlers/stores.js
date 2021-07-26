const store = require('../models/Store')



exports.getStores = async(req, res, next) => {
   try {
       const stores = await store.find();

       return res.status(200).json({
           success: true,
           count: stores.length,
           data:stores,
       })
   } catch (error) {
       console.log(error);
       res.status(500).json({error:"server error"})
       
   }
}


exports.addStores = async(req, res, next) => {
    try {
        const newStore = await store.create(req.body);
        return res.status(200).json({ success: true, data: newStore });
    } catch (error) {
        console.log(error);
        if (error.code == 11000) {
            return res.status(400).json({error:"this store already exits"})
        }
        res.status(500).json({error:"server error"})
        
    }
 }