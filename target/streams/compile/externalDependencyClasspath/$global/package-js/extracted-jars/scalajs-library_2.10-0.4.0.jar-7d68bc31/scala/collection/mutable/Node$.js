/** @constructor */
ScalaJS.c.scala_collection_mutable_Node$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_mutable_Node$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_Node$.prototype.constructor = ScalaJS.c.scala_collection_mutable_Node$;
ScalaJS.c.scala_collection_mutable_Node$.prototype.toString__T = (function() {
  return "Node"
});
ScalaJS.c.scala_collection_mutable_Node$.prototype.apply__O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_Node = (function(data, left, right) {
  return new ScalaJS.c.scala_collection_mutable_Node().init___O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree(data, left, right)
});
ScalaJS.c.scala_collection_mutable_Node$.prototype.unapply__Lscala_collection_mutable_Node__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple3().init___O__O__O(x$0.data__O(), x$0.left__Lscala_collection_mutable_AVLTree(), x$0.right__Lscala_collection_mutable_AVLTree()))
  }
});
ScalaJS.c.scala_collection_mutable_Node$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_Node()
});
ScalaJS.c.scala_collection_mutable_Node$.prototype.unapply__Lscala_collection_mutable_Node__ = (function(x$0) {
  return this.unapply__Lscala_collection_mutable_Node__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_mutable_Node$.prototype.apply__O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree__ = (function(data, left, right) {
  return this.apply__O__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_Node(data, left, right)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_Node$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_Node$.prototype = ScalaJS.c.scala_collection_mutable_Node$.prototype;
ScalaJS.is.scala_collection_mutable_Node$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_Node$)))
});
ScalaJS.as.scala_collection_mutable_Node$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_Node$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.Node")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_Node$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_Node$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_Node$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_Node$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.Node;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_Node$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_Node$: 0
}, false, "scala.collection.mutable.Node$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_Node$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_Node$.prototype.$classData = ScalaJS.data.scala_collection_mutable_Node$;
ScalaJS.moduleInstances.scala_collection_mutable_Node = undefined;
ScalaJS.modules.scala_collection_mutable_Node = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_Node)) {
    ScalaJS.moduleInstances.scala_collection_mutable_Node = new ScalaJS.c.scala_collection_mutable_Node$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_Node
});
//@ sourceMappingURL=Node$.js.map
