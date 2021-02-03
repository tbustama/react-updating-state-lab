// Code YouTubeDebugger Component Here
import React from "react";

export default class YouTubeDebugger extends React.Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p",
      },
    },
  };
  handleBitrate = (e) => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  };

  handleResolution = (e) => {
    this.setState(
      {
        settings: {
          ...this.state.settings,
          video: {
            resolution: "720p",
          },
        },
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.handleBitrate} className="bitrate">
          Bitrate
        </button>
        <button onClick={this.handleResolution} className="resolution">
          Resolution
        </button>
      </div>
    );
  }
}
