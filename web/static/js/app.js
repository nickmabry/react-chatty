import socket from "./socket";
import Room from "./screens/room";
import Index from "./screens/index";
const { DefaultRoute, HistoryLocation, Route, RouteHandler } = ReactRouter;

class App extends React.Component {
  render() {
    return (
      <RouteHandler {...this.props} />
    );
  }
}

const routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="game" path="room/:roomID" handler={Room}/>
    <DefaultRoute name="index" handler={Index} />
  </Route>
);

ReactRouter.run(routes, HistoryLocation, (Handler, state) => {
  ReactDOM.render(<Handler params={state.params} />, document.getElementById("app-container"));
});
