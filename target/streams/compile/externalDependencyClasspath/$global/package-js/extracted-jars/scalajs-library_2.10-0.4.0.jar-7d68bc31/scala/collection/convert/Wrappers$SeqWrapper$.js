/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper$.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper$;
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper$.prototype.toString__T = (function() {
  return "SeqWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper$.prototype.apply__Lscala_collection_Seq__Lscala_collection_convert_Wrappers$SeqWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper().init___Lscala_collection_convert_Wrappers__Lscala_collection_Seq(this.$$outer$1, underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$SeqWrapper__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.underlying__Lscala_collection_Seq())
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.SeqWrapper__Lscala_collection_convert_Wrappers$SeqWrapper$()
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper$.prototype.init___Lscala_collection_convert_Wrappers = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$SeqWrapper__ = (function(x$0) {
  return this.unapply__Lscala_collection_convert_Wrappers$SeqWrapper__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper$.prototype.apply__Lscala_collection_Seq__ = (function(underlying) {
  return this.apply__Lscala_collection_Seq__Lscala_collection_convert_Wrappers$SeqWrapper(underlying)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$SeqWrapper$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$SeqWrapper$.prototype = ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper$.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$SeqWrapper$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$SeqWrapper$)))
});
ScalaJS.as.scala_collection_convert_Wrappers$SeqWrapper$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$SeqWrapper$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$SeqWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$SeqWrapper$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$SeqWrapper$)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$SeqWrapper$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$SeqWrapper$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$SeqWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$SeqWrapper$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$SeqWrapper$: 0
}, false, "scala.collection.convert.Wrappers$SeqWrapper$", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$SeqWrapper$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper$.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$SeqWrapper$;
//@ sourceMappingURL=Wrappers$SeqWrapper$.js.map
