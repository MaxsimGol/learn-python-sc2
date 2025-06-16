import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Build Your First Bot in Minutes',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Get started quickly with a simple setup. This documentation will guide
        you from installation to creating a basic bot that can see and react.
      </>
    ),
  },
  {
    title: 'Powerful StarCraft II API',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Focus on your strategy. The framework gives you a high-level Python API
        to control units, manage your economy, build structures, and read the game state.
      </>
    ),
  },
  {
    title: 'Ready for Battle',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Create advanced AI for arena. Write sophisticated strategies, manage
        complex unit groups, and unleash your custom swarm on the ladder.
      </>
    ),
  },
];

function Feature({ title, description }) { // Note: Svg is no longer needed here
  return (
    <div className={clsx('col col--4')}>
      {/* The div that contained the Svg has been completely removed. */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
