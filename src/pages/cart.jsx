import { useNavigate, useOutletContext } from "react-router-dom";
import Payment from "./payment";
 
function Cart() {
  const { cartItems, removeFromCart } = useOutletContext();
 
  let total=0;
 
  for(let i=0; i<cartItems.length;i++){
    total=total+cartItems[i].price;
  }
  const navigate=useNavigate();
 
  function Payto(){
     navigate("/payment");
 
  }
  return (
    <div className="container mt-5">
 
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold text-danger">
          <i className="bi bi-cart3 me-2"></i>My Cart
        </h2>
        <p className="text-muted">Review your items before checkout</p>
      </div>
 
      {cartItems.length === 0 ? (
        <div className="text-center mt-5">
          <div className="card border-0 shadow-sm p-5" style={{maxWidth: '500px', margin: '0 auto'}}>
            <i className="bi bi-cart-x display-1 text-muted mb-3"></i>
            <h4 className="text-info">Your cart is empty</h4>
            <p className="text-muted">Add some amazing products to get started!</p>
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <div className="card border-0 shadow-lg">
            <div className="card-body p-4">
              {cartItems.map((product, index) => (
                <div
                  className="row align-items-center border-bottom p-4 mb-3"
                  key={index}
                  style={{transition: 'all 0.3s ease'}}
                >
 
                  <div className="col-md-2">
                    <div className="card border-0">
                      <img
                        src={product.image}
                        className="card-img-top rounded"
                        height="100"
                        width="100"
                        alt={product.title}
                        style={{objectFit: 'cover'}}
                      />
                    </div>
                  </div>
 
                  <div className="col-md-4">
                    <h5 className="fw-bold mb-1">{product.title}</h5>
                    <p className="text-muted small mb-0">Premium Quality</p>
                  </div>
 
                  <div className="col-md-2">
                    <div className="bg-light rounded p-2 text-center">
                      <h6 className="fw-bold text-success mb-0">₹ {product.price}</h6>
                    </div>
                  </div>
 
                  <div className="col-md-2">
                    <button
                      className="btn btn-outline-danger btn-sm px-4"
                      onClick={() => removeFromCart(index)}
                      style={{transition: 'all 0.3s ease'}}
                    >
                      <i className="bi bi-trash me-1"></i>Remove
                    </button>
                  </div>
 
                </div>
              ))}
            </div>
          </div>
 
          {/* total calculation */}
          <div className="card border-0 shadow-lg mt-4">
            <div className="card-body p-4">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h4 className="fw-bold">Total Amount:</h4>
                </div>
                <div className="col-md-3">
                  <h3 className="fw-bold text-success">₹ {total.toFixed(2)}</h3>
                </div>
                <div className="col-md-3 text-end">
                  <button 
                    className="btn btn-success btn-lg px-5" 
                    onClick={Payto}
                    style={{transition: 'all 0.3s ease'}}
                  >
                    <i className="bi bi-credit-card me-2"></i>Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
 
        </div>
      )}
 
    </div>
  );
}
 
export default Cart;