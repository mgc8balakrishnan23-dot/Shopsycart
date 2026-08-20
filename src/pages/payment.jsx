import { Navigate, useNavigate } from "react-router-dom";
 
function Payment(){
 
const navigate=useNavigate();
    function OrderProceed(){
    navigate("/Order")
    }
    return(
        <div>
           <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card border-0 shadow-lg">
                        <div className="card-body p-5">
                            <div className="text-center mb-5">
                                <h2 className="display-5 fw-bold text-primary">
                                    <i className="bi bi-credit-card me-2"></i>Payment
                                </h2>
                                <p className="text-muted">Complete your secure payment</p>
                            </div>
 
                            <form>
                                <div className="mb-4">
                                    <label className="form-label fw-bold">Card Number</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light">
                                            <i className="bi bi-credit-card"></i>
                                        </span>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-lg" 
                                            placeholder="Enter your card number"
                                            style={{transition: 'all 0.3s ease'}}
                                        />
                                    </div>
                                </div>
 
                                <div className="mb-4">
                                    <label className="form-label fw-bold">CVV</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light">
                                            <i className="bi bi-lock"></i>
                                        </span>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-lg" 
                                            placeholder="Enter CVV"
                                            maxLength="4"
                                            style={{transition: 'all 0.3s ease'}}
                                        />
                                    </div>
                                </div>
 
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <label className="form-label fw-bold">Expiry Date</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-lg" 
                                            placeholder="MM/YY"
                                            style={{transition: 'all 0.3s ease'}}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-bold">Cardholder Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-lg" 
                                            placeholder="Name on card"
                                            style={{transition: 'all 0.3s ease'}}
                                        />
                                    </div>
                                </div>
 
                                <div className="alert alert-info d-flex align-items-center">
                                    <i className="bi bi-shield-check me-2"></i>
                                    <small>Your payment information is secure and encrypted</small>
                                </div>
 
                                <button 
                                    className="btn btn-danger btn-lg w-100 py-3 fw-bold" 
                                    onClick={OrderProceed}
                                    style={{transition: 'all 0.3s ease'}}
                                >
                                    <i className="bi bi-credit-card-fill me-2"></i>Complete Payment
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
}
export default Payment;
 