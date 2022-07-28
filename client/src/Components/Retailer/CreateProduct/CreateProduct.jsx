import React, { useState, useContext } from "react";
import { Button, Card, ProductCard, InputField } from "../../UI";
import classes from "./CreateProduct.module.css";
import { sellerAuthContext } from "../../../Contexts";

const CreateProduct = () => {
	const { addProduct } = useContext(sellerAuthContext);
	// console.log(products.product);

	const [img, setImg] = useState(null);
	const [product, setProduct] = useState({
		title: "",
		brand: "",
		category: "",
		price: "",
		description: "",
		hasWarranty: false,
		warrantyDuration: 0,
	});

	const {
		title,
		brand,
		category,
		price,
		description,
		hasWarranty,
		warrantyDuration,
	} = product;

	const onChangeHandler = (e) => {
		if (e.target.name === "hasWarranty") {
			setProduct({ ...product, hasWarranty: !hasWarranty });
			return;
		}
		setProduct({
			...product,
			[e.target.name]: e.target.value,
		});
	};
	const onImageChange = (e) => {
		setImg(e.target.files);
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		// console.log(seller);
		if (
			title === "" ||
			brand === "" ||
			category === "" ||
			price === "" ||
			description === ""
		) {
			// AlertContext.setAlert("Please enter all fields", "danger"); add a state
			alert("please fill all filed");
		} else {
			const dataArray = new FormData();
			dataArray.append("title", title);
			dataArray.append("brand", brand);
			dataArray.append("category", category);
			dataArray.append("price", price);
			dataArray.append("description", description);
			dataArray.append("hasWarranty", hasWarranty);
			dataArray.append("warrantyDuration", warrantyDuration);
			dataArray.append("image", img["0"], img["0"].name);
			console.log(dataArray);
			try {
				await addProduct(dataArray);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<>
			<div className={classes.create_product_section}>
				<Card width="900px" height="750px">
					<form className={classes.outer} onSubmit={submitHandler}>
						<div className={classes.inner}>
							<div>
								<ProductCard image={img} name={title} price={price} />
								<input
									className={classes.custom_file_input}
									type="file"
									onChange={onImageChange}
								/>
							</div>
							<div className={classes.inputs}>
								<InputField
									onChange={onChangeHandler}
									// reference={nameRef}
									type="name"
									value={title}
									label="Product Name"
									name="title"
									placeholder="Product Name"
									required
								/>
								<InputField
									onChange={onChangeHandler}
									// reference={nameRef}
									type="name"
									value={brand}
									label="Brand"
									name="brand"
									placeholder="Brand"
									required
								/>
								<InputField
									onChange={onChangeHandler}
									// reference={nameRef}
									type="name"
									value={category}
									label="Category"
									name="category"
									placeholder="Category"
									required
								/>
								<InputField
									onChange={onChangeHandler}
									type="number"
									value={price}
									label="Price"
									name="price"
									placeholder="Price"
									required
								/>
								<label htmlFor="warranty-check"> Enable Warranty</label>
								<input
									onChange={onChangeHandler}
									type="checkbox"
									value={hasWarranty}
									id="warranty-check"
									name="hasWarranty"
									required
								/>
								{hasWarranty ? (
									<InputField
										onChange={onChangeHandler}
										type="number"
										value={warrantyDuration}
										label="Warranty Period (In Years)"
										name="warrantyDuration"
										placeholder="Warranty Period"
										required
									/>
								) : null}
							</div>
						</div>
						<div>
							<InputField
								onChange={onChangeHandler}
								type="name"
								value={description}
								label="Description"
								name="description"
								placeholder="Description"
								required
							/>
						</div>
						<div>
							<Button filled label="Create" />
						</div>
					</form>
				</Card>
			</div>
		</>
	);
};

export default CreateProduct;
