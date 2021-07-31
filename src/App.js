import Intro from "./components/Intro/Intro.jsx";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import ArticleTab from "./components/ArticleSection/ArticleTab.jsx";
import { Button } from "react-bootstrap";
import "./App.css";
function App() {
  return (
    <div className="app" style={{ fontFamily: "IBM Plex Sans', sans-serif" }}>
      <NavigationBar />
      <Intro />
      <ArticleTab />
      <Button className="write-btn" variant="danger">
        <i class="fas fa-pen"></i>
      </Button>
    </div>
  );
}

export default App;
