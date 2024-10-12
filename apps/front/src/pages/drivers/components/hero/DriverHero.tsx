import { Description } from '@/components/typography';
import { IDriver } from '@gordon/models';

export const DriverHero = ({ driver }: { driver: IDriver }) => {
  const {
    id,
    fullName,
    picturePath,
    numberLogoPath,
    dateOfBirth,
    activeChampionship,
    nationalityCountryCode
  } = driver;

  return (
    <div id="driver-hero" className="flex justify-between border-b">
      <div className="flex flex-col justify-end p-10">
        <NumberLogo numberLogoPath={numberLogoPath} id={id} />
        <h3 className="text-9xl font-extrabold mb-2">{fullName}</h3>
        <div className="flex gap-6">
          <Description>
            {new Date(dateOfBirth).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </Description>
          <Description>{activeChampionship.toUpperCase()}</Description>
          <Description>{nationalityCountryCode}</Description>
        </div>
      </div>
      <div className="overflow-hidden relative">
        <img
          src={picturePath}
          alt={`${id}-picture`}
          className="relative left-10 top-1/3 scale-[1.8]"
        />
        <div
          id="gradient"
          className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-b from-transparent to-background z-10"
        ></div>
      </div>
    </div>
  );
};

const NumberLogo = ({
  numberLogoPath,
  id
}: Pick<IDriver, 'numberLogoPath' | 'id'>) =>
  numberLogoPath ? (
    <img src={numberLogoPath} className="w-24" alt={`${id}-number-logo`} />
  ) : null;
