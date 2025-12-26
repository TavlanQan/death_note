'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Main.module.css";

const menuItems = [
  { href: "/", label: "Розыск" },
  { href: "/about", label: "О проекте" },
  { href: "/hunters", label: "Охотникам" },
  { href: "/claim", label: "Подать иск" },
  { href: "/reab", label: "Выйти из реестра" },
  
  { href: "/support", label: "Поддержать" },
];

function MenuNav() {
  const rawPath = usePathname();
  const currentPath = rawPath && rawPath !== "/" && rawPath.endsWith("/")
    ? rawPath.slice(0, -1)
    : rawPath;

  return (
    <section role="menu-categories" className={styles.menu}>
      <ul className={styles.menu_items}>
        {menuItems.map(item => {
          const isActive = currentPath === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.menu_link} ${isActive ? styles.menu_link_active : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default MenuNav;
