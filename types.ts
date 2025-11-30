export type Category = 'App UI/UX' | '網站設計' | '網頁設計' | '平面設計';
export type SkillTag = string;

export interface CaseStudySection {
  title: string;
  items: {
    subtitle: string;
    description: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  tags: SkillTag[];
  thumbnail: string;
  description: string;
  client?: string;
  year: string;
  role: string;
  overview: string;
  isFeatured?: boolean;
  process: {
    problem: string;
    research: string;
    wireframing: string;
    final: string;
  };
  detailedCaseStudy?: CaseStudySection[];
  outcomes?: string[];
  gallery: string[];
}