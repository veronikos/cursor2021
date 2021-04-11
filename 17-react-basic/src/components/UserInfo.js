import React from 'react';

function UserInfo(props) {
    return (
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.user.photo}
          alt={props.user.name}
        />
        <div className="UserInfo-name">{props.user.name}</div>
        <div className="UserInfo-nickname">{props.user.nickname}</div>
      </div>
    );
  }

export default UserInfo;