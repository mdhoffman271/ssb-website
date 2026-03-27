import styles from './Hamburger.module.css';

function Hamburger({ isOpen, onClick }: { isOpen: boolean; onClick: () => void; }) {
  let classNames = styles.hamburger;
  if (isOpen) {
    classNames += ' ' + styles.open;
  }
  return (
    <div
      className={classNames}
      onClick={onClick}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
      tabIndex={0}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Hamburger;
