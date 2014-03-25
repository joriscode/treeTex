/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper$.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper$;
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper$.prototype.toString__T = (function() {
  return "MutableMapWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper$.prototype.apply__Lscala_collection_mutable_Map__Lscala_collection_convert_Wrappers$MutableMapWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper().init___Lscala_collection_convert_Wrappers__Lscala_collection_mutable_Map(this.$$outer$1, underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$MutableMapWrapper__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.underlying__Lscala_collection_mutable_Map())
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.MutableMapWrapper__Lscala_collection_convert_Wrappers$MutableMapWrapper$()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper$.prototype.init___Lscala_collection_convert_Wrappers = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$MutableMapWrapper__ = (function(x$0) {
  return this.unapply__Lscala_collection_convert_Wrappers$MutableMapWrapper__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper$.prototype.apply__Lscala_collection_mutable_Map__ = (function(underlying) {
  return this.apply__Lscala_collection_mutable_Map__Lscala_collection_convert_Wrappers$MutableMapWrapper(underlying)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$MutableMapWrapper$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$MutableMapWrapper$.prototype = ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper$.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$MutableMapWrapper$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$MutableMapWrapper$)))
});
ScalaJS.as.scala_collection_convert_Wrappers$MutableMapWrapper$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$MutableMapWrapper$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$MutableMapWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MutableMapWrapper$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$MutableMapWrapper$)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$MutableMapWrapper$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MutableMapWrapper$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$MutableMapWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$MutableMapWrapper$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$MutableMapWrapper$: 0
}, false, "scala.collection.convert.Wrappers$MutableMapWrapper$", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$MutableMapWrapper$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper$.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$MutableMapWrapper$;
//@ sourceMappingURL=Wrappers$MutableMapWrapper$.js.map
