/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper$.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper$;
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper$.prototype.toString__T = (function() {
  return "JConcurrentMapWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper$.prototype.apply__Ljava_util_concurrent_ConcurrentMap__Lscala_collection_convert_Wrappers$JConcurrentMapWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_concurrent_ConcurrentMap(this.$$outer$1, underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JConcurrentMapWrapper__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.underlying__Ljava_util_concurrent_ConcurrentMap())
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.JConcurrentMapWrapper__Lscala_collection_convert_Wrappers$JConcurrentMapWrapper$()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper$.prototype.init___Lscala_collection_convert_Wrappers = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JConcurrentMapWrapper__ = (function(x$0) {
  return this.unapply__Lscala_collection_convert_Wrappers$JConcurrentMapWrapper__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper$.prototype.apply__Ljava_util_concurrent_ConcurrentMap__ = (function(underlying) {
  return this.apply__Ljava_util_concurrent_ConcurrentMap__Lscala_collection_convert_Wrappers$JConcurrentMapWrapper(underlying)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JConcurrentMapWrapper$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JConcurrentMapWrapper$.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper$.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JConcurrentMapWrapper$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JConcurrentMapWrapper$)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JConcurrentMapWrapper$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JConcurrentMapWrapper$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JConcurrentMapWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JConcurrentMapWrapper$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JConcurrentMapWrapper$)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JConcurrentMapWrapper$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JConcurrentMapWrapper$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JConcurrentMapWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JConcurrentMapWrapper$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JConcurrentMapWrapper$: 0
}, false, "scala.collection.convert.Wrappers$JConcurrentMapWrapper$", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$JConcurrentMapWrapper$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper$.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JConcurrentMapWrapper$;
//@ sourceMappingURL=Wrappers$JConcurrentMapWrapper$.js.map