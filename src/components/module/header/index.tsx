"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";

export const Header = () => {
	const pathname = usePathname();

	const menuItems = [
		{ href: "/", label: "Главная" },
		{ href: "/news", label: "Новости" },
		{ href: "/works", label: "Наши работы" },
		{ href: "/service", label: "Услуги" },
		{ href: "/about", label: "О нас" },
		{ href: "/contact", label: "Контакты" },
	];

	return (
		<header className={styles.header}>
			<div className={styles.header_wrapper}>
				<div className={styles.header_logo}>
					<Link href="/">
						<h3 className={styles.h3}>aksoft</h3>
					</Link>
				</div>
				<div className={styles.header_menu}>
					<ul className={styles.menu_list}>
						{menuItems.map((item) => (
							<li
								key={item.href}
								className={`${styles.menu_item} ${
									pathname === item.href ? styles.active : ""
								}`}>
								<Link href={item.href}>{item.label}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</header>
	);
};
