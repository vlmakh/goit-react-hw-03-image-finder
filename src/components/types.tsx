export type StateType = {
  showLoader: boolean;
  showStartTitle: boolean;
  images: string[];
  page: number;
  query: string;
  totalFound: number;
  scroll: number;
};

export type LoadMoreType = {
  loadMore: () => void;
};

export type OnSumbitType = {
  onSubmit: (searchQuery: string) => void;
};

export type ImageType = {
  id: number;
  largeImageURL: string;
  webformatURL: string;
  tags: string;
};

export type ImagesType = {
  images: Array<ImageType>;
};
