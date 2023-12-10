export interface Env {
  GITHUB_USERNAME: string;
}

export interface Contribution {
  date: string;
  level: string;
  count: number;
}

export interface Contributions {
  contributions: Contribution[];
}
