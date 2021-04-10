// import logo from './logo.svg';
import './App.css';
import Publication from "./components/publication-sample"

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const studentsList = [
  {
    id: 87683,
    name: "Nika",
    tasks: 12,
    url: ANAKIN_IMAGE,
    alt: "Nika"
  },
  {
    id: 8763,
    name: "Monika",
    tasks: 10,
    url: RAY_IMAGE,
    alt: "Monika"
  }
]

function Post() {
  return (
    <div className="App">
      {studentsList.map(student => <Publication {...student} key={student.id}/>)}
    </div>
  );
}

export default Post;