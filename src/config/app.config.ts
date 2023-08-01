interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Team Lead'],
  customerRoles: [],
  tenantRoles: ['Team Member'],
  tenantName: 'Organization',
  applicationName: 'Helper',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
