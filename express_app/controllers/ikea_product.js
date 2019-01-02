const moment = require('moment');

const Product = require('../models/ikea_product');
const Category = require('../models/ikea_category');

/* READ *****************************/

exports.getEditProduct = async (req, res, next) => {

    let categories;
    let product;

    const getCategories = await Category.fetchAll()
        .then(([rows]) => {
            categories = rows;
            //console.log('findCategories(): ', JSON.stringify(rows));
        })

    const findPostById = await Product.findById(req.query.id)
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('YYYY-MM-DD');
                console.log('p.date: ', p.date);
            }
            product = rows;
            //console.log('post[0].date: ', post[0].date);
           //console.log('findPostById(): ', JSON.stringify(rows));
        })
        .catch(err => console.log(err));

    console.log('product: ', JSON.stringify(product[0].date));
    
    res.render('ikea_prod_details', {
        product: product,
        title: 'Edit Post',
        categories: categories
   });

};