import { Button, InputLabel, Input, TextField } from "@mui/material";
import { Container, Titulo, InputContainer } from "./styles";
import { useHistory } from "react-router-dom";
import { UsuarioContext } from "common/context/Usuario";
import { useContext } from 'react';
import InputCurrency from "components/InputCurrency";

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
        <InputCurrency
          value={saldo}
          label="Saldo"
          handlerChange={(event) => {
              console.log(event.target.value);
              setSaldo(event.target.value);
            }
          }
        ></InputCurrency>
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
