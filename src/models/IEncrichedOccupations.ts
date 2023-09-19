export interface IEnrichedOccupations {
  occupationLabel: string;
  metadata: {
    competencies: ICompetencies[];
  };
}

export interface ICompetencies {
  term: string;
  percent_for_occupation: string;
}
