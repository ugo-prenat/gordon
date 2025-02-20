export const buildCardId = (cardTypeId: string) => {
  const uuid = crypto.randomUUID().split('-');
  uuid.splice(1, 1, cardTypeId);
  return uuid.join('-');
};
