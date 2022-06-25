// ============ HEADER
const navbarBtn = document.querySelector(".navbarMobile-btn"),
    navMobile = document.querySelector(".navMobile");
let navMobileUlHeight = document.querySelector(".navMobile ul").getBoundingClientRect().height;

window.addEventListener("resize", () => {
    navMobileUlHeight = document.querySelector(".navMobile ul").getBoundingClientRect().height;
});
navbarBtn.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu(e) {
    const target = e.target;
    navMobile.classList.toggle("open");
    navbarBtn.classList.toggle("clicked");
}

// =========== FOOTER
const footerMenuBtns = document.querySelectorAll(".footerMenu-btn");
const footerMenuItems = document.querySelectorAll(".footerMenu-items");

footerMenuBtns.forEach((btn) => btn.addEventListener("click", (e) => toggleFooterMenu(e)));

function toggleFooterMenu(e) {
    const target = e.target;
    const dataControll = parseInt(target.dataset.controll);
    const targetParent = target.parentElement.parentElement;

    const height1 = getFooterMenuHeight(footerMenuItems[0]);
    const height2 = getFooterMenuHeight(footerMenuItems[1]);
    const height3 = getFooterMenuHeight(footerMenuItems[2]);

    const childListHeights = [height1, height2, height3];

    if (target.dataset.collapse === "true") {
        footerMenuItems[dataControll].style.height = childListHeights[dataControll] + "px";
        target.dataset.collapse = false;

        target.classList.add("buttonClicked");
    } else {
        footerMenuItems[dataControll].style.height = 0 + "px";
        target.dataset.collapse = true;

        target.classList.remove("buttonClicked");
    }
}

function getFooterMenuHeight(el) {
    const parentElement = el;
    const elChilds = parentElement.children;
    const elChildRect = elChilds[0].clientHeight;

    return elChildRect * elChilds.length;
}
