/** @constructor */
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty = (function() {
  ScalaJS.c.scala_collection_immutable_RedBlack$Tree.call(this)
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype = new ScalaJS.inheritable.scala_collection_immutable_RedBlack$Tree();
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.constructor = ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty;
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.isEmpty__Z = (function() {
  return false
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.lookup__O__Lscala_collection_immutable_RedBlack$Tree = (function(k) {
  if (this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().isSmaller__O__O__Z(k, this.key__O())) {
    return this.left__Lscala_collection_immutable_RedBlack$Tree().lookup__O__Lscala_collection_immutable_RedBlack$Tree(k)
  } else {
    if (this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().isSmaller__O__O__Z(this.key__O(), k)) {
      return this.right__Lscala_collection_immutable_RedBlack$Tree().lookup__O__Lscala_collection_immutable_RedBlack$Tree(k)
    } else {
      return this
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.scala$collection$immutable$RedBlack$NonEmpty$$balanceLeft__Z__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty = (function(isBlack, z, zv, l, d) {
  var rc9 = false;
  var x3 = null;
  var x1 = l;
  if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(x1)) {
    rc9 = true;
    x3 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(x1);
    var y = x3.key__O();
    var yv = x3.value__O();
    var p2 = x3.left__Lscala_collection_immutable_RedBlack$Tree();
    var c = x3.right__Lscala_collection_immutable_RedBlack$Tree();
    if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p2)) {
      var x4 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p2);
      var x = x4.key__O();
      var xv = x4.value__O();
      var a = x4.left__Lscala_collection_immutable_RedBlack$Tree();
      var b = x4.right__Lscala_collection_immutable_RedBlack$Tree();
      return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), y, yv, new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x, xv, a, b), new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), z, zv, c, d))
    }
  };
  if (rc9) {
    var x$2 = x3.key__O();
    var xv$2 = x3.value__O();
    var a$2 = x3.left__Lscala_collection_immutable_RedBlack$Tree();
    var p5 = x3.right__Lscala_collection_immutable_RedBlack$Tree();
    if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p5)) {
      var x7 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p5);
      var y$2 = x7.key__O();
      var yv$2 = x7.value__O();
      var b$2 = x7.left__Lscala_collection_immutable_RedBlack$Tree();
      var c$2 = x7.right__Lscala_collection_immutable_RedBlack$Tree();
      return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), y$2, yv$2, new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x$2, xv$2, a$2, b$2), new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), z, zv, c$2, d))
    }
  };
  return this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().scala$collection$immutable$RedBlack$$mkTree__Z__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty(isBlack, z, zv, l, d)
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.scala$collection$immutable$RedBlack$NonEmpty$$balanceRight__Z__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty = (function(isBlack, x, xv, a, r) {
  var rc9 = false;
  var x3 = null;
  var x1 = r;
  if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(x1)) {
    rc9 = true;
    x3 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(x1);
    var z = x3.key__O();
    var zv = x3.value__O();
    var p2 = x3.left__Lscala_collection_immutable_RedBlack$Tree();
    var d = x3.right__Lscala_collection_immutable_RedBlack$Tree();
    if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p2)) {
      var x4 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p2);
      var y = x4.key__O();
      var yv = x4.value__O();
      var b = x4.left__Lscala_collection_immutable_RedBlack$Tree();
      var c = x4.right__Lscala_collection_immutable_RedBlack$Tree();
      return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), y, yv, new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x, xv, a, b), new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), z, zv, c, d))
    }
  };
  if (rc9) {
    var y$2 = x3.key__O();
    var yv$2 = x3.value__O();
    var b$2 = x3.left__Lscala_collection_immutable_RedBlack$Tree();
    var p5 = x3.right__Lscala_collection_immutable_RedBlack$Tree();
    if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p5)) {
      var x7 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p5);
      var z$2 = x7.key__O();
      var zv$2 = x7.value__O();
      var c$2 = x7.left__Lscala_collection_immutable_RedBlack$Tree();
      var d$2 = x7.right__Lscala_collection_immutable_RedBlack$Tree();
      return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), y$2, yv$2, new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x, xv, a, b$2), new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), z$2, zv$2, c$2, d$2))
    }
  };
  return this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().scala$collection$immutable$RedBlack$$mkTree__Z__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty(isBlack, x, xv, a, r)
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.upd__O__O__Lscala_collection_immutable_RedBlack$Tree = (function(k, v) {
  if (this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().isSmaller__O__O__Z(k, this.key__O())) {
    return this.scala$collection$immutable$RedBlack$NonEmpty$$balanceLeft__Z__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty(this.isBlack__Z(), this.key__O(), this.value__O(), this.left__Lscala_collection_immutable_RedBlack$Tree().upd__O__O__Lscala_collection_immutable_RedBlack$Tree(k, v), this.right__Lscala_collection_immutable_RedBlack$Tree())
  } else {
    if (this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().isSmaller__O__O__Z(this.key__O(), k)) {
      return this.scala$collection$immutable$RedBlack$NonEmpty$$balanceRight__Z__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty(this.isBlack__Z(), this.key__O(), this.value__O(), this.left__Lscala_collection_immutable_RedBlack$Tree(), this.right__Lscala_collection_immutable_RedBlack$Tree().upd__O__O__Lscala_collection_immutable_RedBlack$Tree(k, v))
    } else {
      return this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().scala$collection$immutable$RedBlack$$mkTree__Z__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty(this.isBlack__Z(), k, v, this.left__Lscala_collection_immutable_RedBlack$Tree(), this.right__Lscala_collection_immutable_RedBlack$Tree())
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.del__O__Lscala_collection_immutable_RedBlack$Tree = (function(k) {
  var x1 = k;
  if (this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().isSmaller__O__O__Z(k, this.key__O())) {
    return this.delLeft$1__p2__O__Lscala_collection_immutable_RedBlack$NonEmpty(k)
  };
  if (this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().isSmaller__O__O__Z(this.key__O(), k)) {
    return this.delRight$1__p2__O__Lscala_collection_immutable_RedBlack$NonEmpty(k)
  };
  return this.append$1__p2__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.left__Lscala_collection_immutable_RedBlack$Tree(), this.right__Lscala_collection_immutable_RedBlack$Tree())
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.smallest__Lscala_collection_immutable_RedBlack$NonEmpty = (function() {
  if (this.left__Lscala_collection_immutable_RedBlack$Tree().isEmpty__Z()) {
    return this
  } else {
    return this.left__Lscala_collection_immutable_RedBlack$Tree().smallest__Lscala_collection_immutable_RedBlack$NonEmpty()
  }
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.toStream__Lscala_collection_immutable_Stream = (function() {
  return ScalaJS.as.scala_collection_immutable_Stream(ScalaJS.as.scala_collection_immutable_Stream(this.left__Lscala_collection_immutable_RedBlack$Tree().toStream__Lscala_collection_immutable_Stream().$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.modules.scala_collection_immutable_Stream().apply__Lscala_collection_Seq__Lscala_collection_immutable_Stream(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [new ScalaJS.c.scala_Tuple2().init___O__O(this.key__O(), this.value__O())]), 1))), ScalaJS.modules.scala_collection_immutable_Stream().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(this.right__Lscala_collection_immutable_RedBlack$Tree().toStream__Lscala_collection_immutable_Stream(), ScalaJS.modules.scala_collection_immutable_Stream().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.left__Lscala_collection_immutable_RedBlack$Tree().iterator__Lscala_collection_Iterator().$$plus$plus__Lscala_Function0__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      return ScalaJS.modules.scala_collection_Iterator().single__O__Lscala_collection_Iterator(ScalaJS.modules.scala_Predef$Pair().apply__O__O__Lscala_Tuple2(arg$outer.key__O(), arg$outer.value__O()))
    })
  })(this))).$$plus$plus__Lscala_Function0__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      return arg$outer.right__Lscala_collection_immutable_RedBlack$Tree().iterator__Lscala_collection_Iterator()
    })
  })(this)))
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.foreach__Lscala_Function2__V = (function(f) {
  this.left__Lscala_collection_immutable_RedBlack$Tree().foreach__Lscala_Function2__V(f);
  f.apply__O__O__O(this.key__O(), this.value__O());
  this.right__Lscala_collection_immutable_RedBlack$Tree().foreach__Lscala_Function2__V(f)
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.rng__Lscala_Option__Lscala_Option__Lscala_collection_immutable_RedBlack$Tree = (function(from, until) {
  if ((ScalaJS.anyRefEqEq(from, ScalaJS.modules.scala_None()) && ScalaJS.anyRefEqEq(until, ScalaJS.modules.scala_None()))) {
    return this
  };
  if (((!ScalaJS.anyRefEqEq(from, ScalaJS.modules.scala_None())) && this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().isSmaller__O__O__Z(this.key__O(), from.get__O()))) {
    return this.right__Lscala_collection_immutable_RedBlack$Tree().rng__Lscala_Option__Lscala_Option__Lscala_collection_immutable_RedBlack$Tree(from, until)
  };
  if (((!ScalaJS.anyRefEqEq(until, ScalaJS.modules.scala_None())) && (this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().isSmaller__O__O__Z(until.get__O(), this.key__O()) || (!this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().isSmaller__O__O__Z(this.key__O(), until.get__O()))))) {
    return this.left__Lscala_collection_immutable_RedBlack$Tree().rng__Lscala_Option__Lscala_Option__Lscala_collection_immutable_RedBlack$Tree(from, until)
  };
  var newLeft = this.left__Lscala_collection_immutable_RedBlack$Tree().rng__Lscala_Option__Lscala_Option__Lscala_collection_immutable_RedBlack$Tree(from, ScalaJS.modules.scala_None());
  var newRight = this.right__Lscala_collection_immutable_RedBlack$Tree().rng__Lscala_Option__Lscala_Option__Lscala_collection_immutable_RedBlack$Tree(ScalaJS.modules.scala_None(), until);
  if (((newLeft === this.left__Lscala_collection_immutable_RedBlack$Tree()) && (newRight === this.right__Lscala_collection_immutable_RedBlack$Tree()))) {
    return this
  } else {
    if ((newLeft === this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().Empty__Lscala_collection_immutable_RedBlack$Empty$())) {
      return newRight.upd__O__O__Lscala_collection_immutable_RedBlack$Tree(this.key__O(), this.value__O())
    } else {
      if ((newRight === this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().Empty__Lscala_collection_immutable_RedBlack$Empty$())) {
        return newLeft.upd__O__O__Lscala_collection_immutable_RedBlack$Tree(this.key__O(), this.value__O())
      } else {
        return this.rebalance__p2__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(newLeft, newRight)
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.compareDepth__p2__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_Tuple4 = (function(left, right) {
  return this.unzipBoth$1__p2__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_List__Lscala_collection_immutable_List__I__Lscala_Tuple4(left, right, ScalaJS.modules.scala_collection_immutable_Nil(), ScalaJS.modules.scala_collection_immutable_Nil(), 0)
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.rebalance__p2__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree = (function(newLeft, newRight) {
  var blkNewLeft = this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().scala$collection$immutable$RedBlack$$blacken__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(newLeft);
  var blkNewRight = this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().scala$collection$immutable$RedBlack$$blacken__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(newRight);
  var x1 = this.compareDepth__p2__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_Tuple4(blkNewLeft, blkNewRight);
  matchEnd3: {
    if ((x1 !== null)) {
      var zipper = ScalaJS.as.scala_collection_immutable_List(x1.$$und1__O());
      var levelled = ScalaJS.uZ(x1.$$und2__O());
      var leftMost = ScalaJS.uZ(x1.$$und3__O());
      var smallerDepth = ScalaJS.uI(x1.$$und4__O());
      var x$10 = new ScalaJS.c.scala_Tuple4().init___O__O__O__O(zipper, ScalaJS.bZ(levelled), ScalaJS.bZ(leftMost), ScalaJS.bI(smallerDepth));
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var zipper$2 = ScalaJS.as.scala_collection_immutable_List(x$10.$$und1__O());
  var levelled$2 = ScalaJS.uZ(x$10.$$und2__O());
  var leftMost$2 = ScalaJS.uZ(x$10.$$und3__O());
  var smallerDepth$2 = ScalaJS.uI(x$10.$$und4__O());
  if (levelled$2) {
    return new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), this.key__O(), this.value__O(), blkNewLeft, blkNewRight)
  } else {
    var zipFrom = this.findDepth$1__p2__Lscala_collection_immutable_List__I__Lscala_collection_immutable_List(zipper$2, smallerDepth$2);
    if (leftMost$2) {
      var union = new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), this.key__O(), this.value__O(), blkNewLeft, ScalaJS.as.scala_collection_immutable_RedBlack$Tree(zipFrom.head__O()))
    } else {
      var union = new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), this.key__O(), this.value__O(), ScalaJS.as.scala_collection_immutable_RedBlack$Tree(zipFrom.head__O()), blkNewRight)
    };
    var zippedTree = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(ScalaJS.as.scala_collection_LinearSeqOptimized(zipFrom.tail__O()).foldLeft__O__Lscala_Function2__O(union, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(arg$outer, leftMost$1) {
      return (function(tree, node) {
        if (leftMost$1) {
          return arg$outer.scala$collection$immutable$RedBlack$NonEmpty$$balanceLeft__Z__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty(node.isBlack__Z(), node.key__O(), node.value__O(), tree, node.right__Lscala_collection_immutable_RedBlack$Tree())
        } else {
          return arg$outer.scala$collection$immutable$RedBlack$NonEmpty$$balanceRight__Z__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty(node.isBlack__Z(), node.key__O(), node.value__O(), node.left__Lscala_collection_immutable_RedBlack$Tree(), tree)
        }
      })
    })(this, leftMost$2))));
    return zippedTree
  }
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.first__O = (function() {
  if (this.left__Lscala_collection_immutable_RedBlack$Tree().isEmpty__Z()) {
    return this.key__O()
  } else {
    return this.left__Lscala_collection_immutable_RedBlack$Tree().first__O()
  }
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.last__O = (function() {
  if (this.right__Lscala_collection_immutable_RedBlack$Tree().isEmpty__Z()) {
    return this.key__O()
  } else {
    return this.right__Lscala_collection_immutable_RedBlack$Tree().last__O()
  }
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.count__I = (function() {
  return ((1 + this.left__Lscala_collection_immutable_RedBlack$Tree().count__I()) + this.right__Lscala_collection_immutable_RedBlack$Tree().count__I())
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.balance$1__p2__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty = (function(x, xv, tl, tr) {
  var x1 = new ScalaJS.c.scala_Tuple2().init___O__O(tl, tr);
  if ((x1 !== null)) {
    var p2 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
    var p3 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p2)) {
      var x4 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p2);
      var y = x4.key__O();
      var yv = x4.value__O();
      var a = x4.left__Lscala_collection_immutable_RedBlack$Tree();
      var b = x4.right__Lscala_collection_immutable_RedBlack$Tree();
      if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p3)) {
        var x5 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p3);
        var z = x5.key__O();
        var zv = x5.value__O();
        var c = x5.left__Lscala_collection_immutable_RedBlack$Tree();
        var d = x5.right__Lscala_collection_immutable_RedBlack$Tree();
        return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x, xv, new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), y, yv, a, b), new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), z, zv, c, d))
      }
    }
  };
  if ((x1 !== null)) {
    var p6 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
    var d$2 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p6)) {
      var x8 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p6);
      var y$2 = x8.key__O();
      var yv$2 = x8.value__O();
      var p7 = x8.left__Lscala_collection_immutable_RedBlack$Tree();
      var c$2 = x8.right__Lscala_collection_immutable_RedBlack$Tree();
      if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p7)) {
        var x9 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p7);
        var z$2 = x9.key__O();
        var zv$2 = x9.value__O();
        var a$2 = x9.left__Lscala_collection_immutable_RedBlack$Tree();
        var b$2 = x9.right__Lscala_collection_immutable_RedBlack$Tree();
        return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), y$2, yv$2, new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), z$2, zv$2, a$2, b$2), new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x, xv, c$2, d$2))
      }
    }
  };
  if ((x1 !== null)) {
    var p10 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
    var d$3 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p10)) {
      var x12 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p10);
      var y$3 = x12.key__O();
      var yv$3 = x12.value__O();
      var a$3 = x12.left__Lscala_collection_immutable_RedBlack$Tree();
      var p11 = x12.right__Lscala_collection_immutable_RedBlack$Tree();
      if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p11)) {
        var x13 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p11);
        var z$3 = x13.key__O();
        var zv$3 = x13.value__O();
        var b$3 = x13.left__Lscala_collection_immutable_RedBlack$Tree();
        var c$3 = x13.right__Lscala_collection_immutable_RedBlack$Tree();
        return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), z$3, zv$3, new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), y$3, yv$3, a$3, b$3), new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x, xv, c$3, d$3))
      }
    }
  };
  if ((x1 !== null)) {
    var a$4 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
    var p14 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p14)) {
      var x16 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p14);
      var y$4 = x16.key__O();
      var yv$4 = x16.value__O();
      var b$4 = x16.left__Lscala_collection_immutable_RedBlack$Tree();
      var p15 = x16.right__Lscala_collection_immutable_RedBlack$Tree();
      if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p15)) {
        var x17 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p15);
        var z$4 = x17.key__O();
        var zv$4 = x17.value__O();
        var c$4 = x17.left__Lscala_collection_immutable_RedBlack$Tree();
        var d$4 = x17.right__Lscala_collection_immutable_RedBlack$Tree();
        return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), y$4, yv$4, new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x, xv, a$4, b$4), new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), z$4, zv$4, c$4, d$4))
      }
    }
  };
  if ((x1 !== null)) {
    var a$5 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
    var p18 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p18)) {
      var x20 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p18);
      var y$5 = x20.key__O();
      var yv$5 = x20.value__O();
      var p19 = x20.left__Lscala_collection_immutable_RedBlack$Tree();
      var d$5 = x20.right__Lscala_collection_immutable_RedBlack$Tree();
      if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p19)) {
        var x21 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p19);
        var z$5 = x21.key__O();
        var zv$5 = x21.value__O();
        var b$5 = x21.left__Lscala_collection_immutable_RedBlack$Tree();
        var c$5 = x21.right__Lscala_collection_immutable_RedBlack$Tree();
        return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), z$5, zv$5, new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x, xv, a$5, b$5), new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), y$5, yv$5, c$5, d$5))
      }
    }
  };
  if ((x1 !== null)) {
    var a$6 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
    var b$6 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
    return new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x, xv, a$6, b$6)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.subl$1__p2__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$RedTree = (function(t) {
  var x1 = t;
  if (ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree(x1)) {
    var x2 = ScalaJS.as.scala_collection_immutable_RedBlack$BlackTree(x1);
    var x = x2.key__O();
    var xv = x2.value__O();
    var a = x2.left__Lscala_collection_immutable_RedBlack$Tree();
    var b = x2.right__Lscala_collection_immutable_RedBlack$Tree();
    return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x, xv, a, b)
  };
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing(("Defect: invariance violation; expected black, got " + t))
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.balLeft$1__p2__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty = (function(x, xv, tl, tr) {
  var x1 = new ScalaJS.c.scala_Tuple2().init___O__O(tl, tr);
  if ((x1 !== null)) {
    var p2 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
    var c = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p2)) {
      var x3 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p2);
      var y = x3.key__O();
      var yv = x3.value__O();
      var a = x3.left__Lscala_collection_immutable_RedBlack$Tree();
      var b = x3.right__Lscala_collection_immutable_RedBlack$Tree();
      return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x, xv, new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), y, yv, a, b), c)
    }
  };
  if ((x1 !== null)) {
    var bl = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
    var p4 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree(p4)) {
      var x5 = ScalaJS.as.scala_collection_immutable_RedBlack$BlackTree(p4);
      var y$2 = x5.key__O();
      var yv$2 = x5.value__O();
      var a$2 = x5.left__Lscala_collection_immutable_RedBlack$Tree();
      var b$2 = x5.right__Lscala_collection_immutable_RedBlack$Tree();
      return this.balance$1__p2__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty(x, xv, bl, new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), y$2, yv$2, a$2, b$2))
    }
  };
  if ((x1 !== null)) {
    var bl$2 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
    var p6 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p6)) {
      var x8 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p6);
      var y$3 = x8.key__O();
      var yv$3 = x8.value__O();
      var p7 = x8.left__Lscala_collection_immutable_RedBlack$Tree();
      var c$2 = x8.right__Lscala_collection_immutable_RedBlack$Tree();
      if (ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree(p7)) {
        var x9 = ScalaJS.as.scala_collection_immutable_RedBlack$BlackTree(p7);
        var z = x9.key__O();
        var zv = x9.value__O();
        var a$3 = x9.left__Lscala_collection_immutable_RedBlack$Tree();
        var b$3 = x9.right__Lscala_collection_immutable_RedBlack$Tree();
        return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), z, zv, new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x, xv, bl$2, a$3), this.balance$1__p2__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty(y$3, yv$3, b$3, this.subl$1__p2__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$RedTree(c$2)))
      }
    }
  };
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing(("Defect: invariance violation at " + this.right__Lscala_collection_immutable_RedBlack$Tree()))
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.balRight$1__p2__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty = (function(x, xv, tl, tr) {
  var x1 = new ScalaJS.c.scala_Tuple2().init___O__O(tl, tr);
  if ((x1 !== null)) {
    var a = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
    var p2 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p2)) {
      var x3 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p2);
      var y = x3.key__O();
      var yv = x3.value__O();
      var b = x3.left__Lscala_collection_immutable_RedBlack$Tree();
      var c = x3.right__Lscala_collection_immutable_RedBlack$Tree();
      return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x, xv, a, new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), y, yv, b, c))
    }
  };
  if ((x1 !== null)) {
    var p4 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
    var bl = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree(p4)) {
      var x5 = ScalaJS.as.scala_collection_immutable_RedBlack$BlackTree(p4);
      var y$2 = x5.key__O();
      var yv$2 = x5.value__O();
      var a$2 = x5.left__Lscala_collection_immutable_RedBlack$Tree();
      var b$2 = x5.right__Lscala_collection_immutable_RedBlack$Tree();
      return this.balance$1__p2__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty(x, xv, new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), y$2, yv$2, a$2, b$2), bl)
    }
  };
  if ((x1 !== null)) {
    var p6 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
    var bl$2 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p6)) {
      var x8 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p6);
      var y$3 = x8.key__O();
      var yv$3 = x8.value__O();
      var a$3 = x8.left__Lscala_collection_immutable_RedBlack$Tree();
      var p7 = x8.right__Lscala_collection_immutable_RedBlack$Tree();
      if (ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree(p7)) {
        var x9 = ScalaJS.as.scala_collection_immutable_RedBlack$BlackTree(p7);
        var z = x9.key__O();
        var zv = x9.value__O();
        var b$3 = x9.left__Lscala_collection_immutable_RedBlack$Tree();
        var c$2 = x9.right__Lscala_collection_immutable_RedBlack$Tree();
        return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), z, zv, this.balance$1__p2__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty(y$3, yv$3, this.subl$1__p2__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$RedTree(a$3), b$3), new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x, xv, c$2, bl$2))
      }
    }
  };
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing(("Defect: invariance violation at " + this.left__Lscala_collection_immutable_RedBlack$Tree()))
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.delLeft$1__p2__O__Lscala_collection_immutable_RedBlack$NonEmpty = (function(k$1) {
  var x1 = this.left__Lscala_collection_immutable_RedBlack$Tree();
  if (ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree(x1)) {
    return this.balLeft$1__p2__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty(this.key__O(), this.value__O(), this.left__Lscala_collection_immutable_RedBlack$Tree().del__O__Lscala_collection_immutable_RedBlack$Tree(k$1), this.right__Lscala_collection_immutable_RedBlack$Tree())
  };
  return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), this.key__O(), this.value__O(), this.left__Lscala_collection_immutable_RedBlack$Tree().del__O__Lscala_collection_immutable_RedBlack$Tree(k$1), this.right__Lscala_collection_immutable_RedBlack$Tree())
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.delRight$1__p2__O__Lscala_collection_immutable_RedBlack$NonEmpty = (function(k$1) {
  var x1 = this.right__Lscala_collection_immutable_RedBlack$Tree();
  if (ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree(x1)) {
    return this.balRight$1__p2__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty(this.key__O(), this.value__O(), this.left__Lscala_collection_immutable_RedBlack$Tree(), this.right__Lscala_collection_immutable_RedBlack$Tree().del__O__Lscala_collection_immutable_RedBlack$Tree(k$1))
  };
  return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), this.key__O(), this.value__O(), this.left__Lscala_collection_immutable_RedBlack$Tree(), this.right__Lscala_collection_immutable_RedBlack$Tree().del__O__Lscala_collection_immutable_RedBlack$Tree(k$1))
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.append$1__p2__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree = (function(tl, tr) {
  var x1 = new ScalaJS.c.scala_Tuple2().init___O__O(tl, tr);
  if ((x1 !== null)) {
    var p2 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
    var t = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
    if (ScalaJS.anyRefEqEq(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().Empty__Lscala_collection_immutable_RedBlack$Empty$(), p2)) {
      return t
    }
  };
  if ((x1 !== null)) {
    var t$2 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
    var p3 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
    if (ScalaJS.anyRefEqEq(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().Empty__Lscala_collection_immutable_RedBlack$Empty$(), p3)) {
      return t$2
    }
  };
  if ((x1 !== null)) {
    var p4 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
    var p5 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p4)) {
      var x6 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p4);
      var x = x6.key__O();
      var xv = x6.value__O();
      var a = x6.left__Lscala_collection_immutable_RedBlack$Tree();
      var b = x6.right__Lscala_collection_immutable_RedBlack$Tree();
      if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p5)) {
        var x7 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p5);
        var y = x7.key__O();
        var yv = x7.value__O();
        var c = x7.left__Lscala_collection_immutable_RedBlack$Tree();
        var d = x7.right__Lscala_collection_immutable_RedBlack$Tree();
        var x1$2 = this.append$1__p2__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(b, c);
        if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(x1$2)) {
          var x2 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(x1$2);
          var z = x2.key__O();
          var zv = x2.value__O();
          var bb = x2.left__Lscala_collection_immutable_RedBlack$Tree();
          var cc = x2.right__Lscala_collection_immutable_RedBlack$Tree();
          return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), z, zv, new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x, xv, a, bb), new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), y, yv, cc, d))
        };
        return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x, xv, a, new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), y, yv, x1$2, d))
      }
    }
  };
  if ((x1 !== null)) {
    var p8 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
    var p9 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree(p8)) {
      var x10 = ScalaJS.as.scala_collection_immutable_RedBlack$BlackTree(p8);
      var x$2 = x10.key__O();
      var xv$2 = x10.value__O();
      var a$2 = x10.left__Lscala_collection_immutable_RedBlack$Tree();
      var b$2 = x10.right__Lscala_collection_immutable_RedBlack$Tree();
      if (ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree(p9)) {
        var x11 = ScalaJS.as.scala_collection_immutable_RedBlack$BlackTree(p9);
        var y$2 = x11.key__O();
        var yv$2 = x11.value__O();
        var c$2 = x11.left__Lscala_collection_immutable_RedBlack$Tree();
        var d$2 = x11.right__Lscala_collection_immutable_RedBlack$Tree();
        var x1$3 = this.append$1__p2__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(b$2, c$2);
        if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(x1$3)) {
          var x2$2 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(x1$3);
          var z$2 = x2$2.key__O();
          var zv$2 = x2$2.value__O();
          var bb$2 = x2$2.left__Lscala_collection_immutable_RedBlack$Tree();
          var cc$2 = x2$2.right__Lscala_collection_immutable_RedBlack$Tree();
          return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), z$2, zv$2, new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x$2, xv$2, a$2, bb$2), new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), y$2, yv$2, cc$2, d$2))
        };
        return this.balLeft$1__p2__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty(x$2, xv$2, a$2, new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), y$2, yv$2, x1$3, d$2))
      }
    }
  };
  if ((x1 !== null)) {
    var a$3 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
    var p12 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p12)) {
      var x13 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p12);
      var x$3 = x13.key__O();
      var xv$3 = x13.value__O();
      var b$3 = x13.left__Lscala_collection_immutable_RedBlack$Tree();
      var c$3 = x13.right__Lscala_collection_immutable_RedBlack$Tree();
      return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x$3, xv$3, this.append$1__p2__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(a$3, b$3), c$3)
    }
  };
  if ((x1 !== null)) {
    var p14 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
    var c$4 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(p14)) {
      var x15 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(p14);
      var x$4 = x15.key__O();
      var xv$4 = x15.value__O();
      var a$4 = x15.left__Lscala_collection_immutable_RedBlack$Tree();
      var b$4 = x15.right__Lscala_collection_immutable_RedBlack$Tree();
      return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack(), x$4, xv$4, a$4, this.append$1__p2__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(b$4, c$4))
    }
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.unzip$1__p2__Lscala_collection_immutable_List__Z__Lscala_collection_immutable_List = (function(zipper, leftMost) {
  var _$this = this;
  tailCallLoop: while (true) {
    if (leftMost) {
      var next = ScalaJS.as.scala_collection_immutable_RedBlack$NonEmpty(zipper.head__O()).left__Lscala_collection_immutable_RedBlack$Tree()
    } else {
      var next = ScalaJS.as.scala_collection_immutable_RedBlack$NonEmpty(zipper.head__O()).right__Lscala_collection_immutable_RedBlack$Tree()
    };
    var x1 = next;
    if (ScalaJS.is.scala_collection_immutable_RedBlack$NonEmpty(x1)) {
      var x2 = ScalaJS.as.scala_collection_immutable_RedBlack$NonEmpty(x1);
      var x$1 = x2;
      zipper = zipper.$$colon$colon__O__Lscala_collection_immutable_List(x$1);
      continue tailCallLoop
    };
    if (ScalaJS.anyRefEqEq(_$this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().Empty__Lscala_collection_immutable_RedBlack$Empty$(), x1)) {
      return zipper
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.unzipBoth$1__p2__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_List__Lscala_collection_immutable_List__I__Lscala_Tuple4 = (function(left, right, leftZipper, rightZipper, smallerDepth) {
  var _$this = this;
  tailCallLoop: while (true) {
    var x1 = new ScalaJS.c.scala_Tuple2().init___O__O(left, right);
    if ((x1 !== null)) {
      var l = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
      var r = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
      if (ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree(l)) {
        var x6 = ScalaJS.as.scala_collection_immutable_RedBlack$BlackTree(l);
        if (ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree(r)) {
          var x11 = ScalaJS.as.scala_collection_immutable_RedBlack$BlackTree(r);
          var temp$left = x6.right__Lscala_collection_immutable_RedBlack$Tree();
          var temp$right = x11.left__Lscala_collection_immutable_RedBlack$Tree();
          var x$2 = x6;
          var temp$leftZipper = leftZipper.$$colon$colon__O__Lscala_collection_immutable_List(x$2);
          var x$3 = x11;
          var temp$rightZipper = rightZipper.$$colon$colon__O__Lscala_collection_immutable_List(x$3);
          var temp$smallerDepth = (smallerDepth + 1);
          left = temp$left;
          right = temp$right;
          leftZipper = temp$leftZipper;
          rightZipper = temp$rightZipper;
          smallerDepth = temp$smallerDepth;
          continue tailCallLoop
        }
      }
    };
    if ((x1 !== null)) {
      var l$2 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
      var r$2 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
      if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(l$2)) {
        var x16 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(l$2);
        if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(r$2)) {
          var x21 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(r$2);
          var temp$left = x16.right__Lscala_collection_immutable_RedBlack$Tree();
          var temp$right = x21.left__Lscala_collection_immutable_RedBlack$Tree();
          var x$4 = x16;
          var temp$leftZipper = leftZipper.$$colon$colon__O__Lscala_collection_immutable_List(x$4);
          var x$5 = x21;
          var temp$rightZipper = rightZipper.$$colon$colon__O__Lscala_collection_immutable_List(x$5);
          left = temp$left;
          right = temp$right;
          leftZipper = temp$leftZipper;
          rightZipper = temp$rightZipper;
          continue tailCallLoop
        }
      }
    };
    if ((x1 !== null)) {
      var r$3 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
      if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(r$3)) {
        var x27 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(r$3);
        var temp$right = x27.left__Lscala_collection_immutable_RedBlack$Tree();
        var x$6 = x27;
        var temp$rightZipper = rightZipper.$$colon$colon__O__Lscala_collection_immutable_List(x$6);
        right = temp$right;
        rightZipper = temp$rightZipper;
        continue tailCallLoop
      }
    };
    if ((x1 !== null)) {
      var l$3 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
      if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(l$3)) {
        var x33 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(l$3);
        var temp$left = x33.right__Lscala_collection_immutable_RedBlack$Tree();
        var x$7 = x33;
        var temp$leftZipper = leftZipper.$$colon$colon__O__Lscala_collection_immutable_List(x$7);
        left = temp$left;
        leftZipper = temp$leftZipper;
        continue tailCallLoop
      }
    };
    if ((x1 !== null)) {
      var p34 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
      var p35 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
      if (ScalaJS.anyRefEqEq(_$this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().Empty__Lscala_collection_immutable_RedBlack$Empty$(), p34)) {
        if (ScalaJS.anyRefEqEq(_$this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().Empty__Lscala_collection_immutable_RedBlack$Empty$(), p35)) {
          return new ScalaJS.c.scala_Tuple4().init___O__O__O__O(ScalaJS.modules.scala_collection_immutable_Nil(), ScalaJS.bZ(true), ScalaJS.bZ(false), ScalaJS.bI(smallerDepth))
        }
      }
    };
    if ((x1 !== null)) {
      var p36 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
      var r$4 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
      if (ScalaJS.anyRefEqEq(_$this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().Empty__Lscala_collection_immutable_RedBlack$Empty$(), p36)) {
        if (ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree(r$4)) {
          var x41 = ScalaJS.as.scala_collection_immutable_RedBlack$BlackTree(r$4);
          var leftMost = true;
          var jsx$4 = new ScalaJS.c.scala_Tuple4();
          var jsx$3 = _$this;
          var x$8 = x41;
          var jsx$2 = rightZipper.$$colon$colon__O__Lscala_collection_immutable_List(x$8);
          var jsx$1 = jsx$3.unzip$1__p2__Lscala_collection_immutable_List__Z__Lscala_collection_immutable_List(jsx$2, leftMost);
          return jsx$4.init___O__O__O__O(jsx$1, ScalaJS.bZ(false), ScalaJS.bZ(leftMost), ScalaJS.bI(smallerDepth))
        }
      }
    };
    if ((x1 !== null)) {
      var l$4 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und1__O());
      var p42 = ScalaJS.as.scala_collection_immutable_RedBlack$Tree(x1.$$und2__O());
      if (ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree(l$4)) {
        var x47 = ScalaJS.as.scala_collection_immutable_RedBlack$BlackTree(l$4);
        if (ScalaJS.anyRefEqEq(_$this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack().Empty__Lscala_collection_immutable_RedBlack$Empty$(), p42)) {
          var leftMost$2 = false;
          var jsx$8 = new ScalaJS.c.scala_Tuple4();
          var jsx$7 = _$this;
          var x$9 = x47;
          var jsx$6 = leftZipper.$$colon$colon__O__Lscala_collection_immutable_List(x$9);
          var jsx$5 = jsx$7.unzip$1__p2__Lscala_collection_immutable_List__Z__Lscala_collection_immutable_List(jsx$6, leftMost$2);
          return jsx$8.init___O__O__O__O(jsx$5, ScalaJS.bZ(false), ScalaJS.bZ(leftMost$2), ScalaJS.bI(smallerDepth))
        }
      }
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.findDepth$1__p2__Lscala_collection_immutable_List__I__Lscala_collection_immutable_List = (function(zipper, depth) {
  var _$this = this;
  tailCallLoop: while (true) {
    var rc13 = false;
    var x3 = null;
    var x1 = zipper;
    if (ScalaJS.is.scala_collection_immutable_$colon$colon(x1)) {
      rc13 = true;
      x3 = ScalaJS.as.scala_collection_immutable_$colon$colon(x1);
      var p2 = ScalaJS.as.scala_collection_immutable_RedBlack$NonEmpty(x3.hd$1__O());
      var tail = x3.tl$1__Lscala_collection_immutable_List();
      if (ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree(p2)) {
        if ((depth === 1)) {
          return zipper
        } else {
          var temp$zipper = tail;
          var temp$depth = (depth - 1);
          zipper = temp$zipper;
          depth = temp$depth;
          continue tailCallLoop
        }
      }
    };
    if (rc13) {
      var tail$2 = x3.tl$1__Lscala_collection_immutable_List();
      zipper = tail$2;
      continue tailCallLoop
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_Nil(), x1)) {
      return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("Defect: unexpected empty zipper while computing range")
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.scala$collection$immutable$RedBlack$NonEmpty$$$outer__ = (function() {
  return this.scala$collection$immutable$RedBlack$NonEmpty$$$outer__Lscala_collection_immutable_RedBlack()
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.scala$collection$immutable$RedBlack$NonEmpty$$balanceRight__Z__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__ = (function(isBlack, x, xv, a, r) {
  return this.scala$collection$immutable$RedBlack$NonEmpty$$balanceRight__Z__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty(isBlack, x, xv, a, r)
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.scala$collection$immutable$RedBlack$NonEmpty$$balanceLeft__Z__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__ = (function(isBlack$2, z, zv, l, d) {
  return this.scala$collection$immutable$RedBlack$NonEmpty$$balanceLeft__Z__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty(isBlack$2, z, zv, l, d)
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.right__ = (function() {
  return this.right__Lscala_collection_immutable_RedBlack$Tree()
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.left__ = (function() {
  return this.left__Lscala_collection_immutable_RedBlack$Tree()
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.value__ = (function() {
  return this.value__O()
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.key__ = (function() {
  return this.key__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_RedBlack$NonEmpty = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_RedBlack$NonEmpty.prototype = ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype;
ScalaJS.is.scala_collection_immutable_RedBlack$NonEmpty = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_RedBlack$NonEmpty)))
});
ScalaJS.as.scala_collection_immutable_RedBlack$NonEmpty = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_RedBlack$NonEmpty(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.RedBlack$NonEmpty")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_RedBlack$NonEmpty = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_RedBlack$NonEmpty)))
});
ScalaJS.asArrayOf.scala_collection_immutable_RedBlack$NonEmpty = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_RedBlack$NonEmpty(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.RedBlack$NonEmpty;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_RedBlack$NonEmpty = new ScalaJS.ClassTypeData({
  scala_collection_immutable_RedBlack$NonEmpty: 0
}, false, "scala.collection.immutable.RedBlack$NonEmpty", ScalaJS.data.scala_collection_immutable_RedBlack$Tree, {
  scala_collection_immutable_RedBlack$NonEmpty: 1,
  scala_collection_immutable_RedBlack$Tree: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.$classData = ScalaJS.data.scala_collection_immutable_RedBlack$NonEmpty;
//@ sourceMappingURL=RedBlack$NonEmpty.js.map
