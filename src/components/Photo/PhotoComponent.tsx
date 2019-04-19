import React from "react";
import PhotoStyles from "./PhotoStyles";

interface IPhotoComponentProps {
  photo: string | undefined;
}

const PhotoComponent = (props: IPhotoComponentProps) => (
  <PhotoStyles src={props.photo} />
);

export default PhotoComponent;
