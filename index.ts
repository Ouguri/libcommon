export interface User {
  username: string;
  password?: string;
  token?: string;
}

export interface Article {
  content: string;
  title: string;
  topic?: string;
  id?: string;
}
