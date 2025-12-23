import Link from "next/link";
import styles from "./Main.module.css";

const menuItems = [
  { href: "/", label: "Розыск" },
  { href: "/hunters", label: "Охотникам" },
  { href: "/claim", label: "Подать иск" },
  { href: "/about", label: "О проекте" },
  { href: "/support", label: "Поддержать" },
];

function MenuNav({ currentPath }) {
  return (
    <section role="menu-categories" className={styles.menu}>
      <ul className={styles.menu_items}>
        {menuItems.map(item => {
          const isActive = currentPath === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={isActive ? "active" : ""}
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
