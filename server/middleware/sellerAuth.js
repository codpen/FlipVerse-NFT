import jwt from "jsonwebtoken";
import Seller from "../models/Seller.js";

const sellerMiddleware = async (req, res, next) => {
	const token = req.header("x-auth-token");
	console.log(token);
	try {
		const decodedSeller = await jwt.verify(token, process.env.SECRET_KEY);

		const seller = await Seller.findOne({
			_id: decodedSeller._id,
			"tokens.token": token,
		});

		console.log(seller);

		if (!seller) {
			throw new Error("Could not find seller");
		}

		req.token = token;
		req.seller = seller;
		next();
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: "Seller not found" });
	}
};

export default sellerMiddleware;
