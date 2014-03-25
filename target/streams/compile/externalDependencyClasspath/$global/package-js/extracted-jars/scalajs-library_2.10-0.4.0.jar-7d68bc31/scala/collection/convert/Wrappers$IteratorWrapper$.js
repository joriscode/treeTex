/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper$.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper$;
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper$.prototype.toString__T = (function() {
  return "IteratorWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper$.prototype.apply__Lscala_collection_Iterator__Lscala_collection_convert_Wrappers$IteratorWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper().init___Lscala_collection_convert_Wrappers__Lscala_collection_Iterator(this.$$outer$1, underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$IteratorWrapper__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.underlying__Lscala_collection_Iterator())
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.IteratorWrapper__Lscala_collection_convert_Wrappers$IteratorWrapper$()
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper$.prototype.init___Lscala_collection_convert_Wrappers = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper$.prototype.unapply__Lscala_collection_convert_Wrappers$IteratorWrapper__ = (function(x$0) {
  return this.unapply__Lscala_collection_convert_Wrappers$IteratorWrapper__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper$.prototype.apply__Lscala_collection_Iterator__ = (function(underlying) {
  return this.apply__Lscala_collection_Iterator__Lscala_collection_convert_Wrappers$IteratorWrapper(underlying)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$IteratorWrapper$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$IteratorWrapper$.prototype = ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper$.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$IteratorWrapper$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$IteratorWrapper$)))
});
ScalaJS.as.scala_collection_convert_Wrappers$IteratorWrapper$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$IteratorWrapper$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$IteratorWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$IteratorWrapper$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$IteratorWrapper$)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$IteratorWrapper$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$IteratorWrapper$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$IteratorWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$IteratorWrapper$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$IteratorWrapper$: 0
}, false, "scala.collection.convert.Wrappers$IteratorWrapper$", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$IteratorWrapper$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper$.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$IteratorWrapper$;
//@ sourceMappingURL=Wrappers$IteratorWrapper$.js.map
