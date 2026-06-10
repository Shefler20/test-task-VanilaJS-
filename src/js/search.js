import { state } from "./state.js";
import { renderCards } from "./renderCards.js";
import { renderFilters } from "./renderFilters.js";

const input = document.querySelector(".search__input");

export function initSearch() {
    input.addEventListener("input", (e) => {
        state.searchValue = e.target.value;
        state.visibleCount = 9;

        renderFilters();
        renderCards();
    });
}