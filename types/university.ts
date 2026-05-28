export interface University {
  id: number;
  name: string;
  city: string;
  state: string;
  url: string | null;
  size: number | null;
  admissionRate: number | null; // 0.0–1.0
  satAvg: number | null;        // composite average
}
