


export interface INews{
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IUser{
  username: string;
  password: string;
}

export interface IAuthInitialState{
  isAuthorized: boolean
  users: IUser[]
  currentUser: string
}

export interface IAppInitialState{
  news: INews[]
  loadedNews: number
  isFetching: boolean
  isFetchingError: boolean
}