import iconDelete from "../../../images/icon-delete.svg";
import firstThumbnail from "../../../images/image-product-1-thumbnail.jpg";
import { useBasket } from "../../../context/BasketContext";
import { useCart } from "../../../context/CartContext";
const Cart = () => {
  const { basket, setBasket } = useBasket();
  const { isCartClicked } = useCart();
  return (
    <div className={`cart ${!isCartClicked && "hidden"}`}>
      <header className="cart__header">
        <h2 className="cart__header--heading">Cart</h2>
        <img
          src={iconDelete}
          alt="delete icon"
          className="cart__header--icon"
          onClick={() => setBasket(null)}
        />
      </header>
      {!basket && (
        <div className="cart__body--empty">"Your basket is empty"</div>
      )}
      {basket && (
        <div className="cart__body">
          <img
            src={firstThumbnail}
            alt="Sneakers fall edition"
            className="cart__body--img"
          />
          <div className="cart__body--product">
            <p>{basket.name}</p>
            <div>
              {basket.price}.00 x {basket.count}
              <span>${basket.price * basket.count}.00</span>
            </div>
          </div>
          <button className="cart__body--btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
