/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JIteratorWrapper$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JIteratorWrapper$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$JIteratorWrapper$.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JIteratorWrapper$;
ScalaJS.c.scala_collection_convert_Wrappers$JIteratorWrapper$.prototype.toString__T = (function() {
  return "JIteratorWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JIteratorWrapper$.prototype.apply__Ljava_util_Iterator__Lscala_collection_convert_Wrappers$JIteratorWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JIteratorWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Iterator(this.$$outer$1, underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JIteratorWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JIteratorWrapper__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.underlying__Ljava_util_Iterator())
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JIteratorWrapper$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.JIteratorWrapper__Lscala_collection_convert_Wrappers$JIteratorWrapper$()
});
ScalaJS.c.scala_collection_convert_Wrappers$JIteratorWrapper$.prototype.init___Lscala_collection_convert_Wrappers = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JIteratorWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JIteratorWrapper__ = (function(x$0) {
  return this.unapply__Lscala_collection_convert_Wrappers$JIteratorWrapper__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_convert_Wrappers$JIteratorWrapper$.prototype.apply__Ljava_util_Iterator__ = (function(underlying) {
  return this.apply__Ljava_util_Iterator__Lscala_collection_convert_Wrappers$JIteratorWrapper(underlying)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JIteratorWrapper$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JIteratorWrapper$.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JIteratorWrapper$.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JIteratorWrapper$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JIteratorWrapper$)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JIteratorWrapper$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JIteratorWrapper$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JIteratorWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JIteratorWrapper$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JIteratorWrapper$)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JIteratorWrapper$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JIteratorWrapper$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JIteratorWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JIteratorWrapper$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JIteratorWrapper$: 0
}, false, "scala.collection.convert.Wrappers$JIteratorWrapper$", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$JIteratorWrapper$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JIteratorWrapper$.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JIteratorWrapper$;
//@ sourceMappingURL=Wrappers$JIteratorWrapper$.js.map
