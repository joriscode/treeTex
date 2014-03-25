/** @constructor */
ScalaJS.c.scala_collection_BitSetLike$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.LogWL$1 = 0;
  this.scala$collection$BitSetLike$$WordLength$1 = 0
});
ScalaJS.c.scala_collection_BitSetLike$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_BitSetLike$.prototype.constructor = ScalaJS.c.scala_collection_BitSetLike$;
ScalaJS.c.scala_collection_BitSetLike$.prototype.LogWL__I = (function() {
  return this.LogWL$1
});
ScalaJS.c.scala_collection_BitSetLike$.prototype.scala$collection$BitSetLike$$WordLength__I = (function() {
  return this.scala$collection$BitSetLike$$WordLength$1
});
ScalaJS.c.scala_collection_BitSetLike$.prototype.updateArray__AJ__I__J__AJ = (function(elems, idx, w) {
  var len = elems.underlying.length;
  while (((len > 0) && (elems.underlying[(len - 1)].equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0)) || (w.equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0)) && (idx === (len - 1)))))) {
    len = (len - 1)
  };
  var newlen = len;
  if (((idx >= newlen) && w.notEquals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0)))) {
    newlen = (idx + 1)
  };
  var newelems = ScalaJS.newArrayObject(ScalaJS.data.scala_Long.getArrayOf(), [newlen]);
  ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(elems, 0, newelems, 0, len);
  if ((idx < newlen)) {
    newelems.underlying[idx] = w
  } else {
    ScalaJS.modules.scala_Predef().assert__Z__V(w.equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0)))
  };
  return newelems
});
ScalaJS.c.scala_collection_BitSetLike$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_BitSetLike = this;
  this.LogWL$1 = 6;
  this.scala$collection$BitSetLike$$WordLength$1 = 64;
  return this
});
ScalaJS.c.scala_collection_BitSetLike$.prototype.updateArray__AJ__I__J__ = (function(elems, idx, w) {
  return this.updateArray__AJ__I__J__AJ(elems, idx, w)
});
ScalaJS.c.scala_collection_BitSetLike$.prototype.scala$collection$BitSetLike$$WordLength__ = (function() {
  return ScalaJS.bI(this.scala$collection$BitSetLike$$WordLength__I())
});
ScalaJS.c.scala_collection_BitSetLike$.prototype.LogWL__ = (function() {
  return ScalaJS.bI(this.LogWL__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_BitSetLike$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_BitSetLike$.prototype = ScalaJS.c.scala_collection_BitSetLike$.prototype;
ScalaJS.is.scala_collection_BitSetLike$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_BitSetLike$)))
});
ScalaJS.as.scala_collection_BitSetLike$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_BitSetLike$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.BitSetLike")
  }
});
ScalaJS.isArrayOf.scala_collection_BitSetLike$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_BitSetLike$)))
});
ScalaJS.asArrayOf.scala_collection_BitSetLike$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_BitSetLike$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.BitSetLike;", depth)
  }
});
ScalaJS.data.scala_collection_BitSetLike$ = new ScalaJS.ClassTypeData({
  scala_collection_BitSetLike$: 0
}, false, "scala.collection.BitSetLike$", ScalaJS.data.java_lang_Object, {
  scala_collection_BitSetLike$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_BitSetLike$.prototype.$classData = ScalaJS.data.scala_collection_BitSetLike$;
ScalaJS.moduleInstances.scala_collection_BitSetLike = undefined;
ScalaJS.modules.scala_collection_BitSetLike = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_BitSetLike)) {
    ScalaJS.moduleInstances.scala_collection_BitSetLike = new ScalaJS.c.scala_collection_BitSetLike$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_BitSetLike
});
//@ sourceMappingURL=BitSetLike$.js.map
