import Intro from "./components/Intro/Intro.jsx";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import ArticleTab from "./components/ArticleSection/ArticleTab.jsx";

function App() {
  return (
    <div className="app" style={{ fontFamily: "IBM Plex Sans', sans-serif" }}>
      <NavigationBar />
      <Intro />
      <ArticleTab />
    </div>
  );
}

export default App;
