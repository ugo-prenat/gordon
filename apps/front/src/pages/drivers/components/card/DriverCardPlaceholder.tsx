import { DriverCardImage } from '@/components/images/DriverCardImage';
import { Card, CardContent } from '@/components/ui/card';

export const DriverCardPlaceholder = () => {
  return (
    <div className="w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 p-2 opacity-80">
      <Card>
        <div className="relative">
          <DriverCardImage
            src="/v1728366207/driver-placeholder_bc3lai.png"
            alt="driver-placeholder"
            className="w-full h-auto opacity-40"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent h-1/3">
            <p className="text-center font-semibold text-lg absolute bottom-0 left-0 right-0"></p>
          </div>
        </div>
        <CardContent>
          <p className="text-muted-foreground">-</p>
        </CardContent>
      </Card>
    </div>
  );
};
