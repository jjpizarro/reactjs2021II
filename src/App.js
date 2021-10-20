import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import StudentList from './componentes/StudentList';
import Container from 'react-bootstrap/Container';
import {BrowserRouter} from 'react-router-dom';
import MisRoutes from './MisRutas';

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Header />
          <MisRoutes />
        <Footer />
      </BrowserRouter>
    </Container>
  );
}


export default App;
