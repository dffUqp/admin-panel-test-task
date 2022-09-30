import React from 'react';
import { useDeleteCommentMutation } from '../../../services/product';
import { ProductComment } from '../../../ts/productTypes';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CommentText from './CommentText';

const Comment = (comment: ProductComment) => {
  const [deleteComent] = useDeleteCommentMutation();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      key={comment.id}
    >
      <CommentText>{comment.description}</CommentText>
      <CommentText>{comment.date}</CommentText>

      <IconButton onClick={() => deleteComent(comment.id)}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default Comment;
