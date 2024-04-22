import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface LangLinkProps {
  to?: string;
  children: React.ReactNode | string;
  className?: string;
  replace?: boolean;
}
function LangLink({ to = "", replace, children, className }: LangLinkProps) {
  const { i18n } = useTranslation();
  const lng = i18n.language?.startsWith("ar") ? "/ar" : "/en";
  return (
    <Link to={lng + to} replace={replace} className={className}>
      {children}
    </Link>
  );
}

export default LangLink;
