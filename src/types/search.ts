export interface SearchResult {
  url: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
  title?: string;
  snippet?: string;
  address?: string;
  companyName?: string;
  description?: string;
  foundAt?: string;
}

export interface SearchResponse {
  results: SearchResult[];
  query: string;
  timestamp: string;
  totalResults: number;
  whatsappCount: number;
} 