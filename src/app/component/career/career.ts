export interface Career {
  position: { id: string; label: string };
  experience: string;
  requireLang: string[];
  role: { label: string; objectives: { responsiblity: string }[] }[];
}
