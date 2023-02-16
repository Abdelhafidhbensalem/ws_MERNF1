const express = require("express")
const isAuth = require("../middlewares/isAuth")

const router = express.Router()
const Product = require("../models/Product")

//add new product
router.post("/",isAuth(), async (req, res) => {
    try {
        const newProduct = new Product({...req.body,user:req.user._id})
        await newProduct.save()
        res.send({ msg: "product  add succes", product: newProduct })
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
}
)

//get all products
router.get("/", async (req, res) => {
    try {
        console.log(req.query)

        const products = await Product.find({ name: { $regex: req.query.name || "", $options: "i" } }).sort({ createOn: -1 })
        res.send(products)
    }
    catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
})
//get one product
router.get("/:id", async (req, res) => {
    try {

        const oneProduct = await Product.findById(req.params.id)
        res.send({ product: oneProduct })
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
})
//edit product
router.put("/:id",isAuth(), async (req, res) => {
    try {

        const result = await Product.updateOne({ _id: req.params.id }, { ...req.body })
        if (result.modifiedCount) {
            productUpdated = await Product.findOne({ _id: req.params.id })
            return res.send({ msg: "update suuccess", product: productUpdated })
        }

        res.status(400).send({ msg: " aleardy update " })
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
})
//delete product
router.delete("/:id",isAuth(), async (req, res) => {
    try {

        const result = await Product.deleteOne({ _id: req.params.id })
        if (result.deletedCount) {
            return res.send({ msg: "delete  success" })
        } res.status(400).send({ msg: "aleardy delete" })
    } catch (error) {
        console.log(error)


        res.status(400).send(error.message)
    }
})
module.exports = router