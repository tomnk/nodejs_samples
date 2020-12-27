const Products = require('../models/products');

class ProductController {
  static async index(req, res, next) {
    const products = await Products.findAll();
    res.status(200).send(products);
  }

  static async create(req, res, next) {
    const product = await Products.create({
      ...req.body,
      isPublished: false,
    });
    res.status(201).send(product);
  }

  static async update(req, res, next) {
    const product = await Products.findByPk(req.params.id);
    const errors = [];
    if (product.mrp < product.price) {
      errors.push('MRP should be less than equal to the Price');
    }
    if (product.stock <= 0) {
      errors.push('Stock count is 0');
    }
    if (errors.length) {
      return res.status(422).send(errors);
    }
    await product.update({
      ...req.body,
      isPublished: true,
    });
    res.status(204).send();
  }

  static async remove(req, res, next) {
    res.status(405).send();
  }
}

module.exports = ProductController;
