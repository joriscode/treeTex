/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$;
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$.prototype.toString__T = (function() {
  return "JPropertiesWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$.prototype.apply__Ljava_util_Properties__Lscala_collection_convert_Wrappers$JPropertiesWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Properties(this.$$outer$2, underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JPropertiesWrapper__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.underlying__Ljava_util_Properties())
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$.prototype.readResolve__p2__O = (function() {
  return this.$$outer$2.JPropertiesWrapper__Lscala_collection_convert_Wrappers$JPropertiesWrapper$()
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$.prototype.apply__O__O = (function(v1) {
  return this.apply__Ljava_util_Properties__Lscala_collection_convert_Wrappers$JPropertiesWrapper(ScalaJS.as.java_util_Properties(v1))
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$.prototype.init___Lscala_collection_convert_Wrappers = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JPropertiesWrapper__ = (function(x$0) {
  return this.unapply__Lscala_collection_convert_Wrappers$JPropertiesWrapper__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$.prototype.apply__Ljava_util_Properties__ = (function(underlying) {
  return this.apply__Ljava_util_Properties__Lscala_collection_convert_Wrappers$JPropertiesWrapper(underlying)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JPropertiesWrapper$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JPropertiesWrapper$.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JPropertiesWrapper$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JPropertiesWrapper$)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JPropertiesWrapper$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JPropertiesWrapper$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JPropertiesWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JPropertiesWrapper$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JPropertiesWrapper$)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JPropertiesWrapper$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JPropertiesWrapper$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JPropertiesWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JPropertiesWrapper$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JPropertiesWrapper$: 0
}, false, "scala.collection.convert.Wrappers$JPropertiesWrapper$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_collection_convert_Wrappers$JPropertiesWrapper$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper$.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JPropertiesWrapper$;
//@ sourceMappingURL=Wrappers$JPropertiesWrapper$.js.map
