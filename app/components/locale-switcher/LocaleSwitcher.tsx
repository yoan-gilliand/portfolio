import { useTranslations } from 'next-intl';
import LocaleSwitcherDialog from './LocaleSwitcherDialog';

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher');

    return (
        <LocaleSwitcherDialog />
    );
}