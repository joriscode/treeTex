/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper$.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper$;
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper$.prototype.toString__T = (function() {
  return "JSetWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper$.prototype.apply__Ljava_util_Set__Lscala_collection_convert_Wrappers$JSetWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Set(this.$$outer$1, underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JSetWrapper__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.underlying__Ljava_util_Set())
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.JSetWrapper__Lscala_collection_convert_Wrappers$JSetWrapper$()
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper$.prototype.init___Lscala_collection_convert_Wrappers = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JSetWrapper__ = (function(x$0) {
  return this.unapply__Lscala_collection_convert_Wrappers$JSetWrapper__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper$.prototype.apply__Ljava_util_Set__ = (function(underlying) {
  return this.apply__Ljava_util_Set__Lscala_collection_convert_Wrappers$JSetWrapper(underlying)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JSetWrapper$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JSetWrapper$.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper$.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JSetWrapper$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JSetWrapper$)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JSetWrapper$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JSetWrapper$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JSetWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JSetWrapper$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JSetWrapper$)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JSetWrapper$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JSetWrapper$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JSetWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JSetWrapper$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JSetWrapper$: 0
}, false, "scala.collection.convert.Wrappers$JSetWrapper$", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$JSetWrapper$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper$.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JSetWrapper$;
//@ sourceMappingURL=Wrappers$JSetWrapper$.js.map
