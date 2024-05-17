import "./NotFound404.css";
const NotFound404 = () => {
  return (
    <div style={{ margin: "0 auto", width: "50%" }}>
      <div className="main">
        <h1>Server Error</h1>
        <div className="error-code">404</div>
        <h2>Page Not Found</h2>
        <p className="lead">
          This page either doesn't exist, or it moved somewhere else.
        </p>
        <hr />
        <p>That's what you can do</p>
        <div className="help-actions">
          <a href="javascript:location.reload();">Reload Page</a>
          <a href="javascript:history.back();">Back to Previous Page</a>
          <a href="/">Home Page</a>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
