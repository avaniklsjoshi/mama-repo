export interface ISingleExperience {
  title: string;
  span: string;
  role: string;
  projects: string;
  info: {
    tech: string[];
    role: string[];
  };
  thumbnail: string;
}

export interface IExperienceTimeline {
  data: ISingleExperience[];
}
