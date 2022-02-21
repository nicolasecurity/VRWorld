const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal(`.main_text, .card_space, .aur1, .aur2`, {delay: 600, origin: 'left'})
sr.reveal(`.robot_img`, {origin: 'right'})
sr.reveal(`.aur3, .aur4, .nav_mid, .logo, .nav_right`, {origin: 'top'})
sr.reveal(`.card_text, .rect, .rect_under`, {delay: 900, origin: 'top'})

sr.reveal(``, {origin: 'top', interval: 100})