import { IDriver } from '@gordon/models';

const scrap = () => {
  const driver: IDriver = {
    id: 1,
    name: 'Roman Staněk'
  };

  console.log(driver);
};

scrap();
