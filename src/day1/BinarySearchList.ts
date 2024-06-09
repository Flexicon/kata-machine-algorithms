export default function bs_list(haystack: number[], needle: number): boolean {
  let lft = 0, rgt = haystack.length;

  do {
    const cur = Math.floor(lft + (rgt - lft) / 2);
    const val = haystack[cur];

    if (val === needle) return true;
    if (val > needle) rgt = cur;
    if (val < needle) lft = cur + 1;
  } while (lft < rgt)

  return false;
}
