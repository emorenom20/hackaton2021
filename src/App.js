
import './App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <div className="App-header">
              <h1>¿Qué quieres hacer?</h1>
        <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  <React.Fragment>
                    <Grid item xs={6} style={{ marginBottom: 10 }}>
                      <Link to="/DarAltaPas">
                        <Button variant="contained" color="primary" size="large">
                          Dar de alta PAS
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item xs={6} style={{ marginBottom: 10 }} >
                     <Link to="/DarAltaCS">
                      <Button variant="contained" color="primary" size="large">
                        Dar de alta centro sanitario
                      </Button>
                     </Link>
                    </Grid>
                  </React.Fragment>
                </Grid>


                <Grid container item xs={12} spacing={3}>
                  <React.Fragment>
                    <Grid item xs={6} style={{ marginBottom: 10 }}>
                    <Link to="/DarAltaMedico">
                      <Button variant="contained" color="primary" size="large">
                        Dar de alta médico
                      </Button>
                    </Link>
                    </Grid>
                    <Grid item xs={6} style={{ marginBottom: 10 }}>
                    <Link to="/CrearCuadroMedico">
                      <Button variant="contained" color="primary" size="large">
                        Crear cuadro médico
                      </Button>
                    </Link>
                    </Grid>
                  </React.Fragment>
                </Grid>


                <Grid container item xs={12} spacing={3}>
                  <React.Fragment>
                    <Grid item xs={6} style={{ marginBottom: 10 }}>
                    <Link to="/VisualizarCuadroMedico">
                      <Button variant="contained" color="primary" size="large">
                        Visualizar cuadros médicos
                      </Button>
                    </Link>
                    </Grid>
                    <Grid item xs={6} style={{ marginBottom: 10 }}>
                    <Link to="/BuscarModificar">
                      <Button variant="contained" color="primary" size="large">
                        Buscar, modificar y eliminar cuadro médico
                      </Button>
                    </Link>
                    </Grid>
                  </React.Fragment>
                </Grid>
              </Grid>
              
              <Link to="/BuscarCS">
              <Button variant="contained" color="primary" size="large" style={{ marginTop: 30 }}>
                Buscar centro sanitario
              </Button>
              </Link>

            </div>
          </div>
        </Route>

        <Route path="/DarAltaPas">
          <h1 className="titulo">Dar de alta PAS</h1>
          <div className="form">
          <ProveedorSanitaria />
          </div>
        </Route>

        <Route path="/DarAltaCS">
          <h1 className="titulo">Crear Centro Sanitario</h1>
        </Route>

        <Route path="/DarAltaMedico">
          <h1 className="titulo">Dar de Alta un Médico</h1>
        </Route>

        <Route path="/CrearCuadroMedico">
          <h1 className="titulo">Crear Cuadro Médico</h1>
        </Route>

        <Route path="/VisualizarCuadroMedico">
          <h1 className="titulo">Cuadros Médicos</h1>
        </Route>

        <Route path="/BuscarModificar">
          <h1 className="titulo">Búsqueda de Cuadro Médico</h1>
        </Route>

        <Route path="/BuscarCS">
          <h1 className="titulo">Búsqueda de Centro Sanitario</h1>
        </Route>

      </Switch>
    </Router>
  );
}

class ProveedorSanitaria extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ''}
    this.state = { nombre: '', direccion: '', poblacion: '', provincia: '', cp: '', tlf: '', email:'', proveedor:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            CIF:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>

          <label>
            Nombre Completo:
            <input type="text" value={this.state.nombre} onChange={this.handleChange} />
          </label>

          <label>
            Direccion:
            <input type="text" value={this.state.direccion} onChange={this.handleChange} />
          </label>

          <label>
            Población:
            <input type="text" value={this.state.poblacion} onChange={this.handleChange} />
          </label>

          <label>
            Provincia:
            <input type="text" value={this.state.provincia} onChange={this.handleChange} />
          </label>

          <label>
            Código Postal:
            <input type="text" value={this.state.cp} onChange={this.handleChange} />
          </label>

          <label>
            Persona de contacto:
            <input type="text" value={this.state.tlf} onChange={this.handleChange} />
          </label>

          <label>
            Email:
            <input type="mail" value={this.state.email} onChange={this.handleChange} />
          </label>

          <label>
            Tipo de proveedor:
            <input type="text" value={this.state.proveedor} onChange={this.handleChange} />
          </label>

          <input type="submit" value="Submit" />
        </form>
    );
  }
}

export default App;