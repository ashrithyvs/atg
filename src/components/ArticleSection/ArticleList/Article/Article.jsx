import React from "react";
import { Card, DropdownButton, Dropdown } from "react-bootstrap";

function Article({
  imgUrl,
  title,
  desc,
  userImg,
  userName,
  viewCount,
  articleType,
}) {
  return (
    <>
      <Card className="card my-3">
        <Card.Img variant="top" src={imgUrl} />
        <span className="mx-3 mt-3">{articleType}</span>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>{title}</Card.Title>
            <DropdownButton
              align="end"
              variant="outline-dark"
              title={<i className="fas fa-ellipsis-h"></i>}
              className="p-0"
            >
              <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
              <Dropdown.Item eventKey="2">Report</Dropdown.Item>
              <Dropdown.Item eventKey="3">option 3</Dropdown.Item>
            </DropdownButton>
          </div>
          <Card.Text className="text-muted">{desc}</Card.Text>
          <div className="d-flex py-2">
            <img src={userImg} alt="User" />
            <span className="mx-2 my-auto">{userName}</span>
            <div className="d-flex mx-auto my-auto">
              <i className="far fa-eye my-auto"></i>
              <small className="mx-2 ">{viewCount} views</small>
            </div>
            <i
              className="fas fa-share-alt my-auto mx-4"
              onClick={() => console.log("Share Button Clicked!")}
            ></i>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Article;
