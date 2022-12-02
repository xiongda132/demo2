import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { Card, Button, Modal } from "antd";
import { useLocation, useHistory, Link } from "react-router-dom";

const myData = [
  {
    status: 0,
    archiveId: "FL9414100001",
    epc: "010003202210140000004424",
    className: "生产线档案",
    orgName: "研发中心",
    placeName: "A库房01区02列01节01层左侧",
  },
  {
    status: 1,
    archiveId: "FL9414100002",
    epc: "010003202210140000004425",
    className: "生产线档案",
    orgName: "研发中心",
    placeName: "A库房01区02列01节01层左侧",
  },
  {
    status: 0,
    archiveId: "FL9414100003",
    epc: "010003202210140000004424",
    className: "生产线档案",
    orgName: "研发中心",
    placeName: "A库房01区02列01节01层左侧",
  },
  {
    status: 1,
    archiveId: "FL9414100004    ",
    epc: "010003202210140000004425",
    className: "生产线档案",
    orgName: "研发中心",
    placeName: "A库房01区02列01节01层左侧",
  },
];

const keyStyle = {
  color: "#f60",
  fontWeight: 900,
};

const textStyle = {
  color: "black",
  fontWeight: 400,
};

export default () => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const hasInventory = () => {
    const quantity = myData.filter((item) => item.status === 1).length;
    return quantity;
  };

  const handleClick = () => {
    history.goBack();
  };

  const handleBill = () => {
    setVisible(true);
  };

  const hanldeCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
  };
  useEffect(() => {
    fetch(
      "http://47.94.5.22:6302/supoin/api/archive/inventory/getCheckList"
    ).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.inventory}>
          <div
            style={{ position: "absolute", left: 0, top: 0 }}
            onClick={handleClick}
          >
            {"<返回"}
          </div>
          <div className={styles.goback}>盘点</div>
        </div>
        <Card>
          <div className={styles.top}>
            <div style={keyStyle}>
              盘点单号: <span style={textStyle}>{1}</span>
            </div>
            <Button size="large" onClick={handleBill}>
              选择单据
            </Button>
          </div>
        </Card>
        <div className={styles.main}>
          {myData.map((item) => (
            <Card key={item.archiveId} style={{ fontSize: "20px" }}>
              <div style={{ float: "right", fontWeight: 900 }}>
                {item.status === 0 ? (
                  <div style={{ color: "red" }}>未盘</div>
                ) : (
                  <div style={{ color: "green" }}>已盘</div>
                )}
              </div>
              <div style={keyStyle}>
                档案编号: <span style={textStyle}>{item.archiveId}</span>
              </div>
              <div style={keyStyle}>
                分类名称: <span style={textStyle}>{item.className}</span>
              </div>
              <div style={keyStyle}>
                epc: <span style={textStyle}>{item.epc}</span>
              </div>
              <div style={keyStyle}>
                部门名称: <span style={textStyle}>{item.orgName}</span>
              </div>
              <div style={keyStyle}>
                位置名称: <span style={textStyle}>{item.placeName}</span>
              </div>
            </Card>
          ))}
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 20 }}>
          <div style={{ marginLeft: 20 }}>共{myData.length}条</div>，
          <div>第1/1页</div>，<div>已盘数量: {hasInventory()}</div>，
        </div>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Button size="large">重盘</Button>
        </div>
        <Modal
          visible={visible}
          title="请选择你需要盘点的单据"
          onCancel={hanldeCancel}
          onOk={handleOk}
        ></Modal>
      </div>
    </>
  );
};
