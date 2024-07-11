/**
 * LEGEND:
 * 2048 = YELLOW = Behind pace with leader
 * 2049 = GREEN = On pace with leader
 * 2051 = PURPLE = Fastest in this sector
 */
export const SectorMap = new Map<number, string>([
  [2048, "YELLOW"],
  [2049, "GREEN"],
  [2051, "PURPLE"],
]);
