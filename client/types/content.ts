export type Content = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export interface Contents {
  contents: Content[];
}

export type ImageType = {
  src: string;
  alt: string;
  title: string;
  view: number;
};

export interface ImagesType {
  images: ImageType[];
}
