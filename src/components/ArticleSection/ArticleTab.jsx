import { useState } from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import GroupSection from "../GroupSection/GroupSection";
import ArticleList from "./ArticleList/ArticleList";
import "./ArticleTab.css";
function ArticleTab() {
  const [key, setKey] = useState("AllPosts");
  const lorem =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ";
  return (
    <Container className=" py-5 w-100">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 d-flex"
      >
        <Tab className="d-flex tab-head" eventKey="AllPosts" title="All Posts">
          <ArticleList />
          <GroupSection className="group-section" />
        </Tab>
        <Tab
          className="redundant-tab d-none"
          eventKey="Article"
          title="Article"
        >
          <p>{lorem}</p>
        </Tab>
        <Tab className="redundant-tab" eventKey="Event" title="Event">
          <p>{lorem}</p>
        </Tab>
        <Tab className="redundant-tab" eventKey="Education" title="Education">
          <p>{lorem}</p>
        </Tab>
        <Tab className="redundant-tab" eventKey="Job" title="Job">
          <p>{lorem}</p>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default ArticleTab;
