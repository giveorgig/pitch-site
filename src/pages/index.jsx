import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/avatar.jpg";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 text-2xl lg:text-3xl font-sans`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-2 text-left`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey-400 absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Oi oi, <br /> We're Give or Gig.
        </BigTitle>
        <Subtitle>A skilled staffing app for non-profits.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>How it works</Title>
        <ProjectsWrapper>
          <ProjectCard title="Awesome" bg="rgba(255,255,255,.1)">
            Sed posuere consectetur est at lobortis. Aenean lacinia bibendum
            nulla sed consectetur. Vestibulum id ligula porta felis euismod
            semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum.
          </ProjectCard>
          <ProjectCard title="Amazing" bg="rgba(255,255,255,.1)">
            Sed posuere consectetur est at lobortis. Aenean lacinia bibendum
            nulla sed consectetur. Vestibulum id ligula porta felis euismod
            semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum.
          </ProjectCard>
          <ProjectCard title="Brilliant" bg="rgba(255,255,255,.1)">
            Sed posuere consectetur est at lobortis. Aenean lacinia bibendum
            nulla sed consectetur. Vestibulum id ligula porta felis euismod
            semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum.
          </ProjectCard>
          <ProjectCard title="Genius" bg="rgba(255,255,255,.1)">
            Sed posuere consectetur est at lobortis. Aenean lacinia bibendum
            nulla sed consectetur. Vestibulum id ligula porta felis euismod
            semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>Who are we?</Title>
        <AboutHero>
          <AboutSub>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Sed posuere consectetur est at lobortis. Sed posuere consectetur est
          at lobortis. Donec ullamcorper nulla non metus auctor fringilla. Etiam
          porta sem malesuada magna mollis euismod. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Maecenas faucibus mollis interdum.
          </ContactText>
        </Inner>
        <Footer>&copy; 2019 Give or Gig. </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
