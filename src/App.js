import { styled } from "styled-components";
import { SideBar } from "./components/SideBar";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <AppDiv>
      <SideBar />
      <AppRoutes />
    </AppDiv>
  );
}

const AppDiv = styled.div`
  display: flex;
`;

export default App;
