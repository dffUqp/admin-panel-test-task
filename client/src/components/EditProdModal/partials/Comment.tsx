import React from 'react';
import { useDeleteCommentMutation } from '../../../services/product';
import { ProductComment } from '../../../ts/productTypes';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CommentText from './CommentText';
import ConfirmModal from '../../ConfirmModal';
import { useToggle } from '../../../hooks/useToggle';

const Comment = (comment: ProductComment) => {
  const [deleteComment] = useDeleteCommentMutation();
  const [confirmModal, toggleConfirmModal] = useToggle();

  const deleteFunc = () => {
    toggleConfirmModal();
    deleteComment(comment.id);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <CommentText>{comment.description}</CommentText>
      <CommentText>{comment.date}</CommentText>

      <IconButton onClick={toggleConfirmModal}>
        <DeleteIcon />
      </IconButton>
      <ConfirmModal
        isOpen={confirmModal}
        toggle={toggleConfirmModal}
        toggleWithAction={deleteFunc}
      />
    </Box>
  );
};

export default Comment;
