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
            <Card.Title>{title}</Card.Title>
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
          <div className=" d-flex justify-content-around py-2">
            <div className="d-flex user-details justify-content-between w-100">
              <div className="cont">
                <img className="userImg" src={userImg} alt="User" />
                <div className="details">
                  <span className="mx-2 my-auto">{userName}</span>
                  <small className="mx-auto d-none view-count-mobile">
                    {viewCount} views
                  </small>
                </div>
                <div className="d-flex view-count mx-auto my-auto">
                  <i className="far fa-eye icon my-auto"></i>
                  <small className="mx-auto">{viewCount} views</small>
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
