function setTitle() {
  if (window.location.pathname === "/") {
    document.title = "One-Chat";
  } else if (window.location.pathname === "/join") {
    document.title = "Join a Room";
  } else if (window.location.pathname === "/create") {
    document.title = "Create A Room";
  }
}

export default setTitle;
