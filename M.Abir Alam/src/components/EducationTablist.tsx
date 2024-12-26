import { useState } from 'react';
import Link from './Link';
import ListItem from './ListItem';
import useWindowWidth from '../hooks/use-window-width';
import { getBreakpointsWidth, getId } from '../utils/helper';

type Props = {
  education: {
    institution: string;
    institutionUrl: string;
    degree: string;
    started: string;
    upto: string;
    achievements: string[];
  }[];
};

const EducationTablist = ({ education }: Props) => {
  const [activeEducation, setActiveEducation] = useState(0);
  const windowWidth = useWindowWidth();

  const { institution, institutionUrl, degree, started, upto, achievements } =
    education[activeEducation];

  const sm = getBreakpointsWidth('sm');

  const sliderStyle =
    windowWidth <= sm
      ? {
          left: `calc(${activeEducation} * 120px)`,
        }
      : {
          top: `calc(${activeEducation} * 2.5rem)`,
        };

  return (
    <div className="flex flex-col sm:flex-row text-sm md:text-base gap-6 md:gap-10 min-h-[250px]">
      {/* Sidebar */}
      <div className="pb-28 font-mono text-xs sm:text-sm relative flex justify-start sm:flex-col overflow-scroll sm:overflow-auto sm:min-w-[150px]">
        {
  education.map(({ institution }, i) => (
    <button
      key={getId()}
      className={`h-20 min-w-[150px] sm:w-auto sm:px-5 sm:py-2 sm:!text-left capitalize hover:bg-accent-light hover:text-accent focus:outline-none focus:bg-accent-light focus:text-accent ${
        i === activeEducation ? 'text-accent font-medium' : ''
      }`}
      onClick={() => setActiveEducation(i)}
    >
      {institution}
    </button>
  ))
}

        {/* Slider */}
        <div className="absolute h-0.5 w-full sm:w-0.5 sm:h-full rounded-full bottom-0 sm:inset-0 left-0 bg-dark-3"></div>
        <div
          style={sliderStyle}
          className="absolute h-0.5 w-[120px] sm:w-0.5 sm:h-10 rounded-full bg-accent bottom-0 left-0 sm:inset-0 transition-all duration-250 delay-100 in-scroll"
        ></div>
      </div>

      {/* Content */}
      <div key={getId()} className="space-y-5 p-1">
        <div className="space-y-1">
          <h3 className="text-lg font-medium text-dark-2 capitalize">
            {degree}{' '}
            <Link href={institutionUrl} target="_blank" className="text-accent">
              @{institution}
            </Link>
          </h3>
          <p className="text-xs font-mono capitalize">
            <span>
              {started} - {upto}
            </span>
          </p>
        </div>

        {/* Achievements */}
        <ul className="space-y-2">
          {achievements.map((achievement) => (
            <ListItem key={getId()}>{achievement}</ListItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationTablist;
