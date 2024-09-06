import { useRouter } from "next/router";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Head from "next/head";
import styles from "./style.module.scss";

interface QueryParams {
	text?: string;
}

const ServiceAbout: NextPage = () => {
	const router = useRouter();
	const { text } = router.query as QueryParams;

	const [title, setTitle] = useState<string>("");
	const [name, setName] = useState<string>("");

	useEffect(() => {
		const storedTitle = localStorage.getItem("serviceTitle");
		const storedName = localStorage.getItem("serviceName");
		if (storedTitle) {
			setTitle(storedTitle);
		}
		if (storedName) {
			setName(storedName);
		}
	}, []);

	useEffect(() => {
		document.title = `Aksoft | ${text || "Загрузка..."}`;
	}, [text]);

	const formattedTitle = title.split(".").map((sentence, index) => (
		<span key={index}>
			{sentence.trim() && `${sentence.trim()}.`}
			<br />
		</span>
	));

	return (
		<div className={styles.lox}>
			<Head>
				<title>Aksoft | {text ? text : "Загрузка..."}</title>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE-edge" />
				<base href="aksoft.dev" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"></meta>
				<meta
					name="description"
					content="AKSOFT предлагает профессиональные услуги по разработке веб-сайтов и мобильных приложений любой сложности в Бишкеке. Мы создаем современные, функциональные и удобные решения для бизнеса. Наши специалисты имеют большой опыт работы с React и Java. Обращайтесь к нам, чтобы заказать индивидуальную разработку сайта или приложения под ваши задачи."></meta>
				<meta name="robots" content="index, follow"></meta>
				<meta name="author" content="AKSOFT"></meta>
			</Head>
			<div className={styles.box}>
				<button onClick={() => router.push("/service")}>
					<FaArrowLeftLong color="white" />
				</button>
				<p>{name}</p>
			</div>
			<p>{formattedTitle}</p>
		</div>
	);
};

export default ServiceAbout;
