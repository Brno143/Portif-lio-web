document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("change-bg-btn");
    const colors = ["#FFC0CB", "#FFD700", "#90EE90", "#87CEFA", "#FFA07A"];

    button.addEventListener("click", () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });
});
