/** @constructor */
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree = (function() {
  ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.call(this);
  this.key$3 = null;
  this.value$3 = null;
  this.left$3 = null;
  this.right$3 = null
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype = new ScalaJS.inheritable.scala_collection_immutable_RedBlack$NonEmpty();
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.constructor = ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree;
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.key__O = (function() {
  return this.key$3
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.value__O = (function() {
  return this.value$3
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.left__Lscala_collection_immutable_RedBlack$Tree = (function() {
  return this.left$3
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.right__Lscala_collection_immutable_RedBlack$Tree = (function() {
  return this.right$3
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.isBlack__Z = (function() {
  return true
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.copy__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$BlackTree = (function(key, value, left, right) {
  return new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$BlackTree$$$outer__Lscala_collection_immutable_RedBlack(), key, value, left, right)
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.copy$default$1__O = (function() {
  return this.key__O()
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.copy$default$2__O = (function() {
  return this.value__O()
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.copy$default$3__Lscala_collection_immutable_RedBlack$Tree = (function() {
  return this.left__Lscala_collection_immutable_RedBlack$Tree()
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.copy$default$4__Lscala_collection_immutable_RedBlack$Tree = (function() {
  return this.right__Lscala_collection_immutable_RedBlack$Tree()
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.productPrefix__T = (function() {
  return "BlackTree"
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.productArity__I = (function() {
  return 4
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.key__O();
        break
      };
    case 1:
      {
        return this.value__O();
        break
      };
    case 2:
      {
        return this.left__Lscala_collection_immutable_RedBlack$Tree();
        break
      };
    case 3:
      {
        return this.right__Lscala_collection_immutable_RedBlack$Tree();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree(x$1)
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if ((ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree(x1) && (ScalaJS.as.scala_collection_immutable_RedBlack$BlackTree(x1).scala$collection$immutable$RedBlack$BlackTree$$$outer__Lscala_collection_immutable_RedBlack() === this.scala$collection$immutable$RedBlack$BlackTree$$$outer__Lscala_collection_immutable_RedBlack()))) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var BlackTree$1 = ScalaJS.as.scala_collection_immutable_RedBlack$BlackTree(x$1);
      return ((((ScalaJS.anyEqEq(this.key__O(), BlackTree$1.key__O()) && ScalaJS.anyEqEq(this.value__O(), BlackTree$1.value__O())) && ScalaJS.anyRefEqEq(this.left__Lscala_collection_immutable_RedBlack$Tree(), BlackTree$1.left__Lscala_collection_immutable_RedBlack$Tree())) && ScalaJS.anyRefEqEq(this.right__Lscala_collection_immutable_RedBlack$Tree(), BlackTree$1.right__Lscala_collection_immutable_RedBlack$Tree())) && BlackTree$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.scala$collection$immutable$RedBlack$BlackTree$$$outer__Lscala_collection_immutable_RedBlack = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree = (function($$outer, key, value, left, right) {
  this.key$3 = key;
  this.value$3 = value;
  this.left$3 = left;
  this.right$3 = right;
  ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.init___Lscala_collection_immutable_RedBlack.call(this, $$outer);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.scala$collection$immutable$RedBlack$BlackTree$$$outer__ = (function() {
  return this.scala$collection$immutable$RedBlack$BlackTree$$$outer__Lscala_collection_immutable_RedBlack()
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.copy__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__ = (function(key, value, left, right) {
  return this.copy__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$BlackTree(key, value, left, right)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_RedBlack$BlackTree = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_RedBlack$BlackTree.prototype = ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype;
ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_RedBlack$BlackTree)))
});
ScalaJS.as.scala_collection_immutable_RedBlack$BlackTree = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.RedBlack$BlackTree")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_RedBlack$BlackTree = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_RedBlack$BlackTree)))
});
ScalaJS.asArrayOf.scala_collection_immutable_RedBlack$BlackTree = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_RedBlack$BlackTree(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.RedBlack$BlackTree;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_RedBlack$BlackTree = new ScalaJS.ClassTypeData({
  scala_collection_immutable_RedBlack$BlackTree: 0
}, false, "scala.collection.immutable.RedBlack$BlackTree", ScalaJS.data.scala_collection_immutable_RedBlack$NonEmpty, {
  scala_collection_immutable_RedBlack$BlackTree: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_immutable_RedBlack$NonEmpty: 1,
  scala_collection_immutable_RedBlack$Tree: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree.prototype.$classData = ScalaJS.data.scala_collection_immutable_RedBlack$BlackTree;
//@ sourceMappingURL=RedBlack$BlackTree.js.map
