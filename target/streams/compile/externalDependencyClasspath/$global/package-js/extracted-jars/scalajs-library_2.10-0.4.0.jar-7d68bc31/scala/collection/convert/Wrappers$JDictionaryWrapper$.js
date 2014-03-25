/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper$.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper$;
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper$.prototype.toString__T = (function() {
  return "JDictionaryWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper$.prototype.apply__Ljava_util_Dictionary__Lscala_collection_convert_Wrappers$JDictionaryWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Dictionary(this.$$outer$1, underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JDictionaryWrapper__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.underlying__Ljava_util_Dictionary())
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.JDictionaryWrapper__Lscala_collection_convert_Wrappers$JDictionaryWrapper$()
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper$.prototype.init___Lscala_collection_convert_Wrappers = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JDictionaryWrapper__ = (function(x$0) {
  return this.unapply__Lscala_collection_convert_Wrappers$JDictionaryWrapper__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper$.prototype.apply__Ljava_util_Dictionary__ = (function(underlying) {
  return this.apply__Ljava_util_Dictionary__Lscala_collection_convert_Wrappers$JDictionaryWrapper(underlying)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JDictionaryWrapper$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JDictionaryWrapper$.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper$.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JDictionaryWrapper$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JDictionaryWrapper$)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JDictionaryWrapper$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JDictionaryWrapper$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JDictionaryWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JDictionaryWrapper$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JDictionaryWrapper$)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JDictionaryWrapper$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JDictionaryWrapper$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JDictionaryWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JDictionaryWrapper$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JDictionaryWrapper$: 0
}, false, "scala.collection.convert.Wrappers$JDictionaryWrapper$", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$JDictionaryWrapper$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper$.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JDictionaryWrapper$;
//@ sourceMappingURL=Wrappers$JDictionaryWrapper$.js.map
