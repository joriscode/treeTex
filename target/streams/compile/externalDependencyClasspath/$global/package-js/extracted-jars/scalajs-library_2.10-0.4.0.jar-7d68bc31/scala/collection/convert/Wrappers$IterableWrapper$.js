/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper$.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper$;
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper$.prototype.toString__T = (function() {
  return "IterableWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper$.prototype.apply__Lscala_collection_Iterable__Lscala_collection_convert_Wrappers$IterableWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper().init___Lscala_collection_convert_Wrappers__Lscala_collection_Iterable(this.$$outer$1, underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$IterableWrapper__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.underlying__Lscala_collection_Iterable())
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.IterableWrapper__Lscala_collection_convert_Wrappers$IterableWrapper$()
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper$.prototype.init___Lscala_collection_convert_Wrappers = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$IterableWrapper__ = (function(x$0) {
  return this.unapply__Lscala_collection_convert_Wrappers$IterableWrapper__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper$.prototype.apply__Lscala_collection_Iterable__ = (function(underlying) {
  return this.apply__Lscala_collection_Iterable__Lscala_collection_convert_Wrappers$IterableWrapper(underlying)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$IterableWrapper$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$IterableWrapper$.prototype = ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper$.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$IterableWrapper$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$IterableWrapper$)))
});
ScalaJS.as.scala_collection_convert_Wrappers$IterableWrapper$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$IterableWrapper$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$IterableWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$IterableWrapper$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$IterableWrapper$)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$IterableWrapper$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$IterableWrapper$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$IterableWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$IterableWrapper$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$IterableWrapper$: 0
}, false, "scala.collection.convert.Wrappers$IterableWrapper$", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$IterableWrapper$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper$.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$IterableWrapper$;
//@ sourceMappingURL=Wrappers$IterableWrapper$.js.map
