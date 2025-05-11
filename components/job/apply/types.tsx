export interface Education {
  degree: string;
  institution: string;
  year_completed: string;
  field_of_study: string;
}

export interface Experience {
  job_title: string;
  institution_name: string;
  start_date: string;
  end_date: string;
  responsibilities: string;
  achievements: string;
}

export interface ApplyFormProps {
  jobId: string;
}

export interface ApplyFormData {
  personal_info: {
    name: string;
    email: string;
    country: string;
    twitter?: string;
    linkedin?: string;
    telegram?: string;
    discord?: string;
    affiliation?: string;
    title?: string;
    preferred_contact:
      | "email"
      | "twitter"
      | "linkedin"
      | "telegram"
      | "discord";
  };
  educations: Education[];
  experiences: Experience[];
  cover_letter: string;
}
