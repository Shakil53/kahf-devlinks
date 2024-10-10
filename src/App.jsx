import CreateLinkProvider from "./context/CreateLinkProvider";
import CreateLinkPage from "./pages/createLinkPage/createLinkPage";
import Navbar from "./shared/navbar/Navbar";
import CreateProfile from "./pages/profileDetailsPage/createProfile";
import { useState } from "react";
import Preview from "./pages/Preview/Preview";


const App = () => {
  const [activePage, setActivePage] = useState("links"); 

  const renderPage = () => {
    switch (activePage) {
      case "links":
        return <CreateLinkPage />;
      case "profile":
        return <CreateProfile />;
        case "preview":
          return <Preview />;
      default:
        return <CreateLinkPage />;
    }
  };

  return (
    <CreateLinkProvider>
    <Navbar setActivePage={setActivePage} activePage={activePage} /> 
    {renderPage()} 
  </CreateLinkProvider>
  );
};

export default App;