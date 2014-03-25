/** @constructor */
ScalaJS.c.scala_collection_mutable_Node = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.data$1 = null;
  this.left$1 = null;
  this.right$1 = null;
  this.balance$1 = 0;
  this.depth$1 = 0
});
ScalaJS.c.scala_collection_mutable_Node.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_Node.prototype.constructor = ScalaJS.c.scala_collection_mutable_Node;
ScalaJS.c.scala_collection_mutable_Node.prototype.data__O = (function() {
  return this.data$1
});
ScalaJS.c.scala_collection_mutable_Node.prototype.left__Lscala_collection_mutable_AVLTree = (function() {
  return this.left$1
});
ScalaJS.c.scala_collection_mutable_Node.prototype.right__Lscala_collection_mutable_AVLTree = (function() {
  return this.right$1
});
ScalaJS.c.scala_collection_mutable_Node.prototype.balance__I = (function() {
  return this.balance$1
});
ScalaJS.c.scala_collection_mutable_Node.prototype.depth__I = (function() {
  return this.depth$1
});
ScalaJS.c.scala_collection_mutable_Node.prototype.iterator__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_mutable_AVLIterator().init___Lscala_collection_mutable_Node(this)
});
ScalaJS.c.scala_collection_mutable_Node.prototype.contains__O__Lscala_math_Ordering__Z = (function(value, ordering) {
  var ord = ordering.compare__O__O__I(value, this.data__O());
  if ((0 === ord)) {
    return true
  } else {
    if ((ord < 0)) {
      return this.left__Lscala_collection_mutable_AVLTree().contains__O__Lscala_math_Ordering__Z(value, ordering)
    } else {
      return this.right__Lscala_collection_mutable_AVLTree().contains__O__Lscala_math_Ordering__Z(value, ordering)
    }
  }
});
ScalaJS.c.scala_collection_mutable_Node.prototype.insert__O__Lscala_math_Ordering__Lscala_collection_mutable_AVLTree = (function(value, ordering) {
  var ord = ordering.compare__O__O__I(value, this.data__O());
  if ((0 === ord)) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___()
  } else {
    if ((ord < 0)) {
      return new ScalaJS.c.scala_collection_mutable_Node().init___O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree(this.data__O(), this.left__Lscala_collection_mutable_AVLTree().insert__O__Lscala_math_Ordering__Lscala_collection_mutable_AVLTree(value, ordering), this.right__Lscala_collection_mutable_AVLTree()).rebalance__Lscala_collection_mutable_Node()
    } else {
      return new ScalaJS.c.scala_collection_mutable_Node().init___O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree(this.data__O(), this.left__Lscala_collection_mutable_AVLTree(), this.right__Lscala_collection_mutable_AVLTree().insert__O__Lscala_math_Ordering__Lscala_collection_mutable_AVLTree(value, ordering)).rebalance__Lscala_collection_mutable_Node()
    }
  }
});
ScalaJS.c.scala_collection_mutable_Node.prototype.remove__O__Lscala_math_Ordering__Lscala_collection_mutable_AVLTree = (function(value, ordering) {
  var ord = ordering.compare__O__O__I(value, this.data__O());
  if ((ord === 0)) {
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_mutable_Leaf(), this.left__Lscala_collection_mutable_AVLTree())) {
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_mutable_Leaf(), this.right__Lscala_collection_mutable_AVLTree())) {
        return ScalaJS.modules.scala_collection_mutable_Leaf()
      } else {
        var x1 = this.right__Lscala_collection_mutable_AVLTree().removeMin__Lscala_Tuple2();
        matchEnd3: {
          if ((x1 !== null)) {
            var min = x1.$$und1__O();
            var newRight = ScalaJS.as.scala_collection_mutable_AVLTree(x1.$$und2__O());
            var x$1 = new ScalaJS.c.scala_Tuple2().init___O__O(min, newRight);
            break matchEnd3
          };
          throw new ScalaJS.c.scala_MatchError().init___O(x1)
        };
        var min$2 = x$1.$$und1__O();
        var newRight$2 = ScalaJS.as.scala_collection_mutable_AVLTree(x$1.$$und2__O());
        return new ScalaJS.c.scala_collection_mutable_Node().init___O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree(min$2, this.left__Lscala_collection_mutable_AVLTree(), newRight$2).rebalance__Lscala_collection_mutable_Node()
      }
    } else {
      var x1$2 = this.left__Lscala_collection_mutable_AVLTree().removeMax__Lscala_Tuple2();
      matchEnd3$2: {
        if ((x1$2 !== null)) {
          var max = x1$2.$$und1__O();
          var newLeft = ScalaJS.as.scala_collection_mutable_AVLTree(x1$2.$$und2__O());
          var x$2 = new ScalaJS.c.scala_Tuple2().init___O__O(max, newLeft);
          break matchEnd3$2
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
      };
      var max$2 = x$2.$$und1__O();
      var newLeft$2 = ScalaJS.as.scala_collection_mutable_AVLTree(x$2.$$und2__O());
      return new ScalaJS.c.scala_collection_mutable_Node().init___O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree(max$2, newLeft$2, this.right__Lscala_collection_mutable_AVLTree()).rebalance__Lscala_collection_mutable_Node()
    }
  } else {
    if ((ord < 0)) {
      return new ScalaJS.c.scala_collection_mutable_Node().init___O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree(this.data__O(), this.left__Lscala_collection_mutable_AVLTree().remove__O__Lscala_math_Ordering__Lscala_collection_mutable_AVLTree(value, ordering), this.right__Lscala_collection_mutable_AVLTree()).rebalance__Lscala_collection_mutable_Node()
    } else {
      return new ScalaJS.c.scala_collection_mutable_Node().init___O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree(this.data__O(), this.left__Lscala_collection_mutable_AVLTree(), this.right__Lscala_collection_mutable_AVLTree().remove__O__Lscala_math_Ordering__Lscala_collection_mutable_AVLTree(value, ordering)).rebalance__Lscala_collection_mutable_Node()
    }
  }
});
ScalaJS.c.scala_collection_mutable_Node.prototype.removeMin__Lscala_Tuple2 = (function() {
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_mutable_Leaf(), this.left__Lscala_collection_mutable_AVLTree())) {
    return new ScalaJS.c.scala_Tuple2().init___O__O(this.data__O(), this.right__Lscala_collection_mutable_AVLTree())
  } else {
    var x1 = this.left__Lscala_collection_mutable_AVLTree().removeMin__Lscala_Tuple2();
    matchEnd3: {
      if ((x1 !== null)) {
        var min = x1.$$und1__O();
        var newLeft = ScalaJS.as.scala_collection_mutable_AVLTree(x1.$$und2__O());
        var x$3 = new ScalaJS.c.scala_Tuple2().init___O__O(min, newLeft);
        break matchEnd3
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    };
    var min$2 = x$3.$$und1__O();
    var newLeft$2 = ScalaJS.as.scala_collection_mutable_AVLTree(x$3.$$und2__O());
    return new ScalaJS.c.scala_Tuple2().init___O__O(min$2, new ScalaJS.c.scala_collection_mutable_Node().init___O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree(this.data__O(), newLeft$2, this.right__Lscala_collection_mutable_AVLTree()).rebalance__Lscala_collection_mutable_Node())
  }
});
ScalaJS.c.scala_collection_mutable_Node.prototype.removeMax__Lscala_Tuple2 = (function() {
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_mutable_Leaf(), this.right__Lscala_collection_mutable_AVLTree())) {
    return new ScalaJS.c.scala_Tuple2().init___O__O(this.data__O(), this.left__Lscala_collection_mutable_AVLTree())
  } else {
    var x1 = this.right__Lscala_collection_mutable_AVLTree().removeMax__Lscala_Tuple2();
    matchEnd3: {
      if ((x1 !== null)) {
        var max = x1.$$und1__O();
        var newRight = ScalaJS.as.scala_collection_mutable_AVLTree(x1.$$und2__O());
        var x$4 = new ScalaJS.c.scala_Tuple2().init___O__O(max, newRight);
        break matchEnd3
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    };
    var max$2 = x$4.$$und1__O();
    var newRight$2 = ScalaJS.as.scala_collection_mutable_AVLTree(x$4.$$und2__O());
    return new ScalaJS.c.scala_Tuple2().init___O__O(max$2, new ScalaJS.c.scala_collection_mutable_Node().init___O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree(this.data__O(), this.left__Lscala_collection_mutable_AVLTree(), newRight$2).rebalance__Lscala_collection_mutable_Node())
  }
});
ScalaJS.c.scala_collection_mutable_Node.prototype.rebalance__Lscala_collection_mutable_Node = (function() {
  if ((-2 === this.balance__I())) {
    if ((1 === this.left__Lscala_collection_mutable_AVLTree().balance__I())) {
      return this.doubleRightRotation__Lscala_collection_mutable_Node()
    } else {
      return this.rightRotation__Lscala_collection_mutable_Node()
    }
  } else {
    if ((2 === this.balance__I())) {
      if ((-1 === this.right__Lscala_collection_mutable_AVLTree().balance__I())) {
        return this.doubleLeftRotation__Lscala_collection_mutable_Node()
      } else {
        return this.leftRotation__Lscala_collection_mutable_Node()
      }
    } else {
      return this
    }
  }
});
ScalaJS.c.scala_collection_mutable_Node.prototype.leftRotation__Lscala_collection_mutable_Node = (function() {
  if ((!ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_mutable_Leaf(), this.right__Lscala_collection_mutable_AVLTree()))) {
    var r = ScalaJS.as.scala_collection_mutable_Node(this.right__Lscala_collection_mutable_AVLTree());
    return new ScalaJS.c.scala_collection_mutable_Node().init___O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree(r.data__O(), new ScalaJS.c.scala_collection_mutable_Node().init___O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree(this.data__O(), this.left__Lscala_collection_mutable_AVLTree(), r.left__Lscala_collection_mutable_AVLTree()), r.right__Lscala_collection_mutable_AVLTree())
  } else {
    return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("Should not happen.")
  }
});
ScalaJS.c.scala_collection_mutable_Node.prototype.rightRotation__Lscala_collection_mutable_Node = (function() {
  if ((!ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_mutable_Leaf(), this.left__Lscala_collection_mutable_AVLTree()))) {
    var l = ScalaJS.as.scala_collection_mutable_Node(this.left__Lscala_collection_mutable_AVLTree());
    return new ScalaJS.c.scala_collection_mutable_Node().init___O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree(l.data__O(), l.left__Lscala_collection_mutable_AVLTree(), new ScalaJS.c.scala_collection_mutable_Node().init___O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree(this.data__O(), l.right__Lscala_collection_mutable_AVLTree(), this.right__Lscala_collection_mutable_AVLTree()))
  } else {
    return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("Should not happen.")
  }
});
ScalaJS.c.scala_collection_mutable_Node.prototype.doubleLeftRotation__Lscala_collection_mutable_Node = (function() {
  if ((!ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_mutable_Leaf(), this.right__Lscala_collection_mutable_AVLTree()))) {
    var r = ScalaJS.as.scala_collection_mutable_Node(this.right__Lscala_collection_mutable_AVLTree());
    var rightRotated = r.rightRotation__Lscala_collection_mutable_Node();
    return new ScalaJS.c.scala_collection_mutable_Node().init___O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree(rightRotated.data__O(), new ScalaJS.c.scala_collection_mutable_Node().init___O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree(this.data__O(), this.left__Lscala_collection_mutable_AVLTree(), rightRotated.left__Lscala_collection_mutable_AVLTree()), rightRotated.right__Lscala_collection_mutable_AVLTree())
  } else {
    return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("Should not happen.")
  }
});
ScalaJS.c.scala_collection_mutable_Node.prototype.doubleRightRotation__Lscala_collection_mutable_Node = (function() {
  if ((!ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_mutable_Leaf(), this.left__Lscala_collection_mutable_AVLTree()))) {
    var l = ScalaJS.as.scala_collection_mutable_Node(this.left__Lscala_collection_mutable_AVLTree());
    var leftRotated = l.leftRotation__Lscala_collection_mutable_Node();
    return new ScalaJS.c.scala_collection_mutable_Node().init___O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree(leftRotated.data__O(), leftRotated.left__Lscala_collection_mutable_AVLTree(), new ScalaJS.c.scala_collection_mutable_Node().init___O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree(this.data__O(), leftRotated.right__Lscala_collection_mutable_AVLTree(), this.right__Lscala_collection_mutable_AVLTree()))
  } else {
    return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("Should not happen.")
  }
});
ScalaJS.c.scala_collection_mutable_Node.prototype.copy__O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_Node = (function(data, left, right) {
  return new ScalaJS.c.scala_collection_mutable_Node().init___O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree(data, left, right)
});
ScalaJS.c.scala_collection_mutable_Node.prototype.copy$default$1__O = (function() {
  return this.data__O()
});
ScalaJS.c.scala_collection_mutable_Node.prototype.copy$default$2__Lscala_collection_mutable_AVLTree = (function() {
  return this.left__Lscala_collection_mutable_AVLTree()
});
ScalaJS.c.scala_collection_mutable_Node.prototype.copy$default$3__Lscala_collection_mutable_AVLTree = (function() {
  return this.right__Lscala_collection_mutable_AVLTree()
});
ScalaJS.c.scala_collection_mutable_Node.prototype.productPrefix__T = (function() {
  return "Node"
});
ScalaJS.c.scala_collection_mutable_Node.prototype.productArity__I = (function() {
  return 3
});
ScalaJS.c.scala_collection_mutable_Node.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.data__O();
        break
      };
    case 1:
      {
        return this.left__Lscala_collection_mutable_AVLTree();
        break
      };
    case 2:
      {
        return this.right__Lscala_collection_mutable_AVLTree();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_mutable_Node.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_Node.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_mutable_Node(x$1)
});
ScalaJS.c.scala_collection_mutable_Node.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_collection_mutable_Node.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_collection_mutable_Node.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_collection_mutable_Node(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Node$1 = ScalaJS.as.scala_collection_mutable_Node(x$1);
      return (((ScalaJS.anyEqEq(this.data__O(), Node$1.data__O()) && ScalaJS.anyRefEqEq(this.left__Lscala_collection_mutable_AVLTree(), Node$1.left__Lscala_collection_mutable_AVLTree())) && ScalaJS.anyRefEqEq(this.right__Lscala_collection_mutable_AVLTree(), Node$1.right__Lscala_collection_mutable_AVLTree())) && Node$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_collection_mutable_Node.prototype.rebalance__Lscala_collection_mutable_AVLTree = (function() {
  return this.rebalance__Lscala_collection_mutable_Node()
});
ScalaJS.c.scala_collection_mutable_Node.prototype.init___O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree = (function(data, left, right) {
  this.data$1 = data;
  this.left$1 = left;
  this.right$1 = right;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_mutable_AVLTree$class__$init$__Lscala_collection_mutable_AVLTree__V(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  this.balance$1 = (right.depth__I() - left.depth__I());
  this.depth$1 = (ScalaJS.modules.scala_math_package().max__I__I__I(left.depth__I(), right.depth__I()) + 1);
  return this
});
ScalaJS.c.scala_collection_mutable_Node.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_mutable_Node.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_Node.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_mutable_Node.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_mutable_Node.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_mutable_Node.prototype.copy__O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree__ = (function(data, left, right) {
  return this.copy__O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_Node(data, left, right)
});
ScalaJS.c.scala_collection_mutable_Node.prototype.doubleRightRotation__ = (function() {
  return this.doubleRightRotation__Lscala_collection_mutable_Node()
});
ScalaJS.c.scala_collection_mutable_Node.prototype.doubleLeftRotation__ = (function() {
  return this.doubleLeftRotation__Lscala_collection_mutable_Node()
});
ScalaJS.c.scala_collection_mutable_Node.prototype.rightRotation__ = (function() {
  return this.rightRotation__Lscala_collection_mutable_Node()
});
ScalaJS.c.scala_collection_mutable_Node.prototype.leftRotation__ = (function() {
  return this.leftRotation__Lscala_collection_mutable_Node()
});
ScalaJS.c.scala_collection_mutable_Node.prototype.rebalance__ = (function() {
  return this.rebalance__Lscala_collection_mutable_Node()
});
ScalaJS.c.scala_collection_mutable_Node.prototype.removeMax__ = (function() {
  return this.removeMax__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_mutable_Node.prototype.removeMin__ = (function() {
  return this.removeMin__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_mutable_Node.prototype.remove__O__Lscala_math_Ordering__ = (function(value, ordering) {
  return this.remove__O__Lscala_math_Ordering__Lscala_collection_mutable_AVLTree(value, ordering)
});
ScalaJS.c.scala_collection_mutable_Node.prototype.insert__O__Lscala_math_Ordering__ = (function(value$2, ordering$2) {
  return this.insert__O__Lscala_math_Ordering__Lscala_collection_mutable_AVLTree(value$2, ordering$2)
});
ScalaJS.c.scala_collection_mutable_Node.prototype.contains__O__Lscala_math_Ordering__ = (function(value$3, ordering$3) {
  return ScalaJS.bZ(this.contains__O__Lscala_math_Ordering__Z(value$3, ordering$3))
});
ScalaJS.c.scala_collection_mutable_Node.prototype.iterator__ = (function() {
  return this.iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_Node.prototype.depth__ = (function() {
  return ScalaJS.bI(this.depth__I())
});
ScalaJS.c.scala_collection_mutable_Node.prototype.balance__ = (function() {
  return ScalaJS.bI(this.balance__I())
});
ScalaJS.c.scala_collection_mutable_Node.prototype.right__ = (function() {
  return this.right__Lscala_collection_mutable_AVLTree()
});
ScalaJS.c.scala_collection_mutable_Node.prototype.left__ = (function() {
  return this.left__Lscala_collection_mutable_AVLTree()
});
ScalaJS.c.scala_collection_mutable_Node.prototype.data__ = (function() {
  return this.data__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_Node = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_Node.prototype = ScalaJS.c.scala_collection_mutable_Node.prototype;
ScalaJS.is.scala_collection_mutable_Node = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_Node)))
});
ScalaJS.as.scala_collection_mutable_Node = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_Node(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.Node")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_Node = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_Node)))
});
ScalaJS.asArrayOf.scala_collection_mutable_Node = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_Node(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.Node;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_Node = new ScalaJS.ClassTypeData({
  scala_collection_mutable_Node: 0
}, false, "scala.collection.mutable.Node", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_Node: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_mutable_AVLTree: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_Node.prototype.$classData = ScalaJS.data.scala_collection_mutable_Node;
//@ sourceMappingURL=Node.js.map
