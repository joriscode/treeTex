/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$MutableBufferWrapper$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableBufferWrapper$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$MutableBufferWrapper$.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$MutableBufferWrapper$;
ScalaJS.c.scala_collection_convert_Wrappers$MutableBufferWrapper$.prototype.toString__T = (function() {
  return "MutableBufferWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableBufferWrapper$.prototype.apply__Lscala_collection_mutable_Buffer__Lscala_collection_convert_Wrappers$MutableBufferWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$MutableBufferWrapper().init___Lscala_collection_convert_Wrappers__Lscala_collection_mutable_Buffer(this.$$outer$1, underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableBufferWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$MutableBufferWrapper__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.underlying__Lscala_collection_mutable_Buffer())
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableBufferWrapper$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.MutableBufferWrapper__Lscala_collection_convert_Wrappers$MutableBufferWrapper$()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableBufferWrapper$.prototype.init___Lscala_collection_convert_Wrappers = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableBufferWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$MutableBufferWrapper__ = (function(x$0) {
  return this.unapply__Lscala_collection_convert_Wrappers$MutableBufferWrapper__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableBufferWrapper$.prototype.apply__Lscala_collection_mutable_Buffer__ = (function(underlying) {
  return this.apply__Lscala_collection_mutable_Buffer__Lscala_collection_convert_Wrappers$MutableBufferWrapper(underlying)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$MutableBufferWrapper$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$MutableBufferWrapper$.prototype = ScalaJS.c.scala_collection_convert_Wrappers$MutableBufferWrapper$.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$MutableBufferWrapper$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$MutableBufferWrapper$)))
});
ScalaJS.as.scala_collection_convert_Wrappers$MutableBufferWrapper$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$MutableBufferWrapper$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$MutableBufferWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MutableBufferWrapper$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$MutableBufferWrapper$)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$MutableBufferWrapper$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MutableBufferWrapper$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$MutableBufferWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$MutableBufferWrapper$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$MutableBufferWrapper$: 0
}, false, "scala.collection.convert.Wrappers$MutableBufferWrapper$", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$MutableBufferWrapper$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableBufferWrapper$.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$MutableBufferWrapper$;
//@ sourceMappingURL=Wrappers$MutableBufferWrapper$.js.map
