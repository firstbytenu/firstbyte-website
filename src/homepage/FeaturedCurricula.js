import { Container, OverlayTrigger, Popover, Row, Col } from "react-bootstrap";
import colors from "../utils/colors";

export default function FeaturedCurricula() {
  const curriculum = [
    {
      title: "Makey Makey",
      description: "Five 40-minute lessons",
      summary:
        "Students create fun programs in a Scratch environment and interact with their programs using a MaKey MaKey. They will be introduced to control flow statements and basic circuit concepts",
    },
    {
      title: "Introduction to Circuit Playground",
      description: "Eight 45-minute lessons",
      summary:
        "Students will be introduced to the Circuit Playground and its hardware components. After learning coding concepts in ArduBlock, students will transition to coding in the programming language C. The projects incorporated into these lessons make use of the board's various inputs and outputs, making each class creative and fun!",
    },
    {
      title: "Fashion SENCE with Arduino",
      description: "Ten 2 hour lessons",
      summary:
        "In FashionSENCE (sewable electronics n’ coding education), students create their own wearable technology using LilyPad Arduinos. They will be introduced to coding in a Scratch environment, defining variables, control flow statements, basic circuitry, and sewing!",
    },
  ];

  return (
    <div className="container">
      <div className="d-flex justify-content-between my-3">
        <h2 style={{ color: colors.font }}>Featured curricula</h2>
        <a style={{ color: colors.primary }} href="/">
          View All Curricula
        </a>
      </div>

      <Container>
        <Row>
          {curriculum.map((cur) => (
            <Col md>
              <Curricula
                title={cur.title}
                description={cur.description}
                summary={cur.summary}
              ></Curricula>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

function Curricula({ title, description, summary }) {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>{summary}</Popover.Body>
    </Popover>
  );
  return (
    <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
      <a href="#" className="col card text-decoration-none mb-3">
        <div className="w-full bg-dark" style={{ height: "250px" }}></div>
        <div className="card-body">
          <h5 className="card-title" style={{ color: colors.font }}>
            {title}
          </h5>
          <p className="card-text" style={{ color: colors.font }}>
            {description}
          </p>
        </div>
      </a>
    </OverlayTrigger>
  );
}
