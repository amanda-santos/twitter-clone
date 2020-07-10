import React from "react";
import StickyBox from "react-sticky-box";

import List from "../List";
import FollowSuggestion from "../FollowSuggestion";
import News from "../News";

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search on Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="You might like"
            elements={[
              <FollowSuggestion name="Jane Doe" nickname="@janedoe" />,
              <FollowSuggestion name="John Doe" nickname="@jdoe" />,
              <FollowSuggestion name="Mary Doe" nickname="@Mary_Doe" />,
            ]}
          />
          <List
            title="What's happening"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
