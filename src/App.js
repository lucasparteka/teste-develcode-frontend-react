import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import { Row, Col, Button, Divider } from "antd";
import './App.css';
import UserBox from "./components/UserBox";
import InsertUser from "./components/InsertUser";
import InfoUser from "./components/InfoUser";

const App = () => {

  const { users, insertUser, listUsers, editUser } = useContext(UserContext);
  const [showInsertUser, setShowInsertUser] = useState(false);

  return (
    <>
      <Row justify="center">
        <Col xs={22} sm={22} md={14} lg={12} xl={10}>
          <br />
          <div className="flex-center-row">
            <h1>Lista de usuários</h1>
            <Button type="primary" size="large" onClick={() => setShowInsertUser(true)}>Adicionar Usuário</Button>
          </div>
          <Divider />
        </Col>
      </Row>
      <br />
      {!!users.length && users.map((user, index) => <UserBox key={index} user={user} />)}
      {showInsertUser && <InsertUser showModal={showInsertUser} setShowModal={() => setShowInsertUser(!showInsertUser)}/>}
    </>
  );
}

export default App;
