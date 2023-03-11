import React from "react";
import "./SkeletonList.css";
import { Card, Placeholder } from "react-bootstrap";
import placeholderImage from "../../../Assets/images/placeholder_image.png";

const SkeletonList = ({ length }) => {
  return (
    <div className="skeleton-item">
      {Array.from(new Array(length)).map((card, index) => (
        <div key={index} className="skeleton-main my-3">
          <Card className="border-0 mt-3">
            <Card.Body>
              <Placeholder
                className="text-center mb-2"
                as={Card.Text}
                animation="glow"
              >
                <Placeholder xs={6} bg="secondary" />
              </Placeholder>
              <Placeholder
                className="text-center"
                as={Card.Text}
                animation="glow"
              >
                <Placeholder xs={7} size="lg" bg="secondary" />
              </Placeholder>
              <Placeholder animation="glow">
                <Card.Img
                  className="my-3 opacity-50"
                  variant="mid"
                  src={placeholderImage}
                />
              </Placeholder>
              <Placeholder
                className="text-center mb-2"
                as={Card.Text}
                animation="glow"
              >
                <Placeholder xs={12} bg="secondary" />
              </Placeholder>
              <Placeholder animation="glow">
                <Placeholder.Button variant="secondary" xs={12} />
              </Placeholder>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default SkeletonList;
