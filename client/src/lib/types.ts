import { Photo } from "@shared/schema";

export type Category = {
  id: string;
  name: string;
};

export type PhotoWithCategory = Photo & {
  category: string;
};

export type PortfolioCategory = "all" | "portraits" | "travel" | "street" | "nature";
