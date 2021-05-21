import { useContext, useState } from "react";
import { Modal, Form, Input, Button, DatePicker, ConfigProvider, Radio, Space, notification } from "antd"
import { UserContext } from "../context/UserContext";
import locale from 'antd/es/date-picker/locale/pt_BR';
import { avatares } from "../util/avatar";
import "../App.css"

const InsertUser = ({ showModal, setShowModal }) => {

  const {insertUser} = useContext(UserContext)
  const [loading, setLoading] = useState(false)

  const handleInsertUser = async (values) => {
    try {
      setLoading(true);
      await insertUser(values);
      notification.success({
        description: "Usuário cadastrado com sucesso",
        placement: 'topRight',
        duration: 4.0,
      })
      setLoading(false);
      setShowModal();
    } catch (error) {
      notification.error({
        description: "Não foi possível cadastrar o usuário",
        placement: 'topRight',
        duration: 4.0,
      })
      setLoading(false);
    }
  }

  return (
    <Modal title="Inserir Usuário" visible={showModal} onCancel={setShowModal} footer={null}>
      <Form
        size="large"
        layout="vertical"
        name="form-user"
        onFinish={handleInsertUser}
      >
        <Form.Item
          label={<b>Nome</b>}
          name="name"
          rules={[{ required: true, message: 'É necessário informar um nome!' }]}
        >
          <Input placeholder="Nome do Usuário" />
        </Form.Item>

        <Form.Item
          label={<b>Data de Nascimento</b>}
          name="birth"
          rules={[{ required: true, message: 'É necessário informar a data de nascimento!' }]}
        >
          <DatePicker placeholder="Data de nascimento" locale={locale} />
        </Form.Item>
        <Form.Item
          style={{overflowY: "auto"}}
          label={<b>Escolha seu Avatar</b>}
          name="avatar"
          rules={[{ required: true, message: 'É necessário selecionar um avatar!' }]}
        >
          <Radio.Group >
            <Space direction="horizontal">
            <Radio value={avatares.monster1}><img className="pick-avatar" src={avatares.monster1}/></Radio>
            <Radio value={avatares.monster2}><img className="pick-avatar" src={avatares.monster2}/></Radio>
            <Radio value={avatares.monster3}><img className="pick-avatar" src={avatares.monster3}/></Radio>
            <Radio value={avatares.monster4}><img className="pick-avatar" src={avatares.monster4}/></Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <br />
        <Form.Item >
          <Button loading={loading} type="primary" htmlType="submit" style={{ width: "100%" }}>
            Cadastrar
        </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default InsertUser;