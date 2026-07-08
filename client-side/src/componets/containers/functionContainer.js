export function getClosestImage(images, heroPoint) {
    let closest = null;
    let minDistance = Infinity;

    images.forEach((img) => {
        const rect = img.getBoundingClientRect();

        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        const distance = Math.hypot(
            x - heroPoint.x,
            y - heroPoint.y
        );

        if (distance < minDistance) {
            minDistance = distance;
            closest = img;
        }
    });

    return closest;
}