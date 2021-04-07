import React from "react";
import ReactDOM from "react-dom";

export const Form = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="new-book">
            <div className="form">
              <h2>Add New Book</h2>
              <div className="input-form">
                <label>Name of book:</label>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div className="input-form">
                <label>Author:</label>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div className="input-form">
                <label>ISBN:</label>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div className="input-form">
                <label>Editorial:</label>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div className="options">
                <button id="cancel" onClick={hide}>
                  <h3>
                    <i class="fa fa-times" aria-hidden="true"></i> Cancel
                  </h3>
                </button>
                <button id="save">
                  <h3>
                    <i className="fa fa-check" aria-hidden="true"></i> Save
                  </h3>
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
