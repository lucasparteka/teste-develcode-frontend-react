import React, {useState} from "react";
import { Row, Col } from "antd";
import { formatBrazilianDate } from "../util/date";
import InfoUser from "./InfoUser";

const UserBox = ({ user }) => {

    const [showInfoUser, setShowInfoUser] = useState(false);

    return (
        <>
            <Row justify="center">
                <Col xs={22} sm={22} md={14} lg={12} xl={10}>
                    <div className="list-user"onClick={() => setShowInfoUser(!showInfoUser)}>
                        <Row>
                            <Col xs={7} sm={4} md={4} lg={4} xl={4}>
                                <img src={user.avatar} className="pick-avatar" />
                            </Col>
                            <Col xs={16} sm={16} md={16} lg={10} xl={10}>
                                <h2 style={{ marginBottom: "0px" }}>{user.name}</h2>
                                <b>{'Nasceu em: ' + formatBrazilianDate(user.birth)}</b>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            {showInfoUser && <InfoUser user={user} showModal={showInfoUser} setShowModal={() => setShowInfoUser(!showInfoUser)}/>}
        </>
    );
}

export default UserBox;