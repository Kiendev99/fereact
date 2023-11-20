import { useEffect, useState } from "react";
import { Card, Col, Row, Statistic } from "antd";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const AdminDashboardPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Tổng đơn hàng" hoverable bordered loading={loading}>
            <div className="flex gap-3">
              

            </div>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Số đơn hôm nay" hoverable bordered loading={loading}>
            <div className="flex gap-3">
             

             
            </div>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Tổng người dùng" hoverable bordered loading={loading}>
            <span className="text-2xl">10000000+   người</span>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AdminDashboardPage;
