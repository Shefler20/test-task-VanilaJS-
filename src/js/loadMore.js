import { state } from "./state.js";
import { renderCards } from "./renderCards.js";

const btn = document.querySelector(".catalog__load-more");

export function initLoadMore() {
    btn.addEventListener("click", () => {
        state.visibleCount += state.step;
        renderCards();
    });
}