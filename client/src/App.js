import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
// import PostDetailNew from "./pages/PostDetailNew";
// import PostWriteNew from "./pages/PostWriteNew";
import PostDetail from "./pages/PostDetail";
import PostWrite from "./pages/PostWrite";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/:creator/:slug" component={PostDetail} />
        <Route exact path="/write" component={PostWrite} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
