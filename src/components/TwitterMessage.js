import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  handleTweet = (e) => {
    this.setState({
      tweet: e.target.value
    })
    
  }

  maxLength = () => {
    let maxChars = this.props.maxChars
    let tweetLength = this.state.tweet.length
    return (maxChars - tweetLength)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={e => this.handleTweet(e)} value={this.state.tweet}/>
        <p>{this.maxLength()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
