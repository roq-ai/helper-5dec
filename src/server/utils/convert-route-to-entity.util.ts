const mapping: Record<string, string> = {
  organizations: 'organization',
  projects: 'project',
  tasks: 'task',
  updates: 'update',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
