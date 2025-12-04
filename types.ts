import { ReactNode } from "react";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string; // Markdown content
  tags: string[];
  author: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  path: string;
  color: string;
}