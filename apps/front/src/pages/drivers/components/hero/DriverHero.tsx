import { Description } from '@/components/typography';
import { IDriver } from '@gordon/models';

export const DriverHero = ({ driver }: { driver: IDriver }) => {
  const {
    id,
    fullName,
    pictureUrl,
    dateOfBirth,
    activeChampionship,
    nationalityCountryCode
  } = driver;

  return (
    <div id="driver-hero" className="flex justify-between border-b">
      <div className="flex flex-col justify-end p-10">
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
          src={pictureUrl}
          alt={`${id}-picture`}
          className="relative left-10 top-1/3 scale-[1.8]"
        />
      </div>
    </div>
  );
};
