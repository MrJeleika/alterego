import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import { SingleNews } from "./SigleNews/SingleNews";
import { useFetchNewsQuery } from "redux/api/api";
import { useSetFetchedData } from "hooks/useSetFetchedData";
import { setLoadedNews, setNews } from "redux/slices/appSlice";
import { Box, Button, Container, Typography, Skeleton, Card, CardContent } from "@mui/material";
import { Background } from "components/common/Background/Background";
import { useTranslation } from "react-i18next";

interface Props {}

export const News = (props: Props) => {
  const { news, loadedNews, isFetching } = useAppSelector((state) => state.app);
  const { data, isFetching: isDataFetching, isError } = useFetchNewsQuery();
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  useSetFetchedData(data, setNews, isDataFetching, isError);

  const loadMoreNews = (num: number) => {
    dispatch(setLoadedNews(num));
  };

  return (
    <Background url="https://cdn.discordapp.com/attachments/1079309153685737603/1079720354123092049/MrJeleika_illustration_of_forest_without_text_for_website_uxui_13cdbf81-5edd-4824-87f2-24bf34ab671d.png">
      <Container maxWidth="lg" sx={{ py: 3 }}>
        {isFetching ? (
          <Card>
            <CardContent>
              <Skeleton
                variant="rounded"
                width="20%"
                animation="wave"
                height={20}
                sx={{ bgcolor: "primary.light", mb: 2 }}
              />
              <Skeleton
                variant="rounded"
                width="100%"
                animation="wave"
                height={20}
                sx={{ bgcolor: "primary.light", mb: 1 }}
              />
              <Skeleton
                variant="rounded"
                width="100%"
                animation="wave"
                height={20}
                sx={{ bgcolor: "primary.light" }}
              />
            </CardContent>
          </Card>
        ) : (
          <Box>
            {news &&
              news.map((singleNews, i) =>
                i < loadedNews ? <SingleNews key={i} post={singleNews} /> : null
              )}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={() => loadMoreNews(loadedNews + 10)}
                variant="contained"
                sx={{ px: 4, py: 2, bgcolor: "primary.dark" }}
              >
                <Typography>{t("load_more")}</Typography>
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </Background>
  );
};
