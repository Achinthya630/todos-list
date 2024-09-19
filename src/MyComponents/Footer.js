import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "realtive",
    top: "100vh",
    height:"200px",
    width: "100%",
    padding: "5px ",
    marginTop:"120px"
  }
  return (
    <footer className = "text-center bg-dark text-light" style={footerStyle}>
     <p>Copyright &copy; My Todos List</p>
    </footer>
  )
}

export default Footer
