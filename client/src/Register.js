import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "./API/ServerConnection";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, Typography, TextField, Grid } from "@mui/material";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disabledFlag, setDisabledFlag] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  const [about, setAbout] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  let passwordMatch = password === confirmPassword ? true : false;

  useEffect(() => {
    passwordMatch = password === confirmPassword ? true : false;

    setDisabledFlag(false);
    if (
      name === "" ||
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setDisabledFlag(true);
    }
  }, [name, username, email, password, confirmPassword, disabledFlag]);

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    setisLoading(true);
    if (!passwordMatch) alert("Password and current password not matched");
    else {
      registerUser(username, password, email, about, location).then(
        (statusCode) => {
          if (statusCode === 200) navigate("/login");
          else alert("error");
        }
      );
    }
  };
  const theme = createTheme();
  theme.typography.h3 = {
    fontSize: "1.2rem",

    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  return (
    <Box
      align="center"
      backgroundColor="primary.main"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        minHeight: "100vh",
      }}
    >
      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={0}
          align="center"
          direction="column"
          justifyContent="center"
          backgroundColor="white"
          margin={5}
          paddingTop={6}
          style={{ width: 500, minHeight: "100vh" }}
        >
          <div className="login-page">
            <div className="form">
              <div className="login">
                <div className="login-header">
                  <ThemeProvider theme={theme}>
                    <Typography component="h1" variant="h3" color="primary">
                      Register
                    </Typography>
                  </ThemeProvider>
                </div>
                <form className="login-form">
                  <div>
                    <TextField
                      margin="normal"
                      variant="outlined"
                      size="small"
                      required
                      id="name"
                      label="name"
                      autoComplete="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      autoFocus
                    />
                    <br />

                    <TextField
                      margin="normal"
                      variant="outlined"
                      size="small"
                      required
                      type="text"
                      id="username"
                      label="username"
                      autoComplete="username"
                      value={username}
                      onChange={(event) => setUserName(event.target.value)}
                      name="username"
                      autoFocus
                    />
                    <br />

                    <TextField
                      margin="normal"
                      variant="outlined"
                      size="small"
                      required
                      type="text"
                      id="email"
                      label="email"
                      autoComplete="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      name="email"
                      autoFocus
                    />
                    <br />

                    <TextField
                      margin="normal"
                      variant="outlined"
                      size="small"
                      required
                      type="text"
                      id="about"
                      label="about"
                      autoComplete="about"
                      value={about}
                      onChange={(event) => setAbout(event.target.value)}
                      name="about"
                      autoFocus
                    />
                    <br />

                    <TextField
                      margin="normal"
                      variant="outlined"
                      size="small"
                      required
                      type="text"
                      id="location"
                      label="location"
                      autoComplete="location"
                      value={location}
                      onChange={(event) => setLocation(event.target.value)}
                      name="location"
                      autoFocus
                    />
                    <br />

                    <TextField
                      margin="normal"
                      variant="outlined"
                      size="small"
                      required
                      type="password"
                      id="email"
                      label="password"
                      autoComplete="email"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      name="password"
                      autoFocus
                    />
                    <br />

                    <TextField
                      margin="normal"
                      variant="outlined"
                      size="small"
                      required
                      type="password"
                      id="email"
                      label="confirm password"
                      autoComplete="email"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      name="confirmpassword"
                      autoFocus
                    />
                    <br />

                    <Button
                      type="submit"
                      variant="contained"
                      disabled={disabledFlag}
                      onClick={handleRegisterSubmit}
                      sx={{ mt: 3, mb: 2 }}
                    >
                      {isLoading ? "Loading" : "Sign Up"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export { Register };
