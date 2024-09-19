export type PartialWithId<T extends { id: string }> = Partial<T> &
  Pick<T, 'id'>;

export type WithDate<T> = T & {
  createdAt: Date;
};
