import styles from "./App.module.css";
import useApp from "./App.hook";

function App() {

  const {
    tabData,
    TAB_LIST,
    selectedTabId,
    tabClickHandler
  } = useApp();

  return (
    <main className={styles.container}>
      <header className={styles.tablist}>
        {
          TAB_LIST.map(tab => (
            <div 
              className={
                tab.id === selectedTabId ? 
                `${styles.tab} ${styles.tab_selected}`: `${styles.tab}`
              } 
              key={tab.id}
              onClick={tabClickHandler(tab.id)}
            >
              {tab.name}
            </div>
          ))
        }
      </header>
      <section className={styles.page}>
        <h1>{tabData}</h1>
      </section>
    </main>
  )
}

export default App