import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import DefaultInput from '../../UI/DefaultInput';
import { ProductComment } from '../../../ts/productTypes';
import { useAddCommentMutation } from '../../../services/product';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import CommentText from './CommentText';
import Comment from './Comment';

type commentEditorProps = {
  comments: ProductComment[] | undefined;
  productId: number;
};

type newCommentValue = {
  description: string;
  date: string;
};

const Comments = ({ comments, productId }: commentEditorProps) => {
  const [addCommentMenu, setAddCommentMenu] = useState<boolean>(false);
  const [newComment, setNewComment] = useState<newCommentValue>({
    description: '',
    date: '',
  });
  const [addComment] = useAddCommentMutation();

  const SubmitHandler = () => {
    const isValidValue =
      newComment.date.trim() && newComment.description.trim();

    if (isValidValue) {
      addComment({ ...newComment, productId });
      setAddCommentMenu((prev) => !prev);
      setNewComment({
        description: '',
        date: '',
      });
    }
  };

  return (
    <Box sx={{ paddingX: '24px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <CommentText>Comments</CommentText>
        <Button onClick={() => setAddCommentMenu((prev) => !prev)}>Add</Button>
      </Box>
      {comments?.map((comment) => (
        <Comment {...comment} key={comment.id} />
      ))}

      {addCommentMenu && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <DefaultInput
            value={newComment.description}
            onChange={(e) =>
              setNewComment({ ...newComment, description: e.target.value })
            }
            placeholder="description"
          />
          <DefaultInput
            value={newComment.date}
            onChange={(e) =>
              setNewComment({ ...newComment, date: e.target.value })
            }
            placeholder="date"
          />

          <IconButton onClick={SubmitHandler}>
            <AddIcon />
          </IconButton>
        </div>
      )}
    </Box>
  );
};

export default Comments;
