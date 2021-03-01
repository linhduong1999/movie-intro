import React from "react";
import { Alert, Button, Space } from "antd";
import {Link} from 'react-router-dom'

const AlertLogin = () => {
  return (
    <>
      <Alert
        message="Login to see comment"
        description="Info Description Info Description Info Description Info Description"
        type="info"
        action={
          <Space direction="vertical">
            <Link to="/login">
              <Button size="large" type="primary">
                Login
              </Button>
            </Link>
          </Space>
        }
        closable
      />
    </>
  );
};

export default React.memo(AlertLogin);
