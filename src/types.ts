export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  content: string | string[];
  visualType: string;
  props?: any;
  sources?: { label: string; url: string }[];
}
