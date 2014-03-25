/** @constructor */
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree = (function() {
  ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.call(this);
  this.key$3 = null;
  this.value$3 = null;
  this.left$3 = null;
  this.right$3 = null
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype = new ScalaJS.inheritable.scala_collection_immutable_RedBlack$NonEmpty();
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.constructor = ScalaJS.c.scala_collection_immutable_RedBlack$RedTree;
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.key__O = (function() {
  return this.key$3
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.value__O = (function() {
  return this.value$3
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.left__Lscala_collection_immutable_RedBlack$Tree = (function() {
  return this.left$3
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.right__Lscala_collection_immutable_RedBlack$Tree = (function() {
  return this.right$3
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.isBlack__Z = (function() {
  return false
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.copy__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$RedTree = (function(key, value, left, right) {
  return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$RedTree$$$outer__Lscala_collection_immutable_RedBlack(), key, value, left, right)
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.copy$default$1__O = (function() {
  return this.key__O()
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.copy$default$2__O = (function() {
  return this.value__O()
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.copy$default$3__Lscala_collection_immutable_RedBlack$Tree = (function() {
  return this.left__Lscala_collection_immutable_RedBlack$Tree()
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.copy$default$4__Lscala_collection_immutable_RedBlack$Tree = (function() {
  return this.right__Lscala_collection_immutable_RedBlack$Tree()
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.productPrefix__T = (function() {
  return "RedTree"
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.productArity__I = (function() {
  return 4
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.productElement__I__O = (function(x$1) {
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
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(x$1)
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if ((ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(x1) && (ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(x1).scala$collection$immutable$RedBlack$RedTree$$$outer__Lscala_collection_immutable_RedBlack() === this.scala$collection$immutable$RedBlack$RedTree$$$outer__Lscala_collection_immutable_RedBlack()))) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var RedTree$1 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(x$1);
      return ((((ScalaJS.anyEqEq(this.key__O(), RedTree$1.key__O()) && ScalaJS.anyEqEq(this.value__O(), RedTree$1.value__O())) && ScalaJS.anyRefEqEq(this.left__Lscala_collection_immutable_RedBlack$Tree(), RedTree$1.left__Lscala_collection_immutable_RedBlack$Tree())) && ScalaJS.anyRefEqEq(this.right__Lscala_collection_immutable_RedBlack$Tree(), RedTree$1.right__Lscala_collection_immutable_RedBlack$Tree())) && RedTree$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.scala$collection$immutable$RedBlack$RedTree$$$outer__Lscala_collection_immutable_RedBlack = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree = (function($$outer, key, value, left, right) {
  this.key$3 = key;
  this.value$3 = value;
  this.left$3 = left;
  this.right$3 = right;
  ScalaJS.c.scala_collection_immutable_RedBlack$NonEmpty.prototype.init___Lscala_collection_immutable_RedBlack.call(this, $$outer);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.scala$collection$immutable$RedBlack$RedTree$$$outer__ = (function() {
  return this.scala$collection$immutable$RedBlack$RedTree$$$outer__Lscala_collection_immutable_RedBlack()
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.copy__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__ = (function(key, value, left, right) {
  return this.copy__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$RedTree(key, value, left, right)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_RedBlack$RedTree = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_RedBlack$RedTree.prototype = ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype;
ScalaJS.is.scala_collection_immutable_RedBlack$RedTree = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_RedBlack$RedTree)))
});
ScalaJS.as.scala_collection_immutable_RedBlack$RedTree = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.RedBlack$RedTree")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_RedBlack$RedTree = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_RedBlack$RedTree)))
});
ScalaJS.asArrayOf.scala_collection_immutable_RedBlack$RedTree = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_RedBlack$RedTree(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.RedBlack$RedTree;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_RedBlack$RedTree = new ScalaJS.ClassTypeData({
  scala_collection_immutable_RedBlack$RedTree: 0
}, false, "scala.collection.immutable.RedBlack$RedTree", ScalaJS.data.scala_collection_immutable_RedBlack$NonEmpty, {
  scala_collection_immutable_RedBlack$RedTree: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_immutable_RedBlack$NonEmpty: 1,
  scala_collection_immutable_RedBlack$Tree: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree.prototype.$classData = ScalaJS.data.scala_collection_immutable_RedBlack$RedTree;
//@ sourceMappingURL=RedBlack$RedTree.js.map
