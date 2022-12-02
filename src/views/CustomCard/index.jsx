import { Card, Divider, Row, Col } from "antd";
import styles from "./index.module.css";
import Jpg1 from "./1.jpg";
import Jpg2 from "./2.jpg";
import Jpg3 from "./3.jpg";
const { Meta } = Card;

export default () => {
  return (
    <>
      <Card
        size="small" // default | small
        title="default size card"
        extra={<a href="#">learn more</a>}
        className={styles.card}
      >
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </Card>
      <Divider>分割线</Divider>
      <div className={styles.wrapper}>
        <Card
          title="default size card"
          className={styles.cardTwo}
          bordered={false}
        >
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </Card>
      </div>
      <Divider>分割线</Divider>
      <Card className={styles.cardThree}>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <Divider>分割线</Divider>
      </Card>
      <Divider>分割线</Divider>
      <Card
        cover={<img alt="example" src={Jpg1}></img>}
        className={styles.cardCover}
      >
        <Meta title="Europe Street beat" description="www.instagram.com"></Meta>
      </Card>
      <Divider>分割线</Divider>
      <Row gutter={16} offset={20}>
        <Col span={8}>
          <Card
            cover={<img alt="example" src={Jpg1}></img>}
            className={styles.cardCover}
          >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            ></Meta>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            cover={<img alt="example" src={Jpg2}></img>}
            className={styles.cardCover}
          >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            ></Meta>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            cover={<img alt="example" src={Jpg3}></img>}
            className={styles.cardCover}
          >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            ></Meta>
          </Card>
        </Col>
      </Row>
    </>
  );
};
