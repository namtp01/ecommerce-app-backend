const Coupon = require('../models/couponModel');
const validateMongoDbId = require('../utils/validateMongoDbId');
const asyncHandler = require('express-async-handler');

const createCoupon = asyncHandler(async (req,res) => {
    try {
        const newCoupon = await Coupon.create(req.body);
        res.json(newCoupon);
    } catch(error) {
        throw new Error(error);
    }
});

const getAllCoupons = asyncHandler(async (req,res) => {
    try {
        const coupons = await Coupon.find();
        res.json(coupons);
    } catch(error) {
        throw new Error(error);
    }
});

const updateCoupon = asyncHandler(async (req,res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updateCoupon = await Coupon.findByIdAndUpdate(id, req.body, {new:true});
        res.json(updateCoupon);
    } catch(error) {
        throw new Error(error);
    }
});

const deleteCoupon = asyncHandler(async (req,res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updateCoupon = await Coupon.findByIdAndDelete(id);
        res.json(updateCoupon);
    } catch(error) {
        throw new Error(error);
    }
});

const getOneCoupon = asyncHandler(async (req,res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getACoupon = await Coupon.findById(id);
        res.json(getACoupon);
    } catch(error) {
        throw new Error(error);
    }
});


module.exports = {createCoupon, getAllCoupons, updateCoupon, deleteCoupon, getOneCoupon};