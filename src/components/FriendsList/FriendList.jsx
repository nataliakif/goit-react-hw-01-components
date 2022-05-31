import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        let color = 'red';
        if (isOnline) {
          color = 'green';
        }
        return (
          <li className={styles['item']} key={id}>
            <span
              className={styles['status']}
              style={{ backgroundColor: color }}
            >
              {isOnline}
            </span>
            <img
              className={styles['avatar']}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={styles['name']}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}
export default FriendList;
