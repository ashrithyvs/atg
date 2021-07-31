import React from "react";
import { Card, DropdownButton, Dropdown, Button } from "react-bootstrap";

function Job({
  title,
  companyName,
  userImg,
  location,
  userName,
  viewCount,
  articleType,
  meetTime,
  meetLocation,
  imgUrl,
}) {
  return (
    <div>
      <Card className="card my-3">
        {articleType === "💼️ Job" ? null : (
          <Card.Img variant="top" src={imgUrl} />
        )}
        <span className="mx-3 mt-3">{articleType}</span>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>{title}</Card.Title>
            <DropdownButton
              align="end"
              variant="light"
              title={<i className="fas fa-ellipsis-h"></i>}
              className="p-0"
            >
              <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
              <Dropdown.Item eventKey="2">Report</Dropdown.Item>
              <Dropdown.Item eventKey="3">option 3</Dropdown.Item>
            </DropdownButton>
          </div>
          <Card.Text className="text-muted ">
            <div className="mt-2 mb-3 d-flex info-wrapper">
              {articleType === "💼️ Job" ? (
                <>
                  <i class="fas fa-suitcase mx-2 my-auto"></i>
                  <span className="name">{companyName}</span>
                </>
              ) : (
                <>
                  <i class="fas fa-calendar-week mx-2 my-auto"></i>
                  <span className="name">{meetTime}</span>
                </>
              )}
              <>
                <i
                  class="fas fa-map-marker-alt"
                  style={{ marginLeft: "1rem", marginRight: "0.5rem" }}
                ></i>
                <span className="name">{location}</span>
              </>
            </div>
            {articleType === "💼️ Job" ? (
              <Button
                variant="outline-success"
                className="w-100 font-weight-bold"
              >
                Apply on Timesjobs
              </Button>
            ) : (
              <Button
                variant="outline-danger"
                className="w-100 font-weight-bold"
              >
                Visit Website
              </Button>
            )}
          </Card.Text>
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
    </div>
  );
}

export default Job;
