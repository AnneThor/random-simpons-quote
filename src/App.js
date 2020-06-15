import React from 'react';
import './App.css';

const url = 'https://thesimpsonsquoteapi.glitch.me/quotes';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      character: '',
      image: '',
      characterDirection: '',
    }
    this.getQuote = this.getQuote.bind(this);
  }


  componentDidMount() {
    fetch(url)
      .then(response => response.json() )
      .then(data => {
        const currentData = data[0];
        console.log(data);
        this.setState({
          quote: currentData.quote,
          character: currentData.character,
          image: currentData.image,
          characterDirection: currentData.characterDirection,
        })
      })
      .catch( err => console.log("componentDidMount: Can't access " + url + " response.  Blocked by browser?"))
  }


  getQuote() {
    fetch(url)
      .then(response => response.json() )
      .then(data => {
        const currentData = data[0];
        console.log(data);
        this.setState({
          quote: currentData.quote,
          character: currentData.character,
          image: currentData.image,
          characterDirection: currentData.characterDirection,
        })
      })
      .catch( err => {
        console.log("getQuote: Can't access " + url + " response.  Blocked by browser?");
        console.log(err);
      })
  }

render() {

    let faceRight = this.state.characterDirection;

    return (
      <div className="App">

        <h1>Random Simpons Quote Generator</h1>

        <div id="quote-box">

        <section className={"quote-display "+ faceRight}>
          <div className="image-display">
            <img src={this.state.image}
                 alt={"" + this.state.character + "image"}
                 className="character-image"/>
          </div>

          <div className="text-display">
            <blockquote id="text">
              {this.state.quote ? this.state.quote : "No Quote Available"}
            </blockquote>
            <cite id="author">{this.state.character ? this.state.character : "Anonymous"}</cite>
          </div>
        </section>

        <section className="controls">
          <button id="new-quote"
                  className="btn btn-secondary btn-sm"
                  type="button"
                  onClick={this.getQuote}>New Quote</button>

          <a id="tweet-quote"
             className="btn btn-secondary btn-sm twitter-share-button"
             target="_"
             href={"https://twitter.com/intent/tweet?text=" + this.state.quote + " -" + this.state.character}
             text={this.state.quote ? this.state.quote : "No Quote Available"}>Tweet Quote</a>
        </section>

        </div>

      </div>
    );
  }
}

export default App;
