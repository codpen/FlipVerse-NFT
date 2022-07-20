import asyncHandler from "express-async-handler";
import Seller from "../models/Seller.js";
import Product from "../models/Product.js";

//@desc Get seller Profile
//@route /seller/profile
//@access private
const getSellerProfile = asyncHandler(async (req, res) => {
	const seller = await Seller.findById(req.seller._id);

	if (!seller) {
		res.status(404);
		throw new Error("Seller doesn't exist");
	}

	const { name, email, role, _id, image, address } = seller;
	res.json({
		name,
		email,
		role,
		_id,
		image,
		address,
	});
});

//@desc Update seller Profile
//@route /profile/me
//@access private
const updateSellerProfile = asyncHandler(async (req, res) => {
	const seller = await Seller.findById(req.seller._id);

	const { name, email, role, image, address } = req.body;

	if (seller) {
		seller.name = name || seller.name;
		seller.email = email || seller.email;
		seller.role = role || seller.role;
		seller.image = image || seller.image;
		seller.address = address || seller.address;

		await seller.save();
		res.status(200).json({
			_id: seller._id,
			name: seller.name,
			email: seller.email,
			role: seller.role,
			address: seller.address,
		});
	} else {
		res.status(404);
		throw new Error("Seller not found");
	}
});

const createProduct = asyncHandler(async (req, res) => {
	const { title, category, price, brand, description } = req.body;

	if (!title || !category || price < 1) {
		res.status(400);
		throw new Error("Please provide valid details");
	}

	const product = new Product({
		title,
		price,
		brand,
		category,
		description,
		createdBy: req.seller._id,
	});

	await product.save();
	req.seller.products.push(product._id);
	await req.seller.save();
	res.status(201).json({ product, message: "Product created successfully" });
});

const getProduct = asyncHandler(async (req, res) => {
	const {
		params: { id },
	} = req;

	const pId = id.toString();

	const product = await Product.findById(pId);

	if (!product) {
		res.status(404);
		throw new Error("Product not found");
	}

	res.status(200).json({ product });
});

const deleteProduct = asyncHandler(async (req, res) => {
	const { params, seller } = req;
	const pId = params.id.toString();
	const product = await Product.findById(pId);

	const pIdIndex = seller.products.find((id) => {
		return id.toString() === pId;
	});

	if (!product || pIdIndex < -1) {
		res.status(404);
		throw new Error("Product not found");
	}

	await product.delete();
	seller.products.splice(pIdIndex, 1);

	await seller.save();
	res.status(201).json({ message: "Product removed successfully" });
});
export {
	getSellerProfile,
	updateSellerProfile,
	createProduct,
	deleteProduct,
	getProduct,
};
