import React, { Component } from 'react';
import Template from './components/Template'
import Left from './components/Left'
import Right from './components/Right'

class App extends Component {
  id = 1;

  state = {
    email_: '',
    name_: '',
    phone_: '',
    addr_: '',
    users: [{
      id: 0,
      email: "example_kim@react.com",
      name: "김예제",
      phone: "010-1234-5678",
      addr: "seoul"
    }]
  }

  handleChangeEmail = (e) => {
    this.setState({
      email_: e.target.value
    });
  }

  handleChangeName = (e) => {
    this.setState({
      name_: e.target.value
    });
  }

  handleChangePhone = (e) => {
    this.setState({
      phone_: e.target.value
    });
  }

  handleChangeAddr = (e) => {
    this.setState({
      addr_: e.target.value
    });
  }

  handleCreateUser = () => {
    const {
      email_,
      name_,
      phone_,
      addr_,
      users
    } = this.state;

    this.setState({
      email_: '',
      name_: '',
      phone_: '',
      addr_: '',
      users: users.concat({
        id: this.id++,
        email: email_,
        name: name_,
        phone: phone_,
        addr: addr_
      })
    }); 
  }

  handleRemove = (id) => {
    const { users } = this.state;

    this.setState({
      users: users.filter(user => user.id !== id)
    });
  }

  render() {
    const { email_, name_, phone_, addr_, users } = this.state;

    const {
      handleChangeEmail,
      handleChangeName,
      handleChangePhone,
      handleChangeAddr,
      handleCreateUser,
      handleRemove
    } = this;

    return(
      <Template left={(
        <Left
          email={email_} name={name_} phone={phone_} addr={addr_}
          onChangeEmail={handleChangeEmail}
          onChangeName={handleChangeName}
          onChangePhone={handleChangePhone}
          onChangeAddr={handleChangeAddr}
          onCreateUser={handleCreateUser}
        />
      )} right={
        <Right 
          users={users}
          onRemove={handleRemove}
        />}>
        {/*}
        <Right/> // 이건 외않된대??
        */}
      </Template>
    );
  }
};

export default App;
