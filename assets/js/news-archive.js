(() => {
  const subtractCalendarMonths = (date, months) => {
    const target = new Date(date);
    const originalDay = target.getDate();
    target.setDate(1);
    target.setMonth(target.getMonth() - months);
    const finalDay = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate();
    target.setDate(Math.min(originalDay, finalDay));
    target.setHours(0, 0, 0, 0);
    return target;
  };

  document.querySelectorAll('[data-news-feed]').forEach((feed) => {
    const months = Number.parseInt(feed.dataset.archiveMonths || '6', 10);
    const cutoff = subtractCalendarMonths(new Date(), months);
    const archive = feed.querySelector('[data-news-archive]');
    const archiveList = feed.querySelector('[data-news-archive-list]');
    const counter = feed.querySelector('[data-news-archive-count]');
    if (!archive || !archiveList) return;

    let archived = 0;
    feed.querySelectorAll('[data-news-current] > [data-news-date]').forEach((item) => {
      const published = new Date(item.dataset.newsDate);
      if (!Number.isNaN(published.valueOf()) && published < cutoff) {
        archiveList.appendChild(item);
        archived += 1;
      }
    });

    if (archived > 0) {
      if (counter) counter.textContent = `(${archived})`;
      archive.hidden = false;
    }
  });
})();
