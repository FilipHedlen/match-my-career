import { useContext } from 'react';
import { ResultCardContainer } from './ResultCardContainer';
import { SearchContext } from '../contexts/SearchContext';
import { DigiTypographyHeadingJumbo } from '@digi/arbetsformedlingen-react';
import { TypographyHeadingJumboLevel } from '@digi/arbetsformedlingen';

export const ResultContainer = () => {
  const { search } = useContext(SearchContext);

  return (
    <>
      {search.educations === null ? (
        <DigiTypographyHeadingJumbo
          af-Level={TypographyHeadingJumboLevel.H4}
          afText='Sökningen gav inget resultat'
        ></DigiTypographyHeadingJumbo>
      ) : (
        <div className='result'>
          <ResultCardContainer />
        </div>
      )}
    </>
  );
};
