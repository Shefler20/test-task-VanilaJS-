import { state } from "./state.js";
import { renderFilters } from "./renderFilters.js";
import { renderCards } from "./renderCards.js";

export function initFilters() {
    const filtersContainer = document.querySelector(".filters");

    filtersContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".filters__btn");
        if (!btn) return;

        state.currentFilter = btn.dataset.filter;
        state.visibleCount = 9;

        renderFilters();
        renderCards();
    });
}