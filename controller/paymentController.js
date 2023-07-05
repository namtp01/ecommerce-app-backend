const Razorpay = require('razorpay');

const instance = new Razorpay({
    key_id:"rzp_test_w4tqOrG2fKOVFL", key_secret:"757q53cu3K8kqa2qmsNg7ZDz"
});

const checkout = async(req,res) => {
    const { amount } = req.body;
    try {
        const option = {
            amount: amount * 100,
            currency: "USD",
        };
        const order = await instance.orders.create(option);
        res.json({
            success: true,
            order
        });
    } catch (error) {
        // Handle the error here
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred while creating the order' });
    }
};

const paymentVerification = async(req,res) => {
    const { razorpayOrderId,razorpayPaymentId } = req.body;
    res.json({
        razorpayOrderId, razorpayPaymentId
    });
};

module.exports = {
    checkout,
    paymentVerification
}