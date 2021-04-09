// import logo from './logo.svg';
import './App.css';
import Student from "./components/Student"

const studentsList = [
  {
    id: 87683,
    name: "Nika",
    tasks: 12
  },
  {
    id: 8763,
    name: "Monika",
    tasks: 10
  }
]

function App() {
  return (
    <div className="App">
      {studentsList.map(student => <Student {...student} key={student.id}/>)}
    </div>
  );
}

export default App;