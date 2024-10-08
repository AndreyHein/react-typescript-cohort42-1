export interface Uni {
  web_pages: string[];
  name: string;
  province?: string;
  country: string;
}

export interface UniversityListProps {
  unis: Uni[];
}

export interface ErrorMessageProps {
  message: string;
}
