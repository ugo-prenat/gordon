import { Card, CardContent } from '@/components/ui/card';

export const DriverCardPlaceholder = () => {
  return (
    <div className="w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 p-2 opacity-80">
      <Card>
        <div className="relative">
          <img
            src="https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiJmMW1hbmFnZXIvMjAyNC9kcml2ZXJzL2hlYWRzaG90cy9mMS1hZmZpbGlhdGVzL3Nody5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMH19fQ=="
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
