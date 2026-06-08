import { hasPermission, hasAtLeastOnePermission } from '../../../app/authorization/client';
import { createSidebarItems } from '../../lib/createSidebarItems';

export const {
	registerSidebarItem: registerAdminSidebarItem,
	unregisterSidebarItem,
	getSidebarItems: getAdminSidebarItems,
	subscribeToSidebarItems: subscribeToAdminSidebarItems,
} = createSidebarItems([
	{
		href: '/admin/users',
		i18nLabel: 'Users',
		icon: 'team',
		permissionGranted: (): boolean => hasPermission('view-user-administration'),
	},
	{
		href: '/admin/invites',
		i18nLabel: 'Invites',
		icon: 'user-plus',
		permissionGranted: (): boolean => hasPermission('create-invite-links'),
	},
	{
		href: '/admin/user-status',
		i18nLabel: 'User_Status',
		icon: 'user',
		permissionGranted: (): boolean => hasAtLeastOnePermission(['manage-user-status']),
	},
	{
		href: '/admin/permissions',
		i18nLabel: 'Permissions',
		icon: 'user-lock',
		permissionGranted: (): boolean => hasAtLeastOnePermission(['access-permissions', 'access-setting-permissions']),
	},
]);
