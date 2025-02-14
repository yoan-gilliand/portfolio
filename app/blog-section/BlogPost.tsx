export interface BlogPost {
    id: number;
    title: string;
    url: string;
    readable_publish_date: string;
    cover_image: string;
    description: string;
    reading_time_minutes: number;
    public_reactions_count: number;
    tags: string;
}