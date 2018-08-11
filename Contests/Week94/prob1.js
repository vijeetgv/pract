function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}
var getLeaves = function (node, leafNodesArr) {
    if(node!=null && leafNodesArr!=null){
        if(node.left == null && node.right == null){
            leafNodesArr.push(node.val);
        }else{
            getLeaves(node.left, leafNodesArr);
            getLeaves(node.right, leafNodesArr);
        }
    }
};
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    var leafNodes1 = [], leafNodes2 = [];
    getLeaves(root1, leafNodes1);
    getLeaves(root2, leafNodes2);
    var isSame = false;
    if(leafNodes1.length == leafNodes2.length){
        isSame = true;
        for(var i=0; i<leafNodes1.length; i++){
            if(leafNodes1[i]!=leafNodes2[i]){
                isSame = false;
                break;
            }
        }
    }
    return isSame;
};