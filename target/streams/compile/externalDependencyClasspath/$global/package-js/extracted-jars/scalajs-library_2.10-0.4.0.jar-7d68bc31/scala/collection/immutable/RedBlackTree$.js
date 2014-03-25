/** @constructor */
ScalaJS.c.scala_collection_immutable_RedBlackTree$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.constructor = ScalaJS.c.scala_collection_immutable_RedBlackTree$;
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.isEmpty__Lscala_collection_immutable_RedBlackTree$Tree__Z = (function(tree) {
  return (tree === null)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.contains__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Z = (function(tree, x, ordering) {
  return (this.lookup__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree, x, ordering) !== null)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.get__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_Option = (function(tree, x, ordering) {
  var x1 = this.lookup__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree, x, ordering);
  if (ScalaJS.anyRefEqEq(null, x1)) {
    return ScalaJS.modules.scala_None()
  };
  return new ScalaJS.c.scala_Some().init___O(x1.value__O())
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.lookup__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, x, ordering) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((tree === null)) {
      return null
    } else {
      var cmp = ordering.compare__O__O__I(x, tree.key__O());
      if ((cmp < 0)) {
        tree = tree.left__Lscala_collection_immutable_RedBlackTree$Tree();
        continue tailCallLoop
      } else {
        if ((cmp > 0)) {
          tree = tree.right__Lscala_collection_immutable_RedBlackTree$Tree();
          continue tailCallLoop
        } else {
          return tree
        }
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.count__Lscala_collection_immutable_RedBlackTree$Tree__I = (function(tree) {
  if ((tree === null)) {
    return 0
  } else {
    return tree.count__I()
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.update__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Z__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, k, v, overwrite, ordering) {
  return this.blacken__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.upd__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Z__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree, k, v, overwrite, ordering))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.$delete__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, k, ordering) {
  return this.blacken__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.del__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree, k, ordering))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.rangeImpl__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_Option__Lscala_Option__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, from, until, evidence$1) {
  var x1 = new ScalaJS.c.scala_Tuple2().init___O__O(from, until);
  if ((x1 !== null)) {
    var p2 = ScalaJS.as.scala_Option(x1.$$und1__O());
    var p3 = ScalaJS.as.scala_Option(x1.$$und2__O());
    if (ScalaJS.is.scala_Some(p2)) {
      var x4 = ScalaJS.as.scala_Some(p2);
      var from$2 = x4.x__O();
      if (ScalaJS.is.scala_Some(p3)) {
        var x5 = ScalaJS.as.scala_Some(p3);
        var until$2 = x5.x__O();
        return this.range__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree, from$2, until$2, evidence$1)
      }
    }
  };
  if ((x1 !== null)) {
    var p6 = ScalaJS.as.scala_Option(x1.$$und1__O());
    var p7 = ScalaJS.as.scala_Option(x1.$$und2__O());
    if (ScalaJS.is.scala_Some(p6)) {
      var x8 = ScalaJS.as.scala_Some(p6);
      var from$3 = x8.x__O();
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), p7)) {
        return this.from__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree, from$3, evidence$1)
      }
    }
  };
  if ((x1 !== null)) {
    var p9 = ScalaJS.as.scala_Option(x1.$$und1__O());
    var p10 = ScalaJS.as.scala_Option(x1.$$und2__O());
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), p9)) {
      if (ScalaJS.is.scala_Some(p10)) {
        var x11 = ScalaJS.as.scala_Some(p10);
        var until$3 = x11.x__O();
        return this.until__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree, until$3, evidence$1)
      }
    }
  };
  if ((x1 !== null)) {
    var p12 = ScalaJS.as.scala_Option(x1.$$und1__O());
    var p13 = ScalaJS.as.scala_Option(x1.$$und2__O());
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), p12)) {
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), p13)) {
        return tree
      }
    }
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.range__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, from, until, evidence$2) {
  return this.blacken__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.doRange__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree, from, until, evidence$2))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.from__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, from, evidence$3) {
  return this.blacken__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.doFrom__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree, from, evidence$3))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.to__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, to, evidence$4) {
  return this.blacken__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.doTo__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree, to, evidence$4))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.until__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, key, evidence$5) {
  return this.blacken__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.doUntil__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree, key, evidence$5))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.drop__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, n, evidence$6) {
  return this.blacken__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.doDrop__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_collection_immutable_RedBlackTree$Tree(tree, n))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.take__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, n, evidence$7) {
  return this.blacken__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.doTake__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_collection_immutable_RedBlackTree$Tree(tree, n))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.slice__Lscala_collection_immutable_RedBlackTree$Tree__I__I__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, from, until, evidence$8) {
  return this.blacken__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.doSlice__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__I__Lscala_collection_immutable_RedBlackTree$Tree(tree, from, until))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.smallest__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree) {
  if ((tree === null)) {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___T("empty map")
  };
  var result = tree;
  while ((result.left__Lscala_collection_immutable_RedBlackTree$Tree() !== null)) {
    result = result.left__Lscala_collection_immutable_RedBlackTree$Tree()
  };
  return result
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.greatest__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree) {
  if ((tree === null)) {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___T("empty map")
  };
  var result = tree;
  while ((result.right__Lscala_collection_immutable_RedBlackTree$Tree() !== null)) {
    result = result.right__Lscala_collection_immutable_RedBlackTree$Tree()
  };
  return result
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.foreach__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_Function1__V = (function(tree, f) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((tree !== null)) {
      if ((tree.left__Lscala_collection_immutable_RedBlackTree$Tree() !== null)) {
        _$this.foreach__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_Function1__V(tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), f)
      };
      f.apply__O__O(new ScalaJS.c.scala_Tuple2().init___O__O(tree.key__O(), tree.value__O()));
      if ((tree.right__Lscala_collection_immutable_RedBlackTree$Tree() !== null)) {
        tree = tree.right__Lscala_collection_immutable_RedBlackTree$Tree();
        continue tailCallLoop;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      } else {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    } else {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    };
    return undefined
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.foreachKey__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_Function1__V = (function(tree, f) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((tree !== null)) {
      if ((tree.left__Lscala_collection_immutable_RedBlackTree$Tree() !== null)) {
        _$this.foreachKey__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_Function1__V(tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), f)
      };
      f.apply__O__O(tree.key__O());
      if ((tree.right__Lscala_collection_immutable_RedBlackTree$Tree() !== null)) {
        tree = tree.right__Lscala_collection_immutable_RedBlackTree$Tree();
        continue tailCallLoop;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      } else {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    } else {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    };
    return undefined
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.iterator__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_Iterator = (function(tree) {
  return new ScalaJS.c.scala_collection_immutable_RedBlackTree$EntriesIterator().init___Lscala_collection_immutable_RedBlackTree$Tree(tree)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.keysIterator__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_Iterator = (function(tree) {
  return new ScalaJS.c.scala_collection_immutable_RedBlackTree$KeysIterator().init___Lscala_collection_immutable_RedBlackTree$Tree(tree)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.valuesIterator__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_Iterator = (function(tree) {
  return new ScalaJS.c.scala_collection_immutable_RedBlackTree$ValuesIterator().init___Lscala_collection_immutable_RedBlackTree$Tree(tree)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.nth__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, n) {
  var _$this = this;
  tailCallLoop: while (true) {
    var count = _$this.count__Lscala_collection_immutable_RedBlackTree$Tree__I(tree.left__Lscala_collection_immutable_RedBlackTree$Tree());
    if ((n < count)) {
      tree = tree.left__Lscala_collection_immutable_RedBlackTree$Tree();
      continue tailCallLoop
    } else {
      if ((n > count)) {
        var temp$tree = tree.right__Lscala_collection_immutable_RedBlackTree$Tree();
        var temp$n = ((n - count) - 1);
        tree = temp$tree;
        n = temp$n;
        continue tailCallLoop
      } else {
        return tree
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.isBlack__Lscala_collection_immutable_RedBlackTree$Tree__Z = (function(tree) {
  return ((tree === null) || this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(tree))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z = (function(tree) {
  return ScalaJS.is.scala_collection_immutable_RedBlackTree$RedTree(tree)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z = (function(tree) {
  return ScalaJS.is.scala_collection_immutable_RedBlackTree$BlackTree(tree)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.blacken__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree = (function(t) {
  if ((t === null)) {
    return null
  } else {
    return t.black__Lscala_collection_immutable_RedBlackTree$Tree()
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.mkTree__p1__Z__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree = (function(isBlack, k, v, l, r) {
  if (isBlack) {
    return ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(k, v, l, r)
  } else {
    return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(k, v, l, r)
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.scala$collection$immutable$RedBlackTree$$balanceLeft__Z__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree = (function(isBlack, z, zv, l, d) {
  if ((this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(l) && this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(l.left__Lscala_collection_immutable_RedBlackTree$Tree()))) {
    return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(l.key__O(), l.value__O(), ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(l.left__Lscala_collection_immutable_RedBlackTree$Tree().key__O(), l.left__Lscala_collection_immutable_RedBlackTree$Tree().value__O(), l.left__Lscala_collection_immutable_RedBlackTree$Tree().left__Lscala_collection_immutable_RedBlackTree$Tree(), l.left__Lscala_collection_immutable_RedBlackTree$Tree().right__Lscala_collection_immutable_RedBlackTree$Tree()), ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(z, zv, l.right__Lscala_collection_immutable_RedBlackTree$Tree(), d))
  } else {
    if ((this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(l) && this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(l.right__Lscala_collection_immutable_RedBlackTree$Tree()))) {
      return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(l.right__Lscala_collection_immutable_RedBlackTree$Tree().key__O(), l.right__Lscala_collection_immutable_RedBlackTree$Tree().value__O(), ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(l.key__O(), l.value__O(), l.left__Lscala_collection_immutable_RedBlackTree$Tree(), l.right__Lscala_collection_immutable_RedBlackTree$Tree().left__Lscala_collection_immutable_RedBlackTree$Tree()), ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(z, zv, l.right__Lscala_collection_immutable_RedBlackTree$Tree().right__Lscala_collection_immutable_RedBlackTree$Tree(), d))
    } else {
      return this.mkTree__p1__Z__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(isBlack, z, zv, l, d)
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.scala$collection$immutable$RedBlackTree$$balanceRight__Z__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree = (function(isBlack, x, xv, a, r) {
  if ((this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(r) && this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(r.left__Lscala_collection_immutable_RedBlackTree$Tree()))) {
    return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(r.left__Lscala_collection_immutable_RedBlackTree$Tree().key__O(), r.left__Lscala_collection_immutable_RedBlackTree$Tree().value__O(), ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(x, xv, a, r.left__Lscala_collection_immutable_RedBlackTree$Tree().left__Lscala_collection_immutable_RedBlackTree$Tree()), ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(r.key__O(), r.value__O(), r.left__Lscala_collection_immutable_RedBlackTree$Tree().right__Lscala_collection_immutable_RedBlackTree$Tree(), r.right__Lscala_collection_immutable_RedBlackTree$Tree()))
  } else {
    if ((this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(r) && this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(r.right__Lscala_collection_immutable_RedBlackTree$Tree()))) {
      return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(r.key__O(), r.value__O(), ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(x, xv, a, r.left__Lscala_collection_immutable_RedBlackTree$Tree()), ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(r.right__Lscala_collection_immutable_RedBlackTree$Tree().key__O(), r.right__Lscala_collection_immutable_RedBlackTree$Tree().value__O(), r.right__Lscala_collection_immutable_RedBlackTree$Tree().left__Lscala_collection_immutable_RedBlackTree$Tree(), r.right__Lscala_collection_immutable_RedBlackTree$Tree().right__Lscala_collection_immutable_RedBlackTree$Tree()))
    } else {
      return this.mkTree__p1__Z__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(isBlack, x, xv, a, r)
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.upd__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Z__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, k, v, overwrite, ordering) {
  if ((tree === null)) {
    return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(k, v, null, null)
  } else {
    var cmp = ordering.compare__O__O__I(k, tree.key__O());
    if ((cmp < 0)) {
      return this.scala$collection$immutable$RedBlackTree$$balanceLeft__Z__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(tree), tree.key__O(), tree.value__O(), this.upd__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Z__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), k, v, overwrite, ordering), tree.right__Lscala_collection_immutable_RedBlackTree$Tree())
    } else {
      if ((cmp > 0)) {
        return this.scala$collection$immutable$RedBlackTree$$balanceRight__Z__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(tree), tree.key__O(), tree.value__O(), tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), this.upd__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Z__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree.right__Lscala_collection_immutable_RedBlackTree$Tree(), k, v, overwrite, ordering))
      } else {
        if ((overwrite || (!ScalaJS.anyEqEq(k, tree.key__O())))) {
          return this.mkTree__p1__Z__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(tree), k, v, tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), tree.right__Lscala_collection_immutable_RedBlackTree$Tree())
        } else {
          return tree
        }
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.updNth__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__O__O__Z__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, idx, k, v, overwrite) {
  if ((tree === null)) {
    return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(k, v, null, null)
  } else {
    var rank = (this.count__Lscala_collection_immutable_RedBlackTree$Tree__I(tree.left__Lscala_collection_immutable_RedBlackTree$Tree()) + 1);
    if ((idx < rank)) {
      return this.scala$collection$immutable$RedBlackTree$$balanceLeft__Z__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(tree), tree.key__O(), tree.value__O(), this.updNth__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__O__O__Z__Lscala_collection_immutable_RedBlackTree$Tree(tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), idx, k, v, overwrite), tree.right__Lscala_collection_immutable_RedBlackTree$Tree())
    } else {
      if ((idx > rank)) {
        return this.scala$collection$immutable$RedBlackTree$$balanceRight__Z__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(tree), tree.key__O(), tree.value__O(), tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), this.updNth__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__O__O__Z__Lscala_collection_immutable_RedBlackTree$Tree(tree.right__Lscala_collection_immutable_RedBlackTree$Tree(), (idx - rank), k, v, overwrite))
      } else {
        if (overwrite) {
          return this.mkTree__p1__Z__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(tree), k, v, tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), tree.right__Lscala_collection_immutable_RedBlackTree$Tree())
        } else {
          return tree
        }
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.del__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, k, ordering) {
  if ((tree === null)) {
    return null
  } else {
    var cmp = ordering.compare__O__O__I(k, tree.key__O());
    if ((cmp < 0)) {
      return this.delLeft$1__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree, k, ordering)
    } else {
      if ((cmp > 0)) {
        return this.delRight$1__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree, k, ordering)
      } else {
        return this.append$1__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), tree.right__Lscala_collection_immutable_RedBlackTree$Tree())
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.doFrom__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, from, ordering) {
  if ((tree === null)) {
    return null
  };
  if (ordering.lt__O__O__Z(tree.key__O(), from)) {
    return this.doFrom__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree.right__Lscala_collection_immutable_RedBlackTree$Tree(), from, ordering)
  };
  var newLeft = this.doFrom__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), from, ordering);
  if ((newLeft === tree.left__Lscala_collection_immutable_RedBlackTree$Tree())) {
    return tree
  } else {
    if ((newLeft === null)) {
      return this.upd__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Z__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree.right__Lscala_collection_immutable_RedBlackTree$Tree(), tree.key__O(), tree.value__O(), false, ordering)
    } else {
      return this.rebalance__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tree, newLeft, tree.right__Lscala_collection_immutable_RedBlackTree$Tree())
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.doTo__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, to, ordering) {
  if ((tree === null)) {
    return null
  };
  if (ordering.lt__O__O__Z(to, tree.key__O())) {
    return this.doTo__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), to, ordering)
  };
  var newRight = this.doTo__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree.right__Lscala_collection_immutable_RedBlackTree$Tree(), to, ordering);
  if ((newRight === tree.right__Lscala_collection_immutable_RedBlackTree$Tree())) {
    return tree
  } else {
    if ((newRight === null)) {
      return this.upd__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Z__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), tree.key__O(), tree.value__O(), false, ordering)
    } else {
      return this.rebalance__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tree, tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), newRight)
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.doUntil__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, until, ordering) {
  if ((tree === null)) {
    return null
  };
  if (ordering.lteq__O__O__Z(until, tree.key__O())) {
    return this.doUntil__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), until, ordering)
  };
  var newRight = this.doUntil__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree.right__Lscala_collection_immutable_RedBlackTree$Tree(), until, ordering);
  if ((newRight === tree.right__Lscala_collection_immutable_RedBlackTree$Tree())) {
    return tree
  } else {
    if ((newRight === null)) {
      return this.upd__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Z__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), tree.key__O(), tree.value__O(), false, ordering)
    } else {
      return this.rebalance__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tree, tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), newRight)
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.doRange__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, from, until, ordering) {
  if ((tree === null)) {
    return null
  };
  if (ordering.lt__O__O__Z(tree.key__O(), from)) {
    return this.doRange__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree.right__Lscala_collection_immutable_RedBlackTree$Tree(), from, until, ordering)
  };
  if (ordering.lteq__O__O__Z(until, tree.key__O())) {
    return this.doRange__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), from, until, ordering)
  };
  var newLeft = this.doFrom__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), from, ordering);
  var newRight = this.doUntil__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree.right__Lscala_collection_immutable_RedBlackTree$Tree(), until, ordering);
  if (((newLeft === tree.left__Lscala_collection_immutable_RedBlackTree$Tree()) && (newRight === tree.right__Lscala_collection_immutable_RedBlackTree$Tree()))) {
    return tree
  } else {
    if ((newLeft === null)) {
      return this.upd__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Z__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(newRight, tree.key__O(), tree.value__O(), false, ordering)
    } else {
      if ((newRight === null)) {
        return this.upd__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Z__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(newLeft, tree.key__O(), tree.value__O(), false, ordering)
      } else {
        return this.rebalance__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tree, newLeft, newRight)
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.doDrop__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, n) {
  if ((n <= 0)) {
    return tree
  };
  if ((n >= this.count__Lscala_collection_immutable_RedBlackTree$Tree__I(tree))) {
    return null
  };
  var count = this.count__Lscala_collection_immutable_RedBlackTree$Tree__I(tree.left__Lscala_collection_immutable_RedBlackTree$Tree());
  if ((n > count)) {
    return this.doDrop__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_collection_immutable_RedBlackTree$Tree(tree.right__Lscala_collection_immutable_RedBlackTree$Tree(), ((n - count) - 1))
  };
  var newLeft = this.doDrop__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_collection_immutable_RedBlackTree$Tree(tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), n);
  if ((newLeft === tree.left__Lscala_collection_immutable_RedBlackTree$Tree())) {
    return tree
  } else {
    if ((newLeft === null)) {
      return this.updNth__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__O__O__Z__Lscala_collection_immutable_RedBlackTree$Tree(tree.right__Lscala_collection_immutable_RedBlackTree$Tree(), ((n - count) - 1), tree.key__O(), tree.value__O(), false)
    } else {
      return this.rebalance__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tree, newLeft, tree.right__Lscala_collection_immutable_RedBlackTree$Tree())
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.doTake__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, n) {
  if ((n <= 0)) {
    return null
  };
  if ((n >= this.count__Lscala_collection_immutable_RedBlackTree$Tree__I(tree))) {
    return tree
  };
  var count = this.count__Lscala_collection_immutable_RedBlackTree$Tree__I(tree.left__Lscala_collection_immutable_RedBlackTree$Tree());
  if ((n <= count)) {
    return this.doTake__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_collection_immutable_RedBlackTree$Tree(tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), n)
  };
  var newRight = this.doTake__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_collection_immutable_RedBlackTree$Tree(tree.right__Lscala_collection_immutable_RedBlackTree$Tree(), ((n - count) - 1));
  if ((newRight === tree.right__Lscala_collection_immutable_RedBlackTree$Tree())) {
    return tree
  } else {
    if ((newRight === null)) {
      return this.updNth__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__O__O__Z__Lscala_collection_immutable_RedBlackTree$Tree(tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), n, tree.key__O(), tree.value__O(), false)
    } else {
      return this.rebalance__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tree, tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), newRight)
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.doSlice__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__I__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, from, until) {
  if ((tree === null)) {
    return null
  };
  var count = this.count__Lscala_collection_immutable_RedBlackTree$Tree__I(tree.left__Lscala_collection_immutable_RedBlackTree$Tree());
  if ((from > count)) {
    return this.doSlice__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__I__Lscala_collection_immutable_RedBlackTree$Tree(tree.right__Lscala_collection_immutable_RedBlackTree$Tree(), ((from - count) - 1), ((until - count) - 1))
  };
  if ((until <= count)) {
    return this.doSlice__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__I__Lscala_collection_immutable_RedBlackTree$Tree(tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), from, until)
  };
  var newLeft = this.doDrop__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_collection_immutable_RedBlackTree$Tree(tree.left__Lscala_collection_immutable_RedBlackTree$Tree(), from);
  var newRight = this.doTake__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_collection_immutable_RedBlackTree$Tree(tree.right__Lscala_collection_immutable_RedBlackTree$Tree(), ((until - count) - 1));
  if (((newLeft === tree.left__Lscala_collection_immutable_RedBlackTree$Tree()) && (newRight === tree.right__Lscala_collection_immutable_RedBlackTree$Tree()))) {
    return tree
  } else {
    if ((newLeft === null)) {
      return this.updNth__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__O__O__Z__Lscala_collection_immutable_RedBlackTree$Tree(newRight, ((from - count) - 1), tree.key__O(), tree.value__O(), false)
    } else {
      if ((newRight === null)) {
        return this.updNth__p1__Lscala_collection_immutable_RedBlackTree$Tree__I__O__O__Z__Lscala_collection_immutable_RedBlackTree$Tree(newLeft, until, tree.key__O(), tree.value__O(), false)
      } else {
        return this.rebalance__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tree, newLeft, newRight)
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.compareDepth__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_Tuple4 = (function(left, right) {
  return this.unzipBoth$1__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_List__Lscala_collection_immutable_List__I__Lscala_Tuple4(left, right, ScalaJS.modules.scala_collection_immutable_Nil(), ScalaJS.modules.scala_collection_immutable_Nil(), 0)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.rebalance__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree, newLeft, newRight) {
  var blkNewLeft = this.blacken__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(newLeft);
  var blkNewRight = this.blacken__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(newRight);
  var x1 = this.compareDepth__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_Tuple4(blkNewLeft, blkNewRight);
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
    return ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(tree.key__O(), tree.value__O(), blkNewLeft, blkNewRight)
  } else {
    var zipFrom = this.findDepth$1__p1__Lscala_collection_immutable_List__I__Lscala_collection_immutable_List(zipper$2, smallerDepth$2);
    if (leftMost$2) {
      var union = ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(tree.key__O(), tree.value__O(), blkNewLeft, ScalaJS.as.scala_collection_immutable_RedBlackTree$Tree(zipFrom.head__O()))
    } else {
      var union = ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(tree.key__O(), tree.value__O(), ScalaJS.as.scala_collection_immutable_RedBlackTree$Tree(zipFrom.head__O()), blkNewRight)
    };
    var zippedTree = ScalaJS.as.scala_collection_immutable_RedBlackTree$Tree(ScalaJS.as.scala_collection_LinearSeqOptimized(zipFrom.tail__O()).foldLeft__O__Lscala_Function2__O(union, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(leftMost$1) {
      return (function(tree, node) {
        if (leftMost$1) {
          return ScalaJS.modules.scala_collection_immutable_RedBlackTree().scala$collection$immutable$RedBlackTree$$balanceLeft__Z__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(ScalaJS.modules.scala_collection_immutable_RedBlackTree().scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(node), node.key__O(), node.value__O(), tree, node.right__Lscala_collection_immutable_RedBlackTree$Tree())
        } else {
          return ScalaJS.modules.scala_collection_immutable_RedBlackTree().scala$collection$immutable$RedBlackTree$$balanceRight__Z__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(ScalaJS.modules.scala_collection_immutable_RedBlackTree().scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(node), node.key__O(), node.value__O(), node.left__Lscala_collection_immutable_RedBlackTree$Tree(), tree)
        }
      })
    })(leftMost$2))));
    return zippedTree
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.balance$1__p1__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree = (function(x, xv, tl, tr) {
  if (this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(tl)) {
    if (this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(tr)) {
      return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(x, xv, tl.black__Lscala_collection_immutable_RedBlackTree$Tree(), tr.black__Lscala_collection_immutable_RedBlackTree$Tree())
    } else {
      if (this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(tl.left__Lscala_collection_immutable_RedBlackTree$Tree())) {
        return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(tl.key__O(), tl.value__O(), tl.left__Lscala_collection_immutable_RedBlackTree$Tree().black__Lscala_collection_immutable_RedBlackTree$Tree(), ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(x, xv, tl.right__Lscala_collection_immutable_RedBlackTree$Tree(), tr))
      } else {
        if (this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(tl.right__Lscala_collection_immutable_RedBlackTree$Tree())) {
          return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(tl.right__Lscala_collection_immutable_RedBlackTree$Tree().key__O(), tl.right__Lscala_collection_immutable_RedBlackTree$Tree().value__O(), ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(tl.key__O(), tl.value__O(), tl.left__Lscala_collection_immutable_RedBlackTree$Tree(), tl.right__Lscala_collection_immutable_RedBlackTree$Tree().left__Lscala_collection_immutable_RedBlackTree$Tree()), ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(x, xv, tl.right__Lscala_collection_immutable_RedBlackTree$Tree().right__Lscala_collection_immutable_RedBlackTree$Tree(), tr))
        } else {
          return ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(x, xv, tl, tr)
        }
      }
    }
  } else {
    if (this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(tr)) {
      if (this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(tr.right__Lscala_collection_immutable_RedBlackTree$Tree())) {
        return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(tr.key__O(), tr.value__O(), ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(x, xv, tl, tr.left__Lscala_collection_immutable_RedBlackTree$Tree()), tr.right__Lscala_collection_immutable_RedBlackTree$Tree().black__Lscala_collection_immutable_RedBlackTree$Tree())
      } else {
        if (this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(tr.left__Lscala_collection_immutable_RedBlackTree$Tree())) {
          return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(tr.left__Lscala_collection_immutable_RedBlackTree$Tree().key__O(), tr.left__Lscala_collection_immutable_RedBlackTree$Tree().value__O(), ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(x, xv, tl, tr.left__Lscala_collection_immutable_RedBlackTree$Tree().left__Lscala_collection_immutable_RedBlackTree$Tree()), ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(tr.key__O(), tr.value__O(), tr.left__Lscala_collection_immutable_RedBlackTree$Tree().right__Lscala_collection_immutable_RedBlackTree$Tree(), tr.right__Lscala_collection_immutable_RedBlackTree$Tree()))
        } else {
          return ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(x, xv, tl, tr)
        }
      }
    } else {
      return ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(x, xv, tl, tr)
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.subl$1__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree = (function(t) {
  if (ScalaJS.is.scala_collection_immutable_RedBlackTree$BlackTree(t)) {
    return t.red__Lscala_collection_immutable_RedBlackTree$Tree()
  } else {
    return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing(("Defect: invariance violation; expected black, got " + t))
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.balLeft$1__p1__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree = (function(x, xv, tl, tr) {
  if (this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(tl)) {
    return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(x, xv, tl.black__Lscala_collection_immutable_RedBlackTree$Tree(), tr)
  } else {
    if (this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(tr)) {
      return this.balance$1__p1__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(x, xv, tl, tr.red__Lscala_collection_immutable_RedBlackTree$Tree())
    } else {
      if ((this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(tr) && this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(tr.left__Lscala_collection_immutable_RedBlackTree$Tree()))) {
        return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(tr.left__Lscala_collection_immutable_RedBlackTree$Tree().key__O(), tr.left__Lscala_collection_immutable_RedBlackTree$Tree().value__O(), ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(x, xv, tl, tr.left__Lscala_collection_immutable_RedBlackTree$Tree().left__Lscala_collection_immutable_RedBlackTree$Tree()), this.balance$1__p1__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tr.key__O(), tr.value__O(), tr.left__Lscala_collection_immutable_RedBlackTree$Tree().right__Lscala_collection_immutable_RedBlackTree$Tree(), this.subl$1__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tr.right__Lscala_collection_immutable_RedBlackTree$Tree())))
      } else {
        return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("Defect: invariance violation")
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.balRight$1__p1__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree = (function(x, xv, tl, tr) {
  if (this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(tr)) {
    return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(x, xv, tl, tr.black__Lscala_collection_immutable_RedBlackTree$Tree())
  } else {
    if (this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(tl)) {
      return this.balance$1__p1__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(x, xv, tl.red__Lscala_collection_immutable_RedBlackTree$Tree(), tr)
    } else {
      if ((this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(tl) && this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(tl.right__Lscala_collection_immutable_RedBlackTree$Tree()))) {
        return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(tl.right__Lscala_collection_immutable_RedBlackTree$Tree().key__O(), tl.right__Lscala_collection_immutable_RedBlackTree$Tree().value__O(), this.balance$1__p1__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tl.key__O(), tl.value__O(), this.subl$1__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tl.left__Lscala_collection_immutable_RedBlackTree$Tree()), tl.right__Lscala_collection_immutable_RedBlackTree$Tree().left__Lscala_collection_immutable_RedBlackTree$Tree()), ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(x, xv, tl.right__Lscala_collection_immutable_RedBlackTree$Tree().right__Lscala_collection_immutable_RedBlackTree$Tree(), tr))
      } else {
        return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("Defect: invariance violation")
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.delLeft$1__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree$1, k$1, ordering$1) {
  if (this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(tree$1.left__Lscala_collection_immutable_RedBlackTree$Tree())) {
    return this.balLeft$1__p1__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tree$1.key__O(), tree$1.value__O(), this.del__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree$1.left__Lscala_collection_immutable_RedBlackTree$Tree(), k$1, ordering$1), tree$1.right__Lscala_collection_immutable_RedBlackTree$Tree())
  } else {
    return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(tree$1.key__O(), tree$1.value__O(), this.del__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree$1.left__Lscala_collection_immutable_RedBlackTree$Tree(), k$1, ordering$1), tree$1.right__Lscala_collection_immutable_RedBlackTree$Tree())
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.delRight$1__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree = (function(tree$1, k$1, ordering$1) {
  if (this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(tree$1.right__Lscala_collection_immutable_RedBlackTree$Tree())) {
    return this.balRight$1__p1__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tree$1.key__O(), tree$1.value__O(), tree$1.left__Lscala_collection_immutable_RedBlackTree$Tree(), this.del__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree$1.right__Lscala_collection_immutable_RedBlackTree$Tree(), k$1, ordering$1))
  } else {
    return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(tree$1.key__O(), tree$1.value__O(), tree$1.left__Lscala_collection_immutable_RedBlackTree$Tree(), this.del__p1__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree$1.right__Lscala_collection_immutable_RedBlackTree$Tree(), k$1, ordering$1))
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.append$1__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree = (function(tl, tr) {
  if ((tl === null)) {
    return tr
  } else {
    if ((tr === null)) {
      return tl
    } else {
      if ((this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(tl) && this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(tr))) {
        var bc = this.append$1__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tl.right__Lscala_collection_immutable_RedBlackTree$Tree(), tr.left__Lscala_collection_immutable_RedBlackTree$Tree());
        if (this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(bc)) {
          return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(bc.key__O(), bc.value__O(), ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(tl.key__O(), tl.value__O(), tl.left__Lscala_collection_immutable_RedBlackTree$Tree(), bc.left__Lscala_collection_immutable_RedBlackTree$Tree()), ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(tr.key__O(), tr.value__O(), bc.right__Lscala_collection_immutable_RedBlackTree$Tree(), tr.right__Lscala_collection_immutable_RedBlackTree$Tree()))
        } else {
          return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(tl.key__O(), tl.value__O(), tl.left__Lscala_collection_immutable_RedBlackTree$Tree(), ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(tr.key__O(), tr.value__O(), bc, tr.right__Lscala_collection_immutable_RedBlackTree$Tree()))
        }
      } else {
        if ((this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(tl) && this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(tr))) {
          var bc$2 = this.append$1__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tl.right__Lscala_collection_immutable_RedBlackTree$Tree(), tr.left__Lscala_collection_immutable_RedBlackTree$Tree());
          if (this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(bc$2)) {
            return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(bc$2.key__O(), bc$2.value__O(), ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(tl.key__O(), tl.value__O(), tl.left__Lscala_collection_immutable_RedBlackTree$Tree(), bc$2.left__Lscala_collection_immutable_RedBlackTree$Tree()), ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(tr.key__O(), tr.value__O(), bc$2.right__Lscala_collection_immutable_RedBlackTree$Tree(), tr.right__Lscala_collection_immutable_RedBlackTree$Tree()))
          } else {
            return this.balLeft$1__p1__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tl.key__O(), tl.value__O(), tl.left__Lscala_collection_immutable_RedBlackTree$Tree(), ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(tr.key__O(), tr.value__O(), bc$2, tr.right__Lscala_collection_immutable_RedBlackTree$Tree()))
          }
        } else {
          if (this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(tr)) {
            return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(tr.key__O(), tr.value__O(), this.append$1__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tl, tr.left__Lscala_collection_immutable_RedBlackTree$Tree()), tr.right__Lscala_collection_immutable_RedBlackTree$Tree())
          } else {
            if (this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(tl)) {
              return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(tl.key__O(), tl.value__O(), tl.left__Lscala_collection_immutable_RedBlackTree$Tree(), this.append$1__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tl.right__Lscala_collection_immutable_RedBlackTree$Tree(), tr))
            } else {
              return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing(((("unmatched tree on append: " + tl) + ", ") + tr))
            }
          }
        }
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.unzip$1__p1__Lscala_collection_immutable_List__Z__Lscala_collection_immutable_List = (function(zipper, leftMost) {
  var _$this = this;
  tailCallLoop: while (true) {
    if (leftMost) {
      var next = ScalaJS.as.scala_collection_immutable_RedBlackTree$Tree(zipper.head__O()).left__Lscala_collection_immutable_RedBlackTree$Tree()
    } else {
      var next = ScalaJS.as.scala_collection_immutable_RedBlackTree$Tree(zipper.head__O()).right__Lscala_collection_immutable_RedBlackTree$Tree()
    };
    var x1 = next;
    if (ScalaJS.anyRefEqEq(null, x1)) {
      return zipper
    };
    var x$1 = x1;
    zipper = zipper.$$colon$colon__O__Lscala_collection_immutable_List(x$1);
    continue tailCallLoop
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.unzipBoth$1__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_List__Lscala_collection_immutable_List__I__Lscala_Tuple4 = (function(left, right, leftZipper, rightZipper, smallerDepth) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((_$this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(left) && _$this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(right))) {
      var temp$left = left.right__Lscala_collection_immutable_RedBlackTree$Tree();
      var temp$right = right.left__Lscala_collection_immutable_RedBlackTree$Tree();
      var x$2 = left;
      var temp$leftZipper = leftZipper.$$colon$colon__O__Lscala_collection_immutable_List(x$2);
      var x$3 = right;
      var temp$rightZipper = rightZipper.$$colon$colon__O__Lscala_collection_immutable_List(x$3);
      var temp$smallerDepth = (smallerDepth + 1);
      left = temp$left;
      right = temp$right;
      leftZipper = temp$leftZipper;
      rightZipper = temp$rightZipper;
      smallerDepth = temp$smallerDepth;
      continue tailCallLoop
    } else {
      if ((_$this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(left) && _$this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(right))) {
        var temp$left = left.right__Lscala_collection_immutable_RedBlackTree$Tree();
        var temp$right = right.left__Lscala_collection_immutable_RedBlackTree$Tree();
        var x$4 = left;
        var temp$leftZipper = leftZipper.$$colon$colon__O__Lscala_collection_immutable_List(x$4);
        var x$5 = right;
        var temp$rightZipper = rightZipper.$$colon$colon__O__Lscala_collection_immutable_List(x$5);
        left = temp$left;
        right = temp$right;
        leftZipper = temp$leftZipper;
        rightZipper = temp$rightZipper;
        continue tailCallLoop
      } else {
        if (_$this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(right)) {
          var temp$right = right.left__Lscala_collection_immutable_RedBlackTree$Tree();
          var x$6 = right;
          var temp$rightZipper = rightZipper.$$colon$colon__O__Lscala_collection_immutable_List(x$6);
          right = temp$right;
          rightZipper = temp$rightZipper;
          continue tailCallLoop
        } else {
          if (_$this.isRedTree__p1__Lscala_collection_immutable_RedBlackTree$Tree__Z(left)) {
            var temp$left = left.right__Lscala_collection_immutable_RedBlackTree$Tree();
            var x$7 = left;
            var temp$leftZipper = leftZipper.$$colon$colon__O__Lscala_collection_immutable_List(x$7);
            left = temp$left;
            leftZipper = temp$leftZipper;
            continue tailCallLoop
          } else {
            if (((left === null) && (right === null))) {
              return new ScalaJS.c.scala_Tuple4().init___O__O__O__O(ScalaJS.modules.scala_collection_immutable_Nil(), ScalaJS.bZ(true), ScalaJS.bZ(false), ScalaJS.bI(smallerDepth))
            } else {
              if (((left === null) && _$this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(right))) {
                var leftMost = true;
                var jsx$4 = new ScalaJS.c.scala_Tuple4();
                var jsx$3 = _$this;
                var x$8 = right;
                var jsx$2 = rightZipper.$$colon$colon__O__Lscala_collection_immutable_List(x$8);
                var jsx$1 = jsx$3.unzip$1__p1__Lscala_collection_immutable_List__Z__Lscala_collection_immutable_List(jsx$2, leftMost);
                return jsx$4.init___O__O__O__O(jsx$1, ScalaJS.bZ(false), ScalaJS.bZ(leftMost), ScalaJS.bI(smallerDepth))
              } else {
                if ((_$this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(left) && (right === null))) {
                  var leftMost$2 = false;
                  var jsx$8 = new ScalaJS.c.scala_Tuple4();
                  var jsx$7 = _$this;
                  var x$9 = left;
                  var jsx$6 = leftZipper.$$colon$colon__O__Lscala_collection_immutable_List(x$9);
                  var jsx$5 = jsx$7.unzip$1__p1__Lscala_collection_immutable_List__Z__Lscala_collection_immutable_List(jsx$6, leftMost$2);
                  return jsx$8.init___O__O__O__O(jsx$5, ScalaJS.bZ(false), ScalaJS.bZ(leftMost$2), ScalaJS.bI(smallerDepth))
                } else {
                  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing(((("unmatched trees in unzip: " + left) + ", ") + right))
                }
              }
            }
          }
        }
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.findDepth$1__p1__Lscala_collection_immutable_List__I__Lscala_collection_immutable_List = (function(zipper, depth) {
  var _$this = this;
  tailCallLoop: while (true) {
    var rc7 = false;
    var x2 = null;
    var x1 = zipper;
    if (ScalaJS.is.scala_collection_immutable_$colon$colon(x1)) {
      rc7 = true;
      x2 = ScalaJS.as.scala_collection_immutable_$colon$colon(x1);
      var head = ScalaJS.as.scala_collection_immutable_RedBlackTree$Tree(x2.hd$1__O());
      var tail = x2.tl$1__Lscala_collection_immutable_List();
      if (_$this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(head)) {
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
    if (rc7) {
      var tail$2 = x2.tl$1__Lscala_collection_immutable_List();
      zipper = tail$2;
      continue tailCallLoop
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_Nil(), x1)) {
      return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("Defect: unexpected empty zipper while computing range")
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.scala$collection$immutable$RedBlackTree$$balanceRight__Z__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__ = (function(isBlack, x, xv, a, r) {
  return this.scala$collection$immutable$RedBlackTree$$balanceRight__Z__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(isBlack, x, xv, a, r)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.scala$collection$immutable$RedBlackTree$$balanceLeft__Z__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__ = (function(isBlack$2, z, zv, l, d) {
  return this.scala$collection$immutable$RedBlackTree$$balanceLeft__Z__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(isBlack$2, z, zv, l, d)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__ = (function(tree) {
  return ScalaJS.bZ(this.scala$collection$immutable$RedBlackTree$$isBlackTree__Lscala_collection_immutable_RedBlackTree$Tree__Z(tree))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.isBlack__Lscala_collection_immutable_RedBlackTree$Tree__ = (function(tree$2) {
  return ScalaJS.bZ(this.isBlack__Lscala_collection_immutable_RedBlackTree$Tree__Z(tree$2))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.nth__Lscala_collection_immutable_RedBlackTree$Tree__I__ = (function(tree$3, n) {
  return this.nth__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_collection_immutable_RedBlackTree$Tree(tree$3, n)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.valuesIterator__Lscala_collection_immutable_RedBlackTree$Tree__ = (function(tree$4) {
  return this.valuesIterator__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_Iterator(tree$4)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.keysIterator__Lscala_collection_immutable_RedBlackTree$Tree__ = (function(tree$5) {
  return this.keysIterator__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_Iterator(tree$5)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.iterator__Lscala_collection_immutable_RedBlackTree$Tree__ = (function(tree$6) {
  return this.iterator__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_Iterator(tree$6)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.foreachKey__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_Function1__ = (function(tree$7, f) {
  return ScalaJS.bV(this.foreachKey__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_Function1__V(tree$7, f))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.foreach__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_Function1__ = (function(tree$8, f$2) {
  return ScalaJS.bV(this.foreach__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_Function1__V(tree$8, f$2))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.greatest__Lscala_collection_immutable_RedBlackTree$Tree__ = (function(tree$9) {
  return this.greatest__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tree$9)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.smallest__Lscala_collection_immutable_RedBlackTree$Tree__ = (function(tree$10) {
  return this.smallest__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(tree$10)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.slice__Lscala_collection_immutable_RedBlackTree$Tree__I__I__Lscala_math_Ordering__ = (function(tree$11, from, until, evidence$8) {
  return this.slice__Lscala_collection_immutable_RedBlackTree$Tree__I__I__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree$11, from, until, evidence$8)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.take__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_math_Ordering__ = (function(tree$12, n$2, evidence$7) {
  return this.take__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree$12, n$2, evidence$7)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.drop__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_math_Ordering__ = (function(tree$13, n$3, evidence$6) {
  return this.drop__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree$13, n$3, evidence$6)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.until__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__ = (function(tree$14, key, evidence$5) {
  return this.until__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree$14, key, evidence$5)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.to__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__ = (function(tree$15, to, evidence$4) {
  return this.to__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree$15, to, evidence$4)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.from__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__ = (function(tree$16, from$2, evidence$3) {
  return this.from__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree$16, from$2, evidence$3)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.range__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Lscala_math_Ordering__ = (function(tree$17, from$3, until$2, evidence$2) {
  return this.range__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree$17, from$3, until$2, evidence$2)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.rangeImpl__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_Option__Lscala_Option__Lscala_math_Ordering__ = (function(tree$18, from$4, until$3, evidence$1) {
  return this.rangeImpl__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_Option__Lscala_Option__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree$18, from$4, until$3, evidence$1)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.$delete__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__ = (function(tree$19, k, ordering) {
  return this.$delete__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree$19, k, ordering)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.update__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Z__Lscala_math_Ordering__ = (function(tree$20, k$2, v, overwrite, ordering$2) {
  return this.update__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Z__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree$20, k$2, v, overwrite, ordering$2)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.count__Lscala_collection_immutable_RedBlackTree$Tree__ = (function(tree$21) {
  return ScalaJS.bI(this.count__Lscala_collection_immutable_RedBlackTree$Tree__I(tree$21))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.lookup__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__ = (function(tree$22, x$2, ordering$3) {
  return this.lookup__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(tree$22, x$2, ordering$3)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.get__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__ = (function(tree$23, x$3, ordering$4) {
  return this.get__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_Option(tree$23, x$3, ordering$4)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.contains__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__ = (function(tree$24, x$4, ordering$5) {
  return ScalaJS.bZ(this.contains__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Z(tree$24, x$4, ordering$5))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.isEmpty__Lscala_collection_immutable_RedBlackTree$Tree__ = (function(tree$25) {
  return ScalaJS.bZ(this.isEmpty__Lscala_collection_immutable_RedBlackTree$Tree__Z(tree$25))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$.prototype = ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype;
ScalaJS.is.scala_collection_immutable_RedBlackTree$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_RedBlackTree$)))
});
ScalaJS.as.scala_collection_immutable_RedBlackTree$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_RedBlackTree$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.RedBlackTree")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_RedBlackTree$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_RedBlackTree$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_RedBlackTree$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_RedBlackTree$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.RedBlackTree;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_RedBlackTree$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_RedBlackTree$: 0
}, false, "scala.collection.immutable.RedBlackTree$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_RedBlackTree$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$.prototype.$classData = ScalaJS.data.scala_collection_immutable_RedBlackTree$;
ScalaJS.moduleInstances.scala_collection_immutable_RedBlackTree = undefined;
ScalaJS.modules.scala_collection_immutable_RedBlackTree = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_RedBlackTree)) {
    ScalaJS.moduleInstances.scala_collection_immutable_RedBlackTree = new ScalaJS.c.scala_collection_immutable_RedBlackTree$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_RedBlackTree
});
//@ sourceMappingURL=RedBlackTree$.js.map
