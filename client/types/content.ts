type Content = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

interface Contents {
  contents: Content[];
}

type ImageType = {
  src: string;
  alt: string;
  title: string;
  view: number;
};

interface ImageTypes {
  images: ImageType[];
}
