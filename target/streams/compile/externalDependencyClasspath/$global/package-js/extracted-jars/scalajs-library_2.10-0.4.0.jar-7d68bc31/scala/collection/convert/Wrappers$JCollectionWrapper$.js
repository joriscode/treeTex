/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper$.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper$;
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper$.prototype.toString__T = (function() {
  return "JCollectionWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper$.prototype.apply__Ljava_util_Collection__Lscala_collection_convert_Wrappers$JCollectionWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Collection(this.$$outer$1, underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JCollectionWrapper__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.underlying__Ljava_util_Collection())
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.JCollectionWrapper__Lscala_collection_convert_Wrappers$JCollectionWrapper$()
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper$.prototype.init___Lscala_collection_convert_Wrappers = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JCollectionWrapper__ = (function(x$0) {
  return this.unapply__Lscala_collection_convert_Wrappers$JCollectionWrapper__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper$.prototype.apply__Ljava_util_Collection__ = (function(underlying) {
  return this.apply__Ljava_util_Collection__Lscala_collection_convert_Wrappers$JCollectionWrapper(underlying)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JCollectionWrapper$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JCollectionWrapper$.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper$.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JCollectionWrapper$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JCollectionWrapper$)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JCollectionWrapper$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JCollectionWrapper$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JCollectionWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JCollectionWrapper$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JCollectionWrapper$)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JCollectionWrapper$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JCollectionWrapper$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JCollectionWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JCollectionWrapper$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JCollectionWrapper$: 0
}, false, "scala.collection.convert.Wrappers$JCollectionWrapper$", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$JCollectionWrapper$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper$.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JCollectionWrapper$;
//@ sourceMappingURL=Wrappers$JCollectionWrapper$.js.map
