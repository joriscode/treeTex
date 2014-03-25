/** @constructor */
ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree$.prototype.constructor = ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree$;
ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree$.prototype.apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree = (function(key, value, left, right) {
  return new ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree().init___O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(key, value, left, right)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree$.prototype.unapply__Lscala_collection_immutable_RedBlackTree$RedTree__Lscala_Some = (function(t) {
  return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple4().init___O__O__O__O(t.key__O(), t.value__O(), t.left__Lscala_collection_immutable_RedBlackTree$Tree(), t.right__Lscala_collection_immutable_RedBlackTree$Tree()))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree()
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree$.prototype.unapply__Lscala_collection_immutable_RedBlackTree$RedTree__ = (function(t) {
  return this.unapply__Lscala_collection_immutable_RedBlackTree$RedTree__Lscala_Some(t)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree$.prototype.apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__ = (function(key, value, left, right) {
  return this.apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(key, value, left, right)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$RedTree$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$RedTree$.prototype = ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree$.prototype;
ScalaJS.is.scala_collection_immutable_RedBlackTree$RedTree$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_RedBlackTree$RedTree$)))
});
ScalaJS.as.scala_collection_immutable_RedBlackTree$RedTree$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_RedBlackTree$RedTree$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.RedBlackTree$RedTree")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_RedBlackTree$RedTree$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_RedBlackTree$RedTree$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_RedBlackTree$RedTree$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_RedBlackTree$RedTree$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.RedBlackTree$RedTree;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_RedBlackTree$RedTree$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_RedBlackTree$RedTree$: 0
}, false, "scala.collection.immutable.RedBlackTree$RedTree$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_RedBlackTree$RedTree$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree$.prototype.$classData = ScalaJS.data.scala_collection_immutable_RedBlackTree$RedTree$;
ScalaJS.moduleInstances.scala_collection_immutable_RedBlackTree$RedTree = undefined;
ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_RedBlackTree$RedTree)) {
    ScalaJS.moduleInstances.scala_collection_immutable_RedBlackTree$RedTree = new ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_RedBlackTree$RedTree
});
//@ sourceMappingURL=RedBlackTree$RedTree$.js.map
