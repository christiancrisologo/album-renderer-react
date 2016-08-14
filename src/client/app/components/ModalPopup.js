import React from 'react';
import $ from 'jquery';
 

export default class ModalPopup extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    $(this.refs.parentCont).modal({ backdrop: 'static', keyboard: false, show: false });

    $(this.refs.parentCont).on('hidden.bs.modal', this.handleHidden);
  }

  componentWillUnmount() {
    $(this.refs.parentCont).off('hidden.bs.modal', this.handleHidden);
  }

  close() {
    $(this.refs.parentCont).modal('hide');
  }

  open() {
    $(this.refs.parentCont).modal('show');
  }

  handleCancel() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  handleConfirm() {
    if (this.props.onConfirm) {
      this.props.onConfirm();
    }
  }

  handleHidden() {
    if (this.props.onHidden) {
      this.props.onHidden();
    }
  }

  render() {
    return (
      <div className="modal fade" ref="parentCont">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                onClick={this.handleCancel}>
                &times;
              </button>
              <h3>{this.props.title}</h3>
            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
            <div className="modal-footer">
              <a
                onClick={this.close}
                className="btn-primary"
                href="javascript:;"
                role="button"
                className="btn btn-primary" >
                Close
              </a>
              );

            </div>
          </div>
        </div>
      </div>
    )
  }
};
