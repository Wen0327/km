// pages/UserProfile.jsx
import React, { useState } from "react";
import { Input, DatePicker, Select, Button, Form, Space } from "antd";
import dayjs from "dayjs";
import { useI18n } from "../Utils/intlHelper";

const { Option } = Select;

const initialUserInfo = {
  firstName: "王",
  lastName: "小明",
  email: "user@example.com",
  phone: "0912345678",
  gender: "male",
  birthday: null,
};

// Grid Component
const FormGrid = ({ cols = 2, children }) => (
  <div className={`grid grid-cols-1 sm:grid-cols-${cols} gap-4`}>
    {children}
  </div>
);

const FieldRenderer = ({
  name,
  label,
  type,
  options = [],
  isEditing,
  userInfo,
}) => (
  <Form.Item
    key={name}
    name={name}
    label={<span className="dark:text-white">{label}</span>}
    className="dark:text-white"
  >
    {isEditing ? (
      type === "text" ? (
        <Input placeholder={label} />
      ) : type === "select" ? (
        <Select placeholder={label}>
          {options.map((opt) => (
            <Option key={opt.value} value={opt.value}>
              {opt.label}
            </Option>
          ))}
        </Select>
      ) : type === "date" ? (
        <DatePicker className="w-full" placeholder={label} />
      ) : (
        <Input placeholder={label} />
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
  const { intlHelper } = useI18n();

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

  const fieldConfigs = [
    { name: "firstName", label: intlHelper("First.name"), type: "text" },
    { name: "lastName", label: intlHelper("Last.name"), type: "text" },
    { name: "email", label: intlHelper("Email"), type: "text" },
    { name: "phone", label: intlHelper("Phone.number"), type: "text" },
    {
      name: "gender",
      label: intlHelper("Gender"),
      type: "select",
      options: [
        { value: "male", label: intlHelper("Male") },
        { value: "female", label: intlHelper("Female") },
        { value: "other", label: intlHelper("Prefer.not.to.say") },
      ],
    },
    { name: "birthday", label: intlHelper("Birthday"), type: "date" },
  ];

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
