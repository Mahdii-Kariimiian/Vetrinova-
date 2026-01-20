import { useLanguage } from "../i18n/LanguageContext";

const PricingCard = ({ titleKey, price, descriptionKeys, isDarkMode }) => {
    const { t } = useLanguage();

    return (
        <div
            className={`border rounded-md shadow-lg hover:shadow-xl p-6 flex flex-col items-center max-md:max-w-96 transition ${
                isDarkMode ? "hover:bg-darkGreen" : "hover:bg-slate-100"
            }`}
        >
            <h3 className="text-xl font-semibold text-center">
                {t(titleKey)}
            </h3>

            <p
                className={`text-lg mt-2 font-semibold ${
                    isDarkMode ? "text-lightGreen" : "text-darkGreen"
                }`}
            >
                {price}
            </p>

            <ul className="mt-4 space-y-2 text-sm">
                {Array.isArray(descriptionKeys) &&
                    descriptionKeys.map((key, index) => (
                        <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            {t(key)}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default PricingCard;
