import './App.css';
import UserInfo from './components/UserInfo'

function Post(props) {
  return (
    <div className = "App-header">
      <div className="Comment">
        <UserInfo user={props.author} />
          <div>
              <div className="Comment-date">
                {props.date}
              </div>
              <div className="Comment-text">{props.comment}</div>
              <img
              className="Image"
              src={props.image}
              alt={props.image}
            />          
          </div>
      </div>
    </div>
  );
}

export default Post;
