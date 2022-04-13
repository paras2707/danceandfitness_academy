import React from "react";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as SvgDotPatternIcon } from "images/dot-pattern.svg";

const HeadingContainer = tw.div`text-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto`;

const Posts = tw.div`mt-12 flex flex-wrap -mr-3 relative`;
const Post = tw.a`flex flex-col h-full bg-white rounded`;
const PostImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-64 sm:h-80 bg-center bg-cover rounded-t`}
`;
// const PostText = tw.div`flex-1 px-6 py-8`;
// const PostTitle = tw.h6`font-bold group-hocus:text-primary-500 transition duration-300 `;
// const PostDescription = tw.p``;
// const AuthorInfo = tw.div`flex`;
// const AuthorImage = tw.img`w-12 h-12 rounded-full mr-3`;
// const AuthorTextInfo = tw.div`text-xs text-gray-600`;
// const AuthorName = tw.div`font-semibold mt-2`;
// const AuthorProfile = tw.div`pt-1 font-medium`;

const PostContainer = styled.div`
  ${tw`relative z-20 mt-10 sm:pt-3 pr-3 w-full sm:w-1/2 lg:w-1/3 max-w-sm mx-auto sm:max-w-none sm:mx-0`}

  ${(props) =>
    props.featured &&
    css`
      ${tw`w-full sm:w-full lg:w-2/3`}
      ${Post} {
        ${tw`sm:flex-row items-center sm:pr-3`}
      }
      ${PostImage} {
        ${tw`sm:h-80 sm:min-h-full w-full sm:w-1/2 rounded-t sm:rounded-t-none sm:rounded-l`}
      }
    `}
`;

const DecoratorBlob1 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 w-32 h-32 mb-3 ml-3 transform -translate-x-1/2 translate-y-1/2 fill-current text-gray-500 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 w-32 h-32 mt-16 mr-6 transform translate-x-1/2 -translate-y-1/2 fill-current text-gray-500 opacity-50`;

export default ({
  subheading = "",
  heading = "Photos",
  description = "",
  posts = [
    {
      postImageSrc:
        "https://images.pexels.com/photos/690597/pexels-photo-690597.jpeg?cs=srgb&dl=pexels-haste-leart-v-690597.jpg&fm=jpg",
      // authorImageSrc:
      //   "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.95&w=512&h=512&q=80",
      // title: "Enjoying the beach life while on a vacation",
      // description:
      //   "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      // authorName: "Adam Cuppy",
      // authorProfile: "Vlogger",
      // url: "https://reddit.com",
      // featured: true,
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      // title: "Getting the most out of your vacation",
      // authorName: "Aaron Patterson",
      // url: "https://reddit.com",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1621976498727-9e5d56476276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      // title: "Choosing the perfect Safaris in Africa",
      // authorName: "Sam Phipphen",
      // url: "https://reddit.com",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1523354177913-be035fcee55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      // title: "Hiking during the monsoon in Asia",
      // authorName: "Tony Hawk",
      // url: "https://timerse.com",
    },
    {
      postImageSrc:
        "https://images.pexels.com/photos/209948/pexels-photo-209948.jpeg?cs=srgb&dl=pexels-pixabay-209948.jpg&fm=jpg",
      // title: "Must carry items while travelling to Thailand",
      // authorName: "Himali Turn",
      // url: "https://timerse.com",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1537365587684-f490102e1225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      // title: "Must carry items while travelling to Thailand",
      // authorName: "Himali Turn",
      // url: "https://timerse.com",
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Posts>
          {posts.map((post, index) => (
            <PostContainer featured={post.featured} key={index}>
              <Post className="group" href={post.url}>
                <PostImage imageSrc={post.postImageSrc} />
                {/* <PostText>
                  <PostTitle>{post.title}</PostTitle>
                  {post.featured && (
                    <PostDescription>{post.description}</PostDescription>
                  )}
                  <AuthorInfo>
                    {post.featured && <AuthorImage src={post.authorImageSrc} />}
                    <AuthorTextInfo>
                      <AuthorName>{post.authorName}</AuthorName>
                      {post.featured && (
                        <AuthorProfile>{post.authorProfile}</AuthorProfile>
                      )}
                    </AuthorTextInfo>
                  </AuthorInfo>
                </PostText> */}
              </Post>
            </PostContainer>
          ))}
          <DecoratorBlob1 />
          <DecoratorBlob2 />
        </Posts>
      </ContentWithPaddingXl>
    </Container>
  );
};
