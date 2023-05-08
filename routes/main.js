module.exports = function(app, shopData) {

    // Handle our routes


    app.get('/chanamasala',function(req,res){
        res.render("chanamasala.ejs", shopData)
    });

    app.get('/masalachaat',function(req,res){
        res.render("masalachaat.ejs", shopData)
    });

    app.get('/',function(req,res){
        res.render('index.ejs', shopData)
    });
    app.get('/shorsheilish',function(req,res){
        res.render('shorsheilish.ejs', shopData);
    });
    app.get('/chickpeas',function(req,res){
        res.render("chickpeas.ejs", shopData);
    });

    app.get('/prawnbhuna', function (req,res) {
        res.render('prawnbhuna.ejs', shopData);                                                                     
    }); 
    
    app.get('/firni', function (req,res) {
        res.render('firni.ejs', shopData);                                                                     
    }); 
    
    app.get('/blackmustard', function (req,res) {
        res.render('blackmustard.ejs', shopData);                                                                     
    }); 

    app.get('/cardamom', function (req,res) {
        res.render('cardamom.ejs', shopData);                                                                     
    });
    
    app.get('/chaat_masala', function (req,res) {
        res.render('chaat_masala.ejs', shopData);                                                                     
    });

    app.get('/tamarind', function (req,res) {
        res.render('tamarind.ejs', shopData);                                                                     
    });

    app.get('/rice', function (req,res) {
        res.render('rice.ejs', shopData);                                                                     
    });

    app.get('/saffron', function (req,res) {
        res.render('saffron.ejs', shopData);                                                                     
    });

    app.get('/coriander', function (req,res) {
        res.render('coriander.ejs', shopData);                                                                     
    });

    app.get('/cumin', function (req,res) {
        res.render('cumin.ejs', shopData);                                                                     
    });

    app.get('/garlic', function (req,res) {
        res.render('garlic.ejs', shopData);                                                                     
    });

    app.get('/garam', function (req,res) {
        res.render('garam.ejs', shopData);                                                                     
    });

    app.get('/ginger', function (req,res) {
        res.render('ginger.ejs', shopData);                                                                     
    });

    app.get('/green_chili', function (req,res) {
        res.render('green_chili.ejs', shopData);                                                                     
    });

    app.get('/hilsha', function (req,res) {
        res.render('hilsha.ejs', shopData);                                                                     
    });


    app.get('/red_chili_powder', function (req,res) {
        res.render('red_chili_powder.ejs', shopData);                                                                     
    });

    app.get('/turmeric', function (req,res) {
        res.render('turmeric.ejs', shopData);                                                                     
    });

    
    app.get('/mustard', function (req,res) {
        res.render('mustard.ejs', shopData);                                                                     
    });


 }
