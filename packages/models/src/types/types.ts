export type PartialWithId<T extends { id: string | number }> = Partial<T> &
  Pick<T, 'id'>;

export type WithDate<T> = T & {
  createdAt: Date;
};
