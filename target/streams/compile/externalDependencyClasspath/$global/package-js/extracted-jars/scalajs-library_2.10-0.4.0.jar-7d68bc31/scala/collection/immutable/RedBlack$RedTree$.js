/** @constructor */
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree$.prototype.constructor = ScalaJS.c.scala_collection_immutable_RedBlack$RedTree$;
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree$.prototype.toString__T = (function() {
  return "RedTree"
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree$.prototype.apply__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$RedTree = (function(key, value, left, right) {
  return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.$$outer$1, key, value, left, right)
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree$.prototype.unapply__Lscala_collection_immutable_RedBlack$RedTree__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple4().init___O__O__O__O(x$0.key__O(), x$0.value__O(), x$0.left__Lscala_collection_immutable_RedBlack$Tree(), x$0.right__Lscala_collection_immutable_RedBlack$Tree()))
  }
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.RedTree__Lscala_collection_immutable_RedBlack$RedTree$()
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree$.prototype.init___Lscala_collection_immutable_RedBlack = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree$.prototype.unapply__Lscala_collection_immutable_RedBlack$RedTree__ = (function(x$0) {
  return this.unapply__Lscala_collection_immutable_RedBlack$RedTree__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree$.prototype.apply__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__ = (function(key, value, left, right) {
  return this.apply__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$RedTree(key, value, left, right)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_RedBlack$RedTree$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_RedBlack$RedTree$.prototype = ScalaJS.c.scala_collection_immutable_RedBlack$RedTree$.prototype;
ScalaJS.is.scala_collection_immutable_RedBlack$RedTree$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_RedBlack$RedTree$)))
});
ScalaJS.as.scala_collection_immutable_RedBlack$RedTree$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_RedBlack$RedTree$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.RedBlack$RedTree")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_RedBlack$RedTree$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_RedBlack$RedTree$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_RedBlack$RedTree$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_RedBlack$RedTree$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.RedBlack$RedTree;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_RedBlack$RedTree$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_RedBlack$RedTree$: 0
}, false, "scala.collection.immutable.RedBlack$RedTree$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_RedBlack$RedTree$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_RedBlack$RedTree$.prototype.$classData = ScalaJS.data.scala_collection_immutable_RedBlack$RedTree$;
//@ sourceMappingURL=RedBlack$RedTree$.js.map
