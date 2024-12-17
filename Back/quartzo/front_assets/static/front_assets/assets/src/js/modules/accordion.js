export default function accordion() {
	const accordionsCooontainer = document.querySelectorAll("[js-accordion-container]");

	if (!accordionsCooontainer) return;

	accordionsCooontainer.forEach((container) => {
		container.addEventListener("click", handleClick);

		function handleClick(e) {
			const target = e.target

			const title = target.classList.contains(".accordion-title") || target.closest(".accordion-title")

			if (title) {
				const attrParent = title.getAttribute(`js-comentario-parent`);
				if (attrParent) {
					//parent accordion
					document
						.querySelectorAll(`.accordion-title[js-comentario-parent="${attrParent}"]`)
						.forEach((i) => {
							if (i !== title) {
								if (i.closest(".accordion-item").classList.contains("active")) {
									i.click();
								}
							}
						});
				}

				const idAccordion = title.getAttribute("data-accordion");
				const content = container.querySelector(`.accordion-content[data-accordion="${idAccordion}"]`);
				const contentDiv = container.querySelector(`.accordion-content[data-accordion="${idAccordion}"] > div `);
				const pai = content.parentElement.closest('.accordion-content');
				const height = content.scrollHeight;
				title.closest(".accordion-item").classList.toggle("active");
				content.classList.toggle("active");

				let isChildren = content.hasAttribute("js-accordion-child");

				if (isChildren && content.classList.contains('active')) {
					gsap.set(pai, { height: 'auto' });
					return
				}

				if (content.classList.contains("active")) {
					gsap.fromTo(content, { height: 0 }, { height: height, duration: 0.3 });
				}
				else {
					gsap.fromTo(content, { height: height }, { height: 0, duration: 0.3 });
				}
			}
		}

	});
}