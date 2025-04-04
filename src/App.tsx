import 'normalize.css';
import './App.css';
import { data } from './assets/data';
import Timeline from './components/Timeline/Timeline';

function App() {
  return (
    <div className="App">
      <Timeline data={data} />
      <footer className="footer">
        &copy;2025 Michał Kościanek
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/micha%C5%82-ko%C5%9Bcianek-825661a2/"
            className="icon-linkedin icon"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
          </a>
          <a
            href="https://github.com/EregarMK"
            className="icon-github icon"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
