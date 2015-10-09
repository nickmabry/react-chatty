const { Link } = ReactRouter;

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Chatty!</h1>
        <Link to="/room/randomRoomID">Go to a random room!</Link>
      </div>
    );
  }
}

export default Index;
