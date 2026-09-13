import type { ComponentType, SVGProps } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiPython,
  SiOpenjdk,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub,
} from "react-icons/si";

type IconProps = SVGProps<SVGSVGElement>;

/** Power BI não existe no pacote de ícones — desenhado com as barras da marca. */
function PowerBiIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.2 1.2h4.05c.5 0 .9.4.9.9v19.8c0 .5-.4.9-.9.9H13.2a.9.9 0 0 1-.9-.9V2.1c0-.5.4-.9.9-.9Z" />
      <path
        d="M7.05 6.6H11.1c.5 0 .9.4.9.9v14.4c0 .5-.4.9-.9.9H7.05a.9.9 0 0 1-.9-.9V7.5c0-.5.4-.9.9-.9Z"
        opacity=".75"
      />
      <path
        d="M.9 12h4.05c.5 0 .9.4.9.9v9c0 .5-.4.9-.9.9H.9a.9.9 0 0 1-.9-.9v-9c0-.5.4-.9.9-.9Z"
        opacity=".5"
      />
      <path
        d="M19.05 1.2h4.05c.5 0 .9.4.9.9v19.8c0 .5-.4.9-.9.9h-4.05a.9.9 0 0 1-.9-.9V2.1c0-.5.4-.9.9-.9Z"
        opacity=".92"
      />
    </svg>
  );
}

/** Excel também não existe no pacote — planilha com o "X" da marca. */
function ExcelIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M14.4 2.4H4.8A1.8 1.8 0 0 0 3 4.2v15.6a1.8 1.8 0 0 0 1.8 1.8h9.6V2.4Z" opacity=".28" />
      <path d="M14.4 5.4H21v13.2a1.8 1.8 0 0 1-1.8 1.8h-4.8V5.4Z" opacity=".5" />
      <path d="M0 4.8 13.2 2.4v19.2L0 19.2V4.8Z" />
      <path
        d="m3.3 8.4 2.03 3.5L3.15 15.6h1.72l1.34-2.42 1.32 2.42h1.76l-2.2-3.72L9.2 8.4H7.5L6.3 10.6 5.1 8.4H3.3Z"
        fill="#fff"
      />
      <path d="M16.2 8.1h4.2v1.5h-4.2V8.1Zm0 3.15h4.2v1.5h-4.2v-1.5Zm0 3.15h4.2v1.5h-4.2v-1.5Z" opacity=".8" />
    </svg>
  );
}

const icons: Record<string, ComponentType<IconProps>> = {
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  react: SiReact,
  python: SiPython,
  java: SiOpenjdk,
  mysql: SiMysql,
  sqlite: SiSqlite,
  git: SiGit,
  github: SiGithub,
  powerbi: PowerBiIcon,
  excel: ExcelIcon,
};

export function TechIcon({ name, ...props }: { name: string } & IconProps) {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}
