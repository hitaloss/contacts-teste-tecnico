import { Stack, Typography, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import old_phone from "../assets/old_phone.jpg";
import MainStack from "../components/MainStack";

function Main() {
  const history = useHistory();

  return (
    <MainStack image={old_phone} align={""}>
      <Typography
        variant="h4"
        sx={{
          textShadow: "2px 2px #181818",
        }}
        width="14rem"
        color="white"
      >
        Armazene seus contatos
      </Typography>
      <Typography
        variant="h6"
        width="14rem"
        sx={{
          textShadow: "2px 2px #181818",
        }}
        fontWeight={1}
        color="white"
      >
        De forma simples e rápida
      </Typography>
      <Stack direction="column" spacing={3} width="14rem">
        <Button
          sx={{
            padding: ".6rem",
            width: "80%",
            borderColor: "white",
            borderRadius: "30px",
            color: "white",
          }}
          variant="outlined"
          onClick={() => setTimeout(() => history.push("/register"), 500)}
        >
          Fazer cadastro
        </Button>
        <Button
          sx={{
            padding: ".6rem",
            width: "80%",
            borderColor: "white",
            borderRadius: "30px",
            color: "white",
          }}
          variant="outlined"
          onClick={() => setTimeout(() => history.push("/login"), 500)}
        >
          Já tenho uma conta
        </Button>
      </Stack>
    </MainStack>
  );
}

export default Main;
