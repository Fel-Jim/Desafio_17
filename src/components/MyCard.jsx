import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const MyCard = ({ ImageP, NameP, DescriptionP, ColorBadge, TextBadge }) => {
  const ImgConfig = {
    height: "40vh",
  };
  const TextConfig = {
    display: "grid",
    justifyContent: "center",
  };
  const CardConfig = {
    width: "18rem",
  };

  return (
    <>
      <Card style={CardConfig}>
        <Card.Img variant="top" src={ImageP} style={ImgConfig} />
        <Card.Body style={TextConfig}>
          <Card.Title style={TextConfig}>{NameP}</Card.Title>
          <Card.Text>{DescriptionP}</Card.Text>
        </Card.Body>
        <Badge bg={ColorBadge}>{TextBadge}</Badge>
      </Card>
    </>
  );
};

export default MyCard;
