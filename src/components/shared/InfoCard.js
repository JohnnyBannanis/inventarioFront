import { Card, Typography } from "antd";
const { Title } = Typography;

function InfoCard ({colorNum}){
    const gradients = [
        "linear-gradient(135deg, #c3ec52 0%,#0ba29d 100%)",
        "linear-gradient(135deg, #13f1fc 0%,#0470dc 100%)",
        "linear-gradient(135deg, #F36265 0%,#961276 100%)"
    ];
    
    return  <div>
      <Card className={"roundedShadow"}
        style={{
          //backgroundImage: "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
          backgroundImage: gradients[colorNum],
          border:"none",
          height:170,
          width:300,
          //height:"15vh",
          //width:"15vw",
          marginTop:30
        }}
      >
        
        <Title level={2} style={{ textAlign: "left", color:"white"}}>
            DATA
        </Title>
      </Card>
    </div>
    
}
export default InfoCard;