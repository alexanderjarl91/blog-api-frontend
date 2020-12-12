import React from 'react';
import Aos from "aos"
import "aos/dist/aos.css"


import {Title, Cards, Card, CardImage, CardInfo, CardTitle, CardContent, CardButton} from './styled/BlogCardStyled'
function Post({data}) {


  return (
      <>
      <Title>Latest Posts</Title>
      {data.map((post) => (
        <Cards>
           <Card data-aos="fadeup">
            <CardImage src={post.logoSrc} alt=""/>
            <CardInfo>
                <CardTitle>
                    {post.name}
                </CardTitle>
                <CardContent>
                    {post.about}
                </CardContent>
                <CardButton>Read more</CardButton>
            </CardInfo>
           </Card>
        </Cards>
      ))}
    </>
  );
}



export default Post
