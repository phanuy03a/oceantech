import Avatar from "react-avatar-edit";

import React, { Component } from "react";
import { Dialog } from "@mui/material";
class CustomAvatar extends Component {
  state = {
    preview: null,
    defaultPreview: null,
    src: this.props.image,
    showModal: false,
  };

  onCropDefault = (preview) => {
    this.setState({ defaultPreview: preview });
  };

  onCrop = (preview) => {
    this.setState({ preview });
  };

  onCloseDefault = () => {
    this.setState({ showModal: false, src: this.state.defaultPreview });
  };

  onClose = () => {
    this.setState({ preview: null });
  };

  onAvatarClick = () => {
    this.setState({ showModal: true });
    console.log("click");
  };

  render() {
    return (
      <>
        <Dialog onClose={this.onCloseDefault} open={this.state.showModal}>
          <Avatar
            width={390}
            height={295}
            exportSize={390}
            onCrop={this.onCropDefault}
            onClose={this.onCloseDefault}
          />
          {this.state.defaultPreview && (
            <>
              <h5>Preview</h5>
              <img
                alt="Avatar Preview"
                style={{ width: "150px", height: "150px" }}
                src={this.state.defaultPreview}
              />
            </>
          )}
        </Dialog>
        <div>
          <img
            alt="User Avatar"
            style={{ width: "100%", borderRadius: "100%", cursor: "pointer" }}
            src={this.state.src}
            onClick={this.onAvatarClick}
          />
        </div>
      </>
    );
  }
}

export default CustomAvatar;
