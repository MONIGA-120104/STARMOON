
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            // Remove the 'selected' class from all items
            menuItems.forEach(i => i.classList.remove("selected"));
            // Add the 'selected' class to the clicked item
            item.classList.add("selected");
        });
    });
});