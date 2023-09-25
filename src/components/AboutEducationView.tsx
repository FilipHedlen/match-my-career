import {
  DigiButton,
  DigiTypography,
  DigiTypographyHeadingJumbo,
} from '@digi/arbetsformedlingen-react';
import {
  ButtonVariation,
  TypographyHeadingJumboLevel,
  TypographyVariation,
} from '@digi/arbetsformedlingen';
import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { Link } from 'react-router-dom';
import '../style/_aboutview.scss';

export const AboutEducationView = () => {
  const { search } = useContext(SearchContext);
  const education = search.showAboutView;

  return (
    <DigiTypography afVariation={TypographyVariation.SMALL}>
      <div className='about-education-container' key={education.id}>
        <DigiTypographyHeadingJumbo
          afText={education.education.title[0].content}
          afLevel={TypographyHeadingJumboLevel.H2}
        ></DigiTypographyHeadingJumbo>
        <p>
          <strong>Code: </strong>
          {education.education.code}
        </p>
        <p>
          <strong>Id: </strong>
          {education.id}
        </p>
        <p>
          <strong>Utbildningsform: </strong>
          {education.education.form.code}
        </p>
        <p>
          <strong>Beskrivning: </strong>
          {education.education.description[0].content}
        </p>
        <h3>Utbildningssamordnare: </h3>
        <p>{education.education_providers[0].name[0].content}</p>
        <p>{education.education_providers[0].urls[0].content}</p>
        <h3>Utbildningstillfällen: </h3>
        <p>
          <strong>Startdatum: </strong>
          {education.events[0].execution.start}
        </p>
        <p>
          <strong>Utbildningssamordnare: </strong>
          {education.events[0].provider}
        </p>
        <p>
          <strong>Länk: </strong>
          {education.events[0].urls[0].content}
        </p>
        <p>
          <strong>Utbildningsperiod: </strong>
          {education.events[0].execution.start} -
          {education.events[0].execution.end}
        </p>
        <p>
          <strong>Studietakt: </strong>
          {education.events[0].paceOfStudyPercentage} %
        </p>
      </div>
      <div className='back-btn-div'>
        <DigiButton afVariation={ButtonVariation.SECONDARY}>
          <Link to={'/search'}>Tillbaka</Link>
        </DigiButton>
      </div>
    </DigiTypography>
  );
};
