export interface IFooterData {
  email: string;
  phone: number;
  social_links: { url: string; icon: string }[];
}

export interface IFooter {
  loading: boolean;
  error: string | null;
  footerData: IFooterData | null;
}
