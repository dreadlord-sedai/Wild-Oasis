import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";



const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading>The Wild Oasis</Heading>
        <Button onClick={() => alert("Check In clicked!")}>Check In</Button>
        <Button onClick={() => alert("Check Out clicked!")}>Check Out</Button>

        <Input type="number" placeholder="Number of Guests" />
        <Input type="number" placeholder="Number of Guests" />
      </StyledApp>
    </>
  );
}

export default App;
