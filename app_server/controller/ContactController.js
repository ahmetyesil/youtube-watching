module.exports.contact = function (req, res) {
    let kisiler = ['ahmet','mehmet','veli','süleyman'];
    res.render('contact',{mesaj:'merhaba ben controller',kisiler : kisiler});
};
