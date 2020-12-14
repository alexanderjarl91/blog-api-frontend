import React from "react";
import "aos/dist/aos.css";

import {
  Title,
  Card,
  CardImage,
  CardInfo,
  CardTitle,
  CardContent,
  CardButton,
} from "./styled/BlogCardStyled";
function Post({ data }) {
  return (
    <>
      <Title>Latest Posts</Title>
      {data.map((post) => (
        <Card key={post.id} data-aos="fadeup">
          <CardImage src={post.image} alt="" />
          <CardInfo>
            <CardTitle>{post.title}</CardTitle>
            <CardContent>{post.content}</CardContent>
            <CardButton>Read more</CardButton>
          </CardInfo>
        </Card>
      ))}
    </>
  );
}

export default Post;
