import { Page } from '@/components/nav/Page';
import { RegisterForm } from './RegisterForm';

export const LandingPage = () => {
  return (
    <Page padding className="flex flex-col items-center justify-center">
      <div className="h-full flex flex-col items-center justify-center">
        <RegisterForm />
      </div>
    </Page>
  );
};
