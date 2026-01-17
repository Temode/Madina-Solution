export interface Announcement {
  id: string;
  title: string;
  location: string;
  city: string;
  views: number;
  image: string;
  isUrgent?: boolean;
}

export interface DigitalProduct {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  price: number;
  rating: number;
  totalReviews: number;
  image: string;
  category: 'ebook' | 'video' | 'document';
}

export interface Category {
  name: string;
  slug: string;
}
