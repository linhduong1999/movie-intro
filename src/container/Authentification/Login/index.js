import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Form, Input, Button, Checkbox } from 'antd';
import { loginRequest } from './action'
import { getLoading } from './reselect'


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = () => {

  const { loadingFromLoginSlice } = useSelector(createStructuredSelector({
    loadingFromLoginSlice: getLoading
  }))

  const dispatch = useDispatch()
  const onFinish = (values) => {
    dispatch(loginRequest(values.username, values.password))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        {loadingFromLoginSlice ? (
          <Button type="primary" htmlType="submit" loading>
            Login
          </Button>
        ) : (
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          )
        }

      </Form.Item>
    </Form>
  );
};

export default React.memo(Login)