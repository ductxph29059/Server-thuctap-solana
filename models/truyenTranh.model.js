const db = require('./db');
const truyenTranhSchema = new db.mongodb.Schema(
    {
        tenNV: { type: String , required: true},
        moTa: {type: String},
        level:{type: String},
        ngayXuatBan:{type: Date , required: true},
        point:{type: Number, required: true},
        trangThai:{type: Boolean, required: true}
    }, { collection: 'TruyenTranh'}
);
let truyenTranhModel = db.mongodb.model ('truyenTranhModel', truyenTranhSchema );

module.exports = {truyenTranhModel}