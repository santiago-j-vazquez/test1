import React from "react";
import '../App.css';

const Banner = () => {
    return(
        <div>
            <div className="container text-center">
                <div className="row justify-content-around">
                    <div className="col-3 shadow p-3 mb-5 bg-body rounded">
                        <p><img src="imgs/s22ultra.jpg" alt="Samsung Galaxy s22 Ultra" className="img-fluid"/></p>
                        <h4> Samsung s22 Ultra</h4>
                        <div>
                            <p><a href="" target="_blank" className="btn btn-primary ">Saber más</a></p>
                            <button className="btn btn-secondary">Comprar</button>
                        </div>
                    </div>
                    
                    <div className="col-3 shadow p-3 mb-5 bg-body rounded">
                        <p><img src="imgs/iphone-14-pro-max.1.jpg" alt="Iphone 14 Pro Max" className="img-fluid"/></p>
                        <h4> Iphone 14 Pro Max</h4>
                        <div>
                            <p><a href="" target="_blank" className="btn btn-primary ">Saber más</a></p>
                            <button className="btn btn-secondary">Comprar</button>
                        </div>
                    </div>
                    
                    <div className="col-3 shadow p-3 mb-5 bg-body rounded">
                        <p><img src="imgs/fold4.jpg" alt="Samsung Galaxy Z Fold 4" className="img-fluid"/></p>
                        <h4> Fold 4</h4>
                        <div>
                            <p><a href="" target="_blank" className="btn btn-primary ">Saber más</a></p>
                            <button className="btn btn-secondary">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;