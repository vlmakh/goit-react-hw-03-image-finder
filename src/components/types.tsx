export type StateType = {
    showLoader: boolean,
    showStartTitle: boolean,
    images: string[],
    page: number,
    query: string,
    totalFound: number,
    scroll: number,
};

export type LoadMoreType = {
  loadMore: () => void;
}

