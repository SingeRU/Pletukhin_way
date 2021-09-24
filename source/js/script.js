const tabsBtn = document.querySelectorAll('.tabs__nav-button');
const tabs = document.querySelectorAll('.tabs__content-container');
const prices = document.querySelectorAll('.prices__card')

tabsBtn.forEach((item) => {
  item.addEventListener('click', () => {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);  
      
    if(!currentBtn.classList.contains('tabs__nav-button--active')) {
        tabsBtn.forEach((item) => {
        item.classList.remove('tabs__nav-button--active');
    })

    if(!currentTab.classList.contains('tabs__content-container--active')) {
      tabs.forEach((item) => {
        item.classList.remove('tabs__content-container--active');
      })
    }
    
    currentBtn.classList.add('tabs__nav-button--active');
    currentTab.classList.add('tabs__content-container--active');
    }

  })
})

prices.forEach((item) => {
  item.addEventListener('click', () => {
    let currentPrice = item;

    if(!currentPrice.classList.contains('prices__card--active')) {
      prices.forEach((item) => {
        item.classList.remove('prices__card--active');
      })
    }

    currentPrice.classList.add('prices__card--active');
  })
})


