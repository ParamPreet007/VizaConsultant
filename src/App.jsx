

function App() {
  // useEffect(() => {
  //   document.addEventListener("contextmenu", (event) => event.preventDefault())
  // }, [])
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forget-password" element={<AuthForgot />} />
      <Route path="*" element={<AppLayout />} />
      <Route path="/errorPage" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
