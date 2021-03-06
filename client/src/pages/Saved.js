import React from "react";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedBooks: [],
    };
  }

  componentWillMount() {
    API.getBooks()
      .then((response) => {
          console.log('oly the books we saved!! from db!!', response)
        this.setState({ savedBooks: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.savedBooks);
    return (
        <div className="container">
              <main>
        <ResultsContainer
          savedBooks={this.state.savedBooks}
          path={this.props.match.path}
        />
      </main>
        </div>
    
    );
  }
}

export default Saved;
