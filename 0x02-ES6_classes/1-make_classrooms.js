import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const size19 = new ClassRoom(19);
  const size20 = new ClassRoom(20);
  const size34 = new ClassRoom(34);

  return [size19, size20, size34];
}
