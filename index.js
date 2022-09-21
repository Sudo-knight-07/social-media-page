// SIDEBAR 
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES 
const messageNotification = document.querySelector('#message-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME 

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span')
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// ============== SIDEBAR ============= 

// remove active classs from all menu items 
const changeActiveitem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active');
  })
}

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveitem();
    item.classList.add('active');
    if (item.id != 'notifications') {
      document.querySelector('.notification-popup').style.display = 'none';
    } else {
      document.querySelector('.notification-popup').style.display = 'block';
      document.querySelector('#notifications .notification-count').style.display = 'none';
    }
  })
})

// =============== MESSAGE ============= 

// search chat 

const searchMessage = () => {
  const val1 = messageSearch.value.toLowerCase();
  message.forEach(user => {
    let userName = user.querySelector('.Mname').textContent.toLowerCase();
    if (userName.indexOf(val1) != -1) {
      user.style.display = 'flex';
    } else {
      user.style.display = 'none'
    }
  })
}

messageSearch.addEventListener('keyup', searchMessage);

// highlight message car 

messageNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  messageNotification.querySelector('.notification-count').style.display = ' none';
  setTimeout(() => {
    messages.style.boxShadow = 'none'
  }, 2000);
})


// THEME/Display CUSTOMIZATION 

// Open Modal 

const openThemeModal = () => {
  themeModal.style.display = 'grid'
}

theme.addEventListener('click', openThemeModal);

// Close Modal

const closeThemeModal = (e) => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }

}

themeModal.addEventListener('click', closeThemeModal);


// ============ FONTS ==============
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active');
  })
}

fontSizes.forEach(size => {
  size.addEventListener('click', () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');
    if (size.classList.contains('font-size-1')) {
      fontSize = "10px"
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '5.4rem');
    } else if (size.classList.contains('font-size-2')) {
      fontSize = "13px"
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '-7rem');
    } else if (size.classList.contains('font-size-3')) {
      fontSize = "16px"
      root.style.setProperty('--sticky-top-left', '-2rem');
      root.style.setProperty('--sticky-top-right', '-17rem');
    } else if (size.classList.contains('font-size-4')) {
      fontSize = "19px"
      root.style.setProperty('--sticky-top-left', '-5rem');
      root.style.setProperty('--sticky-top-right', '-25rem');
    } else if (size.classList.contains('font-size-5')) {
      fontSize = "22px"
      root.style.setProperty('--sticky-top-left', '-12rem');
      root.style.setProperty('--sticky-top-right', '-35srem');
    }
    //change font size of root html element 
    document.querySelector('html').style.fontSize = fontSize;
  })
})


//  Change primary colors 

const changeActiveColorClass = () => {
  colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove('active');
  })
}
colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    changeActiveColorClass();
    let primaryHue;
    if (color.classList.contains('color-1')) {
      primaryHue = 252;
    } else if (color.classList.contains('color-2')) {
      primaryHue = 352;
    } else if (color.classList.contains('color-3')) {
      primaryHue = 152;
    } else if (color.classList.contains('color-4')) {
      primaryHue = 52;
    } else if (color.classList.contains('color-5')) {
      primaryHue = 202;
    }
    color.classList.add('active')
    root.style.setProperty('--primary-color-hue', primaryHue)
  })
})

// theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
  Bg1.classList.add('active');
  Bg2.classList.remove('active');
  Bg3.classList.remove('active');
  window.location.reload();
})

Bg2.addEventListener('click', () => {
  lightColorLightness = '15%';
  whiteColorLightness = '20%';
  darkColorLightness = '95%';
  Bg2.classList.add('active');
  Bg1.classList.remove('active');
  Bg3.classList.remove('active');
  changeBg();
})

Bg3.addEventListener('click', () => {
  lightColorLightness = '0%';
  whiteColorLightness = '10%';
  darkColorLightness = '95%';
  Bg3.classList.add('active');
  Bg1.classList.remove('active');
  Bg2.classList.remove('active');
  changeBg();
})
//End