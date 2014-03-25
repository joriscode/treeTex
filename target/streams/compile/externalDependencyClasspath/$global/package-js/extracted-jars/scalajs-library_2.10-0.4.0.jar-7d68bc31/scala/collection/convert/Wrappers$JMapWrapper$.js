/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper$.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper$;
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper$.prototype.toString__T = (function() {
  return "JMapWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper$.prototype.apply__Ljava_util_Map__Lscala_collection_convert_Wrappers$JMapWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Map(this.$$outer$1, underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JMapWrapper__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.underlying__Ljava_util_Map())
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.JMapWrapper__Lscala_collection_convert_Wrappers$JMapWrapper$()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper$.prototype.init___Lscala_collection_convert_Wrappers = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JMapWrapper__ = (function(x$0) {
  return this.unapply__Lscala_collection_convert_Wrappers$JMapWrapper__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper$.prototype.apply__Ljava_util_Map__ = (function(underlying) {
  return this.apply__Ljava_util_Map__Lscala_collection_convert_Wrappers$JMapWrapper(underlying)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JMapWrapper$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JMapWrapper$.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper$.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JMapWrapper$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JMapWrapper$)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JMapWrapper$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JMapWrapper$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JMapWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JMapWrapper$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JMapWrapper$)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JMapWrapper$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JMapWrapper$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JMapWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JMapWrapper$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JMapWrapper$: 0
}, false, "scala.collection.convert.Wrappers$JMapWrapper$", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$JMapWrapper$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper$.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JMapWrapper$;
//@ sourceMappingURL=Wrappers$JMapWrapper$.js.map
