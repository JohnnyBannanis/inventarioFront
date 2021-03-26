import { useState } from "react";
import InfoCard from "./shared/InfoCard";
import { Col, Row } from "antd";

function Home() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Row>
        <Col offset={1}>
          <InfoCard colorNum={0} />
          <InfoCard colorNum={1} />
          <InfoCard colorNum={2} />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
