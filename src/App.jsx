import { Link } from "react-router-dom";
import InformationLayouts from "./components/Layouts/InformationLayouts";
import Button from "./components/Elements/Button";

function App() {
  return (
    <InformationLayouts info="Welcome to My App!">
      <Link to="/login">
        <Button className="block bg-blue-600 text-white">Get Started!</Button>
      </Link>
      <Link to="/products">
        <Button className="block bg-white border-2 border-blue-600 text-blue-600">
          View Catalog
        </Button>
      </Link>
    </InformationLayouts>
  );
}

export default App;
