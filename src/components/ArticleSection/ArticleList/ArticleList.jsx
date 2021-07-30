import React from "react";
import { CardColumns, Container } from "react-bootstrap";
import Article from "./Article/Article";
import CardImg from "./cardImg.jpg";
import userImg from "./user.png";

function ArticleList() {
  const cardTitle =
    "What if famous brands had regular fonts? Meet RegulaBrands!";
  const cardDescription =
    "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…";
  const userName = "Sarah West";
  const viewCount = 1400;
  const articleType = [
    { id: 1, pic: "✍️ Article" },
    { id: 2, pic: "🔬️ Education" },
    { id: 3, pic: "🗓️ Meetup" },
    { id: 4, pic: "💼️ Job" },
  ];
  return (
    <Container>
      {articleType.map((artType) => {
        return (
          <CardColumns key={artType.id}>
            <Article
              imgUrl={CardImg}
              title={cardTitle}
              desc={cardDescription}
              userName={userName}
              userImg={userImg}
              viewCount={viewCount}
              articleType={artType.pic}
            />
          </CardColumns>
        );
      })}
    </Container>
  );
}

export default ArticleList;
