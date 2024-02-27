export class book {
  id!: number;
  title!: string;
  author!: string;
  price!: number;
  tags?: string[];
  description?: string;
  coverImage?: string;
  rating?: number;
  imageUrl?: string;
  pages?: number;
}
