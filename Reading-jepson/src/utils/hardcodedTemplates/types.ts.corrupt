/**
 * Types for hard-coded template system
 */

export interface HardcodedTemplate {
  id: string;
  name: string;
  weekNumber: number;
  quarter: 1 | 2 | 3 | 4;
  description: string;
  grade: string;
  unit: string;
  subject: 'ELA' | 'Science' | 'History';
  weekLength: 3 | 4 | 5;
  createFunction: (teacherUid: string) => Promise<string>;
}

export interface TemplatesByQuarter {
  quarter1: HardcodedTemplate[];
  quarter2: HardcodedTemplate[];
  quarter3: HardcodedTemplate[];
  quarter4: HardcodedTemplate[];
}