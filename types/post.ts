export type Post = {
  id: number;
  title: string;
  quantity: number;
};

export type Posts = {
  posts: Array<Post>;
};
