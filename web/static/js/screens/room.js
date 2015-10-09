const { Link } = ReactRouter;

class Room extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to room {this.props.params.roomID}</h1>
        <Link to="index">Head back to the index!</Link>
      </div>
    );
  }
}

export default Room;
