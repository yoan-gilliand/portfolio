export interface GraphQLResponse {
  user: {
    publications: {
      edges: Array<{
        node: {
          posts: {
            edges: Array<{
              node: {
                id: string;
                title: string;
                url: string;
                publishedAt: string;
                coverImage?: { url: string };
                brief: string;
                readTimeInMinutes: number;
                reactionCount: number;
                tags: Array<{ name: string }>;
              };
            }>;
          };
        };
      }>;
    };
  };
}
