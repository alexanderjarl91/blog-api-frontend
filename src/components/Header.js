import React, { useEffect } from "react";
import styled from "styled-components";

import Aos from "aos";
import "aos/dist/aos.css";

const Container = styled.div`
  width: 100vw;
  height: 1000px;
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 100px;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  text-align: justify;
  text-justify: inter-word;
`;

const Button = styled.button`
  font-family: monospace;
  font-size: 20px;
  border: none;
  margin: 5rem;
  transition: 1s;
  &:hover {
    cursor: pointer;
    background-color: #ff793d;
    color: #ffffff;
  }
`;

export default function Header() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Container data-aos="fade-up">
        <img
          src="https://cdn1.iconfinder.com/data/icons/color-fruits-1/128/layn-fruits-peach-32-512.png"
          alt=""
          width="200px"
        />
        <Title>Welcome!</Title>
        <Text>
          This is an unstyled, simple React frontend blog to demonstrate
          functionality of a backend. The backend is a RESTful API created with
          Node.js and Express. Database is MongoDB, stored on MongoDB's atlas.
          The API connects to the database using Mongoose. There's also some
          fade-in animation cause I was trying out the AOS library. Scroll down
          to view content generated from the backend data 🙌
        </Text>
        <Button>
          <a
            href="https://github.com/alexanderjarl91/md5-blog-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            Backend on GitHub
          </a>{" "}
        </Button>
      </Container>
    </div>
  );
}
