/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper$.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper$;
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper$.prototype.toString__T = (function() {
  return "JListWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper$.prototype.apply__Ljava_util_List__Lscala_collection_convert_Wrappers$JListWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_List(this.$$outer$1, underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JListWrapper__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.underlying__Ljava_util_List())
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.JListWrapper__Lscala_collection_convert_Wrappers$JListWrapper$()
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper$.prototype.init___Lscala_collection_convert_Wrappers = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$JListWrapper__ = (function(x$0) {
  return this.unapply__Lscala_collection_convert_Wrappers$JListWrapper__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper$.prototype.apply__Ljava_util_List__ = (function(underlying) {
  return this.apply__Ljava_util_List__Lscala_collection_convert_Wrappers$JListWrapper(underlying)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JListWrapper$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JListWrapper$.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper$.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JListWrapper$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JListWrapper$)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JListWrapper$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JListWrapper$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JListWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JListWrapper$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JListWrapper$)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JListWrapper$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JListWrapper$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JListWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JListWrapper$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JListWrapper$: 0
}, false, "scala.collection.convert.Wrappers$JListWrapper$", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$JListWrapper$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper$.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JListWrapper$;
//@ sourceMappingURL=Wrappers$JListWrapper$.js.map
