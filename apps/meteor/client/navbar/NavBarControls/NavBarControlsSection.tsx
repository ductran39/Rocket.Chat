import { NavBarSection, NavBarGroup } from '@rocket.chat/fuselage';
import { useUser, useLayout } from '@rocket.chat/ui-contexts';
import { useTranslation } from 'react-i18next';

import { NavBarItemLoginPage, NavBarItemAdministrationMenu, UserMenu } from '../NavBarSettingsToolbar';

const NavBarControlsSection = () => {
	const { t } = useTranslation();
	const user = useUser();
	const { isMobile } = useLayout();

	if (isMobile) {
		return (
			<NavBarSection>
				<NavBarGroup aria-label={t('Workspace_and_user_preferences')}>
					<NavBarItemAdministrationMenu />
					{user ? <UserMenu user={user} /> : <NavBarItemLoginPage />}
				</NavBarGroup>
			</NavBarSection>
		);
	}

	return (
		<NavBarSection>
			<NavBarGroup aria-label={t('Workspace_and_user_preferences')}>
				<NavBarItemAdministrationMenu />
				{user ? <UserMenu user={user} /> : <NavBarItemLoginPage />}
			</NavBarGroup>
		</NavBarSection>
	);
};

export default NavBarControlsSection;
