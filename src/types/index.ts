export interface DanceStep {
  id: string;
  name: string;
  level: 0 | 1 | 2 | 3;
  description?: string;
  iconURL: string;
  videoURL?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
