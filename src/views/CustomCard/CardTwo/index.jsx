import { Card, Divider, Row, Col, Switch, Avatar, Skeleton, Input } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import styles from "./index.module.css";
const { Meta, Grid } = Card;

const GridStyle = {
  width: "25%",
  textAlign: "center",
};

export default () => {
  const [loading, setLoading] = useState(true);
  const handleChange = (check) => {
    setLoading(!check);
  };
  return (
    <>
      <div>
        <span>输入内容: </span>
        <Input></Input>
      </div>
      <Switch check={!loading} onChange={handleChange}></Switch>
      <Card loading={loading} className={styles.card}>
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card Title"
          description="This is the description"
        ></Meta>
      </Card>
      <Card
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
        className={styles.card}
      >
        <Skeleton loading={loading}>
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card Title"
            description="This is the description"
          ></Meta>
        </Skeleton>
      </Card>
      <Divider>分割线</Divider>
      <Card>
        <p>aaa</p>
        <Grid style={GridStyle}>Content</Grid>
        <Grid style={GridStyle}>Content</Grid>
        <Grid style={GridStyle}>Content</Grid>
        <Grid style={GridStyle}>Content</Grid>
        <Grid style={GridStyle}>Content</Grid>
        <Grid style={GridStyle}>Content</Grid>
        <Grid style={GridStyle}>Content</Grid>
      </Card>
      <Divider>分割线</Divider>
      <Card title="外部卡片">
        <Card title="内部卡片1" type="inner"></Card>{" "}
        <Card title="内部卡片2" type="inner"></Card>
      </Card>
      <div className={styles.image}></div>
    </>
  );
};
