/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export default function swapPairs(head) {
  if (head == null || head.next == null) {
    return head;
  }
  let ans = new ListNode(0);
  ans.next = head;
  let curr = ans;
  while (curr.next != null && curr.next.next != null) {
    let n1 = curr.next;
    let n2 = curr.next.next;
    curr.next = n2;
    n1.next = n2.next;
    n2.next = n1;
    curr = curr.next.next;
  }
  return ans.next;
}
