import { renderFilters } from "./renderFilters.js";
import { renderCards } from "./renderCards.js";
import { initSearch } from "./search.js";
import { initLoadMore } from "./loadMore.js";
import { initFilters } from "./filtersEvents.js";

export function init() {
    renderFilters();
    renderCards();

    initFilters();
    initSearch();
    initLoadMore();
}

init();