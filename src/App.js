import { Fragment } from "react";
import "./App.css";
import ParticleBackground from "./components/backgrounds/ParticleBackground";
import { Container } from "@mui/material";
import IconTextInput from "./components/reusable/inputFields/IconTextInput";
import IconButton from "./components/reusable/buttons/IconButton";


function App() {
  return (
    <Fragment className="App">
      <ParticleBackground />
      <Container maxWidth="100px">
        <IconTextInput id="txtUsername" title="Username" icon="username"/>
        <IconTextInput id="txtPassword" title="Password" icon="password"/>
        <IconButton title="Login" />
      </Container>
    </Fragment>
  );
}

export default App;
