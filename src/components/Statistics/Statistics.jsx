import styles from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function Statistics({ title, stats }) {
  return (
    <section className={styles['statistics']}>
      <h2 className={styles['title']}>{title}</h2>
      <ul className={styles['stat-list']}>
        {stats.map(({ id, label, percentage }) => {
          const color = getRandomHexColor();
          return (
            <li
              className={styles['item']}
              style={{ backgroundColor: color }}
              key={id}
            >
              <span className={styles['label']}>{label}</span>
              <span className={styles['percentage']}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default Statistics;
