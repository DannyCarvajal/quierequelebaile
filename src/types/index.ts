export interface DanceStep  {
    id: string;
    name: string;
    level: number;     
    description?: string;
    iconURL?: string;
    videoURL?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
