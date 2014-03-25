/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$;
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$.prototype.toString__T = (function() {
  return "JConcurrentMapDeprecatedWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$.prototype.apply__Ljava_util_concurrent_ConcurrentMap__Lscala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_concurrent_ConcurrentMap(this.$$outer$1, underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.underlying__Ljava_util_concurrent_ConcurrentMap())
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.JConcurrentMapDeprecatedWrapper__Lscala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$.prototype.init___Lscala_collection_convert_Wrappers = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper__ = (function(x$0) {
  return this.unapply__Lscala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$.prototype.apply__Ljava_util_concurrent_ConcurrentMap__ = (function(underlying) {
  return this.apply__Ljava_util_concurrent_ConcurrentMap__Lscala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper(underlying)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JConcurrentMapDeprecatedWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JConcurrentMapDeprecatedWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$: 0
}, false, "scala.collection.convert.Wrappers$JConcurrentMapDeprecatedWrapper$", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper$;
//@ sourceMappingURL=Wrappers$JConcurrentMapDeprecatedWrapper$.js.map
