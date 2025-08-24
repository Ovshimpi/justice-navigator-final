export interface Statute {
  id: string;
  title: string;
  description: string;
  year: number;
  act_no: number;
  category: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  category: string;
  modules: number;
  duration: string;
}
