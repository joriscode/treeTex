/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper$.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper$;
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper$.prototype.toString__T = (function() {
  return "MutableSetWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper$.prototype.apply__Lscala_collection_mutable_Set__Lscala_collection_convert_Wrappers$MutableSetWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper().init___Lscala_collection_convert_Wrappers__Lscala_collection_mutable_Set(this.$$outer$1, underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$MutableSetWrapper__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.underlying__Lscala_collection_mutable_Set())
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.MutableSetWrapper__Lscala_collection_convert_Wrappers$MutableSetWrapper$()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper$.prototype.init___Lscala_collection_convert_Wrappers = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$MutableSetWrapper__ = (function(x$0) {
  return this.unapply__Lscala_collection_convert_Wrappers$MutableSetWrapper__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper$.prototype.apply__Lscala_collection_mutable_Set__ = (function(underlying) {
  return this.apply__Lscala_collection_mutable_Set__Lscala_collection_convert_Wrappers$MutableSetWrapper(underlying)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$MutableSetWrapper$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$MutableSetWrapper$.prototype = ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper$.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$MutableSetWrapper$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$MutableSetWrapper$)))
});
ScalaJS.as.scala_collection_convert_Wrappers$MutableSetWrapper$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$MutableSetWrapper$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$MutableSetWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MutableSetWrapper$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$MutableSetWrapper$)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$MutableSetWrapper$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MutableSetWrapper$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$MutableSetWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$MutableSetWrapper$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$MutableSetWrapper$: 0
}, false, "scala.collection.convert.Wrappers$MutableSetWrapper$", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$MutableSetWrapper$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper$.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$MutableSetWrapper$;
//@ sourceMappingURL=Wrappers$MutableSetWrapper$.js.map
