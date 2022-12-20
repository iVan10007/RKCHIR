var links = document.getElementsByTagName('a');
for (let link of links) {
    let href = link.getAttribute('href');
    if (!href) continue; // нет атрибута
    if (!href.includes('://')) continue; // нет протокола
    if (href.startsWith('http://autodrive.com')) continue; // внутренняя
        link.style.color = "red";
}