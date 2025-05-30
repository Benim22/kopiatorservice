export interface Product {
  id: string;
  created_at?: string;
  name: string | null;
  description: string | null;
  price: number | null;
  original_price?: number | null;
  status: string | null;
  type: string | null; // Kan vara 'A3', 'A4', etc.
  category?: string | null;
  brand?: string | null;
  features: string[] | null;
  image_url: string | null;
  thumbnail_url?: string | null;
  stock_quantity?: number | null;
  is_featured?: boolean | null;
  page_count?: number | null;
  color_type?: string | null; // 'color', 'mono'
  paper_sizes?: string[] | null; // ['A3', 'A4', 'A5']
  connectivity?: string[] | null; // ['USB', 'Ethernet', 'Wi-Fi']
  functions?: string[] | null; // ['Print', 'Scan', 'Copy', 'Fax']
  slug?: string | null;
}

export interface Database {
  public: {
    Tables: {
      products: {
        Row: Product;
        Insert: Partial<Product>;
        Update: Partial<Product>;
      };
      // ... andra tabeller kan definieras här
    };
    Views: {
      // ... vyer kan definieras här
    };
    Functions: {
      // ... funktioner kan definieras här
    };
  };
} 