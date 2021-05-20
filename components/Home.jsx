import React, { PureComponent } from 'react';

import { Card, Loading, Button } from 'carbon-addons-iot-react';

const giphy = {
  baseURL: "https://api.giphy.com/v1/gifs/",
  apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
  tag: "fail",
  type: "random",
  rating: "pg-13"
};

const giphyURL = encodeURI(
  giphy.baseURL +
  giphy.type +
  "?api_key=" +
  giphy.apiKey +
  "&tag=" +
  giphy.tag +
  "&rating=" +
  giphy.rating
);

class Home extends PureComponent {

  state = {
    isLoading: false,
    giph: null,
  };

  componentDidMount() {
    this.loadGif();
  }

  loadGif = () => {
    this.setState({
      loading: true
    });
    fetch(giphyURL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          loading: false,
          giph: json.data.images.original.url,
        })
      });
  }

  render() {

    return(
      <div className='container homeWrapper'>
        <Card className=''>
          <div className='container homeCard'>
            <h3 className='homeTitle'>
              Jon's carbon playground 👷‍♂️
            </h3>
            {this.state.isLoading ? (
              <Loading />
            ) : (
              <>
                {!this.state.giph ? (
                <div className='image'>
                  🤷‍♂️
                </div>
              ) : (
                <img src={this.state.giph} />
              )}
              </>
            )}            
          </div>
        </Card>
        <div className='container'>
          <Button onClick={this.loadGif}>
            Load another one 👍
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;