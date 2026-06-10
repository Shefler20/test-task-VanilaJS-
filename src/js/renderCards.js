import { courses, categoryLabels } from "./data.js";
import { state } from "./state.js";

const grid = document.querySelector(".catalog__grid");
const footer = document.querySelector(".catalog__footer");

export function renderCards() {
    const filtered = courses.filter(item => {
        const matchCategory =
            state.currentFilter === "all" || item.category === state.currentFilter;

        const matchSearch =
            item.title.toLowerCase().includes(state.searchValue.toLowerCase());

        return matchCategory && matchSearch;
    });

    const visibleItems = filtered.slice(0, state.visibleCount);

    grid.innerHTML = visibleItems
        .map(item => `
            <article class="card">
                <div class="card__image">
                    <img class="card__img" src="${item.image}" alt="${item.title}">
                </div>

                <div class="card__body">
                    <span class="card__tag card__tag--${item.category}">
                        ${categoryLabels[item.category]}
                    </span>

                    <h3 class="card__title">${item.title}</h3>

                    <div class="card__footer">
                        <span class="card__price">${item.price}</span>
                        <span class="card__author">by ${item.author}</span>
                    </div>
                </div>
            </article>
        `)
        .join("");

    footer.style.display =
        state.visibleCount >= filtered.length ? "none" : "flex";
}