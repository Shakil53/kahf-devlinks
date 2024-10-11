import CreateLinkProvider from "./context/CreateLinkProvider";
import { Outlet } from "react-router-dom"; 
import Navbar from "./shared/navbar/Navbar"; 
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation(); 

 
  const isPreviewPage = location.pathname === '/preview';

  return (
    <CreateLinkProvider>
      {!isPreviewPage && <Navbar />} 
      <Outlet /> 
    </CreateLinkProvider>
  );
};

export default App;
