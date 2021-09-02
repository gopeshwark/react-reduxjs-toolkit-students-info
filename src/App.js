import { Container, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import Student from "./components/Student";
import Students from "./components/Students";
import theme from "./theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Switch>
            <Route exact path="/" component={Students} />
            <Route exact path="/students/create" component={AddStudent} />
            <Route exact path="/students/:id" component={Student} />
            <Route exact path="/students/edit/:id" component={EditStudent} />
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
