/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper$.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper$;
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper$.prototype.toString__T = (function() {
  return "JEnumerationWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper$.prototype.apply__Ljava_util_Enumeration__Lscala_collection_convert_Wrappers$JEnumerationWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Enumeration(this.$$outer$1, underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JEnumerationWrapper__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.underlying__Ljava_util_Enumeration())
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.JEnumerationWrapper__Lscala_collection_convert_Wrappers$JEnumerationWrapper$()
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper$.prototype.init___Lscala_collection_convert_Wrappers = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JEnumerationWrapper__ = (function(x$0) {
  return this.unapply__Lscala_collection_convert_Wrappers$JEnumerationWrapper__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper$.prototype.apply__Ljava_util_Enumeration__ = (function(underlying) {
  return this.apply__Ljava_util_Enumeration__Lscala_collection_convert_Wrappers$JEnumerationWrapper(underlying)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JEnumerationWrapper$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JEnumerationWrapper$.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper$.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JEnumerationWrapper$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JEnumerationWrapper$)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JEnumerationWrapper$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JEnumerationWrapper$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JEnumerationWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JEnumerationWrapper$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JEnumerationWrapper$)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JEnumerationWrapper$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JEnumerationWrapper$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JEnumerationWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JEnumerationWrapper$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JEnumerationWrapper$: 0
}, false, "scala.collection.convert.Wrappers$JEnumerationWrapper$", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$JEnumerationWrapper$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper$.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JEnumerationWrapper$;
//@ sourceMappingURL=Wrappers$JEnumerationWrapper$.js.map
