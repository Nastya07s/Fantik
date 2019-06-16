import {Chapter} from "./Chapter";

export class Article {
  _id: String;
  name: String;
  author: String;
  description: String;
  createDate: Date;
  updateDate:  Date;
  rating:  Number;
  chapters:  Chapter[];
  genre:  {
    _id: String,
    name: String,
  };
}
