import React from "react";
import { Player, BigPlayButton } from "video-react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "video-react/dist/video-react.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerSource: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      inputVideoUrl: "http://www.w3schools.com/html/mov_bbb.mp4"
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.playerSource !== prevState.playerSource) {
      this.player.load();
    }
  }

  handleValueChange = e => {
    const { value } = e.target;
    this.setState({
      inputVideoUrl: value
    });
  };

  updatePlayerInfo = () => {
    const { inputVideoUrl } = this.state;
    this.setState({
      playerSource: inputVideoUrl
    });
  };

  render() {
    return (
      <div className="app">
        <Player
          ref={player => {
            this.player = player;
          }}
        >
          <BigPlayButton position="center" />
          <source src={this.state.playerSource} />
        </Player>
        <div className="docs-example">
          <Form>
            <FormGroup>
              <Label for="inputVideoUrl">Video Url</Label>
              <Input
                name="inputVideoUrl"
                id="inputVideoUrl"
                value={this.state.inputVideoUrl}
                onChange={this.handleValueChange}
              />
            </FormGroup>
            <FormGroup>
              <Button type="button" onClick={this.updatePlayerInfo}>
                Update
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;
