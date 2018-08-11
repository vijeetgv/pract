var Node = function (cen, l, r) {
    this.center = cen;
    this.left = l;
    this.right = r;
};

Node.prototype.add = function (val) {
    if(val!=null){
        if(val>this.center){
            if(val < this.right.center){
                this.right = new Node(val,null, this.right);
            }else{
                this.right.add(val);
            }
        }else{
            if(val > this.left.center){
                this.left = new Node(val, this.left);
            }else{
                this.left.add(val);
            }
        }
    }
};


var root = new Node();