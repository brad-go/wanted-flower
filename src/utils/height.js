export function getScrollHeight() {
  if (document.body.scrollTop) {
    return document.body.scrollTop;
  } return document.documentElement.scrollTop;
}
