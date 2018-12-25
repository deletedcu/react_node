const Moltin = require('../../../helpers/moltin');
const checkToken = require('../../../helpers/checkToken');
const descriptionParser = require('../../../helpers/descriptionParser');
const config = require('../../../config/config');

exports.getAllProducts = (request) => {
  return new Promise((resolve, reject) => {
    let categories = [];

    Moltin.Categories.All().then(res => {
      categories = res.data;
      return Moltin.Products.Filter({eq: {status: 'live'}}).With(['main_image', 'files']).All();
    })
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

          product.main_image = 'no image';
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

        if (product.relationships.categories) {
          // product has categories, find their ids and attach to result
          console.log(product.relationships.categories);
          let category = categories.find((category) => category.id === product.relationships.categories.data[0].id);
          product.category = category.name;
        } else {
          // product doesn't have categories
          product.category = '';
        }

        if (product.relationships.collections) {
          // product has categories, find their ids and attach to result
          let collections = product.relationships.collections.data.map((collection) => { return collection.id });
          product.collections = collections;
        } else {
          // product doesn't have categories
          product.collections = [];
        }

        // parse description content
        let descriptionJSON = descriptionParser(product.description);

        result.push({
          id: product.id,
          name: product.name,
          slug: product.slug,
          sku: product.sku,
          price: product.price.map(price => price.amount / 100),
          status: product.status,
          display_price: product.meta.display_price.with_tax.formatted,
          stock_level: product.meta.stock.level,
          main_image: product.main_image,
          files: product.files,
          category: product.category,
          collections: product.collections,
          ...descriptionJSON,
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
