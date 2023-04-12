javascript: (function () {
  const listItems = document.querySelectorAll('.notifications-list-item');

  const actionIcons = [
    'octicon-git-pull-request-closed',
    'octicon-git-merge',
    'octicon-issue-closed',
  ];

  const ignoredWords = ['ionic', 'flutter'];

  const rowsToClose = Array.from(listItems).filter((item) => {
    let shouldClose = false;
    actionIcons.forEach((icon) => {
      if (item.querySelector(`.${icon}`)) {
        shouldClose = true;
      }
    });
    ignoredWords.forEach((word) => {
      const markdownTitle = item.querySelector('.markdown-title');
      if (
        markdownTitle &&
        markdownTitle.textContent.toLowerCase().includes(word)
      ) {
        shouldClose = true;
      }
    });
    return shouldClose;
  });

  rowsToClose.forEach((item) => {
    const input = item.querySelector('.js-notification-bulk-action-check-item');
    const unsubscribeBtn = document.querySelector(
      'button[title="Unsubscribe"]'
    );

    input.click();
    unsubscribeBtn.click();
  });
})();
