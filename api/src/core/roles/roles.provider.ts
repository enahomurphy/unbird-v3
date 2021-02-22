import { RolesGuard } from './roles.guard';

export const RolesProvider = {
  provide: 'APP_GUARD',
  useClass: RolesGuard,
};
