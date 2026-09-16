import "./AppLayout.css";

function AppLayout({ children, warping }) {
  return (
    <div className={`app-layout ${warping ? "app-layout--warping" : ""}`}>
      {children}
    </div>
  );
}

export default AppLayout;