/** @constructor */
ScalaJS.c.scala_collection_generic_IsTraversableLike$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.stringRepr$1 = null
});
ScalaJS.c.scala_collection_generic_IsTraversableLike$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_IsTraversableLike$.prototype.constructor = ScalaJS.c.scala_collection_generic_IsTraversableLike$;
ScalaJS.c.scala_collection_generic_IsTraversableLike$.prototype.stringRepr__Lscala_collection_generic_IsTraversableLike = (function() {
  return this.stringRepr$1
});
ScalaJS.c.scala_collection_generic_IsTraversableLike$.prototype.genTraversableLikeRepr__Lscala_Function1__Lscala_collection_generic_IsTraversableLike = (function(conv) {
  return new ScalaJS.c.scala_collection_generic_IsTraversableLike$$anon$2().init___Lscala_Function1(conv)
});
ScalaJS.c.scala_collection_generic_IsTraversableLike$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_generic_IsTraversableLike = this;
  this.stringRepr$1 = new ScalaJS.c.scala_collection_generic_IsTraversableLike$$anon$1().init___();
  return this
});
ScalaJS.c.scala_collection_generic_IsTraversableLike$.prototype.genTraversableLikeRepr__Lscala_Function1__ = (function(conv) {
  return this.genTraversableLikeRepr__Lscala_Function1__Lscala_collection_generic_IsTraversableLike(conv)
});
ScalaJS.c.scala_collection_generic_IsTraversableLike$.prototype.stringRepr__ = (function() {
  return this.stringRepr__Lscala_collection_generic_IsTraversableLike()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_IsTraversableLike$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_IsTraversableLike$.prototype = ScalaJS.c.scala_collection_generic_IsTraversableLike$.prototype;
ScalaJS.is.scala_collection_generic_IsTraversableLike$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_IsTraversableLike$)))
});
ScalaJS.as.scala_collection_generic_IsTraversableLike$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_IsTraversableLike$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.IsTraversableLike")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_IsTraversableLike$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_IsTraversableLike$)))
});
ScalaJS.asArrayOf.scala_collection_generic_IsTraversableLike$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_IsTraversableLike$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.IsTraversableLike;", depth)
  }
});
ScalaJS.data.scala_collection_generic_IsTraversableLike$ = new ScalaJS.ClassTypeData({
  scala_collection_generic_IsTraversableLike$: 0
}, false, "scala.collection.generic.IsTraversableLike$", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_IsTraversableLike$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_IsTraversableLike$.prototype.$classData = ScalaJS.data.scala_collection_generic_IsTraversableLike$;
ScalaJS.moduleInstances.scala_collection_generic_IsTraversableLike = undefined;
ScalaJS.modules.scala_collection_generic_IsTraversableLike = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_generic_IsTraversableLike)) {
    ScalaJS.moduleInstances.scala_collection_generic_IsTraversableLike = new ScalaJS.c.scala_collection_generic_IsTraversableLike$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_generic_IsTraversableLike
});
//@ sourceMappingURL=IsTraversableLike$.js.map
