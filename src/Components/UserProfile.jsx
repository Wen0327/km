// pages/UserProfile.jsx
import React, { useState } from "react";
import { Input, DatePicker, Select, Button, Form, Space } from "antd";
import dayjs from "dayjs";

const { Option } = Select;

const initialUserInfo = {
  firstName: "王",
  lastName: "小明",
  email: "user@example.com",
  phone: "0912345678",
  gender: "male",
  birthday: null,
};

const UserProfile = () => {
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const handleSubmit = (values) => {
    console.log("更新使用者資料:", values);
    setUserInfo(values);
    setIsEditing(false);
    setShowPasswordFields(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setShowPasswordFields(false);
    setIsEditing(false);
  };

  const renderInput = (name, label, type = "text") => (
    <Form.Item
      name={name}
      label={<label className="dark:text-white">{label}</label>}
      className="dark:text-white"
    >
      {isEditing ? (
        <Input type={type} placeholder={`請輸入${label}`} />
      ) : (
        <div className="py-2 px-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white">
          {userInfo[name] ?? "-"}
        </div>
      )}
    </Form.Item>
  );

  const renderSelect = (name, label, options) => (
    <Form.Item
      name={name}
      label={<label className="dark:text-white">{label}</label>}
      className="dark:text-white"
    >
      {isEditing ? (
        <Select placeholder={`選擇${label}`}>
          {options.map((opt) => (
            <Option key={opt.value} value={opt.value}>
              {opt.label}
            </Option>
          ))}
        </Select>
      ) : (
        <div className="py-2 px-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white">
          {options.find((opt) => opt.value === userInfo[name])?.label ?? "-"}
        </div>
      )}
    </Form.Item>
  );

  const renderDate = (name, label) => (
    <Form.Item
      name={name}
      label={<label className="dark:text-white">{label}</label>}
      className="dark:text-white"
    >
      {isEditing ? (
        <DatePicker className="w-full" placeholder={`選擇${label}`} />
      ) : (
        <div className="py-2 px-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white">
          {userInfo[name] ? dayjs(userInfo[name]).format("YYYY-MM-DD") : "-"}
        </div>
      )}
    </Form.Item>
  );

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold dark:text-white">個人資料</h2>
        {!isEditing && (
          <Button
            type="primary"
            onClick={() => {
              form.setFieldsValue(userInfo);
              setIsEditing(true);
            }}
          >
            編輯
          </Button>
        )}
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={userInfo}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {renderInput("firstName", "名字")}
          {renderInput("lastName", "姓氏")}
        </div>

        {renderInput("email", "Email")}
        {renderInput("phone", "電話號碼")}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {renderSelect("gender", "性別", [
            { value: "male", label: "男性" },
            { value: "female", label: "女性" },
            { value: "other", label: "其他" },
          ])}

          {renderDate("birthday", "生日")}
        </div>

        {isEditing && !showPasswordFields && (
          <Form.Item>
            <Button onClick={() => setShowPasswordFields(true)}>
              變更密碼
            </Button>
          </Form.Item>
        )}

        {isEditing && showPasswordFields && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {renderInput("currentPassword", "舊密碼", "password")}
            {renderInput("newPassword", "新密碼", "password")}
            {renderInput("confirmNewPassword", "確認新密碼", "password")}
          </div>
        )}

        {isEditing && (
          <Form.Item>
            <Space className="w-full flex justify-between">
              <Button
                htmlType="button"
                onClick={handleCancel}
                className="w-[48%]"
              >
                取消
              </Button>
              <Button type="primary" htmlType="submit" className="w-[48%]">
                儲存變更
              </Button>
            </Space>
          </Form.Item>
        )}
      </Form>
    </div>
  );
};

export default UserProfile;
