import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { INews } from "../../../types/types";
import { Delete } from "@mui/icons-material";
import { useDeleteNewsMutation } from "redux/api/api";

interface Props {
  post: INews;
}

export const SingleNews = ({ post }: Props) => {
  const [deleteNews, { error }] = useDeleteNewsMutation();

  return (
    <Card sx={{ mb: 2, bgcolor: "primary.lightgray" }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" color="primary.dark" sx={{ fontWeight: "bold" }}>
            {post.title}
          </Typography>
          <Box>
            <IconButton onClick={() => deleteNews(post.id)}>
              <Delete />
            </IconButton>
          </Box>
        </Box>
        <Typography color="primary" sx={{ fontWeight: 500 }}>
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
};
