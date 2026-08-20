import { Navigate, useNavigate } from "react-router-dom";
import Home from "./home";

function Order(){

const navigate=useNavigate();
    function Customer(){
        navigate("/Home")
    }
    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card border-0 shadow-lg">
                        <div className="card-body p-5 text-center">
                            <div className="mb-4">
                                <div className="display-1 text-success mb-3">
                                    <i className="bi bi-check-circle-fill"></i>
                                </div>
                                <h1 className="display-4 fw-bold text-success mb-3">
                                    Order Successful!
                                </h1>
                                <p className="lead text-muted mb-4">
                                    Thank you for your purchase
                                </p>
                            </div>
 
                            <div className="card bg-light border-0 mb-4">
                                <div className="card-body">
                                    <h5 className="fw-bold text-dark mb-3">
                                        <i className="bi bi-truck me-2"></i>Order Details
                                    </h5>
                                    <p className="mb-2">
                                        <strong>Order ID:</strong> #ORD{Math.floor(Math.random() * 1000000)}
                                    </p>
                                    <p className="mb-2">
                                        <strong>Status:</strong> <span className="badge bg-success">Processing</span>
                                    </p>
                                    <p className="mb-0">
                                        <strong>Estimated Delivery:</strong> 3-5 business days
                                    </p>
                                </div>
                            </div>
 
                            <div className="alert alert-info d-flex align-items-center">
                                <i className="bi bi-info-circle me-2"></i>
                                <div>
                                    <strong>Order Confirmation:</strong> A confirmation email has been sent to your registered email address.
                                </div>
                            </div>
 
                            <div className="mt-4">
                                <h4 className="fw-bold text-dark">
                                    Your order will be delivered soon!
                                </h4>
                                <p className="text-muted">
                                    We appreciate your business and hope you enjoy your purchase.
                                </p>
                            </div>
 
                            <div className="mt-5">
                                <button className="btn btn-primary btn-lg px-5" onClick={Customer}>
                                    <i className="bi bi-house me-2"></i>Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Order;