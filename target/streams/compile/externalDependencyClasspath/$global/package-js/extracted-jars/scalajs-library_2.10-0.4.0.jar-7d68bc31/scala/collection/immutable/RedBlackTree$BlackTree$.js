/** @constructor */
ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree$.prototype.constructor = ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree$;
ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree$.prototype.apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree = (function(key$2, value$2, left$2, right$2) {
  return new ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree().init___O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(key$2, value$2, left$2, right$2)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree$.prototype.unapply__Lscala_collection_immutable_RedBlackTree$BlackTree__Lscala_Some = (function(t) {
  return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple4().init___O__O__O__O(t.key__O(), t.value__O(), t.left__Lscala_collection_immutable_RedBlackTree$Tree(), t.right__Lscala_collection_immutable_RedBlackTree$Tree()))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree()
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree$.prototype.unapply__Lscala_collection_immutable_RedBlackTree$BlackTree__ = (function(t) {
  return this.unapply__Lscala_collection_immutable_RedBlackTree$BlackTree__Lscala_Some(t)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree$.prototype.apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__ = (function(key, value, left, right) {
  return this.apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(key, value, left, right)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$BlackTree$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$BlackTree$.prototype = ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree$.prototype;
ScalaJS.is.scala_collection_immutable_RedBlackTree$BlackTree$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_RedBlackTree$BlackTree$)))
});
ScalaJS.as.scala_collection_immutable_RedBlackTree$BlackTree$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_RedBlackTree$BlackTree$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.RedBlackTree$BlackTree")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_RedBlackTree$BlackTree$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_RedBlackTree$BlackTree$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_RedBlackTree$BlackTree$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_RedBlackTree$BlackTree$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.RedBlackTree$BlackTree;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_RedBlackTree$BlackTree$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_RedBlackTree$BlackTree$: 0
}, false, "scala.collection.immutable.RedBlackTree$BlackTree$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_RedBlackTree$BlackTree$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree$.prototype.$classData = ScalaJS.data.scala_collection_immutable_RedBlackTree$BlackTree$;
ScalaJS.moduleInstances.scala_collection_immutable_RedBlackTree$BlackTree = undefined;
ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_RedBlackTree$BlackTree)) {
    ScalaJS.moduleInstances.scala_collection_immutable_RedBlackTree$BlackTree = new ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_RedBlackTree$BlackTree
});
//@ sourceMappingURL=RedBlackTree$BlackTree$.js.map
