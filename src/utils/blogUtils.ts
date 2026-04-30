export type BlogCategory = "Announcement" | "Event" | "Holiday" | "PTA" | "Publication" | "Team" | "Funding" | "Achievement";

const categoryColorMap: Record<BlogCategory, string> = {
	Announcement: "bg-brand-blue",
	Event: "bg-brand-green",
	Publication: "bg-brand-red",
	Team: "bg-brand-purple",
	Holiday: "bg-brand-yellow",
	PTA: "bg-brand-red",
	Funding: "bg-brand-orange",
	Achievement: "bg-brand-pink",
};

/**
 * Returns the Tailwind bg-color class for a given blog category.
 * Used to produce a colored left accent bar on cards.
 */
export function categoryBgColor(category: string): string {
	return categoryColorMap[category as BlogCategory] ?? "bg-brand-blue";
}

export function categoryLabel(category: string): string {
	return category.charAt(0).toUpperCase() + category.slice(1);
}

export function formatDate(date: Date): string {
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
