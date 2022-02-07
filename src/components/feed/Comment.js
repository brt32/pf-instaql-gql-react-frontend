import { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FatText } from "../shared";

const CommentContainer = styled.div`
  margin-bottom: 7px;
`;

const CommentCaption = styled.span`
  margin-left: 10px;
  a {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Comments({ author, payload }) {
  return (
    <CommentContainer>
      <FatText>{author}</FatText>
      <CommentCaption>
        {payload.split(" ").map((word, index) =>
          /#[\w]+/.test(word) ? (
            <Link key={index} to={`/hashtags/${word}`}>
              {word}{" "}
            </Link>
          ) : (
            <Fragment key={index}>{word} </Fragment>
          )
        )}
      </CommentCaption>
    </CommentContainer>
  );
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};

export default Comments;