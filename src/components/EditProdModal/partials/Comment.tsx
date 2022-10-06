import React from 'react';
import { useDeleteCommentMutation } from '../../../services/product';
import { ProductComment } from '../../../ts/productTypes';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CommentText from './CommentText';
import WarningAlert from '../../WarningAlert';

const Comment = (comment: ProductComment) => {
  const [deleteComent] = useDeleteCommentMutation();
  const [warnAlert, setWarnAlert] = React.useState(false);

  const toggleWarnAlert = () => {
    setWarnAlert((prev) => !prev);
  };

  const deleteFunc = () => {
    toggleWarnAlert();
    deleteComent(comment.id);
  };

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

      <IconButton onClick={toggleWarnAlert}>
        <DeleteIcon />
      </IconButton>
      <WarningAlert isOpen={warnAlert} toggle={toggleWarnAlert} toogleWithAction={deleteFunc}/>
    </Box>
  );
};

export default Comment;
