module.exports = {
  get_emoji: () => {
    const randomNum = Math.random();
    let vehicles = "🚗";

    if (randomNum > 0.7) {
      vehicles = "🚙";
    } else if (randomNum > 0.4) {
      vehicles = "🚖";
    }

    return `<span for="img" aria-label="book">${vehicles}</span>`;
  },
};
