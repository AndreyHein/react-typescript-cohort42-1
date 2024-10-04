export interface Uni {
  web_pages: string[];
  name: string;
  province: string;
}

export interface UniversityListProps {
  unis: Uni[];
}

export interface ErrorMessageProps {
  message: string;
}
