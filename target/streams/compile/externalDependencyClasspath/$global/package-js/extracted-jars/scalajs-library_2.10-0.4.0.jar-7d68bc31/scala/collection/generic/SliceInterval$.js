/** @constructor */
ScalaJS.c.scala_collection_generic_SliceInterval$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_generic_SliceInterval$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_SliceInterval$.prototype.constructor = ScalaJS.c.scala_collection_generic_SliceInterval$;
ScalaJS.c.scala_collection_generic_SliceInterval$.prototype.apply__I__I__Lscala_collection_generic_SliceInterval = (function(from, until) {
  var lo = ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(from), 0);
  var hi = ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(until), 0);
  if ((hi <= lo)) {
    return new ScalaJS.c.scala_collection_generic_SliceInterval().init___I__I(lo, lo)
  } else {
    return new ScalaJS.c.scala_collection_generic_SliceInterval().init___I__I(lo, hi)
  }
});
ScalaJS.c.scala_collection_generic_SliceInterval$.prototype.apply__I__I__ = (function(from, until) {
  return this.apply__I__I__Lscala_collection_generic_SliceInterval(from, until)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_SliceInterval$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_SliceInterval$.prototype = ScalaJS.c.scala_collection_generic_SliceInterval$.prototype;
ScalaJS.is.scala_collection_generic_SliceInterval$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_SliceInterval$)))
});
ScalaJS.as.scala_collection_generic_SliceInterval$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_SliceInterval$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.SliceInterval")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_SliceInterval$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_SliceInterval$)))
});
ScalaJS.asArrayOf.scala_collection_generic_SliceInterval$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_SliceInterval$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.SliceInterval;", depth)
  }
});
ScalaJS.data.scala_collection_generic_SliceInterval$ = new ScalaJS.ClassTypeData({
  scala_collection_generic_SliceInterval$: 0
}, false, "scala.collection.generic.SliceInterval$", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_SliceInterval$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_SliceInterval$.prototype.$classData = ScalaJS.data.scala_collection_generic_SliceInterval$;
ScalaJS.moduleInstances.scala_collection_generic_SliceInterval = undefined;
ScalaJS.modules.scala_collection_generic_SliceInterval = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_generic_SliceInterval)) {
    ScalaJS.moduleInstances.scala_collection_generic_SliceInterval = new ScalaJS.c.scala_collection_generic_SliceInterval$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_generic_SliceInterval
});
//@ sourceMappingURL=SliceInterval$.js.map
