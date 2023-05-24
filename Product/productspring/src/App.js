import logo from './logo.svg';
import './App.css';
import image from './telusko.png'

function App() {
  return (
    <div className="App">

        <h1>ProductSpring</h1>
        <form class="inputs">
        <label>Name:</label><br></br>
        <input type="text" name="Name" value="Enter the product name"></input><br></br>

        <label>Type:</label><br></br>
        <input type="text" name="type" value="Enter the type of product"></input><br></br>

        <label>Place:</label><br></br>
        <input type="text" name="place" value="Enter the place"></input><br></br>

        <label>Warranty:</label><br></br>
        <input type="number" name="warranty" value="Enter the year of warranty"></input><br></br>

        <button class="submit-btn" type="btn" name="submit" value="Submit"></button>

    </form>
    </div>
  );
}

export default App;
