const footer = document.getElementsByTagName("footer")[0];

footer.innerHTML = `
<div class="container footer-container">
<div class="footer-block">
    <span class="logo footer-logo">QPICK</span>
</div>
<div class="footer-block">
    <div class="footer-menu">
        <a class="footer-link">Избранное</a>
        <a class="footer-link">Корзина</a>
        <a class="footer-link">Контакты</a>
    </div>
</div>
<div class="footer-block">
    <div class="footer-menu">
        <a class="footer-link">Условия сервиса</a>
        <div class="language-container">
            <div class="language-icon"></div>
            <a href="#" class="language ru">Рус</a>
            <a href="#" class="language en">Eng</a>
        </div>
    </div>
</div>
<div class="footer-block">
    <div class="footer-icons">
        <div class="vk-icon"></div>
        <div class="tg-icon"></div>
        <div class="whatsapp-icon"></div>
    </div>
</div>
</div>
`;