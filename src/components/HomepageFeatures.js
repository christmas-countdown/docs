import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
	{
		title: 'Discord bot',
		link: '/discord/introduction',
		Svg: require('../../static/img/undraw_Chat_re_re1u.svg').default,
		description: (
			<>
				Documentation for the Christmas Countdown Discord bot.
			</>
		),
	},
	{
		title: 'API',
		link: '/api/introduction',
		Svg: require('../../static/img/undraw_programmer_imem.svg').default,
		description: (
			<>
				Documentation for the Christmas Countdown API.
			</>
		),
	},
	{
		title: 'Other',
		link: '/other/introduction',
		Svg: require('../../static/img/undraw_Resume_folder_re_e0bi.svg').default,
		description: (
			<>
				Documentation for other Christmas Countdown projects.
			</>
		),
	},
];

function Feature({ Svg, title, description, link }) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} alt={title} />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
				<Link
					className="button button--secondary button--lg"
					to={link}>
					{title} docs
				</Link>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
