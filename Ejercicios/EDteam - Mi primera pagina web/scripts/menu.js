const activeMenu = () => {
  const openMenuButton = document.getElementById('open-menu-button')
  const closeMenuButton = document.getElementById('close-menu-button')
  const mainMenu = document.getElementById('main-menu')

  // si los 3 elementos existen, los 3 existen a la vez
  if (openMenuButton && mainMenu && closeMenuButton) {
    openMenuButton.addEventListener('click', () => {
      mainMenu.classList.add('active') // activa el menu
    })
    closeMenuButton.addEventListener('click', () => {
      mainMenu.classList.remove('active') // desactiva el menú
    })
  }
}

activeMenu()
