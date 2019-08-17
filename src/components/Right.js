import React, { Component } from 'react';
import Users from './Users'

class Right extends Component {
  render() {
    const { users, onRemove } = this.props;

    const userList = users.map(
      ({id, email, name, phone, addr}) => (
        <Users id={id} email={email} name={name} onRemove={onRemove}/>
      )
    );

    return(
      <div>
        사용자 정보<br/>
        // table......
        {userList}
      </div>
    );
  }
};

export default Right;
