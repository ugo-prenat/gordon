import { F1Logo } from '@/assets/F1Logo';
import { F2Logo } from '@/assets/F2Logo';
import { OldF1Logo } from '@/assets/OldF1Logo';

export const MarketChassisTab = () => {
  return (
    <div className="p-6 flex flex-col gap-4">
      <div className="w-20 h-20 bg-blue-700">
        <F1Logo />
      </div>
      <div className="w-20 h-20 bg-blue-700">
        <OldF1Logo />
      </div>
      <div className="w-20 h-20 bg-blue-700">
        <F2Logo />
      </div>
      Market Chassis Tab
    </div>
  );
};
