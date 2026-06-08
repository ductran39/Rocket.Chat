import { NavBarGroup } from '@rocket.chat/fuselage';
import { useLayout } from '@rocket.chat/ui-contexts';
import { useTranslation } from 'react-i18next';

import NavBarItemCreateNew from './NavBarItemCreateNew';
import NavBarItemDirectoryPage from './NavBarItemDirectoryPage';
import NavBarItemHomePage from './NavBarItemHomePage';
import NavBarItemSort from './NavBarItemSort';
import NavBarPagesStackMenu from './NavBarPagesStackMenu';

const NavBarPagesGroup = () => {
	const { t } = useTranslation();
	const { isTablet, isMobile } = useLayout();

	return (
		<NavBarGroup aria-label={t('Pages_and_actions')}>
			{isTablet && <NavBarPagesStackMenu />}
			{!isTablet && (
				<>
					<NavBarItemHomePage title={t('Home')} />
					<NavBarItemDirectoryPage title={t('Directory')} />
				</>
			)}
			{!isMobile && <NavBarItemSort />}
			<NavBarItemCreateNew />
		</NavBarGroup>
	);
};

export default NavBarPagesGroup;
