import { Link } from '@tanstack/react-router';
import { Button } from '../ui/button';

export const Header = () => {
  return (
    <div id="header" className="p-3 border-b border-gray-200">
      <div className="flex gap-x-4">
        <Link to="/market">
          <Button variant="link" className="h-fit p-0 px-2">
            market
          </Button>
        </Link>
        <Link to="/admin">
          <Button variant="link" className="h-fit p-0 px-2">
            admin
          </Button>
        </Link>
      </div>
    </div>
  );
};
