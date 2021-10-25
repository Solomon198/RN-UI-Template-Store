import realm from 'realm';
let app: realm;

const DescriptionSchema = {
  name: 'description',
  embedded: true, // default: false
  properties: {
    descriptionHeader: 'string?',
    descriptionBody: 'string?',
  },
};

const ProductSchema = {
  name: 'products',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    title: 'string?',
    author: 'string?',
    description: 'description',
    images: 'string[]',
    price: 'string?',
    pdf: 'string?',
    id: 'int',
  },
};

function getApp() {
  if (!app) {
    // @ts-ignore
    app = new realm({
      schema: [ProductSchema, DescriptionSchema],
      schemaVersion: 2,
    });
    return app;
  }
  return app;
}

function saveProducts(products: any[]) {
  let app = getApp();
  app.write(() => {
    let obj = app.objects(ProductSchema.name);

    app.delete(obj);
    products.forEach((product: any) => {
      product._id = new realm.BSON.ObjectID();
      product.id = parseInt(product.id);
      app.create(ProductSchema.name, product);
    });
  });
}

function getProducts() {
  let app = getApp();
  let products = app.objects(ProductSchema.name);
  let results: any = [];
  products.forEach(product => {
    let obj = product.toJSON();
    let formatMainObject = obj.description.descriptionBody.indexOf('[');
    if (formatMainObject >= 0) {
      obj.description.descriptionBody = JSON.parse(
        obj.description.descriptionBody,
      );
    }
    obj._id = obj._id.toHexString();
    results.push(obj);
  });
  return results;
}

function searchProduct(searchQuery: string) {
  let app = getApp();
  let query = 'title CONTAINS[c] $0 || author CONTAINS[c] $0';
  // description.descriptionBody CONTAINS[c] $0 ||
  let products: realm.Results<realm.Object> = app
    .objects(ProductSchema.name)
    .filtered(query, searchQuery);
  let result: any = [];

  products.forEach(val => {
    let _obj = val.toJSON();
    _obj._id = _obj._id.toHexString();
    result.push(_obj);
  });

  return result;
}

export default {
  saveProducts,
  searchProduct,
  getProducts,
};
