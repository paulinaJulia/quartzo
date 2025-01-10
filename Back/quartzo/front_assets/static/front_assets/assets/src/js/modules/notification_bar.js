export default function initNotification() {
  const body = document.body;
  const btnOpenNotification = document.querySelector('[js-notification-open]')
  const sidebarNotification = document.querySelector('.alertas')

  let state = { open: false, delay: 150 }
  const { isTablet, debounceFunction } = GLOBAL


  const toggleSidebarNotification = (e) => {
    state.open = true;
    body.classList.remove("notification-closed")
    if (state.open) {
      // body.classList.add('notification-hover')
      body.classList.add("alerta-aberto")

    } else {
      body.classList.add("notification-closed")
      // body.classList.remove('notification-hover')
      body.classList.remove("alerta-aberto")


    }
  }




  const toggleOnHoverSideBar = (e) => {
    //funcao do jquery que me da mais certeza c o menu esta aberto ou n
    if (!isTablet) {
      state.open = $(sidebarNotification).is(":hover")
    }

    if (state.open) {
      body.classList.add('notification-hover')
      body.classList.add("alerta-aberto")


    } else {
      body.classList.remove('notification-hover')
      body.classList.remove("alerta-aberto")
      if (isTablet) {
        state.open = true
      }

    }
  }


  const closeNotificationBar = ({ target }) => {
    if (target.classList.contains('fundo-alerta') || target.hasAttribute('js-notification-close')) {
      body.classList.remove("alerta-aberto")
      // body.classList.remove('notification-hover')
      body.classList.add("notification-closed")
      open.state = false

    }



  }

  document.addEventListener('click', closeNotificationBar);
  btnOpenNotification && btnOpenNotification.addEventListener("click", debounceFunction(toggleSidebarNotification, state.delay))

  // if (isTablet) {
  //   sidebarNotification.addEventListener("click", toggleOnHoverSideBar)
  // } else {
  //   sidebarNotification && sidebarNotification.addEventListener('mouseenter', debounceFunction(toggleOnHoverSideBar, state.delay))
  //   sidebarNotification && sidebarNotification.addEventListener("mouseout", toggleOnHoverSideBar)

  // }




}


