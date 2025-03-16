import { RegistrationUser } from '@gordon/models';

export const buildDraftGuest = (): RegistrationUser => {
  const id = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, '0');

  return { id: `guest-${id}`, name: `Guest ${id}` };
};
