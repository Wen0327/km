import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MailOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LoadingOutlined,
  PhoneOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { Input, Button, Tabs, Form, message } from "antd";
import { useAuth } from "../Context/AuthContext";

const { TabPane } = Tabs;

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [loginType, setLoginType] = useState("email");

  const handleLogin = (values) => {
    setLoading(true);
    const mockToken = "secure-api-token-abc123";

    setTimeout(() => {
      document.cookie = `api_key=${mockToken}; path=/; secure; samesite=strict`;
      login();
      setLoading(false);
      message.success("登入成功！");
      navigate("/");
    }, 1500);
  };

  const renderForm = (type) => (
    <Form layout="vertical" onFinish={handleLogin}>
      <Form.Item
        name={type === "email" ? "email" : "phone"}
        rules={
          type === "email"
            ? [
                { required: true, message: "請輸入 Email" },
                { type: "email", message: "Email 格式錯誤" },
              ]
            : [{ required: true, message: "請輸入電話號碼" }]
        }
      >
        <Input
          placeholder={type === "email" ? "Email" : "電話號碼"}
          prefix={type === "email" ? <MailOutlined /> : <PhoneOutlined />}
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "請輸入密碼" }]}
      >
        <Input.Password
          placeholder="密碼"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>

      <div className="flex justify-between mb-4">
        <a className="text-sm text-blue-500 hover:underline">忘記密碼？</a>
      </div>

      <Button
        type="primary"
        htmlType="submit"
        className="w-full"
        icon={loading ? <LoadingOutlined /> : null}
        disabled={loading}
      >
        {loading ? "登入中..." : "登入"}
      </Button>
    </Form>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-all duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md animate-fade-in">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          登入
        </h2>

        <Tabs
          className="login_tabs"
          activeKey={loginType}
          onChange={setLoginType}
          centered
        >
          <TabPane tab="Email" key="email">
            {renderForm("email")}
          </TabPane>
          <TabPane tab="電話號碼" key="phone">
            {renderForm("phone")}
          </TabPane>
        </Tabs>

        <div className="text-center my-4">
          <span className="text-gray-500 dark:text-gray-300">或使用</span>
        </div>

        <Button icon={<GoogleOutlined />} className="w-full mb-2">
          使用 Google 登入
        </Button>

        <div className="text-center mt-4">
          <span className="text-gray-600 dark:text-gray-300">還沒有帳號？</span>
          <a href="/signup" className="ml-1 text-blue-500 hover:underline">
            註冊
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
