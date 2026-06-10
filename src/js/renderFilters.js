import {courses} from "./data.js";
import {filters} from "./filters.js";
import {state} from "./state.js";

const filtersContainer = document.querySelector(".filters");

function getCount(value) {
    if (value === "all") return courses.length;
    return courses.filter(c => c.category === value).length;
}

export function renderFilters() {
    filtersContainer.innerHTML = filters
        .map(item => {
            const isActive = item.value === state.currentFilter;

            return `
                <button 
                    class="filters__btn ${isActive ? "filters__btn--active" : ""}"
                    data-filter="${item.value}"
                    data-count="${getCount(item.value)}"
                >
                    ${item.label}
                </button>
            `;
        })
        .join("");
}