import React from "react";

class Audio extends React.Component {
  constructor() {
    super();
    this.state = { text: "pause" };
    this.audioURL =
      "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Zenith/02%20The%20Stars%20Are%20Out.mp3";

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let mySong = document.getElementById("mySong");
    let icon = document.getElementById("icon");
    if (mySong.paused) {
      mySong.play();
      icon.src = "pauseButton.png";
      this.setState({ text: "pause" });
    } else {
      mySong.pause();
      icon.src = "playButton.png";
      this.setState({ text: "listen" });
    }
  }

  render() {

    return (
      <div>
        <div className="player">
          <img src="pauseButton.png" id="icon" onClick={this.handleClick} />
          {this.state.text}
        </div>
        <audio id="mySong" autoPlay={true} loop={true} >
          <source src={this.audioURL} type="audio/mp3" />
        </audio>
      </div>
    );
  }
}

export default Audio;
