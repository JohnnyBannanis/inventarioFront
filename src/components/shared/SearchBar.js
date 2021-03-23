import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function Search({ onChange, value }) {
  const changeValue = (e) => {
    onChange(e.target.value);
  };

  return (
    <div
      style={{
        borderWidth: "0px 0px 1px 0px",
        borderStyle: "solid",
        display: "flex",
        flexDirection: "row",
        width: "40vw",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2vh",
        alignItems: "center",
      }}
    >
      <SearchOutlined />
      <Input onChange={changeValue} value={value} bordered={false} />
    </div>
  );
}
