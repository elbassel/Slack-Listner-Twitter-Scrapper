const mongoose = require('mongoose');
const zappySchema = new mongoose.Schema({
    last_id: Number,
})
const Zappy = mongoose.model('zappyHelper', zappySchema);

Zappy.getTwitterLastId = async ()=> {
    try {
        const twitterLastIdDoc = await Zappy.findOne({}).exec();
        return twitterLastIdDoc? twitterLastIdDoc.last_id: null;
    } catch (e) {
        throw e;
    }
}

Zappy.setTwitterLastId = async (twitterLastId)=>  {
    try {
        const twitterLastIdDoc = await Zappy.findOne({}).exec();
        if (twitterLastIdDoc) {
            twitterLastIdDoc.last_id = twitterLastId;
            await twitterLastIdDoc.save();
        } else {
            const document = {
                last_id: twitterLastId,
            };
            const zappy = new Zappy(document);
            await zappy.save();
        }
    } catch (e) {
        throw e;
    }
}

module.exports = Zappy;