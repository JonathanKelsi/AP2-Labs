import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form method="post" action="http://localhost:8080/login">
            <input name="username"></input>
            <input name="password"></input>
            <input type="submit"></input>
    </form>
  );
}

export default App;
