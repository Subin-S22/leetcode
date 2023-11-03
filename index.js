import { mergeSort } from "./lib/algorithms/sorting.js";
import { maxArea } from "./lib/index.js";
import { LinkedList } from "./lib/linkedList/index.js";

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(300);
ll.insertLast(400);
// ll.reverse();
ll.reverseRecur();
ll.printData();

mergeSort([3, 1, 2, 4, 12, 9, 5], 0, 6);
