const header = document.getElementsByTagName("header")[0];

header.innerHTML = `
<div class="container header-container">
    <h1 class="logo">QPICK</h1>
    <div class="nav-icon-container">
        <div class="favorites-icon"></div>
        <a href="/cart.html">
            <div class="cart-icon"></div>
        </a>
    </div>
</div>
`;
