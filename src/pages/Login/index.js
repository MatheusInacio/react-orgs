import { Button, InputAdornment, InputLabel, Input } from "@mui/material";
import { Container, Titulo, InputContainer } from "./styles";
import { useHistory } from "react-router-dom";
import { UsuarioContext } from "common/context/Usuario";
import { useContext } from "react";

function Login() {
  const history = useHistory();
  const { nome, setNome, saldo, setSaldo } = useContext(UsuarioContext);
  
  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel shrink>Nome</InputLabel>
        <Input
          variant="filled"
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel shrink>Saldo</InputLabel>
        <Input
          type="number"
          value={saldo}
          onChange={(evento) => setSaldo(evento.target.value)}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        disabled={nome.length < 4}
        onClick={() => {
          history.push("/feira");
        }}
      >
        Avançar
      </Button>
    </Container>
  );
}

export default Login;
