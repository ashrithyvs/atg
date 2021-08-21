import React from "react";
import { CardColumns, Container } from "react-bootstrap";
import Article from "./Article/Article";
import CardImg from "./art1.jpg";
import CardImg2 from "./art3.png";
import CardImg3 from "./art2.png";
import userImg from "./user.png";
import Job from "./Article/Job";

function ArticleList() {
  const cardTitle =
    "What if famous brands had regular fonts? Meet RegulaBrands!";
  const cardDescription =
    "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…";
  const userName = "Sarah West";
  const viewCount = 1400;
  const companyName = "Innovaccer Analytics Ltd.";
  const location = "Noida, India";
  const jobTitle = "Software Developer";
  const meetTime = "Fri, 12 Oct, 2018";
  const articleType = [
    { id: 1, type: "✍️ Article", img: CardImg },
    { id: 2, type: "🔬️ Education", img: CardImg2 },
  ];
  return (
    <Container>
      <CardColumns>
        {articleType.map((artType) => {
          return (
            <Article
              key={artType.id}
              imgUrl={artType.img}
              title={cardTitle}
              desc={cardDescription}
              userName={userName}
              userImg={userImg}
              viewCount={viewCount}
              articleType={artType.type}
            />
          );
        })}
        <Job
          title={jobTitle}
          imgUrl={CardImg3}
          meetTime={meetTime}
          location={location}
          userName={userName}
          userImg={userImg}
          viewCount={viewCount}
          articleType="🗓️ Meetup"
        />
        <Job
          title={jobTitle}
          companyName={companyName}
          location={location}
          userName={userName}
          userImg={userImg}
          viewCount={viewCount}
          articleType="💼️ Job"
        />
      </CardColumns>
    </Container>
  );
}

export default ArticleList;
