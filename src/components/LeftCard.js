import React, { Fragment } from "react";

import {
  Button,
  UncontrolledAlert,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

const BANNER = "https://i.imgur.com/CaKdFMq.jpg";

const LeftCard = () => (
  <Fragment>
    <UncontrolledAlert color="danger" className="d-none d-lg-block">
      <strong>Account not activated.</strong>
    </UncontrolledAlert>

    <Card>
      <CardImg top width="100%" src={BANNER} alt="banner" />
      <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">
          Frontend Course
        </CardTitle>
        <CardSubtitle
          className="text-secondary mb-3 font-weight-light text-uppercase"
          style={{ fontSize: "0.8rem" }}
        >
          From the basics of HTML to master React Js
        </CardSubtitle>
        <CardText
          className="text-secondary mb-4"
          style={{ fontSize: "0.75rem" }}
        >
          React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
          Declarative views make your code more predictable and easier to debug.
        </CardText>
        <Button color="success" className="font-weight-bold">
          Get the Full Course
        </Button>
      </CardBody>
    </Card>
  </Fragment>
);

export default LeftCard;
