export interface MarginOptions {
  top: string;
  right: string;
  bottom: string;
  left: string;
}

export interface MarkedOptions {
  headerIds: boolean;
  smartypants: boolean;
}

export interface LaunchOptions {
  args: string[];
}

export interface PDFOptions {
  format: 'A4' | 'A3' | 'A5' | 'Letter' | 'Legal' | 'Tabloid';
  margin: MarginOptions;
  printBackground: boolean;
  headerTemplate: string;
  footerTemplate: string;
  displayHeaderFooter?: boolean;
  preferCSSPageSize?: boolean;
  landscape?: boolean;
}

export interface MD2PDFConfig {
  stylesheet: string;
  body_class: string;
  marked_options: MarkedOptions;
  launch_options: LaunchOptions;
  pdf_options: PDFOptions;
  stylesheet_encoding: 'utf-8' | 'utf-16' | 'ascii';
}

export interface ResumePersonalInfo {
  name: string;
  birthDate: string;
  location: string;
  education: string;
}

export interface CompanyExperience {
  period: string;
  company: string;
  position: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  description: string;
  impact?: string;
}