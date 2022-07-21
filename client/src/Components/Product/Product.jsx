import React from "react";
import { Button, ProductCard, SingleProductCard } from "../UI";
import classes from "./Product.module.css";
import rs_icon from "../../Assets/rs_icon.png";
import trial1 from "../../Assets/trial1.png";
import trial2 from "../../Assets/trial2.png";
import trial3 from "../../Assets/trial3.png";
import trial4 from "../../Assets/trial4.png";
import trial5 from "../../Assets/trial5.png";

const Product = () => {
  return (
    <>
      <div className={classes.product_page}>
        <div className={classes.product}>
          <div>
            <SingleProductCard image={trial1} />
          </div>
          <div className={classes.product_content}>
            <h1 className={classes.product_name}>Abstract 3D Digital Art</h1>
            <p className={classes.product_description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
              enim! Veritatis quod cum voluptatibus minima eveniet dolorum
              asperiores iste dignissimos Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Modi, enim! Veritatis quod cum
              voluptatibus minima eveniet dolorum asperiores iste dignissimos
            </p>
            <div className={classes.price_container}>
              <img className={classes.price_symbol} src={rs_icon} alt="" />
              <span className={classes.price}>2000</span>
            </div>
            <div className={classes.btn}>
              <Button
                // onClick={handleClick}
                label="BUY"
                padding="0.5em 11em"
                filled
              />
              <Button
                // onClick={handleClick}
                // label="Add to Cart"
                padding="0.5em 8em"
                // filled
              >
                Add to Cart
                <span className={classes.cart_logo}>
                  <svg
                    className={classes.cart_logo2}
                    width="37.05"
                    height="18.52"
                    viewBox="0 0 63 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="cart">
                      <g id="rectangle">
                        <path
                          id="cartshape"
                          d="M62.1032 7.65595C61.7803 7.09643 61.3179 6.63016 60.761 6.30262C60.2042 5.97507 59.572 5.79744 58.9261 5.78704H35.004L33.92 1.56329C33.8105 1.15557 33.5661 0.796932 33.2268 0.545802C32.8874 0.294672 32.473 0.165843 32.0511 0.180295H28.3132C27.8176 0.180295 27.3422 0.377198 26.9917 0.727687C26.6412 1.07818 26.4443 1.55354 26.4443 2.04921C26.4443 2.54488 26.6412 3.02024 26.9917 3.37073C27.3422 3.72122 27.8176 3.91812 28.3132 3.91812H30.6307L35.7889 23.0932C35.8984 23.5009 36.1428 23.8595 36.4821 24.1107C36.8215 24.3618 37.2359 24.4906 37.6578 24.4762H54.478C54.8232 24.4751 55.1613 24.3785 55.4549 24.1971C55.7485 24.0157 55.9861 23.7565 56.1414 23.4483L62.2714 11.1882C62.5371 10.6313 62.6608 10.0173 62.6315 9.40093C62.6021 8.78458 62.4206 8.18509 62.1032 7.65595ZM53.3193 20.7383H39.0782L36.0319 9.52487H58.9261L53.3193 20.7383Z"
                          fill="white"
                        />
                        <path
                          id="circle2"
                          d="M36.7233 33.8206C38.2716 33.8206 39.5267 32.5655 39.5267 31.0172C39.5267 29.469 38.2716 28.2139 36.7233 28.2139C35.175 28.2139 33.9199 29.469 33.9199 31.0172C33.9199 32.5655 35.175 33.8206 36.7233 33.8206Z"
                          fill="white"
                        />
                        <path
                          id="circle1"
                          d="M55.4127 33.8206C56.961 33.8206 58.2161 32.5655 58.2161 31.0172C58.2161 29.469 56.961 28.2139 55.4127 28.2139C53.8645 28.2139 52.6094 29.469 52.6094 31.0172C52.6094 32.5655 53.8645 33.8206 55.4127 33.8206Z"
                          fill="white"
                        />
                      </g>
                      <path
                        id="dash3"
                        d="M0 6.1792H28V9.1792H6L0 6.1792Z"
                        fill="white"
                      />
                      <path
                        id="dash2"
                        d="M9 12.1792H29V15.1792H13.4737L9 12.1792Z"
                        fill="white"
                      />
                      <path
                        id="dash1"
                        d="M16 18.1792H31V21.1792H20.3966L16 18.1792Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.similar_container}>
          <h1 className={classes.similar_text}>Similar Products</h1>
          <div className={classes.similar_products}>
            <ProductCard image={trial2} />
            <ProductCard image={trial3} />
            <ProductCard image={trial4} />
            <ProductCard image={trial5} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
