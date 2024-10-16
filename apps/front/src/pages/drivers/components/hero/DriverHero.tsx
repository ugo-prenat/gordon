import { Description } from '@/components/typography';
import { IDriver } from '@gordon/models';
import { DriverHeroContainer } from './DriverHeroContainer';
import { cn } from '@/utils/tailwind.utils';
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
    <DriverHeroContainer picturePath={picturePath}>
      <div
        className={cn('h-full relative flex flex-col justify-end p-10', {
          'justify-between': numberLogoPath
        })}
      >
        {numberLogoPath && (
          <NumberLogo numberLogoPath={numberLogoPath} id={id} />
        )}
        <div>
          <div className="w-full lg:w-2/3 xl:w-2/3 2xl:w-4/5">
            <h3 className="text-4xl sm:text-7xl lg:text-9xl font-extrabold mb-2">
              {fullName}
            </h3>
          </div>
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
      </div>
    </DriverHeroContainer>
  );
};

const NumberLogo = ({
  numberLogoPath,
  id
}: Pick<IDriver, 'numberLogoPath' | 'id'>) =>
  numberLogoPath ? (
    <img src={numberLogoPath} className="w-24" alt={`${id}-number-logo`} />
  ) : null;
