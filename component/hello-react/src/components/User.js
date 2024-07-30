import React from "react";
import PropTypes from "prop-types";

function User({ name, surName, isLoggedIn, age, friends ,adress}) {

    if(!isLoggedIn){
        return<div>GIRIS YAPMADINIZ</div>
    }

  return (
    <div>
      <h1>{`${name} ${surName}(${age}) `}</h1>
      {adress.title} <br/> {adress.zip}
      {friends && friends.map((friend) => {
        return <div key={friend.id}>{friend.name}</div>;
      })}
    </div>
  );
}

User.propTypes={
    name: PropTypes.string.isRequired,
    surName :PropTypes.string.isRequired,
    isLoggedIn : PropTypes.bool.isRequired,
    age : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    friends : PropTypes.array,
    adress : PropTypes.shape({
        title: PropTypes.string,
        zip : PropTypes.number
    })
}

User.defaultProps = {
    isLoggedIn: false
}
export default User;
