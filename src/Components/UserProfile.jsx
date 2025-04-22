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

// 欄位設定，一次管理所有 field
const fieldConfigs = [
  { name: "firstName", label: "名字", type: "text" },
  { name: "lastName", label: "姓氏", type: "text" },
  { name: "email", label: "Email", type: "text" },
  { name: "phone", label: "電話號碼", type: "text" },
  {
    name: "gender",
    label: "性別",
    type: "select",
    options: [
      { value: "male", label: "男性" },
      { value: "female", label: "女性" },
      { value: "other", label: "其他" },
    ],
  },
  { name: "birthday", label: "生日", type: "date" },
];

// 共用 Grid 排版元件
const FormGrid = ({ cols = 2, children }) => (
  <div className={`grid grid-cols-1 sm:grid-cols-${cols} gap-4`}>{children}</div>
);

// 統一 FieldRenderer
const FieldRenderer = ({ name, label, type, options = [], isEditing, userInfo }) => (
  <Form.Item
    key={name}
    name={name}
    label={<span className="dark:text-white">{label}</span>}
    className="dark:text-white"
  >
    {isEditing ? (
      type === "text" ? (
        <Input placeholder={`請輸入${label}`} />
      ) : type === "select" ? (
        <Select placeholder={`選擇${label}`}>{options.map((opt) => (
          <Option key={opt.value} value={opt.value}>{opt.label}</Option>
        ))}</Select>
      ) : type === "date" ? (
        <DatePicker className="w-full" placeholder={`選擇${label}`} />
      ) : (
        <Input placeholder={`請輸入${label}`} />
      )
    ) : (
      <div className="py-2 px-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white">
        {type === "date"
          ? userInfo[name]
            ? dayjs(userInfo[name]).format("YYYY-MM-DD")
            : "-"
          : type === "select"
          ? options.find((opt) => opt.value === userInfo[name])?.label ?? "-"
          : userInfo[name] ?? "-"}
      </div>
    )}
  </Form.Item>
);

// 密碼區塊子元件
const PasswordFields = ({ isEditing, visible, onToggle }) => {
  if (!isEditing) return null;
  if (!visible) {
    return (
      <Form.Item>
        <Button onClick={onToggle}>變更密碼</Button>
      </Form.Item>
    );
  }
  return (
    <FormGrid cols={2}>
      <FieldRenderer
        name="currentPassword"
        label="舊密碼"
        type="text"
        isEditing={true}
        userInfo={{}}
      />
      <FieldRenderer
        name="newPassword"
        label="新密碼"
        type="text"
        isEditing={true}
        userInfo={{}}
      />
      <FieldRenderer
        name="confirmNewPassword"
        label="確認新密碼"
        type="text"
        isEditing={true}
        userInfo={{}}
      />
    </FormGrid>
  );
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
          >編輯</Button>
        )}
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={userInfo}
      >
        {/* 文字 & 選單 & 日期 */}
        <FormGrid cols={2}>
          {fieldConfigs.map((cfg) => (
            <FieldRenderer
              key={cfg.name}
              {...cfg}
              isEditing={isEditing}
              userInfo={userInfo}
            />
          ))}
        </FormGrid>

        {/* 密碼區塊 */}
        <PasswordFields
          isEditing={isEditing}
          visible={showPasswordFields}
          onToggle={() => setShowPasswordFields(true)}
        />

        {/* 提交按鈕 */}
        {isEditing && (
          <Form.Item>
            <Space className="w-full flex justify-between">
              <Button htmlType="button" onClick={handleCancel} className="w-[48%]">
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