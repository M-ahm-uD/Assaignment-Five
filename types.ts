export type Technology = {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  badge: string;
};