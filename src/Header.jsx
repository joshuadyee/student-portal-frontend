import axios from 'axios'

export function Header() {

  const logoutStudent = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };


  return (
    <header>
      <nav>
        <a href="/">Home</a> | <a href="#">Link</a> |
        <a href="#" onClick={logoutStudent}> Log Out</a>
      </nav>
    </header>
  )
}
