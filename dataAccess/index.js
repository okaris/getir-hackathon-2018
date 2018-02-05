const mongoose = require('mongoose');
mongoose.connect('mongodb://dbUser:dbPassword@ds155428.mlab.com:55428/getir-bitaksi-hackathon');

exports.Records = mongoose.model('Records', mongoose.Schema({}));
