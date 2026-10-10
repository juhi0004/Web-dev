const mongoose = require("mongoose");
const { Schema } = mongoose;

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
    console.log("Connection successful");

    const orderSchema = new Schema({
        item: String,
        price: Number,
    });

    const customerSchema = new Schema({
        name: String,
        orders: [
            {
                type: Schema.Types.ObjectId,
                ref: "Order",
            },
        ],
    });

    const Order = mongoose.model("Order", orderSchema);
    const Customer = mongoose.model("Customer", customerSchema);

    const addCustomer = async () => {
        let cust1 = new Customer({
            name: "Rahul kumar",
        });

        let order1 = await Order.findOne({ item: "Chips" });
        let order2 = await Order.findOne({ item: "Chocolate" });

        if (order1) cust1.orders.push(order1._id);
        if (order2) cust1.orders.push(order2._id);

        let result = await cust1.save();
        console.log("Customer saved:", result);
    };

    const addOrders = async () => {
        let res = await Order.insertMany([
            { item: "Samosa", price: 12 },
            { item: "Chips", price: 22 },
            { item: "Chocolate", price: 40 },
        ]);

        console.log("Orders inserted:", res);
    };

    try {
        await addOrders();
        await addCustomer();
    } catch (err) {
        console.log(err);
    } finally {
        await mongoose.disconnect();
    }
}

main().catch((err) => console.log(err));