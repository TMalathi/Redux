import './App.css';
import AddUser from './components/AddUser';
import ShowUser from './components/ShowUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div className="App">
     <AddUser />
     <ShowUser />
     <UpdateUser />
    </div>
  );
}

export default App;
