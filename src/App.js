import { useEffect, Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { fetchProjects } from "store/projects";
import "./styles/App.scss";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const ContentContainer = lazy(() => import("./screens/ContentContainer"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
  return (
    <div className="App">
      <Suspense fallback={<div>Loading</div>}>
        <Header />
        <ContentContainer />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
