export type Category =
  | "All"
  | "AI Images"
  | "AI Video Scripts"
  | "Photo Editing"
  | "Free AI Tools";

export interface PromptItem {
  id: number;
  title: string;
  category: Category;
  badge: string;
  prompt: string;
}

export interface ToolItem {
  id: number;
  name: string;
  category: string;
  description: string;
  url: string;
  tags: string[];
}