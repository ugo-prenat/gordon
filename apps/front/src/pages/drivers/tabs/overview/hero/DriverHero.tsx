import { Description } from '@/components/typography';
import { IDriver } from '@gordon/models';
import { DriverHeroContainer } from './DriverHeroContainer';
import { cn } from '@/utils/tailwind.utils';
import { buildPictureUrl } from '@/utils/images.utils';
import { Flag } from '@/components/Flag';
import { useCountryName } from '@/services/i18n/i18n.hooks';

export const DriverHero = ({ driver }: { driver: IDriver }) => {
  const {
    id,
    firstName,
    lastName,
    picturePath,
    numberLogoPath,
    dateOfBirth,
    activeChampionship,
    nationalityCountryCode
  } = driver;

  const nationality = useCountryName(nationalityCountryCode);

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
              {`${firstName} ${lastName}`}
            </h3>
          </div>
          <div className="flex gap-6 items-center">
            <Description>
              {new Date(dateOfBirth).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </Description>
            <Description>{activeChampionship.toUpperCase()}</Description>
            <Flag
              tooltip={nationality}
              countryCode={nationalityCountryCode}
              className="w-7 h-fit rounded-[2px]"
            />
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
    <img
      className="w-24"
      alt={`${id}-number-logo`}
      src={buildPictureUrl(numberLogoPath, 'w_200')}
    />
  ) : null;
