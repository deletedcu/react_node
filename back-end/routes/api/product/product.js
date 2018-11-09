const Moltin = require('../../../helpers/moltin');
const checkToken = require('../../../helpers/checkToken');
const config = require('../../../config/config');

exports.getAllProducts = (request) => {
  return new Promise((resolve, reject) => {
    Moltin.Products.With(['main_image', 'files']).All()
      .then(res => {
        let products = res.data;
        let mainImages = res.included.main_images;
        let files = res.included.files;
        let result = [];

        products.forEach(product => {
          if (product.relationships.main_image) {
            // product has main image, find its url and attach to result

            let mainImageId = product.relationships.main_image.data.id;
            let mainImage = mainImages.find(mainImage => mainImage.id === mainImageId);
            product.main_image = mainImage.link.href;
          } else {
            // product doesn't have main image

            product.main_image = '';
          }
          
          if (product.relationships.files) {
            // product has files, find their urls and attach to result

            let fileReferenceList = product.relationships.files.data;
            let fileUrls = [];
            
            fileReferenceList.forEach(fileReference => {
              let file = files.find(file => file.id === fileReference.id);
              fileUrls.push(file.link.href);
            });

            product.files = fileUrls;
          } else {
            // product doesn't have attachment files

            product.files = [];
          }

          result.push({
            id: product.id,
            name: product.name,
            slug: product.slug,
            sku: product.sku,
            description: product.description,
            price: product.price.map(price => price.amount / 100),
            status: product.status,
            display_price: product.meta.display_price.with_tax.formatted,
            stock_level: product.meta.stock.level,
            main_image: product.main_image,
            files: product.files,
            protein: '--',
            calories: '--',
            carbs: '--',
            fat: '--',
          });
        });

        resolve({ status: 200, products: result });
      })
      .catch(err => {
        console.log(err);
        reject({ status: 500, message: 'Internal Server Error!'});
      });
  });
}
