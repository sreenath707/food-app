import { useState } from "react";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { AxiosReq } from "../../utils/Axios";

function Signup({ setLoginModal, setIsModal, applyUser }) {
  const [errorMessage, setErrorMessage] = useState(null);

  function onFinish(obj) {
    const { email, username, password } = obj;
    AxiosReq.post("/signup", {
      username: username,
      email: email,
      password: password,
    })
      .then((data) => {
        let obj = data.data;
        if (obj.signUpSuccess) {
          localStorage.setItem("token", obj.token);
          localStorage.setItem("refreshToken", obj.refreshToken);
          applyUser();
          setErrorMessage(null);
          setIsModal(false);
        } else {
          setErrorMessage(obj.msg);
        }
      })
      .catch((err) => console.error(err));
  }

  return (
    <div
      style={{ transform: "translate(-50%, -50%)" }}
      className="p-[20px] absolute top-[50%] left-[50%] bg-gray-100 w-[500px]"
    >
      <div className="text-[30px]">Sign Up</div>
      <Form
        name="normal_login"
        className="login-form w-[350px]"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {errorMessage && errorMessage}
        <Form.Item>
          <Button type="primary" htmlType="submit" className="bg-[#1677ff]">
            Sign Up
          </Button>
          <div className="mt-[10px]">
            <div
              onClick={(e) => {
                e.preventDefault();
                setLoginModal(true);
              }}
              className="cursor-pointer login-form-forgot text-[#1677ff]"
            >
              Already have an account? Login
            </div>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Signup;
