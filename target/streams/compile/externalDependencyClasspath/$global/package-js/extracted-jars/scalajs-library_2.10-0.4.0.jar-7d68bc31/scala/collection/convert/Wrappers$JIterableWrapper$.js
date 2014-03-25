/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper$.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper$;
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper$.prototype.toString__T = (function() {
  return "JIterableWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper$.prototype.apply__Ljava_lang_Iterable__Lscala_collection_convert_Wrappers$JIterableWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper().init___Lscala_collection_convert_Wrappers__Ljava_lang_Iterable(this.$$outer$1, underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JIterableWrapper__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.underlying__Ljava_lang_Iterable())
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.JIterableWrapper__Lscala_collection_convert_Wrappers$JIterableWrapper$()
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper$.prototype.init___Lscala_collection_convert_Wrappers = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JIterableWrapper__ = (function(x$0) {
  return this.unapply__Lscala_collection_convert_Wrappers$JIterableWrapper__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper$.prototype.apply__Ljava_lang_Iterable__ = (function(underlying) {
  return this.apply__Ljava_lang_Iterable__Lscala_collection_convert_Wrappers$JIterableWrapper(underlying)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JIterableWrapper$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JIterableWrapper$.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper$.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JIterableWrapper$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JIterableWrapper$)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JIterableWrapper$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JIterableWrapper$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JIterableWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JIterableWrapper$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JIterableWrapper$)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JIterableWrapper$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JIterableWrapper$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JIterableWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JIterableWrapper$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JIterableWrapper$: 0
}, false, "scala.collection.convert.Wrappers$JIterableWrapper$", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$JIterableWrapper$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper$.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JIterableWrapper$;
//@ sourceMappingURL=Wrappers$JIterableWrapper$.js.map
