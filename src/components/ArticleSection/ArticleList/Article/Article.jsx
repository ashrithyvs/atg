import React from "react";
import { Card, DropdownButton, Dropdown } from "react-bootstrap";
import "./Article.css";
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
            <Card.Title className="title">{title}</Card.Title>
            <DropdownButton
              align="end"
              variant="light"
              title={<i className="fas fa-ellipsis-h"></i>}
            >
              <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
              <Dropdown.Item eventKey="2">Report</Dropdown.Item>
              <Dropdown.Item eventKey="3">option 3</Dropdown.Item>
            </DropdownButton>
          </div>
          <Card.Text className="text-muted">{desc}</Card.Text>
          <div className=" d-flex py-2">
            <div className="d-flex w-100">
              <img className="userImg" src={userImg} alt="User" />
              <div className="d-flex user-content justify-content-between">
                <span className="mx-2 my-auto">{userName}</span>
                <div className="d-flex view-count-wrapper my-auto">
                  <i className="far fa-eye icon my-auto"></i>
                  <small className="mx-1">{viewCount} views</small>
                </div>
              </div>
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
