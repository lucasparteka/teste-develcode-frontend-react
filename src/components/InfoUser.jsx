import { useContext, useState } from "react";
import { Modal, Form, Input, Button, DatePicker, Radio, Space, notification } from "antd"
import { UserContext } from "../context/UserContext";
import LazyImage from "./LazyImage";
import locale from 'antd/es/date-picker/locale/pt_BR';
import { avatares } from "../util/avatar";
import "../App.css"
import moment from "moment";

const InfoUser = ({ showModal, setShowModal, user }) => {

  const { editUser } = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  const [editEnable, setEditEnable] = useState(false)

  const handleEditUser = async (values) => {
    try {
      setLoading(true);
      await editUser({...values, code: user.code});
      notification.success({
        description: "Usuário editado com sucesso",
        placement: 'topRight',
        duration: 4.0,
      })
      setLoading(false);
      setShowModal();
    } catch (error) {
      notification.error({
        description: "Não foi possível editar as informações do usuário",
        placement: 'topRight',
        duration: 4.0,
      })
      setLoading(false);
    }
  }

  return (
    <Modal title="Detalhes do Usuário" visible={showModal} onCancel={setShowModal} footer={null}>
      <Form
        size="large"
        layout="vertical"
        name="form-user"
        onFinish={handleEditUser}
      >
        <Form.Item
          initialValue={user.name}
          label={<b>Nome</b>}
          name="name"
          rules={[{ required: true, message: 'É necessário informar um nome!' }]}
        >
          <Input disabled={!editEnable} placeholder="Nome do Usuário" />
        </Form.Item>

        <Form.Item
          initialValue={moment(user.birth)}
          value={user.birth}
          label={<b>Data de Nascimento</b>}
          name="birth"
          rules={[{ required: true, message: 'É necessário informar a data de nascimento!' }]}
        >
          <DatePicker  disabled={!editEnable} placeholder="Data de nascimento" locale={locale} />
        </Form.Item>
        {editEnable && <Form.Item
          style={{ overflowY: "auto" }}
          label={<b>Escolha seu Avatar</b>}
          name="avatar"
          rules={[{ required: true, message: 'É necessário selecionar um avatar!' }]}
        >
          <Radio.Group >
            <Space direction="horizontal">
            <Radio value={avatares.monster1}><LazyImage src={avatares.monster1}/></Radio>
            <Radio value={avatares.monster2}><LazyImage src={avatares.monster2}/></Radio>
            <Radio value={avatares.monster3}><LazyImage src={avatares.monster3}/></Radio>
            <Radio value={avatares.monster4}><LazyImage src={avatares.monster4}/></Radio>
            </Space>
          </Radio.Group>
        </Form.Item>}
        <br />
        <Form.Item >
          {editEnable && <Button loading={loading} type="primary" htmlType="submit" style={{ width: "100%" }}>
            Salvar
        </Button>}
          {!editEnable && <Button type="primary" style={{ width: "100%" }} onClick={() => setEditEnable(!editEnable)}>
            Editar
        </Button>}
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default InfoUser;