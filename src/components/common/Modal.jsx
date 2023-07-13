import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export class Modal extends Component {
  render() {
    let modelStyle = {
      display: "block",
      backgroundColor: "rgba(0,0,0,0.8)",
    };
    return (
      <>
        <div className="modal show fade" style={modelStyle}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"> {this.props.title} </h5>
                <button
                  type="button"
                  className="close"
                  onClick={this.props.hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <Carousel>
                  <div>
                    <img src={this.props.imgSrc} alt="" />
                    <p className="legend">{this.props.desc}</p>
                  </div>
                  <div>
                    <img src={this.props.imgSrc1} alt="" />
                  </div>
                  <div>
                    <img src={this.props.imgSrc2} alt="" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
