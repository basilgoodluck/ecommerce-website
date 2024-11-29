import { connect } from "../config/mongodb";

export const addToCart = async (req, res) => {
    try{
        const db = await connect();
        const users = db.collection("users")
        const carts = db.collection("carts")
        const targetUser = await users.findOne({ _id: req.user.userId })
        if(!targetUser){
            return res.status(401).json({ message: "User not found" })
        }
        const { productId, quantity, price } = req.body;
        if(!productId || quantity === undefined || !price){
            return res.status(401).json({ message: "Incomplete order details" })
        }
        const existingItem = carts.findOne({
            _id: req.user.userId,
            productId: req.body.productId
        })
        if(existingItem){
            const updatedCart = await carts.updateOne(
                { _id: existingItem._id },
                { $set: { quantity: existingItem.quantity + req.body.quantity } }
            )
            return res.status(201).json({ message: `${updatedCart}`})
        }
        const newCartItem = await carts.insertOne({
            _id: req.user.userId,
            items: {
                productId,
                quantity,
                price
            }
        })
        return res.status(201).json(newCartItem)
    }
    catch(error) {
        return res.status(500).json({ message: error.message })
    }
}

export const clearCart = async (req, res) => {
    try{
        const db = await connect();
        const carts = db.collection("carts");
        const result = await carts.deleteMany({ _id: req.user.userId })
        if(!result.deletedCount === 0){
            return res.status(401).json({ message: "No items found in the cart" })
        }
        return res.status(201).json({ message: "Cart cleared successfully" })

    }
    catch(error){
        return res.status(500).json({ message: error.message})
    }
}

export const deleteCartItem = async (req, res) =>{
    try{
        const db = await connect()
        const carts = db.collection("carts")
        const result = await carts.deleteOne({ 
            _id: req.user.userId,
            productId: req.params.productId
        })
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Item not found in cart" });
        }

        res.status(200).json({ message: "Cart item deleted successfully" });
    }
    catch(error){
        return res.status(500).json({ message: `Error occured while deleting item, ${error.message}`})
    }
}

export const getCartItems = async (req, res) => {
  try {
    const db = await connect();
    const users = db.collection("users");
    const carts = db.collection("carts")

    const targetUser = await users.findOne({ _id: req.user.userId });

    if (!targetUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const cart = await carts.findOne({ userId: req.user.userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart is empty" });
    }
    return res.status(200).json(cart.items);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ message: "Error fetching cart items", error: error.message });
  }
};
