import { useIntl } from "react-intl";

export const useI18n = () => {
  const intl = useIntl();
  const intlHelper = (id, values) => intl.formatMessage({ id }, values);
  return { intlHelper };
};