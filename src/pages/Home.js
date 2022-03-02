import React, { useEffect, useState } from "react";
import { getPhotos } from "../api/getPhotos";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { AiOutlineHeart } from "react-icons/ai";
import {
  Container,
  IconButton,
  ImageListItemBar,
  ListSubheader,
} from "@mui/material";
import { useSelector } from "react-redux";
import { likePhoto } from "../redux/actions/photosActions";
export default function Home() {
  const [photos, setPhotos] = useState([]);
  const { category } = useSelector((state) => state.photos);
  useEffect(async () => {
    const obj = await getPhotos(category);
    if (obj.success) setPhotos(obj.data.photos);
  }, [category]);
  return (
    <>
      <Container>
        <ImageList>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">Free Photos</ListSubheader>
          </ImageListItem>
          {photos.map((item, index) => (
            <ImageListItem key={item.id}>
              <img
                src={`${item.src.large}?w=248&fit=crop&auto=format`}
                srcSet={`${item.src.large}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.alt}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.alt}
                subtitle={item.photographer}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                    onClick={() => likePhoto(index)}
                  >
                    <AiOutlineHeart />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  );
}
