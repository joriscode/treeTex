/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper$.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper$;
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper$.prototype.toString__T = (function() {
  return "MutableSeqWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper$.prototype.apply__Lscala_collection_mutable_Seq__Lscala_collection_convert_Wrappers$MutableSeqWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper().init___Lscala_collection_convert_Wrappers__Lscala_collection_mutable_Seq(this.$$outer$1, underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$MutableSeqWrapper__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.underlying__Lscala_collection_mutable_Seq())
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.MutableSeqWrapper__Lscala_collection_convert_Wrappers$MutableSeqWrapper$()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper$.prototype.init___Lscala_collection_convert_Wrappers = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$MutableSeqWrapper__ = (function(x$0) {
  return this.unapply__Lscala_collection_convert_Wrappers$MutableSeqWrapper__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper$.prototype.apply__Lscala_collection_mutable_Seq__ = (function(underlying) {
  return this.apply__Lscala_collection_mutable_Seq__Lscala_collection_convert_Wrappers$MutableSeqWrapper(underlying)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$MutableSeqWrapper$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$MutableSeqWrapper$.prototype = ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper$.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$MutableSeqWrapper$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$MutableSeqWrapper$)))
});
ScalaJS.as.scala_collection_convert_Wrappers$MutableSeqWrapper$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$MutableSeqWrapper$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$MutableSeqWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MutableSeqWrapper$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$MutableSeqWrapper$)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$MutableSeqWrapper$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MutableSeqWrapper$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$MutableSeqWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$MutableSeqWrapper$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$MutableSeqWrapper$: 0
}, false, "scala.collection.convert.Wrappers$MutableSeqWrapper$", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$MutableSeqWrapper$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper$.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$MutableSeqWrapper$;
//@ sourceMappingURL=Wrappers$MutableSeqWrapper$.js.map
