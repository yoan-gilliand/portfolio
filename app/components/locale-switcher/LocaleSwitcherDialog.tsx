'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { routing } from '../../../i18n/routing';
import { usePathname, useRouter } from '../../../i18n/routing';
import { Locale } from '../../../i18n/routing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function LocaleSwitcherDialog() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const changeLocale = (nextLocale: Locale) => {
        router.replace(pathname, { locale: nextLocale });
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-[#e4ded7] hover:text-[#c0b8af] transition-colors"
                aria-label={t('label')}
            >
                <FontAwesomeIcon icon={faGlobe} className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#0E1016] ring-1 ring-[#e4ded7] ring-opacity-10">
                    <div className="py-1">
                        {routing.locales.map((cur) => (
                            <button
                                key={cur}
                                onClick={() => changeLocale(cur)}
                                className="block w-full px-4 py-2 text-sm text-[#e4ded7] hover:bg-[#1a1d24]"
                            >
                                {t('locale', { locale: cur })}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}