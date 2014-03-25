/** @constructor */
ScalaJS.c.scala_collection_generic_IsTraversableOnce$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.stringRepr$1 = null
});
ScalaJS.c.scala_collection_generic_IsTraversableOnce$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_IsTraversableOnce$.prototype.constructor = ScalaJS.c.scala_collection_generic_IsTraversableOnce$;
ScalaJS.c.scala_collection_generic_IsTraversableOnce$.prototype.stringRepr__Lscala_collection_generic_IsTraversableOnce = (function() {
  return this.stringRepr$1
});
ScalaJS.c.scala_collection_generic_IsTraversableOnce$.prototype.genTraversableLikeRepr__Lscala_Function1__Lscala_collection_generic_IsTraversableOnce = (function(conv) {
  return new ScalaJS.c.scala_collection_generic_IsTraversableOnce$$anon$2().init___Lscala_Function1(conv)
});
ScalaJS.c.scala_collection_generic_IsTraversableOnce$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_generic_IsTraversableOnce = this;
  this.stringRepr$1 = new ScalaJS.c.scala_collection_generic_IsTraversableOnce$$anon$1().init___();
  return this
});
ScalaJS.c.scala_collection_generic_IsTraversableOnce$.prototype.genTraversableLikeRepr__Lscala_Function1__ = (function(conv) {
  return this.genTraversableLikeRepr__Lscala_Function1__Lscala_collection_generic_IsTraversableOnce(conv)
});
ScalaJS.c.scala_collection_generic_IsTraversableOnce$.prototype.stringRepr__ = (function() {
  return this.stringRepr__Lscala_collection_generic_IsTraversableOnce()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_IsTraversableOnce$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_IsTraversableOnce$.prototype = ScalaJS.c.scala_collection_generic_IsTraversableOnce$.prototype;
ScalaJS.is.scala_collection_generic_IsTraversableOnce$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_IsTraversableOnce$)))
});
ScalaJS.as.scala_collection_generic_IsTraversableOnce$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_IsTraversableOnce$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.IsTraversableOnce")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_IsTraversableOnce$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_IsTraversableOnce$)))
});
ScalaJS.asArrayOf.scala_collection_generic_IsTraversableOnce$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_IsTraversableOnce$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.IsTraversableOnce;", depth)
  }
});
ScalaJS.data.scala_collection_generic_IsTraversableOnce$ = new ScalaJS.ClassTypeData({
  scala_collection_generic_IsTraversableOnce$: 0
}, false, "scala.collection.generic.IsTraversableOnce$", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_IsTraversableOnce$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_IsTraversableOnce$.prototype.$classData = ScalaJS.data.scala_collection_generic_IsTraversableOnce$;
ScalaJS.moduleInstances.scala_collection_generic_IsTraversableOnce = undefined;
ScalaJS.modules.scala_collection_generic_IsTraversableOnce = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_generic_IsTraversableOnce)) {
    ScalaJS.moduleInstances.scala_collection_generic_IsTraversableOnce = new ScalaJS.c.scala_collection_generic_IsTraversableOnce$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_generic_IsTraversableOnce
});
//@ sourceMappingURL=IsTraversableOnce$.js.map
