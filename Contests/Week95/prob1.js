//5:39pm
/**
 * Definition for singly-linked list.
 */
var ListNode = function ListNode(val) {
     this.val = val;
     this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    var mid;
    if(head){
        var nd = head;
        mid = nd;
        while(nd !=null && nd.next !=null){
            mid = mid.next;
            nd = nd.next.next;
        }
    }
    return mid;
};