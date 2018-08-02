module.exports.home = function (req, res) {
    let kisiler = ['ahmet','mehmet','veli','süleyman'];
    res.render('home',{mesaj:'merhaba ben controller',kisiler : kisiler});
};
