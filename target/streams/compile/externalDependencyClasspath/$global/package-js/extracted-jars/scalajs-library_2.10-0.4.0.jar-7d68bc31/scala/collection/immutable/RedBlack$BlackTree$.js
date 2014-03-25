/** @constructor */
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree$.prototype.constructor = ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree$;
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree$.prototype.toString__T = (function() {
  return "BlackTree"
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree$.prototype.apply__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$BlackTree = (function(key, value, left, right) {
  return new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.$$outer$1, key, value, left, right)
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree$.prototype.unapply__Lscala_collection_immutable_RedBlack$BlackTree__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple4().init___O__O__O__O(x$0.key__O(), x$0.value__O(), x$0.left__Lscala_collection_immutable_RedBlack$Tree(), x$0.right__Lscala_collection_immutable_RedBlack$Tree()))
  }
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.BlackTree__Lscala_collection_immutable_RedBlack$BlackTree$()
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree$.prototype.init___Lscala_collection_immutable_RedBlack = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree$.prototype.unapply__Lscala_collection_immutable_RedBlack$BlackTree__ = (function(x$0) {
  return this.unapply__Lscala_collection_immutable_RedBlack$BlackTree__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree$.prototype.apply__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__ = (function(key, value, left, right) {
  return this.apply__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$BlackTree(key, value, left, right)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_RedBlack$BlackTree$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_RedBlack$BlackTree$.prototype = ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree$.prototype;
ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_RedBlack$BlackTree$)))
});
ScalaJS.as.scala_collection_immutable_RedBlack$BlackTree$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_RedBlack$BlackTree$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.RedBlack$BlackTree")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_RedBlack$BlackTree$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_RedBlack$BlackTree$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_RedBlack$BlackTree$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_RedBlack$BlackTree$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.RedBlack$BlackTree;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_RedBlack$BlackTree$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_RedBlack$BlackTree$: 0
}, false, "scala.collection.immutable.RedBlack$BlackTree$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_RedBlack$BlackTree$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree$.prototype.$classData = ScalaJS.data.scala_collection_immutable_RedBlack$BlackTree$;
//@ sourceMappingURL=RedBlack$BlackTree$.js.map
