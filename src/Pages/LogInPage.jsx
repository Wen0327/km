import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MailOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LoadingOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { Input, Button, Form, message } from "antd";
import { useAuth } from "../Context/AuthContext";
import { getCookie } from "../Utils/cookies";
import { useI18n } from "../Utils/intlHelper";

const LoginPage = () => {
  const { intlHelper } = useI18n();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = getCookie("api_key");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

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

  const renderForm = () => (
    <Form layout="vertical" onFinish={handleLogin}>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: intlHelper("Please.enter.your.email") },
          { type: "email", message: intlHelper("Invalid.email.format") },
        ]}
      >
        <Input placeholder="Email" prefix={<MailOutlined />} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          { required: true, message: intlHelper("Please.enter.your.password") },
        ]}
      >
        <Input.Password
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>

      <div className="flex justify-between mb-4">
        <a className="text-sm text-blue-500 hover:underline">
          {intlHelper("Forgot.password.?")}
        </a>
      </div>

      <Button
        type="primary"
        htmlType="submit"
        className="w-full"
        icon={loading ? <LoadingOutlined /> : null}
        disabled={loading}
      >
        {loading ? intlHelper("Logging.in...") : intlHelper("Log.in")}
      </Button>
    </Form>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-all duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md animate-fade-in">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          {intlHelper("Log.in")}
        </h2>
        {renderForm()}

        <div className="text-center my-4">
          <span className="text-gray-500 dark:text-gray-300">
            {intlHelper("Or.use")}
          </span>
        </div>

        <Button icon={<GoogleOutlined />} className="w-full mb-2">
          {intlHelper("Sign.in.with.Google")}
        </Button>

        <div className="text-center mt-4">
          <span className="text-gray-600 dark:text-gray-300">
            {intlHelper("Don't.have.an.account.?")}
          </span>
          <a href="/signup" className="ml-1 text-blue-500 hover:underline">
            {intlHelper("Sign.up")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
