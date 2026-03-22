import "./App.css";

function App() {
  useEffect(() => {
    window.AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>

    </>
  );
}

export default App;
