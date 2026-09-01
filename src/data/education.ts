export interface EducationItem {
  type: "Graduação" | "Especialização";
  title: string;
  institution: string;
  note?: string;
}

export const education: EducationItem[] = [
  { type: "Graduação", title: "Comunicação", institution: "Metodista" },
  { type: "Especialização", title: "Product Manager", institution: "PM3" },
  { type: "Especialização", title: "Growth Hacking", institution: "Gama Academy", note: "1ª Turma" },
];
